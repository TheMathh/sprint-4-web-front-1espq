import ContactForm from './ContactForm'
import SectionTitle from './SectionTitle'

function Contato() {
  return (
    <section
      id="contatos"
      className="relative z-0 overflow-hidden bg-white px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <img
        src="/images/blobs/contact-right.svg"
        alt=""
        className="pointer-events-none absolute top-0 right-0 -z-10 w-[320px] sm:w-[280px] sm:opacity-85 lg:w-[350px] lg:opacity-100"
      />

      <SectionTitle
        titulo="CONTATE-NOS"
        subtitulo="Seja para tirar dúvidas ou compartilhar ideias, não espere — nos envie uma mensagem."
      />

      <div className="relative z-10 mx-auto flex max-w-[860px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-col items-center lg:flex-1 lg:items-start lg:pt-5">
          <img
            src="/images/contate.png"
            alt="Ilustração de contato"
            className="h-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[440px]"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contato