import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Funcionamento from '../components/Funcionamento'
import PublicoAlvo from '../components/PublicoAlvo'
import Galeria from '../components/Galeria'
import Equipe from '../components/Equipe'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

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
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  )
}