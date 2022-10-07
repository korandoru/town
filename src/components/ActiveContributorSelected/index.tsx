import useSWR from 'swr'
import React, {useEffect, useMemo, useState} from 'react'
import {ActiveContributor} from '@site/type/active-contributor'
import lodash from 'lodash'
import {FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material'

const fetcher = url => fetch(`/api/${url}`).then(r => r.json())

export default function ActiveContributorSelected(): JSX.Element {
  const {data: activeContributors, error} = useSWR<ActiveContributor[]>('active-contributors-selected', fetcher)
  const activeMonths = useMemo(() => lodash.uniq(activeContributors?.map(line => line.activeMonth).sort()), [activeContributors])
  const [selectMonth, setSelectMonth] = useState('')

  useEffect(() => {
    if (activeMonths[0]) {
      setSelectMonth(activeMonths[0])
    }
  }, [activeMonths[0]])

  if (error) return <>An error has occurred.</>
  if (!activeContributors) return <>Loading...</>

  return (
    <section>
      <DropDownList activeMonths={activeMonths} selectMonth={selectMonth} setSelectMonth={setSelectMonth} />
      <SelectedContributors activeContributors={activeContributors} selectMonth={selectMonth} />
    </section>
  )
}

function DropDownList({selectMonth, setSelectMonth, activeMonths}): JSX.Element {
  return (
    <FormControl sx={{m: 1, minWidth: 120}}>
      <Select
        value={selectMonth || ''}
        onChange={(event: SelectChangeEvent) => {
          setSelectMonth(event.target.value)
        }}
        displayEmpty
        inputProps={{'aria-label': 'Without label'}}
      >
        {activeMonths.map(line => (
          <MenuItem value={line} key={line}>
            {line}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

function SelectedContributors({activeContributors, selectMonth}): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>参与者</th>
          <th>活跃度</th>
          <th>排名</th>
        </tr>
      </thead>
      <tbody>
        {activeContributors
          .filter(line => line.activeMonth.startsWith(selectMonth))
          .map(line => (
            <tr key={line.actorLogin}>
              <td>{line.actorLogin}</td>
              <td>{line.activityCount}</td>
              <td>{line.activityRank}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
