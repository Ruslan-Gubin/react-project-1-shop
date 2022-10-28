import { IPost } from "../models/iPost";

class FilterTags {

 filterAllTags(array: IPost[]) {
  const result: string[] = [];

  const arrayTags: string[] = [];
  
  const arrayMap:string[][] = array.map((item) => item.tags.join("").trim().split(" "));

  arrayMap.map((item) => (item ? arrayTags.push(...item) : false));

  const setArray: Set<string> = new Set(arrayTags);

  for (const key of setArray) {
    if (key) {
      result.push(key);
    }
  }

  return result;
};

 getFirstFiveTags(array: IPost[])  {
  const result: string[] = [];

  const filterArray = this.filterAllTags(array)

  for (let i = array.length - 1; i > filterArray.length - 6; i--) {
    const string: string = filterArray[i];
    if (string) {
      result.push(string);
    }
  }

  return result;
};


}

const filterTags = new FilterTags()

export {filterTags}