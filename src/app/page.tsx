// src/app/page.tsx
// Página principal — monta o Header dinâmico, seções e botão flutuante do WhatsApp.

import { HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/sections/Hero";
import { FaixaSegmentos } from "@/components/sections/FaixaSegmentos";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Solucoes } from "@/components/sections/Solucoes";
import { Formatos } from "@/components/sections/Formatos";
import { Processo } from "@/components/sections/Processo";
import { Eventos } from "@/components/sections/Eventos";
import { PorQueGpx7 } from "@/components/sections/PorQueGpx7";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main>
        {/* 1 */} <Hero />
        {/* 2 */} <FaixaSegmentos />
        {/* 3 */} <QuemSomos />
        {/* 4 */} <Solucoes />
        {/* 5 */} <Formatos />
        {/* 6 */} <Processo />
        {/* 7 */} <Eventos />
        {/* 8 */} <PorQueGpx7 />
        {/* 9 */} <Contato />
        {/* 10 */} <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
