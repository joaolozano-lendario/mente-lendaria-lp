import { useEffect } from 'react'
import { motion } from 'framer-motion'

// Facebook Pixel type
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void
  }
}

// Logo Diamante
function DiamondLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
    </svg>
  )
}

// CTA Button
function CTAButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary'
}: {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-3
    font-semibold
    px-8 py-4 rounded-xl
    transition-all duration-200
    ${className}
  `

  const variants = {
    primary: `
      bg-[#30D158] hover:bg-[#28b84d] active:bg-[#22a043]
      text-white
      shadow-lg shadow-[#30D158]/20 hover:shadow-xl hover:shadow-[#30D158]/30
    `,
    secondary: `
      bg-white hover:bg-gray-50
      text-gray-900
      border-2 border-gray-200 hover:border-gray-300
    `
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default function ThankYou() {
  const instagramUrl = "https://www.instagram.com/oalanicolas/"

  // Fire Facebook Pixel CompleteRegistration event on page load
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'CompleteRegistration', {
        content_name: 'Mente Empresaria Lendaria',
        status: true
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="py-6 border-b border-gray-100">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 text-gray-900">
            <DiamondLogo className="w-7 h-7" />
            <span className="text-sm font-semibold tracking-wide">
              Academia Lendár<span className="font-bold">[IA]</span>
            </span>
          </div>
        </div>
      </header>

      {/* Seção 1: Confirmação */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Checkmark */}
            <div className="w-20 h-20 bg-[#30D158] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 leading-[1.2]">
              <span className="font-normal">Pronto.</span><br />
              <span className="font-normal">Você acabou de dar</span><br />
              <span className="font-normal">o primeiro passo para</span><br />
              <span className="font-black text-[#242044]">sair da prisão do próprio negócio.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Seu acesso ao curso <strong className="text-gray-900">Mente Empresária Lendária</strong> está liberado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção 2: Instruções de Acesso */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#242044] p-8 md:p-10 rounded-2xl text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Verifique seu email agora</h2>
              <p className="text-white/80 mb-6">
                Você vai receber um email da <strong className="text-white">Academia Lendária</strong> com o link de acesso ao curso nos próximos minutos.
              </p>
              <div className="bg-white/10 rounded-xl p-4 text-sm text-white/70">
                <p className="mb-2">
                  <strong className="text-white">Não encontrou?</strong>
                </p>
                <p>
                  Confira sua caixa de <span className="text-[#30D158] font-medium">spam</span> ou <span className="text-[#30D158] font-medium">promoções</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 3: Provocação */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Enquanto espera o email, uma pergunta:
            </h2>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-4">
                Você vai ser a pessoa que se inscreveu e <span className="text-gray-400">nunca assistiu</span>?
              </p>
              <p className="text-lg text-gray-600">
                Ou a pessoa que vai aplicar o que aprender e finalmente <strong className="text-[#242044]">parar de ser refém do próprio conhecimento</strong>?
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl mb-8">
              <p className="text-gray-600 mb-4">
                Eu sei que você recebe dezenas de emails por dia. Que sua rotina é caótica. Que "assistir depois" geralmente vira "nunca assistir".
              </p>
              <p className="text-gray-600 mb-6">
                Por isso, meu pedido é simples:
              </p>
              <p className="text-2xl font-bold text-[#242044] mb-4">
                Assista à primeira aula HOJE.
              </p>
              <p className="text-gray-500">
                Não amanhã. Não no fim de semana. <strong className="text-gray-700">Hoje.</strong>
              </p>
              <p className="text-gray-500 mt-4">
                São poucos minutos que podem mudar como você opera seu negócio pelos próximos anos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 4: O que esperar */}
      <section className="py-16 px-6 bg-[#242044] text-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              O que você vai encontrar no curso:
            </h2>

            <div className="space-y-4 mb-10">
              {[
                'O Framework dos 4Cs que uso para gerenciar múltiplas empresas em 4h/dia',
                'Como parar de ser o gargalo do seu próprio negócio',
                'A introdução ao Segundo Cérebro com IA (e por que isso muda tudo)',
                'Um sistema para transformar "bagunça mental" em clareza estratégica'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/10 p-4 rounded-xl">
                  <span className="text-[#30D158] mt-0.5 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/70 mb-2">E no final do curso...</p>
              <p className="text-lg mb-4">
                Tem algo que eu preparei especialmente para quem chegar até o fim.
              </p>
              <p className="text-white/70 mb-4">
                Não vou falar o que é agora. Só vou dizer que pode ser o próximo passo que você estava procurando.
              </p>
              <p className="text-xl font-bold">
                Mas só quem termina, descobre.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 5: Lembrete Email */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#30D158]/10 text-[#22a043] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Acesso enviado para seu email
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vá agora para sua caixa de entrada
            </h2>
            <p className="text-gray-600">
              O link de acesso está esperando por você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção 6: Instagram */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quer ir mais fundo?
            </h2>
            <p className="text-gray-600 mb-6">
              Me segue no Instagram. É lá que eu compartilho bastidores, insights rápidos e conteúdos que não publico em nenhum outro lugar.
            </p>
            <CTAButton href={instagramUrl} variant="secondary" className="gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              SEGUIR @OALANICOLAS
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Seção 7: Fechamento */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos vemos na primeira aula.
            </h2>
            <p className="text-gray-600 mb-4">
              A decisão de se inscrever foi fácil.
            </p>
            <p className="text-gray-600 mb-6">
              A decisão de assistir e aplicar é o que separa quem reclama de quem transforma.
            </p>
            <p className="text-xl font-bold text-[#242044] mb-8">
              Escolha bem.
            </p>
            <p className="text-gray-500">— Alan Nicolas</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-gray-400 mb-2">
            <DiamondLogo className="w-5 h-5" />
            <span className="text-sm font-medium">Academia Lendár[IA]</span>
          </div>
          <p className="text-xs text-gray-400">
            Transformando mentes que transformam negócios.
          </p>
        </div>
      </footer>
    </div>
  )
}
