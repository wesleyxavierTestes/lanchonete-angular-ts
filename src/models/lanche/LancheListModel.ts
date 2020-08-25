import { IngredienteModel } from './IngredienteModel';

export class LancheListModel {

  id: number;
  nome: string;
  valor: string;
  valorTotal: string;
  ingredientesLanche: IngredienteModel[];
}
