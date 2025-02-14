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
import { Aviario, Lote } from "@/app/uteis/types";
import { Input } from "../ui/input";

const responsaveis: Responsavel[] = [
  {
    id: "1",
    nome: "João",
  },
  {
    id: "2",
    nome: "Giovani",
  },
];

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

export default function AddLoteForm() {
  const FormSchema: ZodType<Lote> = z.object({
    id_aviario: z.number(),
    dt_alojamento: z.date(),
    qt_aves: z.string(),
    linhagem: z.string(),
    peso_ave_entrada: z.number(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id_aviario: null,
      dt_alojamento: new Date(),
      qt_aves: undefined,
      linhagem: "",
      peso_ave_entrada: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="flex justify-end pt-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Adicionar Lote</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[620px]">
          <DialogHeader>
            <DialogTitle>Adicionar Lote</DialogTitle>
            <DialogDescription>Insira as informações do Lote</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-8 items-end mb-8"
            >
              <FormField
                control={form.control}
                name="id_aviario"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aviário</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {aviarios.map((aviario: Aviario) => (
                          <SelectItem
                            key={aviario.id_aviario}
                            value={aviario.id_aviario}
                          >
                            {aviario.id_aviario}
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
                  <FormItem>
                    <FormLabel>Data Alojamento</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qt_aves"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qtd. Aves</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linhagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>linhagem</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
