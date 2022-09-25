import React from 'react'

export default function SelectedContributors({activeContributors, selectMonth}): JSX.Element {
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
