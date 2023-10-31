import { Button, Heading, MultiStep, Text } from '@zizao/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda !</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={1} />
        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            <Button variant="secondary" size="sm" type="submit">
              Connectar
              <ArrowRight />
            </Button>
          </ConnectItem>

          <Button size="sm" type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Header>
    </Container>
  )
}
