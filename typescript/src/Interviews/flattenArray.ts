// type flattenType = <T>(arr:T[])=>T[];

export {};
function flatten<T>(arr: T[]): T[] {
  const ansArr: T[] = [];

  const helperFn = (arr: T[]) => {
    for (let item of arr) {
      if (Array.isArray(item)) {
        helperFn(item);
      } else {
        ansArr.push(item);
      }
    }
  };

  helperFn(arr);

  return ansArr;
}

const nums: any = [0, [1, [3, [5]]]];
console.log(flatten<any>(nums));
