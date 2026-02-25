"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Reveal } from "@/components/common/Reveal";

const FAQS = [
  {
    question: "Os produtos são realmente originais?",
    answer: "Sim, 100%. Todos os nossos produtos são adquiridos diretamente nas lojas oficiais e grandes lojas de departamento nos Estados Unidos (como Macy's, Nordstrom e Best Buy). Fornecemos garantia de autenticidade em cada item.",
  },
  {
    question: "Como funciona o envio dos EUA para o Brasil?",
    answer: "Nós cuidamos de toda a logística. Os produtos são consolidados em nosso armazém na Flórida e enviados via frete expresso. O prazo médio de entrega é de 15 a 25 dias úteis após a postagem.",
  },
  {
    question: "Terei que pagar taxas de importação?",
    answer: "Para os produtos em nossa seção 'Importados', o preço que você vê já inclui uma estimativa de custos logísticos. Caso ocorra alguma taxação alfandegária, nossa equipe de suporte auxiliará no processo de desembaraço.",
  },
  {
    question: "Quais as formas de pagamento disponíveis?",
    answer: "Aceitamos Pix (com desconto), Cartão de Crédito em até 12x e boleto bancário. Todas as transações são processadas em ambiente seguro.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <Container>
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle 
              title="Dúvidas Frequentes" 
              subtitle="Tudo o que você precisa saber sobre sua próxima compra internacional na ALENTO."
            />
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-accent/20 transition-colors">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-gray-50/30 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-serif text-lg md:text-xl text-navy font-medium">
                    {faq.question}
                  </span>
                  <div className="shrink-0 ml-4 p-2 bg-white rounded-lg shadow-sm">
                    {openIndex === index ? (
                      <FaMinus className="text-accent text-sm" />
                    ) : (
                      <FaPlus className="text-navy/40 text-sm" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gray-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
