import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  margin: 20px;
  max-width: 200px;
  border-radius: 10px;
`

export default function StepCard1 () {
  return (
    <Card>
     <h3>2. Compartilhe o link da sala</h3>
      <p>Para juntar os participantes, basta compartilhar o link da sala, e lembre-se, você que criou a sala também precisa entrar e se cadastrar.</p>
    </Card>
  )
}
