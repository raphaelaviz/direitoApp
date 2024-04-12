import { z } from 'zod'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Updater } from '@tanstack/vue-table'



////////////
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


////////////
export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}



////////////
export const processoSchema = z.object({
  id: z.string(),
  numero: z.string(),
  requerente: z.string(),
  requerido: z.string(),
  status: z.string(),
  prioridade: z.string(),
  favorito: z.boolean(),
  // grupos: z.array(z.string()) //resolve later
})

export type ProcessoType = z.infer<typeof processoSchema>
