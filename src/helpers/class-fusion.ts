import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classFusion = (...classes: ClassValue[]) => twMerge(clsx(classes));
