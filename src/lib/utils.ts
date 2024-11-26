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

  if (inputDate.isSame(now, "minute")) {
    return "Just now";
  }

  if (inputDate.isSame(now, "hour")) {
    return `${now.diff(inputDate, "minute")} minutes ago`;
  }

  if (inputDate.isSame(now, "day")) {
    return `Today at ${inputDate.format("HH:mm")}`;
  }

  if (inputDate.isSame(now.subtract(1, "day"), "day")) {
    return `Yesterday at ${inputDate.format("HH:mm")}`;
  }

  if (inputDate.isSame(now, "week")) {
    return inputDate.from(now); // e.g., "2 days ago"
  }

  if (inputDate.isSame(now, "year")) {
    return inputDate.format("MMMM D"); // e.g., "October 15"
  }

  return inputDate.format("MMMM D, YYYY"); // e.g., "October 15, 2023"
}
