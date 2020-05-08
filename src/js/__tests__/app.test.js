import pars from '../app';

test.each([
  { num: '11', result: 11 },
  { num: 'pp', result: 'Error' },
  { num: '1p', result: 'Error' },
  { num: '0b10000000000000000000000000000000', result: 'Error' },
  { num: '0x12', result: 'Error' },
])(('should num'), (a) => {
  const result = pars(a.num);
  expect(result).toBe(a.result);
});
