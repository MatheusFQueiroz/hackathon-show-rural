"use client";
import { Check, X } from "lucide-react";
import crudSanity from "../../sanityClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Checklist() {
  async function chamar() {
    const retorno = await crudSanity.select(
      "templateCheckList",
      [],
      "",
      "descricao_checkList"
    );
    console.log(retorno);
  }

  const perguntas = ["1", "2", "2"]

  const checklist = {
    perguntas: [
      {
        pergunta: "Pergunta 1",
        conforme: true,
      },
      {
        pergunta: "Pergunta 2",
        conforme: false,
      },
      {
        pergunta: "Pergunta 3",
        conforme: false,
      },
    ],
    
  }

  return (
    <div className="w-full flex justify-center pt-2">
      <div className="pt-2 w-3/4 flex-col items-center flex gap-12 justify-center ">
        <button onClick={chamar} className="text-3xl">
          CheckList
        </button>
        <Table>
          <TableHeader>
            <TableRow className="grid grid-cols-12">
              <TableHead className="col-span-8">Pergunta</TableHead>
              <TableHead className="col-span-2 text-end">Conforme</TableHead>
              <TableHead className="col-span-2 text-end">Não conforme</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checklist.perguntas.map((pergunta) => (
              <TableRow key={pergunta.pergunta}>
                <TableCell colSpan={7}>{pergunta.pergunta}</TableCell>
                <TableCell colSpan={1} className="text-end">
                  {pergunta.conforme ? <Check className="float-right" /> : null}
                </TableCell>
                <TableCell colSpan={1} className="text-end ">
                  {pergunta.conforme ? null : 
                  <X className="float-right" />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
