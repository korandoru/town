import React from 'react'
import Giscus from '@giscus/react'
import {useColorMode} from '@docusaurus/theme-common'
import {Theme} from '@giscus/react/dist/types'

function themeFromColorMode(): Theme {
  const {colorMode} = useColorMode()
  switch (colorMode) {
    case 'light':
      return 'light'
    case 'dark':
      return 'dark'
  }
}

export default function GiscusComments({discussionId}): JSX.Element {
  return (
    <Giscus
      id="comments"
      repo="korandoru/open-source-town"
      repoId="R_kgDOH0siXw"
      mapping="number"
      term={discussionId}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={themeFromColorMode()}
      lang="zh-CN"
      loading="lazy"
    />
  )
}
