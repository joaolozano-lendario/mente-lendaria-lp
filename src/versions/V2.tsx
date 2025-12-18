// V2: Fade Cinematico + Sistema (com abertura estilo Factory)
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DiamondLogo, Section, Breather, Header, Footer, EmailForm, Framework4C, IncludedItems, Quote } from '../components/shared'
import { CinematicFade } from '../components/CinematicFade'

export function V2() {
  const [showContent, setShowContent] = useState(false)

  const cinematicPhrases = [
    "Quantos livros voce comecou esse ano?",
    "Quantos voce terminou?",
    "Quantos voce lembra?",
    "Quantas ideias voce teve no banho essa semana?",
    "Quantas voce ainda lembra agora?",
    "Quantos cursos estao pela metade na sua conta?",
    "Quantas abas estao abertas no seu navegador neste momento?",
    "Voce sabe, ne?",
    "Sabe que tem algo errado.",
    "Sabe que voce e capaz de mais.",
    "Mas a producao nao mostra.",
    "E se o problema nunca foi voce?"
  ]

  return (
    <div className="min-h-screen bg-white-pure">
      <AnimatePresence>
        {!showContent && (
          <CinematicFade
            phrases={cinematicPhrases}
            onComplete={() => setShowContent(true)}
            highlightLast={true}
          />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header />

          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <DiamondLogo className="w-16 h-16 mx-auto mb-8" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-pure leading-tight tracking-tight mb-6"
              >
                Sua mente nao esta quebrada.
                <br />
                <span className="text-gray-400">Esta sem sistema.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
              >
                Um curso completo que transforma caos mental em clareza criativa. Gratuito.
              </motion.p>

              <motion.a
                href="#cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-block px-8 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-colors"
              >
                Acessar o framework
              </motion.a>
            </div>
          </section>

          <Breather />

          {/* O INCOMODO */}
          <Section className="px-6 py-16 bg-white-soft">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
                Voce consome mais do que nunca.
                <br />
                Cria e executa menos do que deveria.
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Informacao infinita. Cursos infinitos. Ferramentas infinitas. Possibilidades infinitas.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Ideias brilhantes somem antes de virar algo",
                  "Pesquisas que voce sabe que ja fez... perdidas",
                  "Projetos comecam com fogo, morrem no esquecimento",
                  "A sensacao de que voce sabe muito, mas produz pouco"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-gray-400">→</span>
                    {item}
                  </motion.div>
                ))}
              </div>

              <p className="text-lg text-gray-600 mb-8">
                Nao e falta de inteligencia. Nao e falta de vontade. Nao e TDAH. (Ou talvez seja. E tudo bem.)
              </p>

              <p className="text-xl font-semibold text-black-pure mb-8">
                E falta de arquitetura mental.
              </p>

              <Quote
                text="Incrivel como estou me identificando. Tenho TDAH. Fui atras de um curso de IA e achei ouro pro meu desenvolvimento pessoal."
                author="Wagner, aluno"
              />
            </div>
          </Section>

          <Breather />

          {/* O DIAGNOSTICO */}
          <Section className="px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
                O mundo te ensinou a consumir.
                <br />
                Ninguem te ensinou a processar.
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Pensa com calma: Voce aprendeu a ler. Aprendeu a pesquisar. Aprendeu a salvar links, fazer cursos, comprar livros.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Mas ninguem te ensinou:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "O que vale a pena consumir (e o que e ruido)",
                  "Como capturar ideias de forma que elas sirvam depois",
                  "Como conectar conhecimentos de areas diferentes",
                  "Como transformar o que entra em algo que sai"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-white-soft border border-gray-200 rounded-lg text-gray-700"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <p className="text-xl font-semibold text-black-pure mb-8">
                Voce virou um excelente consumidor. Mas consumir nao e criar.
              </p>

              <Quote
                text="A ma informacao te emburrece. As vezes e melhor ficar em jejum de informacao do que consumir conteudo ruim."
                author="Moises, aluno"
              />
            </div>
          </Section>

          <Breather />

          {/* A VIRADA */}
          <Section className="px-6 py-16 bg-white-soft">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
                Existe um sistema. Chama Mente Lendaria.
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
                Nao e sobre organizacao. Nao e sobre produtividade. Nao e sobre mais um app de notas.
              </p>

              <p className="text-xl font-semibold text-black-pure mb-8">
                E sobre como voce pensa.
              </p>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Um framework de 4 passos que muda a forma como informacao entra, se conecta e sai da sua mente.
              </p>
            </div>
          </Section>

          {/* FRAMEWORK */}
          <Framework4C dark={true} />

          <div className="px-6 py-8 bg-black-pure">
            <div className="max-w-4xl mx-auto space-y-4">
              <Quote
                text="Valioso pra quem tem TDAH."
                author="Wagner, aluno"
                dark={true}
              />
              <Quote
                text="Muito ouro nessa aula. O verdadeiro rumo do que estudaremos."
                author="Moises, aluno"
                dark={true}
              />
            </div>
          </div>

          <Breather />

          {/* O QUE VOCE RECEBE */}
          <Section className="px-6 py-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
                  O curso completo. Gratuito.
                </h2>
              </div>

              <IncludedItems />

              <p className="text-center text-gray-500 mt-8">
                Sem cartao. Sem "teste gratis". Acesso real.
              </p>
            </div>
          </Section>

          <Breather />

          {/* PARA QUEM E */}
          <Section className="px-6 py-16 bg-white-soft">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-black-pure mb-6">Isso e pra voce se:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-black-pure mt-1">✓</span>
                      Voce sente que sabe muito mas produz pouco
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black-pure mt-1">✓</span>
                      Voce comeca mais coisas do que termina
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black-pure mt-1">✓</span>
                      Voce ja tentou apps, metodos, rotinas... e nada grudou
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black-pure mt-1">✓</span>
                      Voce quer parar de depender de inspiracao pra criar
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-black-pure mt-1">✓</span>
                      Voce tem TDAH e sente que sua mente funciona "diferente"
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-400 mb-6">Nao e pra voce se:</h3>
                  <ul className="space-y-3 text-gray-500">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      Voce quer resultado sem implementar nada
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      Voce acha que seu problema e "falta de tempo"
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      Voce nao esta disposto a mudar como pensa
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <Breather />

          {/* CTA FINAL */}
          <Section id="cta" className="px-6 py-24 bg-black-pure text-white-pure">
            <div className="max-w-2xl mx-auto text-center">
              {/* Mini fade sequence */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-4"
              >
                Quantos projetos voce vai comecar esse ano?
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 mb-4"
              >
                E quantos vai terminar?
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-8"
              >
                Voce pode continuar do mesmo jeito.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Ou pode instalar um sistema que muda o jogo.
              </motion.h2>

              <EmailForm dark={true} ctaText="Acessar Mente Lendaria" subtext="Acesso imediato por email." />
            </div>
          </Section>

          <Footer />
        </motion.div>
      )}
    </div>
  )
}
