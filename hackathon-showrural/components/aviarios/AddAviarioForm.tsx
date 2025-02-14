"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Aviario } from "@/app/uteis/types";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import crudSanity from "../../app/sanityClient";

export default function AddAviarioForm() {
  const [produtores, setProdutores] = useState<{ id_produtor: number; nome: string }[]>([]);
  const [produtorSelecionado, setProdutorSelecionado] = useState<string>("");

  useEffect(() => {
    async function fetchProdutores() {
      try {
        const aviarios: Aviario[] = await crudSanity.select("aviario", ["id_produtor"], "", "id_produtor");
        const todosProdutores = await crudSanity.select("produtor", ["id_produtor", "nome"], "", "id_produtor");

        // Criar uma lista única de produtores a partir dos aviários
        const idsProdutoresUsados = new Set(aviarios.map((a) => a.id_produtor));
        const produtoresUnicos = todosProdutores.filter((p) => idsProdutoresUsados.has(p.id_produtor));

        setProdutores(produtoresUnicos);
      } catch (error) {
        console.error("Erro ao buscar produtores:", error);
      }
    }

    fetchProdutores();
  }, []);

  const FormSchema: ZodType<Omit<Aviario, "id_aviario">> = z.object({
    id_produtor: z.number().min(1, "Selecione um produtor"),
    ds_produtor: z.string().optional(),
    nome_responsavel: z.string().nonempty("Informe o nome do responsável"),
    endereco: z.string().nonempty("Informe o endereço"),
    is_ativo: z.boolean(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id_produtor: undefined,
      ds_produtor: "",
      nome_responsavel: "",
      endereco: "",
      is_ativo: true, // Default para ativo
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await crudSanity.insert("aviario", {
        id_aviario: await crudSanity.getHightest("aviario", "id_aviario") + 1,
        is_ativo: data.is_ativo,
        id_produtor: data.id_produtor,
        nome_responsavel: data.nome_responsavel,
        endereco: data.endereco
      });

      console.log("Novo Aviário Adicionado:", data);

      // Recarrega a página após salvar
      window.location.reload();
      
    } catch (error) {
      console.error("Erro ao adicionar aviário:", error);
    }
  }

  return (
    <div className="flex justify-end pt-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Adicionar Aviário</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[620px]">
          <DialogHeader>
            <DialogTitle>Adicionar Aviário</DialogTitle>
            <DialogDescription>Insira as informações do aviário</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-8 items-end mb-8">
              
              {/* Produtor */}
              <FormField
                control={form.control}
                name="id_produtor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produtor</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(Number(value));
                        const produtorNome = produtores.find((p) => p.id_produtor === Number(value))?.nome || "";
                        setProdutorSelecionado(produtorNome);
                      }}
                      value={field.value ? String(field.value) : ""}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um produtor" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {produtores.map((produtor) => (
                          <SelectItem key={produtor.id_produtor} value={String(produtor.id_produtor)}>
                            {produtor.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Nome do Responsável */}
              <FormField
                control={form.control}
                name="nome_responsavel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Responsável</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite o nome do responsável" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Endereço */}
              <FormField
                control={form.control}
                name="endereco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite o endereço" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Situação do Aviário */}
              <FormField
                control={form.control}
                name="is_ativo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Situação</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value === "ativo")}
                      value={field.value ? "ativo" : "inativo"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo</SelectItem>
                        <SelectItem value="inativo">Inativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
