import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  margin: 20px;
  max-width: 200px;
  border-radius: 10px;
`

export default function StepCard2 () {
  return (
    <Card>
     <h3>3. Realize o sorteio</h3>
      <p>Depois que todos se cadastrarem, basta voltar a sala que criou, ver todos os participantes (caso não apareça, basta atualizar a página) e clicar em sortear. Pronto!</p>
    </Card>
  )
}
