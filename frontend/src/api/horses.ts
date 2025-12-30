import { postJson, getJson } from "./client";

export type HorsePayload = {
  name: string;
  ownerName: string;
  ownerPhone: string;
  trainerName: string;
  trainerPhone: string;
  age?: number | string;
  birthPlace: string;
  fatherLine: string[];
  motherLine: string[];
  imageUrl: string | null;
  color?: string;
};

export function createHorse(data: HorsePayload) {
  // age талбарыг хоосон байвал илгээхгүй
  const payload = { ...data, age: data.age === "" ? undefined : Number(data.age) };
  return postJson("/api/horses", payload);
}

export function fetchHorses() {
  return getJson("/api/horses");
}
