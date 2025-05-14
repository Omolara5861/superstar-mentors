import jwt_decode from 'jwt-decode';

interface TokenPayload {
  user_id?: string;
  role?: string;
  exp?: number;
  [key: string]: any;
}

/** Return the `role` claim, or null if missing/invalid. */
export function getUserRole(token: string): string | null {
  try {
    const payload = jwt_decode<TokenPayload>(token);
    return payload.role ?? null;
  } catch {
    return null;
  }
}

/** Return the user’s ID (UUID) if present in the token payload. */
export function getUserId(token: string): string | null {
  try {
    const payload = jwt_decode<TokenPayload>(token);
    return payload.user_id ?? null;
  } catch {
    return null;
  }
}