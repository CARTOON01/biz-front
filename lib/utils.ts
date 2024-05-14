import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
<<<<<<< HEAD
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD',
});
=======
}
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
