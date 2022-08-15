import useSWR from "swr";
import React from "react";
import fetcher from "@site/src/components/ActiveContributorSelected/fetcher";

export default function ActiveContributorSelected(): JSX.Element {
    const {
        data: activeContributors
    } = useSWR('active-contributor-selected', fetcher);

    return (
        <section>
            {
                activeContributors ?
                    JSON.stringify(activeContributors) :
                    <>Loading...</>
            }
        </section>
    )
}