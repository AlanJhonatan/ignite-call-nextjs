import { Heading } from '@zizao/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <Heading as={'h1'}>Hello</Heading>
    </main>
  )
}