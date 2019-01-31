import {EnumValues} from 'enum-values';

export interface TablePagination {
  first: number;
  last: number;
}

export enum Order {
  default = 0,
  sort = 1,
  unsort = -1
}

export class TableHead {

  public name: string;
  public field: string;
  public isSort: boolean;
  public _order: Order;

  constructor(
    name: string = null,
    field: string = null,
    isSort: boolean = false,
    order: number = Order.default
  ) {
    this.name = name;
    this.field = field;
    this.isSort = isSort;
    this.order = order;
  }

  public get order(): Order | number {
    return this._order;
  }

  public set order(order: number) {
    const orderName = EnumValues.getNameFromValue(Order, order);
    this._order = orderName ? Order[orderName] : Order.default;
  }

}
