import React from "react";
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";


export default function DropDownList({
    selectMonth,
    setSelectMonth,
    activeMonths
}): JSX.Element {

    return (
        <FormControl sx={{m: 1, minWidth: 120}}>
            <Select
                value={selectMonth || ""}
                onChange={(event: SelectChangeEvent) => {
                    setSelectMonth(event.target.value);
                }}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
            >
                {activeMonths.map(line => (
                    <MenuItem value={line} key={line}>{line}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}