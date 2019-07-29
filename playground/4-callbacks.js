const add = (val1, val2, callback) => {
  setTimeout(() => {
    callback(val1 + val2);
  }, 2000);
};

add(2, 4, sum => {
  console.log(sum);
});
