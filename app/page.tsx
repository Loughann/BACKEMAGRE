"use client" // Adicionado para permitir o uso de hooks e framer-motion

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Gift, X } from "lucide-react" // Importar o ícone Gift
import TestimonialCarousel from "@/app/components/testimonial-carousel" // Importar o novo componente
import FloatingCTA from "@/app/components/floating-cta" // Importar o FloatingCTA
import { motion } from "framer-motion" // Importar motion

export default function LandingPage() {
  // Dados para o carrossel de depoimentos
  const testimonialsData = [
    { image: "/depoimento1.webp", weight: "-15kg", time: "em 4 meses" },
    { image: "/depoimento3.webp", weight: "-10kg", time: "em 3 meses" },
    { image: "/depoimento5.webp", weight: "-18kg", time: "em 5 meses" },
    { image: "/depoimento4.webp", weight: "-7kg", time: "em 2 meses" },
    { image: "/depoimento2.webp", weight: "-12kg", time: "em 3.5 meses" },
  ]

  // Variantes de animação para um efeito de fade-in e slide-up
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Para animar itens filhos em sequência
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ee]">
      <main className="flex-1 px-4 py-8 md:py-12 max-w-md mx-auto overflow-hidden">
        {/* Hero Section - Foco total na oferta e urgência */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1 className="text-[#333333] text-3xl font-bold mb-2" variants={itemVariants}>
            ÚLTIMA CHANCE: Emagreça até{" "}
            <span className="text-[#E53935] block text-4xl font-extrabold my-1">7KG EM 21 DIAS</span>
            por APENAS <span className="text-[#E53935] block text-5xl font-extrabold my-1">R$7,90!</span>
          </motion.h1>
          <div className="h-[3px] w-32 bg-[#E53935] mx-auto mt-2 mb-4"></div>
        </motion.div>

        {/* Main Product Image - Central e impactante */}
        <motion.div
          className="relative h-[400px] w-full mx-auto max-w-full mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative w-full h-full">
            <Image src="/design-sem-nome-35.png" alt="E-books de Receitas Fitness" fill className="object-contain" />
          </motion.div>
        </motion.div>

        {/* Descrição Curta e Incisiva */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p className="text-[#333333] text-lg mb-4" variants={itemVariants}>
            Você hesitou antes, mas esta é a sua <span className="font-bold text-[#E53935]">ÚNICA OPORTUNIDADE</span> de
            transformar seu corpo e sua mente sem dietas malucas ou consultas caras!
          </motion.p>
          <motion.p className="text-[#555555]" variants={itemVariants}>
            Não perca mais tempo! Tenha acesso a <span className="font-medium">+150 receitas fitness</span> sem açúcar,
            glúten e lactose para emagrecer comendo tudo que gosta, por um preço que você NUNCA MAIS VERÁ!
          </motion.p>
        </motion.div>

        {/* Primary CTA Button - Destaque máximo */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <a
              href="https://pay.kirvano.com/7a9c258e-463d-4876-9433-3b9ec84e3d18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-lg py-6 rounded-full px-10 max-w-full animate-pulse-custom">
                QUERO MINHA RECEITA POR R$7,90 AGORA!
              </Button>
            </a>
          </motion.div>
          <motion.div className="flex justify-center items-center gap-2 mt-2" variants={itemVariants}>
            <ShieldCheck className="h-4 w-4 text-[#555555]" />
            <p className="text-sm text-[#555555]">Pagamento 100% seguro</p>
          </motion.div>
        </motion.div>

        {/* Pain Points - Direto ao ponto */}
        <motion.div
          className="mt-12 bg-white p-5 rounded-lg shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-center font-bold text-[#333333] text-2xl mb-4" variants={itemVariants}>
            Você se identifica com isso?
          </motion.h2>
          <div className="space-y-3">
            <motion.div className="flex items-start" variants={itemVariants}>
              <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-[#555555]">Cansada de dietas que te deixam frustrada e culpada?</p>
            </motion.div>
            <motion.div className="flex items-start" variants={itemVariants}>
              <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-[#555555]">Sente culpa toda vez que come uma sobremesa?</p>
            </motion.div>
            <motion.div className="flex items-start" variants={itemVariants}>
              <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-[#555555]">Já tentou várias dietas mas sempre desiste por não poder comer doces?</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Emotional Pain Section - Com imagem impactante */}
        <motion.div
          className="mt-12 bg-white p-5 rounded-lg shadow-sm text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-[#333333] text-2xl font-bold mb-4" variants={itemVariants}>
            Não deixe a frustração vencer!
            <span className="text-[#E53935] block">Sua transformação começa AGORA!</span>
          </motion.h2>
          <motion.p className="text-[#555555] text-lg mb-6" variants={itemVariants}>
            Você se sente presa em um ciclo de privação e arrependimento? Sonha em comer o que ama sem culpa e ver
            resultados? Esta é a sua chance de mudar!
          </motion.p>
          <motion.div variants={itemVariants} className="relative w-full h-[400px] mx-auto mb-8">
            <Image
              src="/mulher-comendo.webp"
              alt="Mulheres comendo alimentos que gostam"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <a
              href="https://pay.kirvano.com/7a9c258e-463d-4876-9433-3b9ec84e3d18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-lg py-6 rounded-full px-10 max-w-full animate-pulse-custom">
                TRANSFORME SUA VIDA POR R$7,90!
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Features Section - Por que você PRECISA */}
        <motion.div
          className="mt-8 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-center font-bold text-[#333333] text-xl" variants={itemVariants}>
            Por que você PRECISA dessas receitas?
          </motion.h2>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
            <h3 className="font-bold text-[#333333] mb-2 flex items-center">
              <span className="bg-[#E53935] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 animate-pulse-custom">
                1
              </span>
              Resultados Rápidos e Reais
            </h3>
            <p className="text-[#555555]">
              Emagreça até 7kg em 21 dias comendo o que ama. Chega de dietas que não funcionam!
            </p>
          </motion.div>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
            <h3 className="font-bold text-[#333333] mb-2 flex items-center">
              <span className="bg-[#E53935] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 animate-pulse-custom">
                2
              </span>
              Prazer Sem Culpa
            </h3>
            <p className="text-[#555555]">Desfrute de doces e refeições deliciosas sem sabotar seu emagrecimento.</p>
          </motion.div>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
            <h3 className="font-bold text-[#333333] mb-2 flex items-center">
              <span className="bg-[#E53935] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 animate-pulse-custom">
                3
              </span>
              Economia e Praticidade
            </h3>
            <p className="text-[#555555]">Ingredientes acessíveis e receitas rápidas para sua rotina.</p>
          </motion.div>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
            <h3 className="font-bold text-[#333333] mb-2 flex items-center">
              <span className="bg-[#E53935] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 animate-pulse-custom">
                4
              </span>
              Suporte e Comunidade
            </h3>
            <p className="text-[#555555]">
              Não estará sozinha! Tenha acesso a suporte exclusivo e uma comunidade de apoio.
            </p>
          </motion.div>
        </motion.div>

        {/* Bonus Section - Com imagens para valor percebido */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-center font-bold text-3xl mb-6 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <Gift className="h-8 w-8 text-[#E53935]" />
            <span className="text-[#E53935]">Bônus Exclusivos</span>
          </motion.h2>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm mb-4" variants={itemVariants}>
            <div className="flex items-center">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0">
                <Image src="/placeholder.svg" alt="Plano de 7 Dias" fill className="object-contain" />
              </div>
              <div>
                <div className="inline-block bg-[#E53935] text-white text-xs font-bold px-2 py-1 rounded mb-1 animate-pulse-custom">
                  BÔNUS 1
                </div>
                <h3 className="font-bold text-[#333333]">Plano de 7 Dias com Cardápio Doce</h3>
                <p className="text-[#555555] text-sm">Cardápio completo para perder até 2kg em uma semana!</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm mb-4" variants={itemVariants}>
            <div className="flex items-center">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0">
                <Image src="/placeholder.svg" alt="Checklist de Ingredientes" fill className="object-contain" />
              </div>
              <div>
                <div className="inline-block bg-[#E53935] text-white text-xs font-bold px-2 py-1 rounded mb-1 animate-pulse-custom">
                  BÔNUS 2
                </div>
                <h3 className="font-bold text-[#333333]">Checklist de Ingredientes Saudáveis</h3>
                <p className="text-[#555555] text-sm">Lista completa para fazer suas compras sem erro!</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
            <div className="flex items-center">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0">
                <Image src="/placeholder.svg" alt="Mini Guia" fill className="object-contain" />
              </div>
              <div>
                <div className="inline-block bg-[#E53935] text-white text-xs font-bold px-2 py-1 rounded mb-1 animate-pulse-custom">
                  BÔNUS 3
                </div>
                <h3 className="font-bold text-[#333333]">Mini Guia de Substituições</h3>
                <p className="text-[#555555] text-sm">Adapte qualquer receita para a versão fit facilmente!</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials - Foco nos resultados */}
        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p className="text-center text-[#999999] uppercase font-medium mb-1" variants={itemVariants}>
            DEPOIMENTOS
          </motion.p>
          <motion.h2 className="text-center font-bold text-[#333333] text-2xl mb-2" variants={itemVariants}>
            Nossos clientes que tiveram <span className="text-[#E53935] block">suas vidas transformadas!</span>
          </motion.h2>

          <motion.div className="mt-6 relative" variants={itemVariants}>
            <TestimonialCarousel testimonials={testimonialsData} />
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <a
                href="https://pay.kirvano.com/7a9c258e-463d-4876-9433-3b9ec84e3d18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#E53935] hover:bg-[#C62828] text-white font-bold text-lg py-6 rounded-full px-10 max-w-full animate-pulse-custom">
                  QUERO ESSES RESULTADOS AGORA! 🔥
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <div className="mt-8 space-y-4">
            <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 relative mr-3 flex-shrink-0">
                  <Image src="/avaliacao3.webp" alt="Mariana" fill className="rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Mariana, 32</p>
                  <p className="text-[#E53935] text-sm font-medium">-8kg em 3 meses</p>
                </div>
              </div>
              <p className="text-[#555555]">
                Perdi 8kg sem sentir que estava de dieta! Os brigadeiros de batata doce são incríveis e me ajudaram
                muito!
              </p>
            </motion.div>

            <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 relative mr-3 flex-shrink-0">
                  <Image
                    src="/avaliacao2.webp"
                    alt="Carla"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Carla, 37</p>
                  <p className="text-[#E53935] text-sm font-medium">-12kg em 4 meses</p>
                </div>
              </div>
              <p className="text-[#555555]">
                Minha nutricionista ficou impressionada com meus resultados. Finalmente posso comer doces sem culpa e
                manter o peso!
              </p>
            </motion.div>

            <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={itemVariants}>
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 relative mr-3 flex-shrink-0">
                  <Image
                    src="/avaliacao1.webp"
                    alt="Juliana"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Juliana, 28</p>
                  <p className="text-[#E53935] text-sm font-medium">-6kg em 2 meses</p>
                </div>
              </div>
              <p className="text-[#555555]">
                Meu marido nem percebe que são receitas fit! Já fiz o bolo de chocolate 5 vezes e é um sucesso, todos
                amam!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
      {/* Floating CTA - Visível apenas em dispositivos móveis */}
      <FloatingCTA />
      {/* Footer */}
      <footer className="bg-[#333333] text-white py-6 px-4 text-center text-sm mt-12">
        <p className="mt-4">© {new Date().getFullYear()} Nutri Paula. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
