import { CardapioItemModel } from './CardapioItemDto';
export class CardapioModel  {

    id: number;
  ativo: boolean;
  nome: string;
  itensDisponiveis: CardapioItemModel[];
}
