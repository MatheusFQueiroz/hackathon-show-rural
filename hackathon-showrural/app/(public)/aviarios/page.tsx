import { Aviario, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Aviario[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
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
