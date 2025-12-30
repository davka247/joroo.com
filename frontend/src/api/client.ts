const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export function postJson<T, Body>(path: string, body: Body) {
  return request<T>(path, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function getJson<T>(path: string) {
  return request<T>(path, { method: "GET" });
}
