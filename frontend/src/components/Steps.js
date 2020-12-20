import styled from 'styled-components'

import StepCard from './StepCard'
import StepCard1 from './StepCard1'
import StepCard2 from './StepCard2'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export default function Steps () {
  return (
    <>
      <H1>Como funciona?</H1>
      <Container>
        <StepCard />
        <StepCard1 />
        <StepCard2 />
      </Container>
    </>
  )
}