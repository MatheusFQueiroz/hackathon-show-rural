"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import Filter from "@/components/aviarios/Filter";
import AddAviarioForm from "@/components/aviarios/AddAviarioForm";
import { useEffect, useState } from "react";
import { Aviario, Produtor } from "@/app/uteis/types";
import crudSanity from "../../sanityClient";

export default function Aviarios() {
  const [aviarios, setAviarios] = useState<Aviario[]>([]);

  useEffect(() => {
    async function fetchAviarios() {
      try {
        const retorno: Aviario[] = await crudSanity.select("aviario", [], "", "id_aviario");
        let retornoNomeProdutor: Produtor[] = await crudSanity.select("produtor", ["nome", "id_produtor"], "", "id_produtor");

        retornoNomeProdutor = retornoNomeProdutor.filter((item) => item.id_produtor !== undefined);

        if (Array.isArray(retorno)) {
          const aviariosAtualizados = retorno.map((aviario) => ({
            ...aviario,
            ds_produtor: retornoNomeProdutor.find((produtor) => produtor.id_produtor === aviario.id_produtor)?.nome || "Desconhecido",
          }));

          setAviarios(aviariosAtualizados);
          console.log("AVIÁRIOS CARREGADOS:", aviariosAtualizados);
        } else {
          console.error("Formato inesperado da resposta:", retorno);
        }
      } catch (error) {
        console.error("Erro ao buscar aviários:", error);
      }
    }

    fetchAviarios();
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center pt-2">
        <div className="w-4/5">
          <Filter />
          <DataTable columns={columns} data={aviarios} />
          <AddAviarioForm />
        </div>
      </div>
    </div>
  );
}
