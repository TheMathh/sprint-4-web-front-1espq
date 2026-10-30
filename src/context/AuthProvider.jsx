import { useState } from 'react'
import { AuthContext } from './AuthContext'

const USUARIO_TESTE = { usuario: 'aluno', senha: 'techforge123' }

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => localStorage.getItem('usuario'))

  const login = (nome, senha) => {
    if (nome === USUARIO_TESTE.usuario && senha === USUARIO_TESTE.senha) {
      localStorage.setItem('usuario', nome)
      setUsuario(nome)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('usuario')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}