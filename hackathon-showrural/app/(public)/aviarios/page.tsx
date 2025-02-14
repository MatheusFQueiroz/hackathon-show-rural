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
  const [filteredAviarios, setFilteredAviarios] = useState<Aviario[]>([]);

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
            is_ativoString: aviario.is_ativo ? "Ativo" : "Inativo", // Formata Ativo/Inativo
          }));

          setAviarios(aviariosAtualizados);
          setFilteredAviarios(aviariosAtualizados);
        } else {
          console.error("Formato inesperado da resposta:", retorno);
        }
      } catch (error) {
        console.error("Erro ao buscar aviários:", error);
      }
    }

    fetchAviarios();
  }, []);

  // Filtragem com base nos filtros do usuário
  function handleFilter(filters: { situacao: boolean; produtor: string }) {
    let resultado = aviarios;

    if (filters.situacao) {
      resultado = resultado.filter((aviario) => aviario.is_ativoString === filters.situacao);
    }

    if (filters.produtor.trim() !== "") {
      resultado = resultado.filter((aviario) =>
        aviario.ds_produtor?.toLowerCase().includes(filters.produtor.toLowerCase())
      );
    }

    setFilteredAviarios(resultado);
  }

  return (
    <div>
      <div className="w-full flex justify-center pt-2">
        <div className="w-4/5">
          <Filter onFilter={handleFilter} />
          <DataTable columns={columns} data={filteredAviarios} />
          <AddAviarioForm />
        </div>
      </div>
    </div>
  );
}
