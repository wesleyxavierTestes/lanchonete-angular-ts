import { EntityBase } from './../BaseModel';
export class EnderecoModel extends EntityBase {

    cep: string;
    numero: string;
    logradouro: string;
    complemento?: any;
    bairro: string;
    localidade: string;
    uf: string;
    unidade?: any;
    ibge?: any;
    gia?: any;
}

