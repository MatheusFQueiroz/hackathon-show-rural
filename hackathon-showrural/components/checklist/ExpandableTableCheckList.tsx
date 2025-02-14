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
import { Lote } from "@/app/uteis/types";
import { ChevronDown, ChevronUp } from "lucide-react";

const data: Lote[] = [
  {
    id_lote: 1,
    id_aviario: 4,
    dt_alojamento: new Date(),
    dt_saida_lote: undefined,
    qt_aves: 1000,
    linhagem: "Cobb",
    peso_ave_entrada: 1.5,
    peso_ave_saida: undefined,
    qt_aves_mortas: 10,
    isSalmonelaValid: false,
    nrOcorrencias: [
      {
        id_ocorrencia: 5,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
      {
        id_ocorrencia: 6,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
    ],
  }
];

export default function ExpandableTableCheckList() {
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
          <TableHead>Pergunta</TableHead>
          <TableHead>Conforme</TableHead>
          <TableHead>Não conforme</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((lote) => (
          // Usamos React.Fragment para agrupar a linha principal e a linha expansível
          <React.Fragment key={lote.id_lote}>
            <TableRow
              className="cursor-pointer"
              onClick={() => handleRowToggle(lote.id_lote)}
            >
              <TableCell>{lote.id_lote}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRowToggle(lote.id_lote)}
                >
                  {expandedRows.includes(lote.id_lote) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRowToggle(lote.id_lote)}
                >
                  {expandedRows.includes(lote.id_lote) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </Button>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}
