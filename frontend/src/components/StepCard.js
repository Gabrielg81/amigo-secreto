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
<<<<<<< HEAD
      <p>Digite seu nome e e-mail, para criar uma sala de amigo secreto.<br /><br /> <br /><br /><br /></p>
=======
      <p>Digite seu nome e e-mail, e crie o seu sorteio de forma fácil e sem complicações.</p>
>>>>>>> parent of bc49768... Mudança no visual e correções de texto
    </Card>
  )
}
