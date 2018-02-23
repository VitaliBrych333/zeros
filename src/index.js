module.exports = function getZerosCount(number) {
  var colZero = 0;
  for (var i=5; number/i>0; i*=5) {
    colZero+= Math.floor(number/i);// your implementation
  }
 return colZero;
}
