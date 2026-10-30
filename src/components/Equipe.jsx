import SectionTitle from './SectionTitle'
import TeamCard from './TeamCard'
import { equipe } from '../data/equipe'

function Equipe() {
  return (
    <section
      id="equipe"
      className="relative z-0 overflow-hidden bg-white px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <SectionTitle
        titulo="NOSSA EQUIPE"
        subtitulo="Quem desenvolveu a solução TechForge para a Challenge."
      />

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {equipe.map((pessoa) => (
          <TeamCard key={pessoa.nome} {...pessoa} />
        ))}
      </div>
    </section>
  )
}

export default Equipe