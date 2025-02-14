"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { FormControl, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const responsaveis: Responsavel[] = [
  {
    id: "1",
    nome: "João",
  },
  {
    id: "2",
    nome: "Giovani",
  },
];

export default function Filter() {
  const [filterResponsavel, setFilterResponsavel] = useState<String>("");
  const [filterSituacao, setFilterSituacao] = useState<boolean>(true);

  return (
    <div className="grid grid-cols-3 gap-8 items-end mb-8">
      <FormLabel>Nome do Responsável</FormLabel>
      <Select onValueChange={(e) => setFilterResponsavel(e)} defaultValue="">
        <FormControl>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {responsaveis.map((responsavel: Responsavel) => (
            <SelectItem key={responsavel.id} value={responsavel.id}>
              {responsavel.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <FormLabel>Situação Lote</FormLabel>
      <Select
        onValueChange={() => setFilterSituacao(filterSituacao)}
        defaultValue={filterSituacao ? "ativo" : "inativo"}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="ativo">Ativo</SelectItem>
          <SelectItem value="inativo">Inativo</SelectItem>
        </SelectContent>
      </Select>
      <Button
      // TODO: onClick={}
      >
        Filtrar
      </Button>
    </div>
  );
}
