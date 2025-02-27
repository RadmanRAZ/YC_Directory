import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function FormatDate(date : string){
  return new Date(date).toLocaleTimeString('en-US' , {
    month : 'long',
    day : "numeric",
    year : "numeric"
  })
}
