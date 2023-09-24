import {v4} from "uuid";

export const randomId = (count:number) => {
    const uuids = [];
    for (let i = 0; i < count; i++) {
      uuids.push(v4());
    }
    return uuids;
  }
  