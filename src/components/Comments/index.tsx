import React from 'react'
import Giscus from '@giscus/react'

export default function Comments({discussionId}): JSX.Element {
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
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
