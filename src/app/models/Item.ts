export class Item {
  constructor(
    public readonly id: string = null,
    public name: string = null
  ) { }
}

export class Label extends Item {
  constructor(
    public readonly id: string = null,
    public name: string = null
  ) {
    super(id, name);
  }
}

export interface ResponseItem {
  id: string;
  name: string;
}
