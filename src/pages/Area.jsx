import { Link } from 'react-router-dom'
import ResumoCard from '../components/ResumoCard'
import { useAuth } from '../hooks/useAuth'
import { useResumos } from '../hooks/useResumos'

export default function Area() {
  const { usuario, logout } = useAuth()
  const { resumos, carregando, erro } = useResumos()

  return (
    <>
      <header className="border-b border-[#f0f0f0] bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="text-[1.4rem] font-extrabold text-[#1a1a2e]">
            TechForge
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-[0.9rem] text-[#6b7280] sm:inline">
              Olá, {usuario}
            </span>
            <button
              onClick={logout}
              className="cursor-pointer rounded-lg border-[1.5px] border-[#e5e7eb] px-4 py-2 text-[0.85rem] font-semibold text-[#1a1a2e] transition-colors hover:bg-[#f9fafb]"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-[60px]">
        <h1 className="mb-2 text-2xl font-extrabold text-[#1a1a2e] sm:text-[2rem]">
          Seus resumos de estudo
        </h1>
        <p className="mb-10 text-[0.9rem] text-[#6b7280]">
          Conteúdo capturado e organizado pela Study AI.
        </p>

        {carregando && <p className="text-[#6b7280]">Carregando resumos...</p>}

        {erro && (
          <p role="alert" className="text-red-600">
            {erro}
          </p>
        )}

        {!carregando && !erro && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resumos.map((resumo) => (
              <ResumoCard key={resumo.id} {...resumo} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}