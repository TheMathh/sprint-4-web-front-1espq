import PhoneMockup from './PhoneMockup'

function HowItem({ imagem, titulo, descricao, topicos, invertido = false }) {
  return (
    <article
      className={`flex flex-col items-center gap-8 text-center lg:gap-[60px] lg:text-left ${
        invertido ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <PhoneMockup
        src={imagem}
        alt={`Tela de ${titulo} no aplicativo`}
        className="w-40 shrink-0 sm:w-[220px]"
      />

      <div>
        <h3 className="mb-4 text-2xl font-extrabold text-[#1a1a2e] sm:text-[2rem]">
          {titulo}
        </h3>
        <p className="mb-5 text-[0.95rem] leading-[1.75] text-[#6b7280] lg:max-w-[380px]">
          {descricao}
        </p>
        <ul className="flex flex-col items-center gap-2 lg:items-start">
          {topicos.map((topico) => (
            <li
              key={topico}
              className="flex items-center gap-2.5 text-[0.9rem] text-[#1a1a2e] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[#7c3aed]"
            >
              {topico}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default HowItem