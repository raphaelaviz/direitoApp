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
export const lawsuitSchema = z.object({
  id: z.string(),
  number: z.string(),
  plaintiff: z.string(),
  defendant: z.string(),
  status: z.string(),
  priority: z.string(),
  favorite: z.boolean(),
  // grupos: z.array(z.string()) //resolve later
})

export type LawsuitType = z.infer<typeof lawsuitSchema>
