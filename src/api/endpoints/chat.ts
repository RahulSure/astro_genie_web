import { api } from '@/api/client';
import type { ID } from '@/api/types';

export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: ID;
  role: ChatRole;
  content: string;
  createdAt: string;
  /** AI messages must carry a disclaimer flag for transparency UX. */
  isAiGenerated?: boolean;
};

export type SendMessageInput = {
  profileId: ID;
  content: string;
};

export const chatEndpoints = {
  list: (profileId: ID) =>
    api.get<ChatMessage[]>(`/v1/chat/${profileId}/messages`),
  send: (input: SendMessageInput) =>
    api.post<ChatMessage>(`/v1/chat/${input.profileId}/messages`, {
      content: input.content,
    }),
};
