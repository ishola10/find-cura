import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function saveToLocalStorage(key: string, id: string) {
  localStorage.setItem(key, id);
}

export function getFromLocalStorage(
  key: 'tenants' | 'lastUsedTenantId'
): string | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function providesList(resultsWithIds: Array<any>, tagType: any) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds?.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

// ✅ Add this:
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
