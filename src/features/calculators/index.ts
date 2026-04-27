/** Widget-style calculators: Rahu Kaal, Ascendant, Tithi, Panchang. */
export type CalculatorId =
  | 'rahu-kaal'
  | 'ascendant'
  | 'tithi'
  | 'panchang';

export type CalculatorMeta = {
  id: CalculatorId;
  name: string;
  description: string;
};
