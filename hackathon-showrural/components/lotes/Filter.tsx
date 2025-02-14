"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Aviario } from "@/app/uteis/types";
import { Input } from "../ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const aviarios: Aviario[] = [
  {
    id_aviario: 1,
    id_produtor: 1,
    ds_produtor: "João",
    endereco: "Rua 1",
    nome_responsavel: "Giovani Peão",
    is_ativo: true,
  },
  {
    id_aviario: 1,
    id_produtor: 1,
    ds_produtor: "João",
    endereco: "Rua 1",
    nome_responsavel: "Giovani Peão",
    is_ativo: true,
  },
  {
    id_aviario: 1,
    id_produtor: 1,
    ds_produtor: "João",
    endereco: "Rua 1",
    nome_responsavel: "Giovani Peão",
    is_ativo: true,
  },
];

export default function Filter() {
  const form = useForm({
    defaultValues: {
      id_lote: undefined,
      id_aviario: undefined,
      dt_alojamento: undefined,
      qt_aves: undefined,
    },
  });

  function onSubmit(data: any) {
    console.log("Filtros selecionados:", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-5 gap-8 items-end mb-8"
      >
        <FormField
          control={form.control}
          name="id_lote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nº Lote</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="id_aviario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aviário</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Aviário - Responsável" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {aviarios.map((aviario) => (
                    <SelectItem
                      key={aviario.id_aviario}
                      value={aviario.id_aviario}
                    >
                      {aviario.id_aviario} - {aviario.nome_responsavel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dt_alojamento"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data Alojamento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? format(field.value, "PPP") : <span>DD/MM/YYYY</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  {/* <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  /> */}
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qt_aves"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade de Aves</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Filtrar</Button>
      </form>
    </Form>
  );
}
