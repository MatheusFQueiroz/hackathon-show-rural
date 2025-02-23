"use client"

import { Aviario } from "@/app/uteis/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Aviario>[] = [
  {
    accessorKey: "id_aviario",
    header: "Nº Aviário",
  },
  {
    accessorKey: "ds_produtor",
    header: "Produtor",
  },
  {
    accessorKey: "nome_responsavel",
    header: "Nome Responsável",
  },
  {
    accessorKey: "endereco",
    header: "Endereço",
  },
  {
    accessorKey: "is_ativoString",
    header: "Ativo",
  }
]
