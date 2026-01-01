import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/DotGrid";
import RFECLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

export const Route = createFileRoute("/saiba-mais")({ component: SaibaMais });

function SaibaMais() {
  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center p-0">
      {/* DotGrid background effect */}
      <div className="fixed inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={24}
          baseColor="#2B7FFF"
          activeColor="#FFFFFF"
          proximity={80}
          speedTrigger={0.5}
          shockRadius={100}
          shockStrength={0.5}
          maxSpeed={50}
          resistance={0.1}
          returnDuration={1.5}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 backdrop-blur-xs bg-transparent border border-white/20 rounded-2xl">
        {/* Back button */}
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-gray-800/50"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </Button>
        </div>

        {/* Logo */}
        <div className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] mb-8">
          <RFECLogo variant="light" className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-200">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              RFEC Academy
            </h1> */}

          <div className="prose prose-invert max-w-none">
            <p className="text-lg sm:text-xl leading-relaxed">
              RFEC Academy é uma iniciativa de mentoria comunitária voltada a
              desenvolvedores que buscam direcionamento, clareza de caminho e
              evolução consistente na área de tecnologia.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mt-6">
              O projeto conecta mentores e mentorados em trilhas de
              desenvolvimento (Frontend e Backend), com foco em orientação
              prática, troca de experiências e acompanhamento técnico, e não em
              aulas tradicionais. As tecnologias servem como contexto de
              aprendizado, enquanto o principal valor está na mentoria, feedback
              e tomada de decisão técnica ao longo do processo.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mt-6">
              A proposta do RFEC Academy é oferecer um ambiente colaborativo
              onde os participantes evoluem por meio de discussões técnicas,
              análise de projetos, revisão de conceitos e boas práticas,
              respeitando o ritmo de cada um e priorizando autonomia,
              consistência e propósito no crescimento profissional.
            </p>
          </div>

          {/* Disclaimer - Em construção */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-3">
            <Construction className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-400 font-medium mb-1">
                Página em construção
              </p>
              <p className="text-yellow-300/80 text-sm">
                Esta página está em desenvolvimento e será atualizada em breve
                com mais informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
