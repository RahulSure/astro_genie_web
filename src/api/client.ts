import { env } from '@/config/env';

/**
 * Thin fetch wrapper. Features call typed functions in `@/api/endpoints/*`
 * rather than using this directly, so auth headers, base URL, and error
 * shape stay centralized.
 */

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public body?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
  /** Override the base URL (rare — used only for external hosts). */
  baseUrl?: string;
  /** Auth token resolver; falls back to an in-memory token. */
  token?: string | null;
  signal?: AbortSignal;
};

let authToken: string | null = null;
export function setAuthToken(token: string | null): void {
  authToken = token;
}

export async function request<T>(
  path: string,
  opts: RequestOptions = {},
): Promise<T> {
  const { body, baseUrl, token, headers, ...rest } = opts;
  const url = `${baseUrl ?? env.API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const resolvedToken = token === undefined ? authToken : token;

  const res = await fetch(url, {
    ...rest,
    headers: {
      Accept: 'application/json',
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...(resolvedToken ? { Authorization: `Bearer ${resolvedToken}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const contentType = res.headers.get('content-type') ?? '';
  const payload = contentType.includes('application/json')
    ? await res.json().catch(() => undefined)
    : await res.text().catch(() => undefined);

  if (!res.ok) {
    const message =
      (typeof payload === 'object' &&
        payload &&
        'message' in payload &&
        typeof payload.message === 'string' &&
        payload.message) ||
      res.statusText ||
      'Request failed';
    throw new ApiError(res.status, message, payload);
  }

  return payload as T;
}

export const api = {
  get: <T>(path: string, opts?: RequestOptions) =>
    request<T>(path, { ...opts, method: 'GET' }),
  post: <T>(path: string, body?: unknown, opts?: RequestOptions) =>
    request<T>(path, { ...opts, method: 'POST', body }),
  put: <T>(path: string, body?: unknown, opts?: RequestOptions) =>
    request<T>(path, { ...opts, method: 'PUT', body }),
  patch: <T>(path: string, body?: unknown, opts?: RequestOptions) =>
    request<T>(path, { ...opts, method: 'PATCH', body }),
  delete: <T>(path: string, opts?: RequestOptions) =>
    request<T>(path, { ...opts, method: 'DELETE' }),
};
