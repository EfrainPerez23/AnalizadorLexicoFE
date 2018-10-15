export interface AnalizadorLexico {
  line: number;
  type: string;
  value: string;
  position: number;
  ok: boolean;
}
