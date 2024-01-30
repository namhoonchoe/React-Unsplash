import { atom } from "recoil";

export enum Orientation {
  "Landscape" = "landscape",
  "Portrait" = "portrait",
  "Squarish" = "squarish",
}
 
 
 


export type SearchQueryParams = {
  orientation?: Orientation;
  isRelevant: boolean;
};


export const queryParamState = atom<SearchQueryParams>({
  key: "queryParams",
  default: {
    orientation: undefined,
    isRelevant: true
  },
});
