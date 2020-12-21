import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  margin: 20px;
  max-width: 200px;
  border-radius: 10px;
`

export default function StepCard () {
  return (
    <Card>
      <h3>1. Crie seu sorteio</h3>
      <p>Digite seu nome e e-mail, para criar uma sala de amigo secreto.<br /><br /> <br /><br /><br /></p>
    </Card>
  )
}
