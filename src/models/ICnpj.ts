
export interface ICnpj {
    data_situacao: string;
    motivo_situacao: string;
    tipo: string;
    nome: string;
    situacao: string;
    bairro: string;
    logradouro: string;
    numero: string;
    cep: string;
    municipio: string;
    porte: string;
    abertura: string;
    natureza_juridica: string;
    uf: string;
    cnpj: string;
    ultima_atualizacao: string;
    status: string;
    fantasia: string;
    complemento: string;
    email: string;
    telefone: string;
    efr: string;
    situacao_especial: string;
    data_situacao_especial: string;
    atividade_principal: Atividadeprincipal[];
    atividades_secundarias: Atividadeprincipal[];
    capital_social: string;
    qsa: any[];
    extra: Extra;
    billing: Billing;
}

export interface Billing {
    free: boolean;
    database: boolean;
}

export interface Extra {
}

export interface Atividadeprincipal {
    code: string;
    text: string;
}
