import { writable } from 'svelte/store';

export const path = writable('');
export const searchTerm = writable('');
export const docx = writable(true);
export const doc = writable(true);
export const pdf = writable(true);
export const txt = writable(true);
export const paths = writable('');
