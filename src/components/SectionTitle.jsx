function SectionTitle({ titulo, subtitulo }) {
  return (
    <>
      <h2 className="mb-2 text-center text-2xl font-extrabold text-[#1a1a2e] sm:text-[2rem]">
        {titulo}
      </h2>
      <p className="mb-10 text-center text-[0.85rem] text-[#6b7280] sm:mb-[60px] sm:text-[0.95rem]">
        {subtitulo}
      </p>
    </>
  )
}

export default SectionTitle