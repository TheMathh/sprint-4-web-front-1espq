function FeatureCard({ icone, titulo, descricao }) {
  return (
    <article className="flex max-w-[260px] flex-col gap-2">
      <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#7c3aed] text-[1.1rem] text-white">
        {icone}
      </div>
      <h3 className="text-[0.95rem] font-bold text-[#1a1a2e]">{titulo}</h3>
      <p className="text-[0.82rem] leading-[1.6] text-[#6b7280]">{descricao}</p>
    </article>
  )
}

export default FeatureCard