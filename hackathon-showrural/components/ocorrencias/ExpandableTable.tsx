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
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const data: any[] = [
  {
    nr_ocorrencia: 17,
    id_lote: 14,
    nr_ocorrencias: 4,
    dt_ocorrencia: new Date(),
  },
  {
    nr_ocorrencia: 18,
    id_lote: 14,
    nr_ocorrencias: 4,
    dt_ocorrencia: new Date(),

  },
  {
    nr_ocorrencia: 19,
    id_lote: 14,
    nr_ocorrencias: 4,
    dt_ocorrencia: new Date(),

  }
];

export default function ExpandableTable() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5">
        <Table className="w-full text-center border border-gray-300">
          <TableHeader className="text-white">
            <TableRow>
              <TableHead className="text-center">Nº Ocorrência</TableHead>
              <TableHead className="text-center">Nº Lote</TableHead>
              <TableHead className="text-center">Data e Hora</TableHead>
              <TableHead className="text-center">Visualização</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((ocorrencia) => (
              <TableRow key={ocorrencia.nr_ocorrencia}>
                <TableCell className="text-center">{ocorrencia.nr_ocorrencia}</TableCell>
                <TableCell className="text-center">{ocorrencia.id_lote}</TableCell>
                <TableCell className="text-center">
                  {ocorrencia.dt_ocorrencia
                    ? `${ocorrencia.dt_ocorrencia.toLocaleDateString()} ${ocorrencia.dt_ocorrencia.toLocaleTimeString()}`
                    : "Sem data"}
                </TableCell>
                <TableCell className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="cursor-pointer hover:bg-green-200"
                        size="sm"
                        
                      >
                        <Eye size={20} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="flex justify-center items-center">
                      <DialogHeader>
                        <DialogTitle>Imagem da Ocorrência</DialogTitle>
                      </DialogHeader>
                      {selectedImage && (
                        <img
                          src={selectedImage}
                          alt="Imagem da Ocorrência"
                          className="max-h-[50vh] object-contain mx-auto"
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
