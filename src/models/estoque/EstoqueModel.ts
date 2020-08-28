import { EntityBase } from './../BaseModel';
import { ProdutoModel } from '../produto/ProdutoModel';
export class EstoqueModel extends EntityBase {

  produto: ProdutoModel;
  quantidade: number;
  valorAnterior?: any;
}
