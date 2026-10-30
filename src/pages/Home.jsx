import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Funcionamento from '../components/Funcionamento'
import PublicoAlvo from '../components/PublicoAlvo'
import Galeria from '../components/Galeria'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Funcionamento />
        <PublicoAlvo />
        <Galeria />
      </main>
    </>
  )
}