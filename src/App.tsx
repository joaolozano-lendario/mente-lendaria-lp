import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// ════════════════════════════════════════════════════════════════════════════
// DESIGN SYSTEM
// ════════════════════════════════════════════════════════════════════════════
//
// HIERARQUIA VISUAL:
// - Alinhamento: SEMPRE à esquerda (leitura natural em PT-BR)
// - Exceção: CTAs finais e elementos de fechamento podem ser centralizados
//
// CORES:
// - Primary: emerald-500 (CTAs, destaques positivos)
// - Text: gray-900 (títulos), gray-600 (corpo), gray-400 (labels)
// - Background: white, gray-50 (alternância suave)
// - Dark sections: black com texto white/gray-300/gray-500
//
// ESPAÇAMENTO:
// - Seções: py-20 md:py-32
// - Entre elementos: consistente 4/6/8/12
// - Max-width: 3xl (768px) para leitura confortável
//
// ════════════════════════════════════════════════════════════════════════════

// Logo Diamante
function DiamondLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M247.258 18.749A63.908 63.908 0 0 0 202.029 0h-84.091a63.906 63.906 0 0 0-45.229 18.749L18.748 72.596C6.749 84.596 0 100.961 0 117.944v84.095c0 16.866 6.75 33.232 18.748 45.231l53.978 53.981A63.907 63.907 0 0 0 117.954 320h84.092a63.908 63.908 0 0 0 45.228-18.749l53.978-53.981A63.91 63.91 0 0 0 320 202.039v-84.095a63.913 63.913 0 0 0-18.748-45.231l-53.978-53.98-.016.016Zm3.749 45.964c2 0 3.117.25 3.866.367.867 3.366 1 16-10.865 39.865-5.5 11.116-12.749 22.732-21.248 34.481a410.027 410.027 0 0 0-20.364-21.865c-7.25-7.25-14.499-14-21.865-20.366 7.616-5.5 15.249-10.5 22.731-14.866 27.231-15.866 42.479-17.499 47.729-17.499v-.117h.016Zm-44.362 95.212c-6.999 8.25-14.498 16.366-22.364 24.365-7.999 8-16.115 15.5-24.364 22.366-8.249-7-16.365-14.366-24.364-22.366-8-7.999-15.499-16.115-22.365-24.365 6.999-8.25 14.499-16.366 22.365-24.365 7.865-8 16.115-15.5 24.364-22.366 8.249 7 16.365 14.366 24.364 22.366 7.999 7.999 15.498 16.115 22.364 24.365ZM90.707 36.865c7.25-7.25 16.865-11.25 27.114-11.25h84.091c10.249 0 19.865 4 27.114 11.25l4.616 4.616c-20.997 5.117-46.978 18.866-73.842 39.115-26.864-20.25-52.844-33.865-73.842-39.115l4.616-4.616h.133ZM65.093 65.097c.617-.117 1.867-.367 3.867-.367 15.865 0 38.612 12.25 47.728 17.5 7.499 4.365 15.115 9.365 22.731 14.865-7.366 6.366-14.615 13.116-21.865 20.366a410.071 410.071 0 0 0-20.364 21.865c-8.5-11.749-15.748-23.365-21.248-34.481C64.077 80.979 64.193 68.363 65.077 64.98v.117h.016Zm-28.23 164.058c-7.25-7.25-11.249-16.866-11.249-27.116v-84.095c0-10.25 4-19.866 11.249-27.115l4.616-4.617c5.116 20.999 18.865 46.981 38.98 73.846-20.249 26.866-33.864 52.848-38.98 73.847l-4.616-4.617v-.133Zm31.98 25.982c-2 0-3.117-.25-3.866-.367-.867-3.366-1-15.999 10.865-39.865 5.5-11.116 12.749-22.732 21.248-34.481a410.071 410.071 0 0 0 20.364 21.865c7.25 7.25 14.499 14 21.865 20.366-7.616 5.5-15.249 10.5-22.731 14.866-27.23 15.866-42.48 17.499-47.728 17.499v.117h-.017Zm160.3 27.865c-7.249 7.25-16.865 11.249-27.114 11.249h-84.091c-10.249 0-19.865-3.999-27.114-11.249l-4.616-4.617c20.997-5.116 46.978-18.865 73.842-39.114 26.864 20.249 52.845 33.865 73.842 39.114l-4.616 4.617h-.133Zm25.614-28.232c-.617.117-1.867.367-3.866.367-15.865 0-38.613-12.25-47.729-17.499-7.499-4.367-15.115-9.367-22.731-14.866a410.464 410.464 0 0 0 21.865-20.366 410.027 410.027 0 0 0 20.364-21.865c8.499 11.749 15.748 23.365 21.248 34.481 11.865 23.866 11.749 36.482 10.865 39.865v-.117h-.016Zm39.479-52.864c0 10.25-4 19.866-11.249 27.115l-4.616 4.617c-5.116-20.999-18.865-46.981-38.979-73.846 20.248-26.866 33.863-52.848 38.979-73.847l4.616 4.617c7.249 7.25 11.249 16.866 11.249 27.115v84.229Z"/>
    </svg>
  )
}

// Infinito como elemento decorativo
function InfinitySymbol({ className = "w-20", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 184" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M393.3 57.2C388.7 45.8 381.9 35.6 373.2 26.9C364.4 18.2 354.2 11.4 342.9 6.8C331.8 2.3 320.2 0 308.3 0C296.4 0 284.8 2.3 273.8 6.7C262.4 11.3 252.2 18.1 243.5 26.8L200 70.3L156.5 26.8C147.7 18.1 137.5 11.3 126.2 6.7C115.2 2.3 103.6 0 91.7 0C79.8 0 68.2 2.3 57.2 6.7C45.8 11.3 35.6 18.1 26.9 26.8C18.2 35.6 11.4 45.8 6.8 57.1C2.3 68.2 0 79.8 0 91.7C0 103.6 2.3 115.2 6.7 126.2C11.3 137.6 18.1 147.8 26.8 156.5C35.5 165.2 45.8 172 57.1 176.6C68.1 181.1 79.7 183.3 91.6 183.3C103.5 183.3 115.1 181 126.1 176.6C137.5 172 147.7 165.2 156.4 156.5L199.9 113L210.4 123.5L243.4 156.5C252.2 165.2 262.4 172 273.7 176.6C284.7 181.1 296.3 183.3 308.2 183.3C320.1 183.3 331.7 181 342.7 176.6C354.1 172 364.3 165.2 373 156.5C381.7 147.7 388.5 137.5 393.1 126.2C397.6 115.2 399.8 103.6 399.8 91.7C399.8 79.8 397.5 68.2 393.1 57.2H393.3ZM369.7 91.7C369.7 108.1 363.3 123.6 351.7 135.2C340.1 146.8 324.7 153.2 308.2 153.2C291.7 153.2 276.3 146.8 264.7 135.2L221.2 91.7L264.7 48.2C276.3 36.6 291.7 30.2 308.2 30.2C324.7 30.2 340.1 36.6 351.7 48.2C363.3 59.8 369.7 75.2 369.7 91.7ZM178.6 91.7L135.1 135.2C123.5 146.8 108.1 153.2 91.6 153.2C75.2 153.2 59.7 146.8 48.1 135.2C36.5 123.6 30.1 108.2 30.1 91.7C30.1 75.2 36.5 59.8 48.1 48.2C59.7 36.6 75.1 30.2 91.6 30.2C108 30.2 123.5 36.6 135.1 48.2L178.5 91.6V91.7H178.6Z" fill={fill}/>
    </svg>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// HOOKS
// ════════════════════════════════════════════════════════════════════════════

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// ════════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ════════════════════════════════════════════════════════════════════════════

// Wrapper de seção com animação
function Section({
  children,
  className = '',
  id
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} id={id} className={`px-6 md:px-8 ${className}`}>
      <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {children}
      </div>
    </section>
  )
}

// Label de seção
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
            {children}
    </p>
  )
}

// Título de seção
function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight text-gray-900 ${className}`}>
            {children}
    </h2>
  )
}

// Parágrafo
function Paragraph({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg text-gray-600 leading-relaxed ${className}`}>
            {children}
    </p>
  )
}

// Arrow Icon
function ArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// CTA Button
function CTAButton({
  children,
  onClick,
  className = '',
  disabled = false
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group inline-flex items-center justify-center gap-3
        bg-[#30D158] hover:bg-[#28b84d]
        text-white font-semibold text-lg
        px-10 py-5 rounded-xl
        transition-all duration-200
        
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
            {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  )
}

// Card de módulo
function ModuleCard({ number, title, items }: { number: string; title: string; items: string[] }) {
  return (
    <div className="py-8 border-b border-gray-100 last:border-0">
      <div className="flex gap-6">
        <span className="text-5xl font-light text-gray-200 font-serif leading-none w-16 flex-shrink-0">
          {number}
        </span>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">{title}</h4>
          <ul className="space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-600">
                <span className="text-gray-300">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [faturamento, setFaturamento] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)'])
  const headerBorder = useTransform(scrollY, [0, 100], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.05)'])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullname || !email || !phone) return
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('u', '62')
      formData.append('f', '62')
      formData.append('s', '')
      formData.append('c', '0')
      formData.append('m', '0')
      formData.append('act', 'sub')
      formData.append('v', '2')
      formData.append('or', '344e1679-415b-4b66-abf0-248e18a28911')
      formData.append('fullname', fullname)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('field[60]', faturamento)

      await fetch('https://academialendariaoficial.activehosted.com/proc.php?jsonp=true', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        mode: 'no-cors'
      })

      setIsSubmitted(true)
      navigate('/obrigado')
    } catch (error) {
      console.error('Erro:', error)
      alert('Ocorreu um erro. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ══════════════════════════════════════════════════════════════════════
          HEADER - Logo centralizado, sem menu
          ══════════════════════════════════════════════════════════════════════ */}
      <motion.header
        style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
      >
        <div className="flex items-center justify-center py-5">
          <div className="flex items-center gap-3 text-gray-900">
            <DiamondLogo className="w-7 h-7" />
            <span className="text-sm font-semibold tracking-wide">
              Academia Lendár<span className="font-bold">[IA]</span>
            </span>
          </div>
        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center px-6 md:px-8 pt-20 relative bg-white">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="max-w-3xl mx-auto w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
                <DiamondLogo className="w-4 h-4" />
                ACESSO GRATUITO
              </span>
            </div>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl  tracking-tight text-gray-900 mb-6 leading-[1.1]">
              <span className="font-normal">Seu negócio</span><br /><span className="font-black text-[#242044]">não escala</span><br /><span className="font-normal">porque você é</span><br /><span className="font-black text-[#242044]">insubstituível.</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-6">
              E isso não é elogio — <span className="font-semibold text-gray-600">é um diagnóstico.</span>
            </p>

            {/* Descrição */}
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Descubra como <span className="font-medium text-gray-700">donos de negócio</span> estão usando um <strong className="font-bold text-gray-900">"Segundo Cérebro"</strong> potencializado com <span className="font-semibold text-gray-700">IA</span> para finalmente <span className="font-medium text-gray-700">sair do operacional</span>, tomar <span className="font-semibold text-gray-800">decisões melhores</span> em minutos, e <span className="font-bold text-gray-900">parar de ser o gargalo</span> da própria empresa.
            </p>

            {/* CTA */}
            <CTAButton onClick={scrollToForm}>
              QUERO ASSISTIR GRÁTIS
              
            </CTAButton>

            {/* Trust signals */}
            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[#30D158]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Acesso imediato · Sem cartão de crédito
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          O PROBLEMA
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32 bg-gray-50">
        <SectionLabel>O Problema</SectionLabel>
        <SectionTitle className="mb-8">Você reconhece esse ciclo?</SectionTitle>

        <Paragraph className="mb-6">
          Segunda-feira. Você acorda com uma lista de coisas estratégicas para fazer.
          Planejamento financeiro. Aquela campanha de marketing. Rever os processos que estão travados.
        </Paragraph>

        <p className="text-xl font-semibold text-gray-900 mb-6">Aí chega no negócio e...</p>

        <div className="space-y-4 mb-10">
          {[
            'Um cliente com problema urgente',
            'Um funcionário que "precisa só de 5 minutinhos"',
            'Um fornecedor que atrasou',
            'Uma conta que venceu ontem',
            'Um incêndio atrás do outro'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-200 last:border-0">
              <span className="text-2xl font-light text-gray-300 w-8">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Quote destaque */}
        <div className="bg-[#242044] text-white p-8 md:p-10 rounded-2xl">
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            Quando você vê, são 19h. Você não fez <strong>nada</strong> do que planejou.
          </p>
          <p className="text-white leading-relaxed">
            E o pior: você é o único que pode resolver. Porque as informações, os processos, os "porquês" de cada decisão... <span className="text-white">tudo isso está preso na sua cabeça.</span>
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          IDENTIFICAÇÃO
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32">
        <SectionLabel>Fatura entre R$20K e R$50K/mês?</SectionLabel>
        <SectionTitle className="mb-10">
          Se você sente isso, não está sozinho.
        </SectionTitle>

        <div className="space-y-4 mb-10">
          {[
            'Trabalha mais que todo mundo, mas o negócio não cresce na mesma proporção',
            'Não consegue tirar férias sem o WhatsApp explodir',
            'Delegar parece impossível porque "ninguém faz igual"',
            'Vive apagando incêndio em vez de pensar estrategicamente',
            'Tem dezenas de ideias boas, mas não consegue executar nenhuma até o fim',
            'Sabe que precisa escalar, mas não sabe como sair do operacional'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-3">
              <span className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-gray-900 pl-6">
          <p className="text-gray-500 mb-2">...então você não tem um problema de gestão.</p>
          <p className="text-2xl font-bold text-gray-900">
            Você tem um problema de arquitetura mental.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          O QUE NÃO FUNCIONA
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32 bg-[#242044] text-white">
        <SectionLabel>O Que Não Funciona</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          O que você já tentou<br />
          <span className="text-white/70">(e por que não funcionou)</span>
        </h2>

        <div className="space-y-10 mb-12">
          {[
            {
              title: '"Vou trabalhar mais horas."',
              text: 'Você já trabalha 10, 12, 14 horas por dia. Se mais horas resolvessem, você já seria bilionário.'
            },
            {
              title: '"Vou contratar alguém."',
              text: 'Contratou. Mas a pessoa não consegue resolver os problemas porque não sabe o que você sabe. Resultado: você continua sendo chamado o tempo todo.'
            },
            {
              title: '"Vou usar IA."',
              text: 'Baixou o ChatGPT. Fez umas perguntas. Recebeu respostas genéricas que não conhecem seu negócio. A IA é poderosa, mas ela não sabe nada sobre VOCÊ.'
            }
          ].map((item, i) => (
            <div key={i} className="pb-10 border-b border-white/20 last:border-0 last:pb-0">
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-white/70 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Destaque */}
        <div className="border border-white/30 rounded-2xl p-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase mb-4">
            A Verdade Incômoda
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            Nenhuma ferramenta resolve se o problema é que <strong>você</strong> é o gargalo.
          </p>
          <p className="text-white/70 mt-3">Você continuará preso.</p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          A VIRADA
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32">
        <SectionLabel>A Virada</SectionLabel>
        <SectionTitle className="mb-8">
          E se o problema não fosse você — mas onde você guarda o que sabe?
        </SectionTitle>

        <Paragraph className="mb-6">
          Você passou anos acumulando conhecimento. Experiências. Erros que custaram caro.
          Acertos que fizeram diferença. Relacionamentos. Padrões de mercado. Insights sobre clientes.
        </Paragraph>

        <p className="text-xl font-semibold text-gray-900 mb-10">
          Tudo isso está dentro da sua cabeça.
        </p>

        {/* Card destaque */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-6 right-6 opacity-5">
            <InfinitySymbol className="w-32" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-4 relative z-10">
            E sua cabeça não escala.
          </h3>
          <p className="text-gray-600 relative z-10 max-w-xl">
            Ela não pode ser clonada. Não funciona 24 horas. Não pode estar em duas reuniões ao mesmo tempo.
            E quando você está exausto às 23h tentando tomar uma decisão importante, ela simplesmente... trava.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          A SOLUÇÃO
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32 bg-gray-50">
        <SectionTitle className="mb-4">
          A solução não é trabalhar mais.
        </SectionTitle>
        <p className="text-2xl text-gray-500 font-serif mb-10">É pensar diferente.</p>

        <div className="bg-[#242044] text-white rounded-2xl p-8 md:p-10">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            É construir um <strong>Segundo Cérebro</strong> — um sistema externo que captura,
            organiza e conecta tudo o que você sabe.
          </p>
          <p className="text-white/70 mb-8 leading-relaxed text-lg">
            E quando você integra isso com Inteligência Artificial, você cria algo absurdamente poderoso:
          </p>
          <h4 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            Uma IA que conhece seu negócio. Seu mercado. Sua história. Suas decisões passadas.
          </h4>
          <p className="text-white/70 italic">
            Não uma IA genérica. Uma IA que pensa com você, não para você.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          IMAGINE
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32">
        <SectionLabel>Imagine</SectionLabel>
        <SectionTitle className="mb-10">
          Ter um "sócio virtual" disponível 24 horas:
        </SectionTitle>

        <div className="space-y-4 mb-10">
          {[
            'Que conhece cada detalhe do seu negócio',
            'Que lembra de decisões que você tomou há 2 anos (e por que tomou)',
            'Que conecta informações que você nem sabia que estavam relacionadas',
            'Que te ajuda a pensar estrategicamente em 15 minutos (em vez de 3 horas)',
            'Que transforma sua "bagunça mental" em clareza absoluta'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
              <span className="text-[#30D158] mt-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-[#30D158] pl-6">
          <p className="text-gray-500 mb-2">Isso não é ficção científica.</p>
          <p className="text-xl font-semibold text-gray-900">
            É exatamente isso que você vai aprender no curso gratuito Mente Empresária Lendária.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          QUEM CRIOU
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Quem Criou Isso</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Alan Nicolas
            </h2>
            <Paragraph className="mb-4">
              Empresário, líder da Comunidade Lendária e criador do método Mente Empresária.
              Saiu de um dos bairros mais pobres de Porto Alegre para construir empresas de múltiplos 7 dígitos.
            </Paragraph>
            <Paragraph className="mb-6">
              Foi "El Funileiro" — referência nacional em funis de alta conversão.
              Ajudou clientes a recuperarem mais de <strong>10 milhões de reais</strong> em vendas perdidas.
            </Paragraph>
            <p className="text-xl font-medium text-gray-900 mb-8 italic">
              "Clareza é poder, confusão é prisão."
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Livros lidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">20k+</p>
                <p className="text-sm text-gray-500">Alunos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-500">Anos</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/alan-nicolas.jpg"
              alt="Alan Nicolas"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          MÓDULOS
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32">
        <SectionLabel>O Que Você Vai Aprender</SectionLabel>
        <SectionTitle className="mb-12">
          No curso gratuito Mente Empresária Lendária
        </SectionTitle>

        <ModuleCard
          number="01"
          title="A Mentalidade do Dono que Escala"
          items={[
            'Por que você se tornou o gargalo (e não é sua culpa)',
            'O erro fatal que empresários cometem com informação',
            'A diferença entre "saber muito" e "pensar estrategicamente"'
          ]}
        />
        <ModuleCard
          number="02"
          title="O Framework dos 4Cs"
          items={[
            'Consumir: Como filtrar o que realmente importa',
            'Capturar: Como nunca mais perder uma ideia valiosa',
            'Conectar: Como fazer suas ideias "conversarem"',
            'Criar: Como transformar pensamento em execução'
          ]}
        />
        <ModuleCard
          number="03"
          title="Seu Segundo Cérebro (Introdução)"
          items={[
            'O conceito que está mudando como donos de negócio pensam',
            'Como externalizar o conhecimento preso na sua cabeça',
            'A diferença entre anotação e sistema de pensamento'
          ]}
        />
        <ModuleCard
          number="04"
          title="IA + Segundo Cérebro (Visão Geral)"
          items={[
            'Por que IA genérica não resolve seu problema específico',
            'Como criar uma IA que conhece seu negócio',
            'O primeiro passo para ter um "sócio virtual" disponível 24h'
          ]}
        />
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          TRANSFORMAÇÃO
          ══════════════════════════════════════════════════════════════════════ */}
      <Section className="py-20 md:py-32 bg-[#242044] text-white">
        <SectionLabel>Isso Não É Teoria</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          É o sistema que eu uso todos os dias.
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { from: '14h/dia', to: '4h/dia', label: 'focado' },
            { from: 'Operacional', to: 'Estratégico', label: 'pensamento' },
            { from: 'Burnout', to: 'Presente', label: 'com a família' }
          ].map((item, i) => (
            <div key={i} className="border border-white/30 rounded-xl p-6 text-center">
              <p className="text-sm text-white/70 line-through mb-2">{item.from}</p>
              <p className="text-2xl md:text-3xl font-bold mb-1">{item.to}</p>
              <p className="text-sm text-white/70">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-white/70 mb-4 text-lg">O Segundo Cérebro com IA não é sobre produtividade.</p>
        <h3 className="text-4xl md:text-5xl font-bold mb-10">É sobre liberdade.</h3>

        <div className="space-y-4 max-w-xl">
          {[
            'Liberdade de não ser o único que pode resolver os problemas.',
            'Liberdade de tirar férias sem o negócio desmoronar.',
            'Liberdade de finalmente pensar como dono — não como funcionário do próprio negócio.'
          ].map((item, i) => (
            <p key={i} className="text-white flex gap-3 text-lg">
              <span className="text-[#30D158]">✓</span>
              {item}
            </p>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA / CAPTURA
          ══════════════════════════════════════════════════════════════════════ */}
      <Section id="captura" className="py-20 md:py-32 bg-gray-50">
        <div className="text-center max-w-lg mx-auto">
          <SectionTitle className="mb-8 text-center">
            Você tem duas opções.
          </SectionTitle>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-left">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Opção 1</p>
              <p className="text-gray-600">
                Continuar fazendo o que sempre fez. Trabalhar mais. Apagar mais incêndios.
              </p>
            </div>
            <div className="bg-[#242044] p-6 rounded-xl text-left text-white">
              <p className="text-xs font-semibold text-white uppercase tracking-wide mb-3">Opção 2</p>
              <p className="text-white">
                Investir algumas horas aprendendo o sistema que pode mudar tudo. <strong className="text-white">De graça.</strong>
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Acesse Agora o Curso Gratuito
                </p>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  className="w-full px-6 py-4 text-center text-lg border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#30D158] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 text-center text-lg border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#30D158] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Seu WhatsApp (com DDD)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-6 py-4 text-center text-lg border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#30D158] transition-colors"
                />
                <select
                  value={faturamento}
                  onChange={(e) => setFaturamento(e.target.value)}
                  required
                  className="w-full px-6 py-4 text-center text-lg border-2 border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#30D158] transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Faixa de Faturamento Anual *</option>
                  <option value="Ainda não faturamos">Ainda não faturamos</option>
                  <option value="Até 100 mil/ano">Até 100 mil/ano</option>
                  <option value="De 100 mil a 500 mil/ano">De 100 mil a 500 mil/ano</option>
                  <option value="De 500 mil a 1 milhão/ano">De 500 mil a 1 milhão/ano</option>
                  <option value="Mais de 1 milhão/ano">Mais de 1 milhão/ano</option>
                </select>
                <CTAButton disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'ENVIANDO...' : 'QUERO ASSISTIR AGORA'}
                </CTAButton>
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-[#30D158]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Acesso imediato. Sem spam.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#30D158] p-10 rounded-2xl text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Pronto!</h3>
                <p className="text-white">Verifique seu email para acessar o curso.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>


      {/* ════════════════════════════════════════════════════════════
          FOOTER - Estilo Academia Lendár[IA]
          ════════════════════════════════════════════════════════════ */}
      <footer className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid - 4 colunas principais + coluna de redes */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

            {/* Mapa do Site */}
            <div>
              <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Mapa do Site
              </h4>
              <ul className="space-y-2">
                <li><a href="https://academialendaria.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Página Inicial</a></li>
                <li><a href="https://oalanicolas.news/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">NewsLetter</a></li>
              </ul>
            </div>

            {/* Programas */}
            <div>
              <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Programas
              </h4>
              <ul className="space-y-2">
                <li><a href="https://academialendaria.ai/comunidade/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Comunidade Lendár[IA]™</a></li>
                <li><a href="https://go.academialendaria.ai/gestor/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Certificação Gestor [IA]™</a></li>
                <li><a href="https://lendario.ai/formacao/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Formação Lendár[IA]™</a></li>
              </ul>
            </div>

            {/* Ecossistema */}
            <div>
              <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Ecossistema
              </h4>
              <ul className="space-y-2">
                <li><a href="https://agencialendaria.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Agência Lendár[IA]™</a></li>
                <li><a href="https://lendario.ai/chat/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Chat Lendário™</a></li>
                <li><a href="https://superagentes.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Super Agentes™</a></li>
                <li><a href="https://hub.lendario.ai/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Hub Lendário™</a></li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Suporte
              </h4>
              <ul className="space-y-2">
                <li><a href="mailto:suporte@vidalendaria.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">E-mail</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5551998444171" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Whatsapp</a></li>
                <li className="pt-2"><span className="text-gray-500 text-xs uppercase tracking-wider">Transparência</span></li>
                <li><a href="https://academialendaria.ai/termos" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Termos de uso</a></li>
                <li><a href="https://academialendaria.ai/privacidade" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Política de privacidade</a></li>
              </ul>
            </div>

            {/* Siga-nos nas redes */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4">
                Siga-nos nas redes
              </h4>
              {/* Social Icons */}
              <div className="flex gap-3 mb-6">
                <a href="https://www.youtube.com/@Academia.Lendaria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Youtube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.instagram.com/academialendaria/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://x.com/oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@oalanicolas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/academia-lend-r-ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              {/* Tagline */}
              <p className="text-sm text-gray-600/90 leading-relaxed">
                Somos Um <span className="text-gray-900 font-medium">Ecossistema de Educação & Inovação</span> para <span className="text-[#242044] font-semibold">Pessoas e Negócios</span> serem Potencializados com IA Generativa.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600/40">
              Academia Lendár[IA] © {new Date().getFullYear()} · All rights reserved
            </p>
            <p className="text-xs text-gray-400">
              CNPJ: 37.348.342/0001-07
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
