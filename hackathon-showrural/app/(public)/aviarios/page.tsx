// "use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import Filter from "@/components/aviarios/Filter";
import AddAviarioForm from "@/components/aviarios/AddAviarioForm";

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
      <div className="w-full flex justify-center pt-16">
        <div className="w-4/5">
          <Filter  />
          <DataTable columns={columns} data={aviarios} />
          <AddAviarioForm />
        </div>
      </div>
    </div>
  );
}
