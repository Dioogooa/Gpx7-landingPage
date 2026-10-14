/**
 * Rate limiter simples em memória.
 *
 * ATENÇÃO: em ambientes serverless (Vercel), cada instância de função tem
 * sua própria memória. Este limiter é "melhor esforço" — não é 100% preciso
 * quando há múltiplas instâncias rodando em paralelo.
 *
 * Para proteção forte em produção: usar Upstash Redis ou Cloudflare Turnstile.
 */

interface RateEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateEntry>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_REQUESTS = 5;

/** Retorna `true` se o IP está dentro do limite, `false` se excedeu. */
export function allow(ip: string): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}
