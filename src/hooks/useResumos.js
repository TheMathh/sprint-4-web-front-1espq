import { useEffect, useState } from 'react'
import { API_URL } from '../services/api'

export function useResumos() {
  const [resumos, setResumos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await fetch(API_URL)
        if (!resposta.ok) {
          throw new Error('Falha na requisição')
        }
        const dados = await resposta.json()
        setResumos(dados)
      } catch {
        setErro('Não foi possível carregar os resumos.')
      } finally {
        setCarregando(false)
      }
    }

    buscar()
  }, [])

  return { resumos, carregando, erro }
}