import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// Logo Diamante SVG Component
export const DiamondLogo = ({ className = "w-12 h-12", color = "#000000" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill={color} d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
  </svg>
)

// Section wrapper with fade animation
export const Section = ({ children, className = "", id, dark = false }: {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`${dark ? 'bg-black-pure text-white-pure' : ''} ${className}`}
  >
    {children}
  </motion.section>
)

// Breather component
export const Breather = ({ height = "h-24" }: { height?: string }) => (
  <div className={`${height} w-full`} />
)

// Header component
export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-40 bg-white-pure/95 backdrop-blur-sm border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <DiamondLogo className="w-8 h-8" />
        <span className="font-semibold text-black-pure tracking-tight">Academia Lendaria</span>
      </div>
      <a
        href="#cta"
        className="px-5 py-2 bg-black-pure text-white-pure text-sm font-medium rounded-lg hover:bg-black-deep transition-colors"
      >
        Acesso Gratuito
      </a>
    </div>
  </header>
)

// Footer component
export const Footer = () => (
  <footer className="px-6 py-12 bg-white-soft border-t border-gray-100">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <DiamondLogo className="w-8 h-8" />
          <span className="font-semibold text-black-deep">Academia Lendaria</span>
        </div>
        <p className="text-sm text-gray-500">
          Eternizando legados atraves da IA.
        </p>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-400">
          2025 Academia Lendaria. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
)

// Email Form component
export const EmailForm = ({
  dark = false,
  ctaText = "Quero Acesso Gratuito",
  subtext = "Acesso imediato. Sem cartao. Sem spam."
}: {
  dark?: boolean
  ctaText?: string
  subtext?: string
}) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`p-8 rounded-lg border ${dark ? 'bg-black-deep border-gray-700' : 'bg-white-soft border-gray-200'}`}
      >
        <svg className={`w-16 h-16 mx-auto mb-4 ${dark ? 'text-white-pure' : 'text-black-pure'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className={`text-2xl font-bold mb-2 ${dark ? 'text-white-pure' : 'text-black-pure'}`}>Bem-vindo ao Mente Lendaria</h3>
        <p className={dark ? 'text-gray-400' : 'text-gray-600'}>
          Verifique seu email. O acesso esta esperando.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor email"
          required
          className={`flex-1 px-5 py-4 rounded-lg transition-colors focus:outline-none ${
            dark
              ? 'bg-black-deep border border-gray-700 text-white-pure placeholder-gray-500 focus:border-gray-500'
              : 'bg-white-pure border border-gray-200 text-black-pure placeholder-gray-400 focus:border-gray-400'
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-4 font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap ${
            dark
              ? 'bg-white-pure text-black-pure hover:bg-gray-100'
              : 'bg-black-pure text-white-pure hover:bg-black-deep'
          }`}
        >
          {isSubmitting ? 'Enviando...' : ctaText}
        </button>
      </div>
      <p className={`text-sm mt-4 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
        {subtext}
      </p>
    </form>
  )
}

import { useState } from 'react'

// Framework 4C component
export const Framework4C = ({ dark = true }: { dark?: boolean }) => {
  const items = [
    {
      step: "1",
      title: "CONSUMIR",
      subtitle: "Mentalidade Cacador",
      desc: "Aprenda a filtrar ruido e consumir apenas o que importa. Defina seus 12 campos de interesse. Ignore o resto sem culpa.",
      result: "Atencao vira ativo, nao lixeira."
    },
    {
      step: "2",
      title: "CAPTURAR",
      subtitle: "Mentalidade Curador",
      desc: "Guarde o que e singular, no formato certo. Notas atomicas que viram blocos de montar. IA acelerando o processo.",
      result: "Nunca mais comecar do zero."
    },
    {
      step: "3",
      title: "CONECTAR",
      subtitle: "Danca Criativa",
      desc: "Force colisoes entre ideias de areas diferentes. Onde nasce originalidade. IA revelando padroes que voce nao veria.",
      result: "Criatividade sob demanda."
    },
    {
      step: "4",
      title: "CRIAR",
      subtitle: "Modo Artista",
      desc: "Transforme material processado em produto final. Conteudo, copy, curso, projeto. 3 a 8x mais rapido.",
      result: "Criar vira processo, nao evento raro."
    }
  ]

  return (
    <div className={`py-16 px-6 ${dark ? 'bg-black-pure text-white-pure' : 'bg-white-soft'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-lg border ${
                dark
                  ? 'bg-black-deep border-gray-700'
                  : 'bg-white-pure border-gray-200'
              }`}
            >
              <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                dark ? 'bg-white-pure text-black-pure' : 'bg-black-pure text-white-pure'
              }`}>
                {item.step}
              </div>
              <h3 className={`text-xl font-bold mb-1 mt-2 ${dark ? 'text-white-pure' : 'text-black-pure'}`}>{item.title}</h3>
              <p className={`text-sm mb-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{item.subtitle}</p>
              <p className={`mb-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
              <p className={`text-sm italic ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{item.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Included items component
export const IncludedItems = ({ dark = false }: { dark?: boolean }) => {
  const items = [
    "Curso Mente Lendaria completo (4 modulos)",
    "Comunidade Lendaria",
    "Templates e frameworks prontos",
    "Alan IA (suporte 24h treinado no conteudo)",
    "Masterclass bonus de escrita"
  ]

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className={`flex items-center gap-4 p-4 rounded-lg border ${
            dark
              ? 'bg-black-deep border-gray-700'
              : 'bg-white-pure border-gray-200'
          }`}
        >
          <div className={`w-6 h-6 rounded flex items-center justify-center ${
            dark ? 'bg-white-pure text-black-pure' : 'bg-black-pure text-white-pure'
          }`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className={dark ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
        </motion.div>
      ))}
    </div>
  )
}

// Quote component
export const Quote = ({ text, author, dark = false }: { text: string; author: string; dark?: boolean }) => (
  <div className={`p-6 border-l-4 ${dark ? 'border-white-pure bg-black-deep' : 'border-black-pure bg-white-soft'}`}>
    <p className={`font-serif italic text-lg mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
      "{text}"
    </p>
    <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>— {author}</p>
  </div>
)
