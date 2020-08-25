import { ProdutoModel } from '../produto/ProdutoModel';
export class EstoqueModel {

  id: number;
  dataCadastro: string;
  ativo: boolean;
  produto: ProdutoModel;
  quantidade: number;
  valorAnterior?: any;
}
