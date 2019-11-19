var i = 1;
var f = '';
var b = '';
var fb = '';

while (i < 101) {

  if ((i % 15 == 0)) {
    fb = i;
    fb = 'FizzBuzz';
    console.log(fb);
  }
  else if (i % 3 == 0){
    f = i;
    f = 'Fizz';
    console.log(f);
  }
  else if (i % 5 == 0) {
    b = i;
    b = 'Buzz';
    console.log(b);
  }
  else {
    console.log(i);
  }

  i++;
}
