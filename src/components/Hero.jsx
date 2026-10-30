import PhoneMockup from './PhoneMockup'

function Hero() {
  return (
    <header
      id="home"
      className="relative z-0 flex flex-col items-center overflow-hidden px-5 pt-[150px] pb-[50px] text-center sm:px-8 sm:pt-[130px] sm:pb-[60px] lg:min-h-screen lg:flex-row lg:px-[60px] lg:pt-[120px] lg:pb-20 lg:text-left"
    >
      <img
        src="/images/blobs/blob-top.svg"
        alt=""
        className="pointer-events-none absolute top-10 right-0 -z-10 w-[340px] sm:top-[70px] sm:w-[500px] lg:w-[800px]"
      />

      <div className="relative z-10 lg:max-w-[480px]">
        <h1 className="animate-fade-up mb-5 text-[2rem] leading-[1.1] font-extrabold text-[#1a1a2e] sm:text-[3rem]">
          Sua câmera agora estuda com você
        </h1>

        <p className="animate-fade-up mx-auto mb-6 text-[0.9rem] leading-[1.7] text-[#6b7280] [animation-delay:0.1s] sm:mb-9 sm:text-base lg:mx-0 lg:max-w-[360px]">
          Uma nova forma de aprender com tecnologia inteligente, transformando
          fotos em conhecimento de forma rápida e prática.
        </p>

        <a
          href="#features"
          className="animate-fade-up inline-flex items-center gap-2 rounded-lg bg-[#4f46e5] px-[22px] py-3 text-[0.85rem] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,70,229,0.35)] [animation-delay:0.25s] sm:px-7 sm:py-3.5 sm:text-[0.9rem]"
        >
          SAIBA MAIS ↓
        </a>
      </div>

      <div className="relative z-10 mt-[30px] flex justify-center sm:mt-[50px] lg:absolute lg:top-1/2 lg:right-[60px] lg:mt-0 lg:-translate-y-1/2">
        <PhoneMockup
          src="/images/phone1.png"
          alt="Tela do aplicativo TechForge"
          className="-mr-[30px] w-[130px] translate-y-5 -rotate-[4deg] sm:w-60"
        />
        <PhoneMockup
          src="/images/phone2.png"
          alt="Tela de captura do aplicativo TechForge"
          className="w-[130px] -translate-y-2.5 rotate-[3deg] sm:w-60"
        />
      </div>
    </header>
  )
}

export default Hero