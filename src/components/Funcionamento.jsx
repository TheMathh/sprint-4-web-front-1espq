import HowItem from './HowItem'
import SectionTitle from './SectionTitle'
import { passos } from '../data/funcionamento'

function Funcionamento() {
  return (
    <section
      id="funcionamento"
      className="relative z-0 overflow-hidden bg-white px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <img
        src="/images/blobs/func-right.svg"
        alt=""
        className="pointer-events-none absolute top-20 right-0 -z-10 w-[324px]"
      />
      <img
        src="/images/blobs/func-left.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[400px]"
      />

      <SectionTitle
        titulo="VEJA O FUNCIONAMENTO"
        subtitulo="Capture fotos, processe e transforme o conteúdo em material de estudo, tudo em poucos passos."
      />

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col gap-[100px]">
        {passos.map((passo, index) => (
          <HowItem key={passo.titulo} {...passo} invertido={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

export default Funcionamento