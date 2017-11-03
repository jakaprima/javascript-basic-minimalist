function function1(){
  console.log('fungsi ini ada');
}
try{ // mengandung statement
  function2()
} catch (e){ // apa yang dilakukan bila exception di lempar saat try
  console.log('error try', e); //error try ReferenceError: function2 is not defined
} finally { // selalu jalan baik try atau catch selesai berjalan
  console.log('finally');
  return false;
  console.log('tidak akan ditampilkan');
}