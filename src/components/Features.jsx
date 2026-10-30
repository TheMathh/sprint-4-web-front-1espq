import FeatureCard from './FeatureCard'
import PhoneMockup from './PhoneMockup'
import SectionTitle from './SectionTitle'
import { features } from '../data/features'

const colunaClasses =
  'flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:flex-col lg:items-start lg:gap-8'

function Features() {
  const colunaEsquerda = features.slice(0, 3)
  const colunaDireita = features.slice(3)

  return (
    <section
      id="features"
      className="relative z-0 overflow-hidden bg-white px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <img
        src="/images/blobs/features-left.png"
        alt=""
        className="pointer-events-none absolute top-10 left-0 -z-10 w-[420px]"
      />

      <SectionTitle
        titulo="FEATURES"
        subtitulo="Capture os instantes que potencializam sua experiência fotográfica e como você aprende."
      />

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-[60px]">
        <div className={colunaClasses}>
          {colunaEsquerda.map((feature) => (
            <FeatureCard key={feature.titulo} {...feature} />
          ))}
        </div>

        <div className="order-first flex shrink-0 items-center justify-center lg:order-none">
          <PhoneMockup
            src="/images/phone-features.png"
            alt="Tela de funcionalidades do aplicativo"
            className="w-[150px] sm:w-[200px]"
          />
        </div>

        <div className={colunaClasses}>
          {colunaDireita.map((feature) => (
            <FeatureCard key={feature.titulo} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features