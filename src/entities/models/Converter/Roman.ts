interface IRomanNumbersMap {
  [key: string]: number;
}

export class Roman {
  repetitiveNumbers = ["I", "X", "C", "M"];
  cannotBeRepeated = ["V", "L", "D"];
  subtractivePairs = ["IV", "IX", "XL", "XC", "CD", "CM"];

  map: IRomanNumbersMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
}
