# hackathon-show-rural

async function chamar() {
await crudSanity.insert("pessoaTesteJPF", {
cod: await crudSanity.getHightest("pessoaTesteJPF", "cod")+1,
name: "giovani o brabooooooooooo",
email: "giovani@gmail.com",
birthdate: "2024-02-13"
});

    console.log(await crudSanity.select("pessoaTesteJPF", ["cod", "name", "email", "birthdate"], "", "cod"));

}

console.log(await crudSanity.select("aviario", [], "", "cod"));

# PRODUTOR

'use client'

import { Produtor } from "./uteis/types";
import crudSanity from "./sanityClient";

const novoProdutor: Produtor = {
nome: "Giovani",
telefone: "44998428989"
};

async function criarProdutor(data: Produtor) {

    await crudSanity.insert("produtor", {
      id_produtor: await crudSanity.getHightest("produtor", "id_produtor") + 1,
      nome: data.nome,
      telefone: data.telefone
      });

      try {
        const retorno: Produtor[]= await crudSanity.select("produtor", [], "", "id_produtor");
        retorno.map((produtor) => {
          console.log("Produtor:", produtor);
        })
        //console.log("Dados recebidos:", JSON.stringify(retorno, null, 2));
      } catch (error) {
        console.error("Erro ao buscar produtores:", error);
      }

}
