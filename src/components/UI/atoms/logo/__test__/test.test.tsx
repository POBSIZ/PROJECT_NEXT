const testAdd = (num1: number, num2: number) => {
  return num1 + num2;
};

test('1 + 1 =2', () => {
  expect(testAdd(1, 1)).toBe(2);
});

export {};