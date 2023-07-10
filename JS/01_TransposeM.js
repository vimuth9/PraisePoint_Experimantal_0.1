
// ```````````````````` Transposer Javascript ````````````````````````

function preTranspose() {
    _currentKey = _orginalKey;
}
//finalized
var _TKeySelector = document.getElementById("KeySelector");
var _currentKey;

function transpose() {
    console.log(" Key Transposor lunched ");
    // 1. Convert Chord Capital letter inside "PraisePoint_Chords_Line" to Numbers according the Chord_Number_Chart() with the use of _currentKey

    console.log(" Chords to Numbers sucseesful ");
    //2.
    assignNewKey();
    //3.Convert Numbers to Capital letter inside "PraisePoint_Chords_Line"

    console.log(" Numbers to Chords sucseesful ");
    console.log(" New _currentKey is " + _currentKey);
}

function assignNewKey() {
  if ( _TKeySelector === null || _TKeySelector === "orginalKey") {
      _currentKey = _orginalKey;
  } else {
      _currentKey = _TKeySelector;
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// currentkey to currentKeyNumber - chart and

function currentKey() {
  switch (_currentKey) {
    case "C":
      console.log("key changed to C");
      _currentKey = "C";
      break;
    case "C#":
      console.log("key changed to C#");
      _currentKey = "C#";
      break;
    case "D♭":
      console.log("key changed to D♭");
      _currentKey = "D♭";
      break;
    case "D":
      console.log("key changed to D");
      _currentKey = "D";
      break;
    case "D#":
      console.log("key changed to D#");
      _currentKey = "D#";
      break;
    case "E♭":
      console.log("key changed to E♭");
      _currentKey = "E♭";
      break;
    case "E":
      console.log("key changed to E");
      _currentKey = "E";
      break;
    case "F":
      console.log("key changed to F");
      _currentKey = "F";
      break;
    case "F#":
      console.log("key changed to F#");
      _currentKey = "F#";
      break;
    case "G♭":
      console.log("key changed to G♭");
      _currentKey = "G♭";
      break;
    case "G":
      console.log("key changed to G");
      _currentKey = "G";
      break;
    case "G#":
      console.log("key changed to G#");
      _currentKey = "G#";
      break;
    case "A♭":
      console.log("key changed to A♭");
      _currentKey = "A♭";
      break;
    case "A":
      console.log("key changed to A");
      _currentKey = "A";
      break;
    case "A#":
      console.log("key changed to A#");
      _currentKey = "A#";
      break;
    case "B♭":
      _currentKey = "B♭";
      console.log("key changed to B♭");
      break;
    case "B":
      _currentKey = "B";
      console.log("key changed to B");
      break;
    case "TOrginalKey":
          console.log("key changed to Orginal Key");
          _currentKey = _orginalKey;
      break;
  }
}
var chords = ["C","C#","D♭","D","D#","E♭","E","F","F#","G♭","G","G#","A♭","A","A#","B♭","B",];
var numberCharts = [
  ["C",[["C", "1"],["D", "2"],["E♭", "♭3"],["E", "3"],["F", "4"],["F#", "#4"],["G", "5"],["A♭", "♭6"],["A", "6"],["B♭", "♭7"],["B", "7"],],],
  ["C#",[["C#", "1"],["D#", "2"],["E", "♭3"],["F", "3"],["F#", "4"],["G", "#4"],["G#", "5"],["A", "♭6"],["A#", "6"],["C♭", "♭7"],["C", "7"],],],
  ["D♭",[["D♭", "1"],["E♭", "2"],["E", "♭3"],["F", "3"],["G♭", "4"],["G", "#4"],["A♭", "5"],["A", "♭6"],["B♭", "6"],["C♭", "♭7"],["C", "7"],],],
  ["D",[["D", "1"],["E", "2"],["F", "♭3"],["F#", "3"],["G", "4"],["G#", "#4"],["A", "5"],["B♭", "♭6"],["B", "6"],["C", "♭7"],["C#", "7"],],],
  ["D#",[["D#", "1"],["F", "2"],["G♭", "♭3"],["G", "3"],["G#", "4"],["A", "#4"],["A#", "5"],["B", "♭6"],["C", "6"],["D♭", "♭7"],["D", "7"],],],
  ["E♭",[["E♭", "1"],["F", "2"],["G♭", "♭3"],["G", "3"],["A♭", "4"],["A", "#4"],["B♭", "5"],["C♭", "♭6"],["C", "6"],["D♭", "♭7"],["D", "7"],],],
  ["E",[["E", "1"],["F#", "2"],["G", "♭3"],["G#", "3"],["A", "4"],["A#", "#4"],["B", "5"],["C", "♭6"],["C#", "6"],["D", "♭7"],["D#", "7"],],],
  ["F",[["F", "1"],["G", "2"],["A♭", "♭3"],["A", "3"],["B♭", "4"],["B", "#4"],["C", "5"],["D♭", "♭6"],["D", "6"],["E♭", "♭7"],["E", "7"],],],
  ["F#",[["F#", "1"],["G#", "2"],["A", "♭3"],["A#", "3"],["B", "4"],["C", "#4"],["C#", "5"],["D", "♭6"],["D#", "6"],["E", "♭7"],["F", "7"],],],
  ["G♭",[["G♭", "1"],["A♭", "2"],["A", "♭3"],["B♭", "3"],["C♭", "4"],["C", "#4"],["D♭", "5"],["D", "♭6"],["E♭", "6"],["E", "♭7"],["F", "7"],],],
  ["G",[["G", "1"],["A", "2"],["B♭", "♭3"],["B", "3"],["C", "4"],["C#", "#4"],["D", "5"],["E♭", "♭6"],["E", "6"],["F", "♭7"],["F#", "7"],],],
  ["G#",[["G#", "1"],["A#", "2"],["C♭", "♭3"],["C", "3"],["C#", "4"],["D", "#4"],["D#", "5"],["E", "♭6"],["F", "6"],["G♭", "♭7"],["G", "7"],],],
  ["A♭",[["A♭", "1"],["B♭", "2"],["C♭", "♭3"],["C", "3"],["D♭", "4"],["D", "#4"],["E♭", "5"],["E", "♭6"],["F", "6"],["G♭", "♭7"],["G", "7"],],],
  ["A",[["A", "1"],["B", "2"],["C", "♭3"],["C#", "3"],["D", "4"],["D#", "#4"],["E", "5"],["F", "♭6"],["F#", "6"],["G", "♭7"],["G#", "7"],],],
  ["A#",[["A#", "1"],["C", "2"],["D♭", "♭3"],["D", "3"],["D#", "4"],["E", "#4"],["F", "5"],["G♭", "♭6"],["G", "6"],["A♭", "♭7"],["A", "7"],],],
  ["B♭",[["B♭", "1"],["C", "2"],["D♭", "♭3"],["D", "3"],["E♭", "4"],["E", "#4"],["F", "5"],["G♭", "♭6"],["G", "6"],["A♭", "♭7"],["A", "7"],],],
  ["B",[["B", "1"],["C#", "2"],["D", "♭3"],["D#", "3"],["E", "4"],["F", "#4"],["F#", "5"],["G", "♭6"],["G#", "6"],["A", "♭7"],["A#", "7"],],],
];
