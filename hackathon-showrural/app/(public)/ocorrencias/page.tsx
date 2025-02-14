// "use client";

import Filter from "@/components/lotes/Filter";
import ExpandableTable from "@/components/ocorrencias/ExpandableTable";
import AddLoteForm from "@/components/lotes/AddLoteForm";
import { Aviario } from "@/app/uteis/types";
/*
const aviarios: Aviario[] = [
  {
    id: "1",
    nomeResponsavel: "João",
    endereco: "Rua 1",
    isAtivo: true,
  },
  {
    id: "2",
    nomeResponsavel: "Giovani",
    endereco: "Rua 3",
    isAtivo: false,
  },
];*/

export default function Ocorrencias() {
  return (
    <div>
      <div className="w-full flex justify-center pt-2">
        <div className="my-6 w-4/5 flex flex-col justify-center text-center gap-16">
            <h1 className="text-4xl">
                Ocorrências
            </h1>
        </div>
      </div>
    </div>
  );
}
