// DONE: Move the split function out to its helper lib...

// String Splitter used on the title... because! I can JavaScript! and baby steps w/ TS!!!
export function split(string: string, pos1: number, pos2?: number) {
  let splitString = string.slice(pos1, pos2);
    return splitString
  }
  