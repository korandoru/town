import fetch from "node-fetch"
import type {VercelRequest, VercelResponse} from '@vercel/node'
import {ActiveContributor} from '@site/type/active-contributor'

export default async function (_: VercelRequest, res: VercelResponse) {
  const queryParams = new URLSearchParams({
    user: 'explorer',
    default_format: 'JSON',
    query: `
            SELECT *
            FROM
            (
              SELECT actor_login, t, c, row_number() OVER (PARTITION BY t ORDER BY c DESC) AS n
              FROM
              (
                SELECT actor_login, toStartOfMonth(created_at) as t, COUNT(*) as c
                FROM github_events
                WHERE startsWith(repo_name, 'apache/pulsar')
                GROUP BY t, actor_login
                ORDER BY t, c DESC
              )
            )
            WHERE n <= 5
            ORDER BY t, n ASC
        `
  })
  const response = await fetch(`https://play.clickhouse.com/?${queryParams}`, {
    method: 'GET'
  })
  const result = await response.json()
  res.send(
    result.data.map(
      r =>
        ({
          actorLogin: r.actor_login,
          activeMonth: r.t,
          activityCount: r.c,
          activityRank: r.n
        } as ActiveContributor)
    )
  )
}
