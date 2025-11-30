// NOME: lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilitário que mescla classes do Tailwind CSS de forma inteligente.
 * @param inputs - Classes Tailwind a serem mescladas.
 * @returns - String de classes mescladas.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}