module.exports = function solveEquation(equation) {
  // your implementation
  var s=[];
  s=equation.split(' ');
  var a=s[0];
  if (s[3] == '-') s[4]=-s[4];
  if (s[7] == '-') s[8]=-s[8];
  var D=s[4]*s[4]-4*a*s[8];
  var arr=[];
  var x1=Math.round((-s[4]-Math.sqrt(D))/(2*a));
  var x2=Math.round((-s[4]+Math.sqrt(D))/(2*a));
  if (x1<x2){
  	  arr[0]=x1;
	  arr[1]=x2;
  } else {
  	  arr[1]=x1;
	  arr[0]=x2;
  }
  return arr;
  }