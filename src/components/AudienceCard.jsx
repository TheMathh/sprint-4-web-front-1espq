function AudienceCard({ icone, titulo, descricao }) {
  return (
    <article className="flex flex-col gap-2.5 rounded-2xl border-[1.5px] border-[#f0f0f0] bg-[#fafafa] px-6 py-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4f46e5] text-[1.2rem] text-white">
        {icone}
      </div>
      <h3 className="text-[1.05rem] font-bold text-[#1a1a2e]">{titulo}</h3>
      <p className="text-[0.85rem] leading-[1.6] text-[#6b7280]">{descricao}</p>
    </article>
  )
}

export default AudienceCard