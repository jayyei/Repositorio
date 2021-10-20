let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Failed!!')
  },1500);
});

promise.then(function(value) {
  console.log(value);
}, function(error) {
  console.log(error);
});

