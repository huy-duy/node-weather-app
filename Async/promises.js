const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number')
                resolve(a + b);
            else {
                reject('Argument must be numbers');
            }
        }, 1000);
    })
}

asyncAdd(5, 3)
    .then((result) => {
        console.log('Result: ', result);
        return asyncAdd(result, 10);
    })
    .then((result) => {
        console.log('Result 2: ', result);
    })
    .catch((errorMessage) => {
      console.log('Error: ', errorMessage);
    })
