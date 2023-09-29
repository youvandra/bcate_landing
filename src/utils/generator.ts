import { v4 } from "uuid";

export const randomId = (count: number) => {
  const uuids = [];
  for (let i = 0; i < count; i++) {
    uuids.push(v4());
  }
  return uuids;
}

export const truncate = (text: string, startChars: number | undefined, endChars: number, maxLength: number) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars)
    let end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}