import DocCardList from '@theme/DocCardList'
import React from 'react'
// @ts-ignore this module really exists
import {useDocsSidebar} from '@docusaurus/theme-common/internal'

export default function DocCardListAll(): JSX.Element {
  const items = useDocsSidebar().items.filter(item => item.docId != 'overview')
  return (
    <DocCardList items={items}/>
  )
}