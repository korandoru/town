import useSWR from "swr";
import React, { useState } from "react";
import fetcher from "./fetcher";
import { ActiveContributor } from "@site/src/components/ActiveContributorSelected/model";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import lodash from "lodash";

export default function ActiveContributorSelected(): JSX.Element {
  const { data: activeContributors, error } = useSWR<ActiveContributor[]>(
    "active-contributor-selected",
    fetcher
  );
  const isLoading = !data && !error;
  const activeMonths = lodash.uniq(
    (activeContributors || []).map((line) => line.activeMonth).sort()
  );
  const [selectMonth, setSelectMonth] = useState(activeMonths[0]);
  const dropDownList = (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={selectMonth}
        onChange={(event: SelectChangeEvent) => {
          setSelectMonth(event.target.value);
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {activeMonths.map((line) => (
          <MenuItem value={line}>{line}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  const selectedContributors = (
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
          .filter((line) => line.activeMonth.startsWith(selectMonth))
          .map((line) => (
            <tr>
              <td>{line.actorLogin}</td>
              <td>{line.activityCount}</td>
              <td>{line.activityRank}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <section>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {dropDownList}
          {selectedContributors}
        </>
      )}
    </section>
  );
}
