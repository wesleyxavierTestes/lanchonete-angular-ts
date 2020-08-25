import { EnumTipoPessoa } from "../../enuns/cliente/EnumTipoPessoa";
import { EnumTipoCliente } from "../../enuns/cliente/EnumTipoCliente";

export class ClienteListModel  {

    id: number;
    ativo: boolean;
    nome: string;
    tipoPessoa: EnumTipoPessoa;
    tipoCliente: EnumTipoCliente;
    cpfCnpj: string;
}

