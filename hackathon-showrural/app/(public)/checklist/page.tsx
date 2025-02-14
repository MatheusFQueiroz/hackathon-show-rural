"use client";
import crudSanity from "../../sanityClient";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Checklist() {
  
  async function chamar(){
    const retorno = await crudSanity.select("templateCheckList", [], "", "descricao_checkList");
    console.log(retorno)
  }

  return (
    <div>
      <div className="w-full  pt-2 ">
        <div className="w-4/5 flex items-center flex-col gap-12 justify-center">
          <button onClick={chamar} className="text-3xl">CheckList</button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pergunta</TableHead>
                <TableHead>Conforme</TableHead>
                <TableHead>Não conforme</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
