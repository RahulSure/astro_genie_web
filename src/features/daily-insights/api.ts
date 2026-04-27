import { api } from '@/api/client';
import type { ID } from '@/api/types';

export type DailyInsight = {
  date: string;
  moonSign: string;
  mood: string;
  summary: string;
  lucky: { color: string; number: number };
};

export const dailyInsightsApi = {
  getToday: (profileId: ID) =>
    api.get<DailyInsight>(`/v1/insights/${profileId}/today`),
};
