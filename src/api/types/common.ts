export type ID = string;

export type Paginated<T> = {
  items: T[];
  nextCursor: string | null;
  total?: number;
};
