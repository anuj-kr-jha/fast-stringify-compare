import fastJson from 'fast-json-stringify';

const obj = { firstName: 'Matteo', lastName: 'Collina' };

const stringify = fastJson({
  title: 'mySchema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
  },
});

export function calculateAverage(data) {
  const totalFastJson = data.reduce((sum, item) => sum + item.fastJson, 0);
  const totalJSON = data.reduce((sum, item) => sum + item.JSON, 0);

  // Calculate averages
  const averageFastJson = totalFastJson / data.length;
  const averageJSON = totalJSON / data.length;

  // Output the results
  console.log('Total fastJson:', totalFastJson);
  console.log('Total JSON:', totalJSON);

  console.log('\nAverage fastJson:', averageFastJson);
  console.log('Average JSON:', averageJSON);
}

export function compare() {
  const t1 = performance.now();
  const str1 = stringify(obj);
  const t2 = performance.now();

  const t3 = performance.now();
  const str2 = JSON.stringify(obj);
  const t4 = performance.now();
  return { fastJson: t2 - t1, JSON: t4 - t3 };
}
