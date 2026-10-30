function ResumoCard({ titulo, materia, trecho, data }) {
  return (
    <article className="flex flex-col gap-2.5 rounded-2xl border-[1.5px] border-[#f0f0f0] bg-white p-6">
      <span className="w-fit rounded-full bg-[#ede9fe] px-3 py-1 text-[0.75rem] font-semibold text-[#4f46e5] capitalize">
        {materia}
      </span>
      <h3 className="text-[1.05rem] font-bold text-[#1a1a2e] first-letter:uppercase">
        {titulo}
      </h3>
      <p className="text-[0.85rem] leading-[1.6] text-[#6b7280]">{trecho}</p>
      <time dateTime={data} className="mt-auto text-[0.78rem] text-[#6b7280]">
        {new Date(data).toLocaleDateString('pt-BR')}
      </time>
    </article>
  )
}

export default ResumoCard