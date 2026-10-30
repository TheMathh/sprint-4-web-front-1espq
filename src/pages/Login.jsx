import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const campoClasses =
  'w-full rounded-lg border-[1.5px] border-[#e5e7eb] bg-[#f9fafb] px-4 py-3.5 text-[0.9rem] text-[#1a1a2e] outline-none transition-colors focus:border-[#7c3aed] focus:bg-white'

export default function Login() {
  const { usuario, login } = useAuth()
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  if (usuario) {
    return <Navigate to="/app" replace />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!login(nome, senha)) {
      setErro('Usuário ou senha incorretos.')
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-5">
      <div className="w-full max-w-[400px] rounded-2xl border-[1.5px] border-[#f0f0f0] bg-white p-8 shadow-sm">
        <Link to="/" className="text-[1.4rem] font-extrabold text-[#1a1a2e]">
          TechForge
        </Link>

        <h1 className="mt-6 mb-1 text-2xl font-extrabold text-[#1a1a2e]">Entrar</h1>
        <p className="mb-6 text-[0.85rem] text-[#6b7280]">Acesse a área do estudante.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="usuario" className="sr-only">Usuário</label>
          <input
            id="usuario"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Usuário"
            className={campoClasses}
            required
          />

          <label htmlFor="senha" className="sr-only">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className={campoClasses}
            required
          />

          {erro && (
            <p role="alert" className="text-[0.85rem] text-red-600">
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-[#4f46e5] py-3.5 text-[0.9rem] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)]"
          >
            ENTRAR
          </button>
        </form>

        <p className="mt-6 text-[0.78rem] text-[#6b7280]">
          Conta de teste: usuário <strong>aluno</strong> · senha <strong>techforge123</strong>
        </p>
      </div>
    </main>
  )
}