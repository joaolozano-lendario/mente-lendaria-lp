// V5: O excesso que paralisa
import { motion } from 'framer-motion'
import { DiamondLogo, Section, Breather, Header, Footer, EmailForm, IncludedItems, Quote } from '../components/shared'

export function V5() {
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
            Voce nunca teve acesso a tanta informacao.
            <br />
            <span className="text-gray-400">E nunca produziu tao pouco com ela.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Cursos, livros, podcasts, newsletters, videos, IA. Tudo a disposicao.
            E a sensacao de estar sempre correndo atras, sempre devendo, sempre travado.
          </motion.p>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-block px-8 py-4 bg-black-pure text-white-pure font-semibold rounded-lg hover:bg-black-deep transition-colors"
          >
            Resolver o paradoxo
          </motion.a>
        </div>
      </section>

      <Breather />

      {/* O PARADOXO */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Quanto mais voce consome, menos voce cria.
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Parece contraditorio. Deveria ser o oposto.
          </p>

          <p className="text-gray-600 mb-6">
            Mais informacao = mais repertorio. Mais repertorio = mais criacao.
          </p>

          <p className="text-lg text-gray-600 mb-6">Mas nao e isso que acontece. O que acontece e:</p>

          <div className="space-y-3 mb-8">
            {[
              "47 abas abertas no navegador",
              "12 cursos comecados, 2 terminados, zero aplicados",
              "Lista de livros 'pra ler' que so cresce",
              "Ideias anotadas em 5 lugares diferentes (e achadas em nenhum)",
              "A sensacao de que voce sabe muito, mas nao consegue mostrar"
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
            Voce esta cheio de entrada. E congestionado na saida.
          </p>

          <div className="p-8 bg-black-pure text-white-pure rounded-lg">
            <p className="text-xl">
              Isso nao e falta de conhecimento.
              <br />
              E intoxicacao de informacao.
            </p>
          </div>
        </div>
      </Section>

      <Breather />

      {/* O DIAGNOSTICO */}
      <Section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Seu cerebro nao foi feito pra isso.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-white-soft border border-gray-200 rounded-lg">
              <p className="font-semibold text-gray-500 mb-4">Biologicamente, seu cerebro foi desenhado pra:</p>
              <ul className="space-y-2 text-gray-600">
                <li>→ Lembrar onde tem comida</li>
                <li>→ Reconhecer perigo</li>
                <li>→ Processar o que esta na sua frente agora</li>
              </ul>
            </div>

            <div className="p-6 bg-black-pure text-white-pure rounded-lg">
              <p className="font-semibold text-gray-400 mb-4">Nao foi desenhado pra:</p>
              <ul className="space-y-2 text-gray-300">
                <li>→ Guardar 300 insights de 50 livros</li>
                <li>→ Lembrar aquela ideia das 3AM de 6 meses atras</li>
                <li>→ Conectar um podcast sobre psicologia com um artigo sobre negocios de ano passado</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-4">
            Voce esta tentando rodar um software de 2025 num hardware de 50.000 AC.
          </p>

          <p className="text-xl font-semibold text-black-pure mb-8">
            O problema nao e voce. E esperar que sua memoria biologica de conta de um mundo de informacao infinita.
          </p>

          <p className="text-gray-600 mb-8">
            A solucao nao e consumir menos. E ter um sistema que processa por voce.
          </p>

          <Quote
            text="Valioso pra quem tem TDAH. Finalmente um metodo que funciona com a minha mente, nao contra ela."
            author="Wagner, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* A VIRADA */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            E se voce tivesse um sistema que nunca esquece?
          </h2>

          <p className="text-lg text-gray-600 mb-6">Um sistema que:</p>

          <div className="space-y-4 mb-8">
            {[
              "Filtra o que vale a pena entrar (e barra o lixo)",
              "Guarda no formato certo (que voce vai encontrar e usar)",
              "Conecta automaticamente com o que voce ja sabe",
              "Entrega material pronto quando voce precisa criar"
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

          <p className="text-lg text-gray-600 mb-4">
            Nao e mais um app. Nao e IA generica. E um <strong>sistema operacional pra sua mente</strong>.
          </p>

          <p className="text-gray-600 mb-8">
            Onde IA trabalha com voce, nao no lugar de voce.
            Onde sua "mente baguncada" vira vantagem, nao obstaculo.
            Onde consumir e criar ficam em equilibrio.
          </p>

          <p className="text-xl font-semibold text-black-pure mb-8">
            Isso e Mente Lendaria.
          </p>

          <Quote
            text="Fui atras de um curso de IA e achei ouro pro meu desenvolvimento pessoal. Achei o que eu nem sabia que precisava."
            author="Wagner, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* O CURSO COMPLETO */}
      <Section className="px-6 py-16 bg-black-pure text-white-pure">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que voce vai aprender (acesso gratuito)
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "CONSUMIR",
                desc: "Como parar de engolir tudo e comecar a cacar o que importa. Voce define 12 campos de interesse. O resto vira ruido que voce ignora sem culpa.",
                result: "Consumo intencional. Atencao como ativo, nao como lixeira."
              },
              {
                num: "2",
                title: "CAPTURAR",
                desc: "Como guardar ideias de um jeito que voce vai usar depois. Notas atomicas que viram blocos de montar. IA acelerando o processo.",
                result: "Nunca mais perder insight. Nunca mais comecar do zero."
              },
              {
                num: "3",
                title: "CONECTAR",
                desc: "Como forcar colisoes entre ideias de areas diferentes. Onde nasce originalidade. IA revelando padroes que voce nao veria.",
                result: "Criatividade sob demanda. Sem esperar musas."
              },
              {
                num: "4",
                title: "CRIAR",
                desc: "Como transformar material processado em produto final. Conteudo, copy, curso, projeto. 3 a 8x mais rapido.",
                result: "Criar vira processo. Nao evento raro."
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
              Tudo isso. Gratuito. Completo.
            </h2>
          </div>

          <IncludedItems />

          <p className="text-center text-gray-500 mt-8">
            Sem cartao. Sem teste gratis. Acesso real.
          </p>
        </div>
      </Section>

      <Breather />

      {/* A ESCOLHA */}
      <Section className="px-6 py-16 bg-white-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-8">
            Voce pode continuar acumulando.
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Mais cursos na lista. Mais livros na estante. Mais abas abertas. Mais "vou ver depois".
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Ou pode instalar um sistema que transforma acumulo em criacao.
          </p>

          <div className="p-8 bg-white-pure border border-gray-200 rounded-lg mb-8">
            <p className="text-xl text-black-deep">
              A diferenca entre quem consome muito e quem cria muito nao e tempo.
              Nao e talento. Nao e disciplina.
            </p>
            <p className="text-xl font-semibold text-black-pure mt-4">
              E ter um sistema de processamento.
            </p>
          </div>

          <Quote
            text="A ma informacao te emburrece. Esse curso ensina a filtrar, a ir na fonte, a transformar o que sobra em algo real."
            author="Moises, aluno"
          />
        </div>
      </Section>

      <Breather />

      {/* CTA FINAL */}
      <Section id="cta" className="px-6 py-24 bg-black-pure text-white-pure">
        <div className="max-w-2xl mx-auto text-center">
          <DiamondLogo className="w-16 h-16 mx-auto mb-8" color="#FFFFFF" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu proximo curso pode ser mais um na pilha.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ou pode ser o sistema que faz todos os outros fazerem sentido.
          </p>

          <EmailForm dark={true} ctaText="Acessar Mente Lendaria" subtext="Acesso imediato por email." />
        </div>
      </Section>

      <Footer />
    </div>
  )
}
