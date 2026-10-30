import { useAuth } from '../hooks/useAuth'

export default function Area() {
  const { usuario, logout } = useAuth()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-indigo-600">Olá, {usuario}!</h1>
      <button
        onClick={logout}
        className="mt-4 cursor-pointer rounded-lg bg-[#4f46e5] px-5 py-2.5 font-semibold text-white"
      >
        Sair
      </button>
    </main>
  )
}