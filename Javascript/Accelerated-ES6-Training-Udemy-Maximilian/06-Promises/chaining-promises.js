function waitASecond(seconds) {
  return new Promise(function(resolve, reject) {
    if (seconds > 2 ) {
      reject('rejected');
    } else {
      setTimeout(function() {
        seconds++;
        resolve(seconds);
      }, 1000);
    }
  });
}


waitASecond(3)
  .then(waitASecond)
  .then(function(seconds) {
    console.log(seconds);
  })
  .catch(function(error) {
    console.log(error);
  })