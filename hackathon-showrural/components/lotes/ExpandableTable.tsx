"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import crudSanity from "../../app/sanityClient";
import { Lote, Ocorrencia } from "@/app/uteis/types";
import { set } from "date-fns";

export default function ExpandableTable() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [lotes, setLotes] = useState<Lote[]>([]);
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  useEffect(() => {
    async function fetchLotes() {
      try {
        const retorno = await crudSanity.select("lote", [], "", "id_lote");

    
        retorno.map(async (lote: Lote) => {
          const retornoOcorrencia = await crudSanity.select("ocorrencia", [], "", `id_aviario == ${lote.id_aviario}`);
          console.log("QUERY OCORRENCIAS", retornoOcorrencia)
          setOcorrencias(retornoOcorrencia);

        })
        console.log("Dados do Sanity:", retorno);
        setLotes(retorno);
      } catch (error) {
        console.error("Erro ao buscar lotes:", error);
      }
    }

    fetchLotes();
  }, []);

  const handleRowToggle = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <Table className="w-full border border-gray-300">
          <TableHeader className="bg-gray-200 text-center">
            <TableRow>
              <TableHead className="text-center">Nº Lote</TableHead>
              <TableHead className="text-center">Nº Aviário</TableHead>
              <TableHead className="text-center">Data Alojamento</TableHead>
              <TableHead className="text-center">Qtd. Aves</TableHead>
              <TableHead className="text-center">Qtd. Aves Mortas</TableHead>
              <TableHead className="text-center">Linhagem</TableHead>
              <TableHead className="text-center">Expandir</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lotes.map((lote) => (
              <React.Fragment key={lote.id_lote}>
                {/* Linha principal */}
                <TableRow>
                  <TableCell className="text-center">{lote.id_lote}</TableCell>
                  <TableCell className="text-center">{lote.id_aviario}</TableCell>
                  <TableCell className="text-center">
                    {lote.dt_alojamento ? new Date(lote.dt_alojamento).toLocaleDateString() : "Sem data"}
                  </TableCell>
                  <TableCell className="text-center">{lote.qt_aves}</TableCell>
                  <TableCell className="text-center">{lote.qt_aves_mortas}</TableCell>
                  <TableCell className="text-center">{lote.linhagem}</TableCell>
                  <TableCell className="text-center">
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

                {/* Linha expandida */}
                {expandedRows.includes(lote.id_lote) && ocorrencias?.length > 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="p-4 bg-gray-100">
                      <Table className="w-full border border-gray-300">
                        <TableHeader className="bg-gray-200">
                          <TableRow>
                            <TableHead className="text-center">Data Ocorrência</TableHead>
                            <TableHead className="text-center">Imagem</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {ocorrencias.map((ocorrencia) => (
                            <TableRow key={ocorrencia.cd_ocorrencia}>
                              <TableCell className="text-center">
                                {ocorrencia.dt_ocorrencia
                                  ? new Date(ocorrencia.dt_ocorrencia).toLocaleDateString()
                                  : "Sem data"}
                              </TableCell>
                              <TableCell className="text-center">
                                {ocorrencia.image ? (
                                  <img
                                    src={ocorrencia.image}
                                    alt="Ocorrência"
                                    className="w-20 h-20 object-cover mx-auto"
                                  />
                                ) : (
                                  "Sem imagem"
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
