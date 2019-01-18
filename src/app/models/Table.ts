export interface TablePagination {
  first: number;
  last: number;
}

export class TableHead {

  constructor(
    public name: string = null,
    public isSort: boolean = false
  ) { }

}
