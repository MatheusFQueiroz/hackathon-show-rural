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

export default function AddAviarioForm() {
  const FormSchema: ZodType<Aviario> = z.object({
    id_aviario: z.any(),
    id_produtor: z.any(),
    nome_responsavel: z.string(),
    endereco: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id_aviario: undefined,
      id_produtor: undefined,
      nome_responsavel: "",
      endereco: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
            <DialogDescription>
              Insira as informações do aviário
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-8 items-end mb-8"
            >
              <FormField
                control={form.control}
                name="id_produtor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produtor</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {responsaveis.map((cliente: Responsavel) => (
                          <SelectItem key={cliente.id} value={cliente.id}>
                            {cliente.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nome_responsavel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Responsável</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endereco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
