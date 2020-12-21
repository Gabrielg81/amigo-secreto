import { useState, useEffect } from 'react'
import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import Input from '../Input'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
`

const DivForm = styled.div`
  color: #000;
  padding: 20px;
  max-width: 400px;
`

export default function AdminSecretHeader () {
  const [link, setLink] = useState('')
  useEffect(() => {
    setLink(`${window.location.origin + window.location.pathname}`)
  }, [])

  return (
    <ImageContainer>
      <Container>
        <Logo />
      </Container>
      <DivForm>
        <h1>Compartilhe esse link com os participantes!</h1>
        <Input value={link} disabled />
      </DivForm>
    </ImageContainer>
  )
}