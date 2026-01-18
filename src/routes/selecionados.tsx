import { createFileRoute, Link } from "@tanstack/react-router";
import DotGrid from "@/components/DotGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const Route = createFileRoute("/selecionados")({ component: Selecionados });

interface Selecionado {
  name: string;
  area: string;
};

const selecionados: Selecionado[] = [
  {
    name: "Carlos Lima",
    area: "Frontend",
  },
  {
    name: "Albérico José",
    area: "Frontend",
  },
  {
    name: "Willian Gabriel",
    area: "Frontend",
  },
];

function Selecionados() {
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
      <div className="z-10 w-full mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-20 backdrop-blur-xs bg-transparent border border-white/20 rounded-2xl">
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

        {/* Content */}
        <div className="space-y-6 text-gray-200 dark">
          <Table className="dark">
            <TableCaption>Lista de selecionados</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Área escolhida</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selecionados.map((selecionado) => (
                <TableRow key={selecionado.name}>
                  <TableCell className="font-medium">{selecionado.name}</TableCell>
                  <TableCell>{selecionado.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

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
