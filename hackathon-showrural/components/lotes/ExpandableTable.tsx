"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// Exemplo de interface para os dados da linha
interface DataRow {
  id: number;
  cliente: string;
  situacao: string;
  detalhes: string;
}

// Dados de exemplo para a tabela
const data: DataRow[] = [
  {
    id: 1,
    cliente: "Cliente 1",
    situacao: "Ativo",
    detalhes: "Mais informações sobre o Cliente 1.",
  },
  {
    id: 2,
    cliente: "Cliente 2",
    situacao: "Inativo",
    detalhes: "Mais informações sobre o Cliente 2.",
  },
  // Adicione mais linhas conforme necessário
];

export default function ExpandableTable() {
  // Estado para armazenar os IDs das linhas expandidas
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  // Função para alternar a expansão da linha
  const handleRowToggle = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Situação</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          // Usamos React.Fragment para agrupar a linha principal e a linha expansível
          <React.Fragment key={row.id}>
            <TableRow
              className="cursor-pointer"
              onClick={() => handleRowToggle(row.id)}
            >
              <TableCell>{row.cliente}</TableCell>
              <TableCell>{row.situacao}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  {expandedRows.includes(row.id) ? "Colapsar" : "Expandir"}
                </Button>
              </TableCell>
            </TableRow>
            {expandedRows.includes(row.id) && (
              <TableRow>
                <TableCell colSpan={3} className="bg-gray-100">
                  {row.detalhes}
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}
