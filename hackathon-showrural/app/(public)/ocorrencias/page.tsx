// "use client";

import Filter from "@/components/lotes/Filter";
import ExpandableTable from "@/components/ocorrencias/ExpandableTable";
import AddLoteForm from "@/components/lotes/AddLoteForm";
import { Aviario } from "@/app/uteis/types";
import { TableBody } from "@/components/ui/table";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";

export default function Ocorrencias() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <Table className="w-full border border-gray-300">
          <TableHeader className="bg-gray-200 text-center">
            <TableRow>
              <TableHead className="text-center">Nº Lote</TableHead>
              <TableHead className="text-center">Código Ocorrência</TableHead>
              <TableHead className="text-center">Data Ocorrência</TableHead>
              <TableHead className="text-center">Imagem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"><Eye/></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
