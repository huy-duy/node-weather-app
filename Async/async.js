console.log('Staring app');

setTimeout(() => {
  console.log('Inside a callback');
}, 2000);

setTimeout(() => {
  console.log('Second callback');
}, 0);

console.log('Finishing app');
