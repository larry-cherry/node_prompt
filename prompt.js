const pry = require('pryjs');

function prompt(label) {
  let input;
  process.stdin.setEncoding('utf8');  
  process.stdout.write(label + '\n');   
  process.stdin.on('data', function(chunk){
    input = chunk;
    process.exit()
  })
  console.log(input);
  // return input;
  return input
}

// module.exports = prompt;
var a = prompt('Test test')
// eval(pry.it)
console.log(a)