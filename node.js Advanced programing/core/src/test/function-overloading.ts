//实例1
type over = {
  (params1: number, params2: number): string;
  (params1: number, params2: string): string;
};

let fn: over = (p1: number, p2: string | number): string => {
  return p2.toString() + p1;
};
//实例2
type over2 = {
  (p1: string, p2: number): string;
  (p1: number, p2: string): string;
};

let fn1: over2 = (p1: string | number, p2: string | number): string => {
  return p1.toString() + p2;
};
