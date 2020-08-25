import { CardapioItemModel } from './CardapioItemDto';
export class CardapioListModel {

    id: number;
    ativo: boolean;
    nome: string;
    itensDisponiveis: CardapioItemModel[];
  }
  