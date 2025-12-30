import { getJson } from "./client";

export type DirectUploadResponse = {
  uploadURL: string;
  publicURL: string;
};

export function getDirectImageUploadUrl() {
  return getJson<DirectUploadResponse>("/api/uploads/image-direct");
}
