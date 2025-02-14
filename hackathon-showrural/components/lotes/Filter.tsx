"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const responsaveis: Responsavel[] = [
  { id: "1", nome: "João" },
  { id: "2", nome: "Giovani" },
];

export default function Filter() {
  const form = useForm({
    defaultValues: {
      responsavel: "",
      situacao: "ativo",
    },
  });

  function onSubmit(data: any) {
    console.log("Filtros selecionados:", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-8 items-end mb-8">
        <FormField
          control={form.control}
          name="responsavel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Responsável</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um responsável" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {responsaveis.map((responsavel) => (
                    <SelectItem key={responsavel.id} value={responsavel.id}>
                      {responsavel.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="situacao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Situação Lote</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a situação" />
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

        <Button type="submit">Filtrar</Button>
      </form>
    </Form>
  );
}
