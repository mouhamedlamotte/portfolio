import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDate(date: string | Date | dayjs.Dayjs): string {
  const now = dayjs();
  const inputDate = dayjs(date);

  if (inputDate.isSame(now, "minutes")) {
    return "A l'instant";
  }

  if (inputDate.isSame(now, "hour")) {
    return `il y'a ${now.diff(inputDate, "minute")} minutes`;
  }

  if (inputDate.isSame(now, "day")) {
    return `Aujourd'hui a ${inputDate.format("HH:mm")}`;
  }

  if (inputDate.isSame(now.subtract(1, "day"), "day")) {
    return `Hier a ${inputDate.format("HH:mm")}`;
  }

  if (inputDate.isSame(now, "week")) {
    return inputDate.from(now); // e.g., "2 days ago"
  }

  if (inputDate.isSame(now, "year")) {
    return inputDate.format("MMMM D"); // e.g., "October 15"
  }

  return inputDate.format("MMMM D, YYYY"); // e.g., "October 15, 2023"
}




export function getDateId(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  
  return `${year}-${month}-${day}T${hour}`;
}