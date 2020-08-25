import { EnderecoModel } from './EnderecoModel';

export class ClienteModel  {
    id: number;
    ativo: boolean;
    nome: string;
    cpf: string;
    cnjp?: any;
    email?: any;
    rg?: any;
    tipoPessoa: string;
    tipoCliente: string;
    endereco: EnderecoModel;
}

