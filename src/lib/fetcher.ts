const dataRepoPrefix = 'https://raw.githubusercontent.com/korandoru/town-data-ingress/release-data/'

export default async function fetcher<DATA = any>(filename: string): Promise<DATA[]> {
  const resp = await fetch(`${dataRepoPrefix}${filename}.json`)
  const data = await resp.text()
  return data
    .trim()
    .split('\n')
    .map(line => JSON.parse(line))
}
