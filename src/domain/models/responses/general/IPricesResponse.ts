export interface IPricesResponse {
  time?: number;
  USD?: number;
  EUR?: number;
  GBP?: number;
  CAD?: number;
  CHF?: number;
  AUD?: number;
  JPY?: number;
  [key: string]: number | undefined;
}
