function preTranspose () {
  _currentKey = _orginalKey ;
  
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function transpose() {
  console.log("_currentKey stays as this during the transposing cycle =" + _currentKey);
  const keySelectorValue = keySelector.value;   // the key to be changed
  toWhichKey(keySelectorValue);
  console.log("_NewKey is =" + _NewKey);
  console.log(" ~~~ Transposing starts from here");






  //after transposing is finised
  console.log(" ~~~ Transposing finished");
  _currentKey = _NewKey ;
  console.log("so the _currentKey is =" + _currentKey);


}
function toWhichKey(keySelectorValue) {
  if (keySelectorValue === "orginalKey") {
    _NewKey = _orginalKey;
  } else {
    _NewKey = keySelector.value;
  } 
}

//`````````````````````````````````````````````````
function chordToNumber () {
  
}
function numberToChord() {
  
}
/*`````````````````````````````````````````````````
*/