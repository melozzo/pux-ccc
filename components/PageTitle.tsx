/*
 * components/PageTitle.tsx
 * Description: Simple styled component for the page title
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

/** styled components here */
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`

type PageTitleProps = {
  title?: string
}

const PageTitle: React.FC<PageTitleProps> = ({
  title = 'Scary Data'
}: PageTitleProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default PageTitle
