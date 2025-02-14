"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FilterProps {
  onFilter: (filters: { situacao?: boolean; produtor: string }) => void;
}

export default function Filter({ onFilter }: FilterProps) {
  const form = useForm({
    defaultValues: {
      situacao: "ativo",
      produtor: "",
    },
  });

  function onSubmit(data: any) {
    console.log("Filtros selecionados:", data);
    onFilter(data);
  }

  function onReset() {
    form.reset();
    onFilter({ produtor: "" });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-4 mb-4"
      >
        

        {/* Produtor (Input de Texto) */}
        <FormField
          control={form.control}
          name="produtor"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Produtor</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Digite o nome do produtor"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Situação do Lote */}
        <FormField
          control={form.control}
          name="situacao"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Situação do Aviário</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
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

        {/* Botão Filtrar */}
        <Button type="submit" className="bg-orange-500 px-6 h-[42px] mt-6">
          Filtrar
        </Button>

        {/* Botão para limpar filtros */}
        <Button
          type="button"
          onClick={onReset}
          className="bg-gray-400 px-6 h-[42px] mt-6"
        >
          Limpar Filtros
        </Button>
      </form>
    </Form>
  );
}
