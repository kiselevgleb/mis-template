import pars from '../app';

test.each([
  { num: '11', result: 11 },
  { num: 'pp', result: NaN },
  { num: '1p', result: 1 },
])(('should num'), (a) => {
  const result = pars(a.num);
  expect(result).toBe(a.result);
});
