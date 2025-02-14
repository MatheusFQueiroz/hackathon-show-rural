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

  return (
    <div className="w-full flex justify-center pt-2">
      <div className="pt-2 w-3/4 flex-col items-center flex gap-12 justify-center ">
        <button onClick={chamar} className="text-3xl">
          CheckList
        </button>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pergunta</TableHead>
              <TableHead className="text-end">Conforme</TableHead>
              <TableHead className="text-end">Não conforme</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
