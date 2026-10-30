import AudienceCard from './AudienceCard'
import SectionTitle from './SectionTitle'
import { publico } from '../data/publico'

function PublicoAlvo() {
  return (
    <section
      id="publico-alvo"
      className="relative z-0 overflow-hidden bg-white px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <SectionTitle
        titulo="PÚBLICO-ALVO"
        subtitulo="Estudantes full-time que vivem com o celular na mão e usam ele como ferramenta principal de estudo."
      />

      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {publico.map((item) => (
          <AudienceCard key={item.titulo} {...item} />
        ))}
      </div>
    </section>
  )
}

export default PublicoAlvo