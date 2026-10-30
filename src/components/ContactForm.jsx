import { useState } from 'react'

const campoClasses =
  'w-full rounded-lg border-[1.5px] border-[#e5e7eb] bg-[#f9fafb] px-4 py-3.5 text-[0.9rem] text-[#1a1a2e] outline-none transition-colors focus:border-[#7c3aed] focus:bg-white'

function ContactForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Obrigado, ${nome}! Mensagem enviada.`)
    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:flex-1">
      <label htmlFor="nome" className="sr-only">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
        className={campoClasses}
        required
      />

      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={campoClasses}
        required
      />

      <label htmlFor="mensagem" className="sr-only">Sua mensagem</label>
      <textarea
        id="mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Sua mensagem"
        className={`${campoClasses} h-[110px] resize-y sm:h-[140px]`}
        required
      />

      <button
        type="submit"
        className="cursor-pointer rounded-lg bg-[#4f46e5] py-3.5 text-[0.9rem] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)]"
      >
        ENVIAR
      </button>
    </form>
  )
}

export default ContactForm