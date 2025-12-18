// V3: IA nao e suficiente (IDV + RIA + CTE)
import { motion } from 'framer-motion'
import { DiamondLogo, Section, Breather, Header, Footer, EmailForm, IncludedItems, Quote } from '../components/shared'

export function V3() {
  return (
    <div className="min-h-screen bg-white-pure">
      <Header />

      {/* ABERTURA - Tensao inicial */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-pure leading-tight tracking-tight mb-6"
          >
            Se IA fosse suficiente,
            <br />
            <span className="text-gray-400">voce ja estaria produzindo o dobro.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Mas a prova esta ai: voce tem acesso as mesmas ferramentas que todo mundo.
            ChatGPT, Claude, Gemini, Perplexity. E continua travado.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-8 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-colors"
          >
            Descobrir o gargalo real
          </motion.a>
        </div>
      </section>

      <Breather />

      {/* INVALIDACAO */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            IA virou o novo curso de ingles.
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Todo mundo tem. Quase ninguem usa de verdade. E os que usam, usam errado.
          </p>

          <p className="text-lg text-gray-600 mb-6">Voce ja viu esse padrao:</p>

          <div className="space-y-3 mb-8">
            {[
              "Assina o ChatGPT Plus",
              "Gera uns textos genericos",
              "Pede umas respostas que poderia ter googleado",
              "Nao sabe o que fazer com aquilo",
              "Volta pra estaca zero"
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

          <p className="text-lg text-gray-600 mb-4">
            A ferramenta e a mesma pra todo mundo. Os resultados sao completamente diferentes.
          </p>

          <p className="text-xl font-semibold text-black-pure mb-8">Por que?</p>

          <div className="p-8 bg-black-pure text-white-pure rounded-lg">
            <p className="text-xl">
              Porque IA na mao de uma mente confusa gera mais confusao.
              <br />
              IA na mao de uma mente clara gera criacao.
            </p>
            <p className="text-gray-400 mt-4">
              O gargalo nunca foi a ferramenta. O gargalo e a mente operando a ferramenta.
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* DIAGNOSTICO */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Voce nao tem um problema de produtividade.
            <br />
            Tem um problema de processamento.
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Voce consome mais conteudo em uma semana do que seus avos consumiram em um ano.
          </p>

          <p className="text-gray-600 mb-6">
            Livros. Podcasts. Newsletters. Videos. Cursos. Posts. Threads.
            Informacao entrando por todos os lados, o tempo todo.
          </p>

          <p className="text-lg text-gray-600 mb-4">E o que sai?</p>

          <div className="space-y-3 mb-8">
            {[
              "Ideias que somem antes de virar algo",
              "Conhecimento que voce sabe que tem, mas nao acha",
              "Projetos que comecam com fogo e morrem no esquecimento",
              "A sensacao de saber muito e produzir pouco"
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

          <p className="text-lg text-gray-600 mb-4">
            O mundo te ensinou a consumir. Ninguem te ensinou a <strong>transformar consumo em criacao</strong>.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Nao e falta de disciplina. Nao e falta de foco. Nao e TDAH (ou e, e tudo bem — pode ser sua maior vantagem).
          </p>

          <p className="text-xl font-semibold text-black-pure mb-8">
            E falta de um sistema operacional pra sua mente.
          </p>

          <Quote
            text="Fui atras de um curso de IA e achei ouro pro meu desenvolvimento pessoal. Tenho TDAH. O curso esta se encaixando como uma luva."
            author="Wagner, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* A VIRADA */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Existe um jeito de hackear isso.
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Nao com mais ferramentas. Nao com mais apps de organizacao. Nao com mais forca de vontade.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Com um sistema que muda como informacao entra, se processa e sai da sua mente.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Filtra o que vale consumir (e ignora o resto)",
              "Captura ideias no formato certo (que voce vai usar depois, nao 'salvar pra nunca mais ver')",
              "Conecta conhecimentos de areas diferentes (onde nasce o original)",
              "Transforma tudo isso em criacao real (sem depender de inspiracao)"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-gray-700"
              >
                <span className="text-black-pure">→</span>
                {item}
              </motion.div>
            ))}
          </div>

          <p className="text-xl font-semibold text-black-pure mb-4">
            Isso e Mente Lendaria.
          </p>

          <p className="text-gray-600 mb-8">
            Nao e um curso sobre IA. Nao e um curso sobre produtividade.
            E um curso sobre <strong>como operar sua mente</strong> pra que IA e tudo mais funcione de verdade.
          </p>

          <Quote
            text="A ma informacao te emburrece. As vezes e melhor jejum de informacao do que consumir conteudo ruim. Esse curso ensina a beber da fonte."
            author="Moises, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* O QUE VOCE VAI APRENDER */}
      <Section className="px-6 py-16 bg-black-pure text-white-pure">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O curso completo. Gratuito. Sem pegadinha.
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "CONSUMIR (Mentalidade Cacador)",
                desc: "Como parar de se alimentar de lixo intelectual. Voce vai definir seus 12 campos de interesse, aprender a ir na fonte (nao no resumo do resumo), e transformar consumo passivo em coleta intencional.",
                result: "Sua atencao vira ativo estrategico, nao lixeira aberta."
              },
              {
                num: "2",
                title: "CAPTURAR (Mentalidade Curador)",
                desc: "O que capturar, como capturar, em que formato. Voce vai aprender a criar notas que funcionam como blocos de montar — reutilizaveis em qualquer projeto futuro. Com IA acelerando o processo.",
                result: "Nunca mais comecar do zero. Nunca mais perder ideia boa."
              },
              {
                num: "3",
                title: "CONECTAR (Danca Criativa)",
                desc: "Criatividade nao e dom. E colisao entre ideias de areas diferentes. Voce vai aprender a forcar essas colisoes — e usar IA pra encontrar conexoes que voce nao veria sozinho.",
                result: "Insights 'originais' aparecem com previsibilidade."
              },
              {
                num: "4",
                title: "CRIAR (Modo Artista)",
                desc: "O processo completo de criacao. Como ir da ideia bruta ao produto final — seja conteudo, copy, curso, projeto, negocio. Com IA como copiloto, nao como muleta.",
                result: "Criar 3 a 8x mais rapido. Sem travar. Sem esperar o dia certo."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-black-deep border border-gray-700 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white-pure text-black-pure rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.desc}</p>
                    <p className="text-sm text-gray-400 italic">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Breather />

      {/* O QUE ESTA INCLUIDO */}
      <Section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
              Tudo isso dentro do acesso gratuito:
            </h2>
          </div>

          <IncludedItems />

          <p className="text-center text-gray-500 mt-8">
            Sem cartao de credito. Sem "teste gratis de 7 dias". Acesso completo, de verdade.
          </p>
        </div>
      </Section>

      <Breather />

      {/* DICOTOMIA */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Dois tipos de pessoas vao ler essa pagina.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white-pure border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-500 mb-4">As que vao pensar:</p>
              <p className="text-gray-600 italic">
                "Interessante. Vou salvar pra ver depois."
              </p>
              <p className="text-sm text-gray-400 mt-4">(E nunca vao ver.)</p>
            </div>

            <div className="p-8 bg-black-pure text-white-pure rounded-lg">
              <p className="font-semibold mb-4">As que vao agir:</p>
              <p className="italic">
                "Faz sentido. Vou testar."
              </p>
              <p className="text-sm text-gray-400 mt-4">
                (E vao descobrir o que Wagner, Moises e outros 4.500 ja descobriram.)
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            A diferenca entre os dois grupos nao e inteligencia. E a decisao de agir quando faz sentido agir.
          </p>
        </div>
      </Section>

      <Breather />

      {/* CTA FINAL */}
      <Section id="cta" className="px-6 py-24 bg-black-pure text-white-pure">
        <div className="max-w-2xl mx-auto text-center">
          <DiamondLogo className="w-16 h-16 mx-auto mb-8" color="#FFFFFF" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enquanto uns se afogam em informacao,
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            outros transformam informacao em poder.
          </p>

          <p className="text-gray-400 mb-8">
            O curso leva algumas horas pra consumir. A mudanca de como voce pensa dura pra sempre.
          </p>

          <EmailForm dark={true} ctaText="Acessar Mente Lendaria" subtext="Acesso imediato." />
        </div>
      </Section>

      <Footer />
    </div>
  )
}
