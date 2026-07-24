import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full">
        <Image
          src="/img-consultorio.png"
          alt="Fachada do consultório odontológico"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay escuro pra dar contraste no texto */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Conteúdo por cima da imagem */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold">
            Excelência em Sorrisos,<br />
            Cuidando em Cada Detalhe
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Cuidando do seu sorriso com excelência
          </p>

          <div className="flex gap-4 mt-6">
            <Button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-5 rounded-lg">
              Agendar Consulta
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-5 rounded-lg">
              Conhecer a Clínica
            </Button>
          </div>
        </div>
      </div>
      <section className="py-20 px-8 md:px-16">
        <div className="flex flex-col items-center text-center text-black">
          <p className="text-sm md:text-base uppercase tracking-wide text-gray-500">
            Especialidades
          </p>
          <h2 className="text-2xl md:text-4xl font-bold gap-6 mt-2">
            Nossos Serviços Premium
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-3">
          <Card className="relative mx-auto w-100 h-90 pt-0 mt-20">
            <div className="absolute inset-0 z-30" />
            <img
              src="https://coifeodonto.com.br/wp-content/uploads/2019/11/Conheca-quais-sao-tipos-de-implantes-dentarios.jpg"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardAction>
              </CardAction>
              <CardTitle>Implantes e Próteses</CardTitle>
              <CardDescription>
                Restaure sua função mastigatória e estética com tecnologia guiada por computador para máxima precisão e conforto.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-100 h-90 pt-0 mt-20">
            <div className="absolute inset-0 z-30" />
            <img
              src="https://www.proteste.org.br/-/media/proteste/images-bis/home/saude%20e%20bem-estar/clareamento%20dental/pim_dentista_03.jpg?rev=1f11623b-5ff7-4d47-9cbd-56d8c678a4dd&mw=660&hash=201D3949D2E236E60E749AC23F4832C1jpg"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardAction>
              </CardAction>
              <CardTitle>Clareamento Dental</CardTitle>
              <CardDescription>
                Devolva o brilho natural do seu sorriso com técnicas seguras e resultados visíveis já nas primeiras sessões.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-100 h-90 pt-0 mt-20">
            <div className="absolute inset-0 z-30" />
            <img
              src="https://sorridents.com.br/wp-content/uploads/2021/03/post_thumbnail-fb8214ea9ea33f2bb1f52dedf61de921-768x512.jpeg"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardAction>
              </CardAction>
              <CardTitle>Restauração Dental</CardTitle>
              <CardDescription>
                Recupere a saúde e a aparência do seu dente com materiais modernos que garantem resistência e um resultado natural.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}