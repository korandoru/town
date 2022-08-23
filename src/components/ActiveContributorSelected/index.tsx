import useSWR from "swr";
import React from "react";
import fetcher from "./fetcher";
import {ActiveContributor} from "@site/src/components/ActiveContributorSelected/model";

export default function ActiveContributorSelected(): JSX.Element {
    const {
        data: activeContributors
    } = useSWR<ActiveContributor[]>('active-contributor-selected', fetcher);

    let payload = <>Loading...</>
    if (activeContributors) {
        payload = <table>
            <thead>
            <tr>
                <th>参与者</th>
                <th>时间段</th>
                <th>活跃度</th>
                <th>排名</th>
            </tr>
            </thead>
            <tbody>
            {
                activeContributors.map(line => (
                    <tr>
                        <td>{line.actorLogin}</td>
                        <td>{line.activeMonth}</td>
                        <td>{line.activityCount}</td>
                        <td>{line.activityRank}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    }

    return (
        <section>
            {payload}
        </section>
    )
}