import { api } from '@/api/client';
import type { ID } from '@/api/types';

export type BirthDetails = {
  date: string;        // ISO yyyy-mm-dd
  time: string;        // HH:mm (24h)
  timezone: string;    // IANA zone
  latitude: number;
  longitude: number;
  placeLabel: string;
};

export type PlanetPlacement = {
  planet:
    | 'Sun'
    | 'Moon'
    | 'Mars'
    | 'Mercury'
    | 'Jupiter'
    | 'Venus'
    | 'Saturn'
    | 'Rahu'
    | 'Ketu';
  sign: string;
  house: number;
  degree: number;
};

export type KundliChart = {
  profileId: ID;
  ayanamsa: 'Lahiri' | 'Raman' | 'KP';
  ascendant: PlanetPlacement;
  placements: PlanetPlacement[];
  renderedAt: string;
};

export const chartEndpoints = {
  getForProfile: (profileId: ID) =>
    api.get<KundliChart>(`/v1/charts/profiles/${profileId}`),
  computeForBirth: (birth: BirthDetails) =>
    api.post<KundliChart>('/v1/charts/compute', birth),
};
