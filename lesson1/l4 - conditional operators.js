// conditional operators

//   ==   !=    >    >=     <      <=

var n1 = 45;
var n2 = 80;

var res = n1 < n1;
console.log(res);


// if statements
var age = 8;

if (age >= 18) {
  console.log("Have a Beer!");
} else {
  console.log("Have a Fritz!");
}


var n1 = 23;
var n2 = 12;
var n3 = 19;

// BIGGEST OF 2
if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}

// BIGGEST OF 3
if (n1 > n2) {
  
  if (n1 > n3) {
    console.log(n1);
  } else {
    console.log(n3);
  }

} else {

 if (n2 > n3) {
    console.log(n2);
  } else {
    console.log(n3);
  }

}

