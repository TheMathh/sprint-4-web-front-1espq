import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Funcionamento from '../components/Funcionamento'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Funcionamento />
      </main>
    </>
  )
}