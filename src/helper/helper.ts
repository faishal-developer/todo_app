"use client";
import { status } from "@/utils/utils";

export const properties = {
  cart: "cart",
};

export const createDataLS = (data: any, property: string) => {
  if (typeof window === "undefined") return [];
  let newData = JSON.stringify(data);
  localStorage.setItem(property, newData);
};

export const getDataLS = (property: string) => {
  if (typeof window === "undefined") return [];
  let data = localStorage.getItem(property);
  return data ? JSON.parse(data) : [];
};

export const DeleteDataLS = (property: string) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(property);
};

export function isDateWithinOneHour(targetDate: string, current: string) {
  const currentTime = new Date(current).getTime();
  const targetTime = new Date(targetDate).getTime();
  const timeDifference = targetTime - currentTime;

  // Check if the difference is within 1 hour (3600000 milliseconds)
  return timeDifference <= 3600000;
}

export const getClassNames = (
  date1: string,
  current: string,
  c_status: string
) => {
  if (c_status === status.completed) {
    return "bg-green-200";
  }
  if (c_status === status.cancaled) {
    return "bg-red-200";
  }
  if (new Date(date1).getTime() < new Date(current).getTime()) {
    console.log("working");
    return "bg-red-200";
  }
  if (isDateWithinOneHour(date1, current)) {
    return "bg-amber-200";
  } else return "";
};
