const getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Duy'
  };
  setTimeout(() => {
    callback(user);
  }, 1000);
  
};

getUser(15, (user) => {
  console.log(user);
});
