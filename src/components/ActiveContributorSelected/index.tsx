import useSWR from "swr";
import React, { useEffect, useMemo, useState } from "react";
import fetcher from "./fetcher";
import {ActiveContributor} from "@site/src/components/ActiveContributorSelected/model";
import lodash from 'lodash';
import DropDownList from "./drop-down-list";
import SelectedContributors from "./selected-contributors";

export default function ActiveContributorSelected(): JSX.Element {
    const {
        data: activeContributors
    } = useSWR<ActiveContributor[]>('active-contributor-selected', fetcher);

    const activeMonths = useMemo(
        () => lodash.uniq(activeContributors?.map(line => line.activeMonth).sort()),
        [activeContributors]
    )

    const [selectMonth, setSelectMonth] = useState(activeMonths[0]);

    useEffect(
        () => {
            setSelectMonth(activeMonths[0])
        },
        [activeMonths[0]]
    );

    return (
        <section>
            {
                activeContributors ?
                <>
                    <DropDownList
                        activeMonths={activeMonths}
                        selectMonth={selectMonth}
                        setSelectMonth={setSelectMonth}
                    />
                    <SelectedContributors
                        activeContributors={activeContributors}
                        selectMonth={selectMonth}
                    />
                </>
                :
                <>Loading...</>
            }
        </section>
    )
}