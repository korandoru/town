import useSWR from "swr";
import React from "react";
import fetcher from "./fetcher";

export default function ActiveContributorSelected(): JSX.Element {
    const {
        data: activeContributors
    } = useSWR('active-contributor-selected', fetcher);

    let payload = <>Loading...</>
    if (activeContributors) {
        const result = activeContributors.data;
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
                result.map(line => (
                    <tr>
                        <td>{line.actor_login}</td>
                        <td>{line.t}</td>
                        <td>{line.c}</td>
                        <td>{line.n}</td>
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