import { EntityBase } from './../BaseModel';
import { CardapioItemModel } from './CardapioItemDto';
export class CardapioModel extends EntityBase  {
  nome: string;
  itensDisponiveis: CardapioItemModel[];
}
