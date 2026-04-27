import { useQuery } from '@tanstack/react-query';
import { dailyInsightsApi } from '@/features/daily-insights/api';

export function useDailyInsight(profileId: string | null | undefined) {
  return useQuery({
    queryKey: ['daily-insight', profileId],
    queryFn: () => dailyInsightsApi.getToday(profileId!),
    enabled: Boolean(profileId),
  });
}
