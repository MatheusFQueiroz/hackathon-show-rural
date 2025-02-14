export interface Produtor {
    id_produtor?: number;
    nome?: string;
    telefone?: string;
}

export interface Aviario {
    id_aviario: number;
    is_ativo: boolean;
    id_produtor: number;
    ds_produtor: string;
    nome_responsavel: string;
    endereco: string;
}

export interface Lote {
    id_lote?: number;
    id_aviario?: number;
    dt_alojamento?: Date;
    dt_saida_lote?: Date;
    qt_aves?: number;
    qt_aves_mortas?: number;
    linhagem?: string;
    peso_ave_entrada?: number;
    peso_ave_saida?: number;
    isSalmonelaValid?: boolean;
    nrOcorrencias?: Ocorrencia[];
}

export interface Ocorrencia {
    id_ocorrencia?: number;
    dt_ocorrencia?: Date;
    image?: string | undefined; // Assuming image is a URL or base64 string
}

export interface TemplateCheckList {
    id_templateCheckList?: number;
    descricao_checkList?: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    p6?: string;
    p7?: string;
    p8?: string;
    p9?: string;
    p10?: string;
    p11?: string;
}

export interface CheckList {
    id_checkList?: number;
    nr_lote?: number;
    dt?: Date;
    r1?: boolean;
    r2?: boolean;
    r3?: boolean;
    r4?: boolean;
    r5?: boolean;
    r6?: boolean;
    r7?: boolean;
    r8?: boolean;
    r9?: boolean;
    r10?: boolean;
    r11?: boolean;
}