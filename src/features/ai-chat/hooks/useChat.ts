import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { chatEndpoints, type ChatMessage } from '@/api/endpoints/chat';

const chatKey = (profileId: string) => ['chat', profileId] as const;

export function useChatMessages(profileId: string | null | undefined) {
  return useQuery({
    queryKey: chatKey(profileId ?? ''),
    queryFn: () => chatEndpoints.list(profileId!),
    enabled: Boolean(profileId),
  });
}

export function useSendMessage(profileId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (content: string) =>
      chatEndpoints.send({ profileId, content }),
    onSuccess: (message) => {
      qc.setQueryData<ChatMessage[]>(chatKey(profileId), (prev = []) => [
        ...prev,
        message,
      ]);
    },
  });
}
