// V4: Mente que funciona diferente (Reframe TDAH)
import { motion } from 'framer-motion'
import { DiamondLogo, Section, Breather, Header, Footer, EmailForm, IncludedItems, Quote } from '../components/shared'

export function V4() {
  return (
    <div className="min-h-screen bg-white-pure">
      <Header />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <DiamondLogo className="w-16 h-16 mx-auto mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-pure leading-tight tracking-tight mb-6"
          >
            Sua mente nao e baguncada.
            <br />
            <span className="text-gray-400">Ela so esta rodando sem sistema operacional.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Pra quem pensa rapido demais, tem ideias demais, comeca coisas demais.
            E foi ensinado a achar que isso e problema.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-8 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-colors"
          >
            Descobrir o sistema
          </motion.a>
        </div>
      </section>

      <Breather />

      {/* O ROTULO */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Te ensinaram a ter vergonha de como voce pensa.
          </h2>

          <div className="space-y-4 mb-8">
            {[
              '"Voce e disperso."',
              '"Voce nao termina nada."',
              '"Voce precisa focar."',
              '"Voce tem deficit de atencao."'
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl text-gray-500 italic"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <p className="text-lg text-gray-600 mb-6">
            E voce passou anos acreditando.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Tentou os apps de foco. Nao funcionaram.",
              "Tentou as rotinas rigidas. Abandonou em dias.",
              "Tentou os metodos de produtividade. Feitos pra outro tipo de mente."
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-600"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Cada tentativa que falhava confirmava a suspeita: <em>"Tem algo errado comigo."</em>
          </p>

          <div className="p-8 bg-black-pure text-white-pure rounded-lg">
            <p className="text-2xl font-bold mb-4">Nao tem.</p>
            <p className="text-gray-300">
              O que tem e um mundo que foi desenhado pra mentes lineares tentando enquadrar mentes que funcionam em rede.
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* O REFRAME */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            E se sua "dispersao" for sua maior arma?
          </h2>

          <p className="text-lg text-gray-600 mb-8">Pensa comigo:</p>

          <div className="space-y-6 mb-12">
            {[
              { trait: "Sua mente pula entre assuntos.", meaning: "Voce ve conexoes que outros nao veem." },
              { trait: "Sua mente tem mil ideias por dia.", meaning: "Voce tem materia-prima infinita." },
              { trait: "Sua mente nao para quieta.", meaning: "Voce processa em velocidade que outros nao alcancam." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white-soft border-l-4 border-black-pure"
              >
                <p className="text-gray-500 mb-2">{item.trait}</p>
                <p className="text-lg font-medium text-black-pure">Isso significa: {item.meaning}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-white-soft border border-gray-200 rounded-lg mb-8">
            <p className="text-xl text-black-deep">
              O problema nunca foi a mente. Foi tentar operar uma Ferrari com manual de Fusca.
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Voce nao precisa de mais foco. Precisa de um sistema que funciona COM o jeito que voce ja pensa.
          </p>

          <Quote
            text="Incrivel como estou me identificando. Tenho AH/SD e TDAH. O curso esta se encaixando como uma luva na terapia que estou fazendo. Achei o que eu nem sabia que precisava."
            author="Wagner, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* O SISTEMA */}
      <Section className="px-6 py-16 bg-black-pure text-white-pure">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mente Lendaria: O sistema pra quem nao se encaixa no padrao.
            </h2>
            <p className="text-gray-400">
              Nao e mais um metodo de produtividade. E uma arquitetura mental que usa suas caracteristicas "diferentes" como vantagem.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { problem: "Voce consome muito?", solution: "Aprende a filtrar e capturar so o que importa." },
              { problem: "Voce tem ideias a qualquer hora?", solution: "Aprende a guardar de um jeito que vai usar depois." },
              { problem: "Voce pula entre assuntos?", solution: "Aprende a transformar isso em conexoes que geram coisas novas." },
              { problem: "Voce comeca mais do que termina?", solution: "Aprende a ter material pronto que facilita finalizar." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-gray-500">→</span>
                <div>
                  <span className="text-gray-400">{item.problem}</span>
                  <span className="text-white-pure ml-2">{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-400 mt-8">
            Com IA trabalhando junto. Nao como muleta, como copiloto.
          </p>

          <p className="text-xl font-semibold mt-8">
            O resultado: Sua mente "caotica" vira maquina de criacao.
          </p>
        </div>
      </Section>

      <Breather />

      {/* O CURSO COMPLETO */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
              O que voce vai aprender (acesso gratuito)
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "CONSUMIR (Mentalidade Cacador)",
                desc: "Como usar sua curiosidade natural de forma estrategica. 12 campos de interesse. Filtro de qualidade. Ir na fonte, nao no resumo do resumo.",
                result: "Sua sede de aprender vira ativo. Nao distracao."
              },
              {
                num: "2",
                title: "CAPTURAR (Mentalidade Curador)",
                desc: "Como guardar as milhares de ideias que voce tem de um jeito que funciona. Notas atomicas. Formato reutilizavel. IA acelerando.",
                result: "Aquela ideia das 3AM? Voce vai encontrar ela quando precisar."
              },
              {
                num: "3",
                title: "CONECTAR (Danca Criativa)",
                desc: "Como usar sua tendencia natural de pular entre assuntos pra gerar originalidade. Colisao intencional de ideias. IA revelando padroes.",
                result: "Sua 'dispersao' vira sua fonte de inovacao."
              },
              {
                num: "4",
                title: "CRIAR (Modo Artista)",
                desc: "Como transformar todo esse material em criacao real. Processo, nao inspiracao. Execucao rapida.",
                result: "Voce termina. De verdade. Sem sofrer."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white-soft border border-gray-200 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black-pure text-white-pure rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black-pure mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <p className="text-sm text-gray-500 italic">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Breather />

      {/* O QUE ESTA INCLUIDO */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
              Tudo isso. De graca.
            </h2>
          </div>

          <IncludedItems />

          <p className="text-center text-gray-500 mt-8">
            Sem cartao. Sem truque. Acesso completo.
          </p>
        </div>
      </Section>

      <Breather />

      {/* A DICOTOMIA */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Duas escolhas.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 bg-white-soft border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-500 mb-4">Continuar tentando se encaixar:</p>
              <p className="text-gray-600">
                Mais um app. Mais um metodo. Mais uma promessa de que "dessa vez vai funcionar". E a mesma frustracao quando nao funciona.
              </p>
            </div>

            <div className="p-8 bg-black-pure text-white-pure rounded-lg">
              <p className="font-semibold mb-4">Ou usar um sistema feito pro jeito que voce ja pensa:</p>
              <p className="text-gray-300">
                Que nao tenta te consertar. Que usa suas caracteristicas como vantagem. Que transforma caos em clareza.
              </p>
            </div>
          </div>

          <Quote
            text="Valioso pra quem tem TDAH."
            author="Wagner, aluno"
          />

          <p className="text-gray-600 mt-8 text-center">
            A maioria vai escolher a primeira opcao. Por habito. Por medo. Por inercia.
            <br />
            Alguns vao escolher a segunda.
          </p>
        </div>
      </Section>

      <Breather />

      {/* CTA FINAL */}
      <Section id="cta" className="px-6 py-24 bg-black-pure text-white-pure">
        <div className="max-w-2xl mx-auto text-center">
          <DiamondLogo className="w-16 h-16 mx-auto mb-8" color="#FFFFFF" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua mente diferente nao e bug.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            E feature esperando o sistema certo.
          </p>

          <EmailForm dark={true} ctaText="Acessar Mente Lendaria" subtext="Acesso imediato por email." />
        </div>
      </Section>

      <Footer />
    </div>
  )
}
