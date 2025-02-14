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
      <div className="pt-2 w-3/4 flex items-center flex-col gap-12 justify-center ">
        <div className="">
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
