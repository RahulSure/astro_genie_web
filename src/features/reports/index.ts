/**
 * "Brihat-style" interactive life reports. Component implementations land
 * alongside paywall wiring; this file is the feature's public surface.
 */
export type ReportId = string;

export type ReportSummary = {
  id: ReportId;
  title: string;
  locked: boolean;
};
