"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Aviario = {
  id: string
  nomeResponsavel: string
  endereco: string
}

export const columns: ColumnDef<Aviario>[] = [
  {
    accessorKey: "id",
    header: "Nº Aviário",
  },
  {
    accessorKey: "nomeResponsavel",
    header: "Nome Responsável",
  },
  {
    accessorKey: "endereco",
    header: "Endereço",
  },
]
