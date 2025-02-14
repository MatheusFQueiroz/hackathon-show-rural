"use client";
import crudSanity from "../../sanityClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

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

  const perguntas = ["1", "2", "2"];

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
        conforme: true,
      },
    ],
  };

  return (
    <div className="w-full flex justify-center pt-2">
      <div className="pt-2 w-3/4 flex-col items-center flex gap-12 justify-center ">
        <h1 className="text-2xl">CheckList</h1>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Pergunta</TableHead>
              <TableHead className="text-end">
                Conforme
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checklist.perguntas.map((pergunta) => (
              <TableRow key={pergunta.pergunta} className="">
                <TableCell>{pergunta.pergunta}</TableCell>
                <TableCell className="text-end">
                  <Checkbox
                    checked={pergunta.conforme}
                    onCheckedChange={(checked) => console.log(checked)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
