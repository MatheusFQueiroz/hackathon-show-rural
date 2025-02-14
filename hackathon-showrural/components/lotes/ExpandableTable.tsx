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
  },
  {
    id_lote: 3,
    id_aviario: 5,
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
        id_ocorrencia: 1,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
      {
        id_ocorrencia: 2,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
    ],
  },
  {
    id_lote: 5,
    id_aviario: 6,
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
        id_ocorrencia: 3,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
      {
        id_ocorrencia: 4,
        dt_ocorrencia: new Date(),
        image: "https://www.google.com/imgres?q=bota%20de%20aviario&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_844721-MLB74516229893_022024-O.webp&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-2085506379-bota-haras-aviario-granja-baia-ca-44883-envio-24h-protetora-_JM&docid=Z3eiQFFGHJiJ6M&tbnid=NeZtd9PKOsOwmM&vet=12ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA..i&w=500&h=454&hcb=2&ved=2ahUKEwjC4ZzVwcKLAxXgupUCHauYIs4QM3oECBgQAA",
      },
    ],
  },
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
          <TableHead>Nº Lote</TableHead>
          <TableHead>Nº Aviário</TableHead>
          <TableHead>Data Alojamento</TableHead>
          <TableHead>Qtd. Aves</TableHead>
          <TableHead>Qtd. Aves Mortas</TableHead>
          <TableHead>Linhagem</TableHead>
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
              <TableCell>{lote.id_aviario}</TableCell>
              <TableCell>{lote.dt_alojamento?.toLocaleDateString()}</TableCell>
              <TableCell>{lote.qt_aves}</TableCell>
              <TableCell>{lote.qt_aves_mortas}</TableCell>
              <TableCell>{lote.linhagem}</TableCell>
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
            {expandedRows.includes(lote.id_lote) && (
              <TableCell colSpan={7} className="bg-gray-100 p-4 w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead colSpan={6}>Data Ocorrência</TableHead>
                      <TableHead colSpan={1}>Imagem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lote.nrOcorrencias?.map((ocorrencia) => (
                      <React.Fragment key={ocorrencia.id_ocorrencia}>
                        <TableRow>
                          <TableCell colSpan={6}>
                            Data:{" "}
                            {ocorrencia.dt_ocorrencia?.toLocaleDateString()}
                          </TableCell>
                          <TableCell colSpan={1}>
                            <img src={ocorrencia.image} alt="" width={100} height={100} />
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableCell>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}
