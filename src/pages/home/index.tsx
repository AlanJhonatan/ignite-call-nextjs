import { Heading, Text } from '@zizao/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/image-hero.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container as={'h1'}>
      <Hero>
        <Heading as="h1" size={'4xl'}>
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Imagem de um calendário"
        />
      </Preview>
    </Container>
  )
}
