import fastJson from 'fast-json-stringify';

const obj = { firstName: 'Matteo', lastName: 'Collina' };

const stringify = fastJson({
  title: 'Example Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    age: {
      description: 'Age in years',
      type: 'integer',
    },
    reg: {
      type: 'string',
    },
  },
});

export function compare() {
  const t1 = performance.now();
  const str1 = stringify(obj);
  const t2 = performance.now();

  const t3 = performance.now();
  const str2 = JSON.stringify(obj);
  const t4 = performance.now();
  return JSON.stringify({ fastJson: `${t2 - t1} ms`, JSON: `${t4 - t3} ms` });
}
