import React, { FC } from 'react'
import { Pane, Heading, Paragraph, majorScale } from 'evergreen-ui'

const Hero: FC<{ content: { title: string; desc1: string, desc2: string, desc3: string, desc4: string } }> = ({ content }) => {
  return (
    <Pane
      width="100%"
      display="flex"
      alignItems="center"
      paddingY={majorScale(8)}
      height={`calc(100vh - ${majorScale(9)}px)`}
    >
      <Pane>
        <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginBottom={majorScale(8)}>
          {content.title}
        </Heading>
        <Paragraph fontSize="clamp(1.2rem, 4vw, 1.5rem)" lineHeight="clamp(1.3rem, 4vw, 2rem)">
          {content.desc1}<br />
          {content.desc2}<br />
          {content.desc3}<br />
          {content.desc4}<br />
        </Paragraph>
      </Pane>
    </Pane>
  )
}

export default Hero
