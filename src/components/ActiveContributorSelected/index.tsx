import useSWR from 'swr'
import React, {useEffect, useMemo, useState} from 'react'
import fetcher from './fetcher'
import {ActiveContributor} from '@site/src/components/ActiveContributorSelected/model'
import lodash from 'lodash'
import DropDownList from './drop-down-list'
import SelectedContributors from './selected-contributors'

export default function ActiveContributorSelected(): JSX.Element {
  const {data: activeContributors, error} = useSWR<ActiveContributor[]>('active-contributor-selected', fetcher)
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
