import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/DotGrid";
import ASCIIText from "@/components/ASCIIText";
import RFECLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

// Google Form URL for registration - replace with actual form URL
const GOOGLE_FORM_URL = "https://forms.gle/2RQZ6qTXcpx9MyJw9";

function App() {
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
      <div className="relative z-10 w-full mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-6 sm:py-8 md:py-10 lg:py-12 px-2 sm:px-4 md:px-8">
          {/* Logo */}
          <div className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">
            <RFECLogo variant="light" className="w-full h-auto" />
          </div>

          {/* Title */}
          <h1 className="relative text-center w-full max-w-full">
            <span className="sr-only">Academy</span>
            <div className="w-full flex justify-center relative h-[100px] md:h-[200px]">
              <ASCIIText
                text="Academy"
                textFontSize={200}
                textColor="#FFFFFF"
                asciiFontSize={4}
                planeBaseHeight={20}
                enableWaves={false}
              />
            </div>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 text-center font-light px-2 sm:px-4 max-w-2xl leading-relaxed">
            Projeto de mentoria da comunidade RFEC
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-[#2B7FFF] text-white hover:bg-[#2B7FFF]/20 hover:text-white hover:border-[#2B7FFF] text-sm sm:text-base font-normal rounded-xl"
            >
              <a
                href={GOOGLE_FORM_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!GOOGLE_FORM_URL) {
                    e.preventDefault();
                  }
                }}
                className="flex items-center gap-2"
              >
                Inscreva-se
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-gray-500 text-sm sm:text-base font-normal rounded-xl"
            >
              <Link
                to={"/saiba-mais" as any}
                className="flex items-center gap-2"
              >
                Saiba mais
              </Link>
            </Button>
          </div>

          {/* Disclaimer */}
          <p
            className="text-xs sm:text-sm text-gray-400 text-center max-w-md leading-relaxed px-2 sm:px-4 mb-0"
            aria-label="A data de início e o número de vagas ainda serão divulgados"
            role="note"
          >
            * A data de início e o número de vagas ainda serão divulgados.
          </p>
        </div>
      </div>
    </div>
  );
}
