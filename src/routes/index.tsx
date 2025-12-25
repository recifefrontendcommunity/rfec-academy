import { createFileRoute } from "@tanstack/react-router";
import StarBorder from "@/components/StarBorder";
import DotGrid from "@/components/DotGrid";
import FuzzyText from "@/components/FuzzyText";
import RFECLogo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

// Google Form URL for registration - replace with actual form URL
const GOOGLE_FORM_URL = "";

function App() {
  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center">
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
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-6 sm:py-8 md:py-10 lg:py-12 px-2 sm:px-4 md:px-8">
          {/* Logo */}
          <div className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">
            <RFECLogo variant="light" className="w-full h-auto" />
          </div>

          {/* Title */}
          <h1 className="relative text-center w-full max-w-full overflow-hidden px-2">
            <span className="sr-only">Academy</span>
            <div className="w-full flex justify-center">
              <FuzzyText
                fontSize="clamp(3.5rem, 10vw, 7rem)"
                fontWeight={900}
                color="#FFFFFF"
                enableHover={true}
                baseIntensity={0.18}
                hoverIntensity={0.5}
              >
                Academy
              </FuzzyText>
            </div>
          </h1>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center italic px-2 sm:px-4">
            Acelere sua carreira em desenvolvimento
          </p>

          {/* CTA Button */}
          <StarBorder
            as="div"
            color="#2B7FFF"
            speed="6s"
            thickness={4}
            className="inline-block button-starborder"
          >
            <Button
              asChild
              size="default"
              className="bg-accent hover:bg-accent/90 text-foreground px-8 py-6 text-md font-normal border-0 rounded-2xl"
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
              >
                Inscreva-se
              </a>
            </Button>
          </StarBorder>

          {/* Disclaimer */}
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 text-center max-w-md leading-relaxed px-2 sm:px-4"
            aria-label="A data de início e o número de vagas ainda serão divulgados"
            role="note"
          >
            A data de início e o número de vagas ainda serão divulgados.
          </p>
        </div>
      </div>
    </div>
  );
}
