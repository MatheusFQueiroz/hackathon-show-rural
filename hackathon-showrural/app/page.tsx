"use client"
import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import Filter from "@/components/lotes/Filter";
import ExpandableTable from "@/components/lotes/ExpandableTable";
import AddLoteForm from "@/components/lotes/AddLoteForm";

const chartData = [
  { name: "Aviários com lote ativo: ", value: 500, fill: "hsl(var(--primary))" },
  { name: "Aviários sem lote ativo:", value: 200, fill: "" },
]

const chartConfig = {
  activeFarms: {
    label: "Aviários com lote ativo: ",
    color: "hsl(var(--primary))",
  },
  inactiveFarms: {
    label: "Aviários sem lote ativo: ",
    color: "",
  },
} satisfies ChartConfig

const chartData1 = [
  { mes: "Jul", salmonella: 45 },
  { mes: "Ago", salmonella: 37 },
  { mes: "Set", salmonella: 52 },
  { mes: "Out", salmonella: 59 },
  { mes: "Nov", salmonella: 48 },
  { mes: "Dez", salmonella: 60 }
]

const chartConfig1 = {
  salmonella: {
    label: "% Lotes com Salmonela: ",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function Home() {
  const totalFarms = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <div className="w-full flex flex-col justify-center pt-4 ">
      <div className="flex justify-center gap-10 w-full px-16">
        <Card className="flex flex-col justify-center w-1/2">
          <CardHeader className="items-center pb-0">
            <CardTitle>Distribuição de Aviários</CardTitle>
            <CardDescription>Julho 2024 - Janeiro 2025</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalFarms.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Total de Aviários
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="flex flex-col w-1/2">
          <CardHeader>
            <CardTitle>Porcentagem de Lotes com Salmonela</CardTitle>
            <CardDescription>Janeiro - Dezembro 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig1}>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData1}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip content={<ChartTooltipContent indicator="line" />} />
                  <Line
                    dataKey="salmonella"
                    type="monotone"
                    stroke="var(--color-salmonella)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-salmonella)" }}
                    activeDot={{ r: 6 }}
                  >
                    <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="w-full flex justify-center pt-2">
        <div className="w-4/5 pb-8">
          <CardTitle className="pt-6 pb-2 flex justify-center">Últimos lotes</CardTitle>      
          <ExpandableTable />
        </div>
      </div>
    </div>
  )
}