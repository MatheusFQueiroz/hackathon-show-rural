// "use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import Filter from "@/components/lotes/Filter";
import AddAviarioForm from "@/components/aviarios/AddAviarioForm";
import ExpandableTable from "@/components/lotes/ExpandableTable";

const aviarios: Aviario[] = [
  {
    id: "1",
    nomeResponsavel: "João",
    endereco: "Rua 1",
    isAtivo: true,
  },
  {
    id: "2",
    nomeResponsavel: "Giovani",
    endereco: "Rua 3",
    isAtivo: false,
  },
];

export default function Aviarios() {
  return (
    <div>
      <div className="w-full flex justify-center pt-2">
        <div className="w-4/5">
          <Filter  />
          <ExpandableTable />
          <AddAviarioForm />
        </div>
      </div>
    </div>
  );
}
