import { writable } from "svelte/store";

export type GameState = 'menu' | 'game' | 'result'
export const gameState = writable<GameState>('menu')
export const score = writable(0)
export const questionAmount = writable(0)