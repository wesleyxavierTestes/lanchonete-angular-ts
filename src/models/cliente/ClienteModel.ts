import { EntityBase } from './../BaseModel';
import { EnderecoModel } from './EnderecoModel';

export class ClienteModel extends EntityBase  {
    nome: string;
    cpf: string;
    cnpj?: any;
    email?: any;
    rg?: any;
    tipoPessoa: string;
    tipoCliente: string;
    endereco: EnderecoModel;
}

