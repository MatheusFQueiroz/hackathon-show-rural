"use client"

import { Aviario } from "@/app/uteis/types"
import { ColumnDef } from "@tanstack/react-table"


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
  }
]
