function preTranspose () {
  _currentKey = _orginalKey ;
  
}


function beforeTransposing() {
  //console.log(" ``` _currentKey stays as this during the transposing cycle = " + _currentKey);
  const keySelectorValue = keySelector.value;   // the key to be changed
  toWhichKey(keySelectorValue);
  //console.log("_NewKey is = " + _NewKey);
  //console.log(" ~~~ Transposing starts from here ~~~ ");
}
function toWhichKey(keySelectorValue) {
  if (keySelectorValue === "orginalKey") {
    _NewKey = _orginalKey;
  } else {
    _NewKey = keySelector.value;
  } 
}
function replacing() {
  const replacementsArr = {};
  const currentKeyProperty = Object.values(keys[_currentKey]);
  const newKeyValue = Object.values(keys[_NewKey]);
currentKeyProperty.forEach((value, index) => {
  replacementsArr[value] = newKeyValue[index];
});
  
  const mergedChars = ['#', '♭'];
  let ChordLines = document.querySelectorAll('.PraisePoint_Chords_Line');

  // ````````````````````````````` Need work from here ````````````````````
  // Iterate through each ChordLine

  ChordLines.forEach(ChordLine => {
    let ChordLineText = ChordLine.textContent;
      // Convert the ChordLine text into an array of words
    let words = ChordLineText.split('');
      
      function combineMergedChars(word) {
        for (const mergedChar of mergedChars) {
          if (word.includes(mergedChar)) {
            const index = word.indexOf(mergedChar);
            const letterx = word.substring(0, index);
            const combined = letterx + mergedChar;

            return combined;
          }
        }
        return word;
      }
      
      // Process each word and combine merged characters
      for (let i = 0; i < words.length; i++) {
        words[i] = combineMergedChars(words[i]);
      }
      
      // Join the processed words back into a string

      // Iterate through the array of words and perform letter replacements
      for (let i = 0; i < words.length; i++) {
          let word = words[i];
          let newWord = "";
  
          // Iterate through each letter in the word
          for (let j = 0; j < word.length; j++) {
            let letter = word[j].toUpperCase();
              if (replacementsArr[letter]) {
                  newWord += replacementsArr[letter];
              } else {
                  newWord += word[j]; // Keep the original character if not found in replacements
              }
          }
  
          words[i] = newWord;
      }
  
      // Convert the array of words back to a ChordLine
      let newPraisePoint_Chords_Line = words.join("");
  
      // Set the updated text content back to the ChordLine
      ChordLine.textContent = newPraisePoint_Chords_Line;
    console.log(newPraisePoint_Chords_Line)
    
    const keys = {
    "C": {
      "1": "C",
      "2": "C#",
      "3": "D",
      "4": "D#",
      "5": "E",
      "6": "F",
      "7": "F#",
      "8": "G",
      "9": "G#",
      "10": "A",
      "11": "A#",
      "12": "B",
    },
    "C#": {
      "1": "C#",
      "2": "D",
      "3": "D#",
      "4": "E",
      "5": "F",
      "6": "F#",
      "7": "G",
      "8": "G#",
      "9": "A",
      "10": "A#",
      "11": "B",
      "12": "C",
    },
    "D♭": {
      "1": "D♭",
      "2": "E♭",
      "3": "E",
      "4": "F",
      "5": "G♭",
      "6": "G",
      "7": "A♭",
      "8": "A",
      "9": "B♭",
      "10": "B",
      "11": "C",
      "12": "D♭"
    },
    "D": {
      "1": "D",
      "2": "D#",
      "3": "E",
      "4": "F",
      "5": "F#",
      "6": "G",
      "7": "G#",
      "8": "A",
      "9": "A#",
      "10": "B",
      "11": "C",
      "12": "C#"
    },
    "D#": {
      "1": "D#",
      "2": "E",
      "3": "F",
      "4": "F#",
      "5": "G",
      "6": "G#",
      "7": "A",
      "8": "A#",
      "9": "B",
      "10": "C",
      "11": "C#",
      "12": "D",
    },
    "E♭": {
      "1": "E♭",
      "2": "F",
      "3": "G♭",
      "4": "G",
      "5": "A♭",
      "6": "A",
      "7": "B♭",
      "8": "B",
      "9": "C",
      "10": "D♭",
      "11": "D",
      "12": "E♭",
    },
    "E": {
      "1": "E",
      "2": "F",
      "3": "F#",
      "4": "G",
      "5": "G#",
      "6": "A",
      "7": "A#",
      "8": "B",
      "9": "C",
      "10": "C#",
      "11": "D",
      "12": "D#",
    },
    "F": {
      "1": "F",
      "2": "G♭",
      "3": "G",
      "4": "A♭",
      "5": "A",
      "6": "B♭",
      "7": "B",
      "8": "C",
      "9": "D♭",
      "10": "D",
      "11": "E♭",
      "12": "E",
    },
    "F#": {
      "1": "F#",
      "2": "G",
      "3": "G#",
      "4": "A",
      "5": "A#",
      "6": "B",
      "7": "C",
      "8": "C#",
      "9": "D",
      "10": "D#",
      "11": "E",
      "12": "F",
    },
    "G♭": {
      "1": "G♭",
      "2": "A♭",
      "3": "A",
      "4": "B♭",
      "5": "B",
      "6": "C",
      "7": "D♭",
      "8": "D",
      "9": "E♭",
      "10": "E",
      "11": "F",
      "12": "G♭",
    },
    "G": {
      "1": "G",
      "2": "G#",
      "3": "A",
      "4": "A#",
      "5": "B",
      "6": "C",
      "7": "C#",
      "8": "D",
      "9": "D#",
      "10": "E",
      "11": "F",
      "12": "F#",
    },
    "G#": {
      "1": "G#",
      "2": "A",
      "3": "A#",
      "4": "B",
      "5": "C",
      "6": "C#",
      "7": "D",
      "8": "D#",
      "9": "E",
      "10": "F",
      "11": "F#",
      "12": "G",
    },
    "A♭": {
      "1": "A♭",
      "2": "B♭",
      "3": "B",
      "4": "C",
      "5": "D♭",
      "6": "D",
      "7": "E♭",
      "8": "E",
      "9": "F",
      "10": "G♭",
      "11": "G",
      "12": "A♭",
    },
    "A": {
      "1": "A",
      "2": "A#",
      "3": "B",
      "4": "C",
      "5": "C#",
      "6": "D",
      "7": "D#",
      "8": "E",
      "9": "F",
      "10": "F#",
      "11": "G",
      "12": "G#",
    },
    "A#": {
      "1": "A#",
      "2": "B",
      "3": "C",
      "4": "C#",
      "5": "D",
      "6": "D#",
      "7": "E",
      "8": "F",
      "9": "F#",
      "10": "G",
      "11": "G#",
      "12": "A",
    },
    "B♭": {
      "1": "B♭",
      "2": "C",
      "3": "D♭",
      "4": "D",
      "5": "E♭",
      "6": "E",
      "7": "F",
      "8": "G♭",
      "9": "G",
      "10": "A♭",
      "11": "A",
      "12": "B♭",
    },
    "B": {
      "1": "B",
      "2": "C",
      "3": "C#",
      "4": "D",
      "5": "D#",
      "6": "E",
      "7": "F",
      "8": "F#",
      "9": "G",
      "10": "G#",
      "11": "A",
      "12": "A#",
    },
  };

  });


}
function afterTranspose() {
    //after transposing is finised
    console.log(" ~~~ Transposing finished ~~~ ");
    
    _currentKey = _NewKey ;
  delete replacementsArr;
  delete newPraisePoint_Chords_Line ;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function transpose() {
  
  beforeTransposing();
  replacing();
  afterTranspose();
}

