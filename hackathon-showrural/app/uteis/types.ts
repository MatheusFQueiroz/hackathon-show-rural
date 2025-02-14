export interface Produtor {
    id_produtor?: any;
    nome?: any;
    telefone?: any;
}

export interface Aviario {
    id_aviario?: number | any;
    is_ativo?: boolean;
    is_ativoString?: boolean;
    id_produtor?: number | any;
    ds_produtor?: string;
    nome_responsavel?: string;
    endereco?: string;
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
    cd_ocorrencia?: any;
    dt_ocorrencia?: any;
    image?: string | any; // Assuming image is a URL or base64 string
}

export interface CheckList {
    id_checkList?: any;
    nr_lote?: any;
}
export interface PerguntaCheckList {
    id_checklist?: any;
    id_perguntaCheckList?: any;
    descricao_pergunta?: any;
}

export interface RespostaCheckList {
    id_respostaCheckList?: any;
    id_perguntaCheckList?: any;
    resposta?: any;
}
