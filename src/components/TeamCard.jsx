function TeamCard({ foto, nome, funcao }) {
  return (
    <article className="flex flex-col items-center gap-1.5 rounded-2xl border-[1.5px] border-[#f0f0f0] px-[18px] py-7 text-center">
      <div className="mb-2 h-20 w-20 overflow-hidden rounded-full bg-[#ede9fe]">
        <img
          src={foto}
          alt={`Foto de ${nome}`}
          className="block h-full w-full object-cover"
        />
      </div>
      <h3 className="text-[0.95rem] font-bold text-[#1a1a2e]">{nome}</h3>
      <span className="text-[0.78rem] font-semibold text-[#4f46e5]">{funcao}</span>
    </article>
  )
}

export default TeamCard