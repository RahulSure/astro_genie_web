import { useQuery } from '@tanstack/react-query';
import { chartEndpoints } from '@/api/endpoints/chart';

export function useKundli(profileId: string | null | undefined) {
  return useQuery({
    queryKey: ['kundli', profileId],
    queryFn: () => chartEndpoints.getForProfile(profileId!),
    enabled: Boolean(profileId),
  });
}
