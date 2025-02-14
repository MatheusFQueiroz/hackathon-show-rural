"use client";
import ExpandableTable from "@/components/checklist/ExpandableTableCheckList";
import crudSanity from "../../sanityClient";

export default function Checklist() {
  
  async function chamar(){
    const retorno = await crudSanity.select("templateCheckList", [], "", "descricao_checkList");
    console.log(retorno)
  }

  return (
    <div>
      <div className="w-full  pt-2 ">
        <div className="w-4/5 flex justify-centera items-center flex-col gap-12 justify-center">
          <button onClick={chamar} className="text-3xl">CheckList</button>
          <ExpandableTable />
        </div>
      </div>
    </div>
  );
}
