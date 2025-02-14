export interface Produtor {
    id_produtor?: any;
    nome?: any;
    telefone?: any;
}

export interface Aviario {
    id_aviario: number | any;
    is_ativo: boolean;
    id_produtor: number | any;
    ds_produtor: string;
    nome_responsavel: string;
    endereco: string;
}

export interface Lote {
    id_lote?: any;
    id_aviario?: any;
    dt_alojamento?: any;
    dt_saida_lote?: any;
    qt_aves?: any;
    qt_aves_mortas?: any;
    linhagem?: any;
    peso_ave_entrada?: any;
    peso_ave_saida?: any;
    isSalmonelaValid?: any;
    nrOcorrencias?: any[];
}

export interface Ocorrencia {
    id_ocorrencia?: any;
    dt_ocorrencia?: any;
    image?: any | undefined; // Assuming image is a URL or base64 string
}

export interface TemplateCheckList {
    id_templateCheckList?: any;
    descricao_checkList?: any;
    p1?: any;
    p2?: any;
    p3?: any;
    p4?: any;
    p5?: any;
    p6?: any;
    p7?: any;
    p8?: any;
    p9?: any;
    p10?: any;
    p11?: any;
}

export interface CheckList {
    id_checkList?: any;
    nr_lote?: any;
    dt?: any;
    r1?: any;
    r2?: any;
    r3?: any;
    r4?: any;
    r5?: any;
    r6?: any;
    r7?: any;
    r8?: any;
    r9?: any;
    r10?: any;
    r11?: any;
}