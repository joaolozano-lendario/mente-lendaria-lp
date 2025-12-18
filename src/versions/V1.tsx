// V1: Invalidacao + Diagnostico + Visao Democratizada
import { motion } from 'framer-motion'
import { DiamondLogo, Section, Breather, Header, Footer, EmailForm, Framework4C, IncludedItems } from '../components/shared'

export function V1() {
  return (
    <div className="min-h-screen bg-white-pure">
      <Header />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-2 bg-black-pure text-white-pure text-sm font-medium rounded-full mb-8"
          >
            CURSO GRATIS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-pure leading-tight tracking-tight mb-6"
          >
            Se produtividade funcionasse,
            <br />
            <span className="text-gray-400">voce ja seria produtivo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            A prova esta ai: voce ja testou apps, metodos, rotinas. E continua travando.
            O problema nunca foi falta de ferramenta. Foi o diagnostico errado.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-8 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-colors"
          >
            Quero Aprender
          </motion.a>
        </div>
      </section>

      <Breather />

      {/* INVALIDACAO TRIPLA */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-12">
            Tudo que te venderam sobre "ser produtivo" esta errado.
          </h2>

          <div className="space-y-6">
            {[
              { told: "Voce precisa de um app de notas.", reality: "Voce tem 3 instalados e nao usa nenhum." },
              { told: "Voce precisa de rotina matinal.", reality: "Voce acordou as 5h por uma semana. Desistiu." },
              { told: "Voce precisa de foco.", reality: "Voce bloqueou redes sociais e ficou olhando para a parede." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white-pure border border-gray-200 rounded-lg"
              >
                <p className="text-gray-500 mb-2"><strong className="text-black-deep">Te disseram:</strong> "{item.told}"</p>
                <p className="text-black-pure"><strong>A realidade:</strong> {item.reality}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-black-pure text-white-pure rounded-lg">
            <p className="text-xl font-serif italic">
              "Apps nao resolvem. Rotinas nao resolvem. Forca de vontade nao resolve.
              Se resolvesse, ja teria resolvido."
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* PROVA SOCIAL INVERTIDA */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            A prova esta na sua propria experiencia.
          </h2>

          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p>Quantos cursos de produtividade voce ja fez?</p>
            <p>Quantos metodos voce ja tentou? (GTD? Pomodoro? Second Brain?)</p>
            <p>Quantas vezes voce "organizou tudo" e em 2 semanas voltou ao caos?</p>
          </div>

          <div className="p-8 bg-white-soft border-l-4 border-black-pure">
            <p className="text-xl text-black-deep font-medium mb-4">Nao e culpa sua.</p>
            <p className="text-gray-600">
              Voce estava tratando <strong>sintoma</strong>, nao <strong>causa</strong>.
              <br />
              O sintoma e desorganizacao. A causa e <strong>como voce processa informacao</strong>.
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* O DIAGNOSTICO REAL */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            O problema nao e organizacao.
            <br />
            E arquitetura mental.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white-pure border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-black-deep mb-4">Sua mente funciona assim:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Informacao entra (leitura, videos, conversas)</li>
                <li>Voce tenta "lembrar" ou "guardar em algum lugar"</li>
                <li>Na hora de usar, nao acha ou nao lembra</li>
                <li>Comeca do zero. De novo.</li>
              </ul>
            </div>

            <div className="p-6 bg-black-pure text-white-pure rounded-lg">
              <h3 className="font-semibold mb-4">A diferenca:</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Produtividade tradicional:</p>
                  <p>"Como fazer mais tarefas por dia?"</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mente Lendaria:</p>
                  <p>"Como transformar o que eu consumo em algo que eu crio?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Breather />

      {/* O FRAMEWORK */}
      <div className="text-center py-12 px-6">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">O metodo</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
          O sistema que produtividade tradicional ignora.
        </h2>
      </div>
      <Framework4C dark={true} />

      <Breather />

      {/* VISAO DEMOCRATIZADA */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            O proximo criador prolifico nao vai sair de Harvard.
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Vai sair de um quarto comum. Com um computador normal. Sem conexoes especiais.
          </p>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A unica diferenca entre quem cria muito e quem trava nao e talento. Nao e tempo. Nao e dinheiro.
            <br /><br />
            E ter um <strong>sistema mental</strong> que transforma consumo em criacao.
            <br /><br />
            Esse sistema se aprende. E voce pode aprender de graca.
          </p>
        </div>
      </Section>

      <Breather />

      {/* O QUE ESTA INCLUIDO */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
              O curso completo. R$0.
            </h2>
          </div>

          <IncludedItems />

          <div className="mt-12 p-6 bg-white-pure border border-gray-200 rounded-lg">
            <p className="text-gray-600 text-center">
              <strong className="text-black-deep">Anti-promessa:</strong> Nao tem print de resultado.
              Nao tem promessa de "X em Y dias". Tem um sistema que funciona se voce aplicar.
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* CTA FINAL */}
      <Section id="cta" className="px-6 py-24 bg-black-pure text-white-pure">
        <div className="max-w-2xl mx-auto text-center">
          <DiamondLogo className="w-16 h-16 mx-auto mb-8" color="#FFFFFF" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voce pode continuar tentando apps e metodos.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ou pode atacar a causa real.
          </p>

          <EmailForm dark={true} ctaText="Acessar o curso gratuito" subtext="Acesso imediato. Sem cartao." />
        </div>
      </Section>

      <Footer />
    </div>
  )
}
