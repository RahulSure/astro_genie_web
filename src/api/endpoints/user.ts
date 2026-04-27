import { api } from '@/api/client';
import type { ID } from '@/api/types';

export type User = {
  id: ID;
  name: string;
  email: string;
  primaryProfileId: ID | null;
};

export const userEndpoints = {
  me: () => api.get<User>('/v1/users/me'),
};
