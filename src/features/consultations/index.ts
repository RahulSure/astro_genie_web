/** Directory + booking UI for verified human astrologers. */
export type AstrologerId = string;

export type AstrologerListing = {
  id: AstrologerId;
  name: string;
  languages: string[];
  pricePerMinute: number;
  rating: number;
};
