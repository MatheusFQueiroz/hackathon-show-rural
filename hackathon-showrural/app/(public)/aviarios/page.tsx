import { Aviario, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Aviario[]> {
  return [
    {
      id: "1",
      nomeResponsavel: "João",
      endereco: "Rua 1"
    },
    {
      id: "2",
      nomeResponsavel: "Giovani",
      endereco: "Rua 3"
    },
    // ...
  ];
}

export default async function Aviarios() {
  const data = await getData();
  return (
    <div>
      <h1>Aviários</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
