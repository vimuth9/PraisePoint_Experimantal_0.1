const chordRegex = /([A-G][b#]?m?(?:maj|sus|aug|dim)?\d?(?:\/[A-G][b#]?)?)/g;
const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function transposeChord(chord, currentKey, newKey) {
  const currentKeyIndex = keys.indexOf(currentKey);
  const newKeyIndex = keys.indexOf(newKey);

  const chordParts = chord.match(chordRegex);
  if (!chordParts) return chord;

  const transposedChords = chordParts.map(chordPart => {
    const rootNote = chordPart.match(/[A-G][b#]?/)[0];
    const chordRootNoteIndex = keys.indexOf(rootNote);

    const transposeInterval = newKeyIndex - currentKeyIndex;
    const transposedNoteIndex = (chordRootNoteIndex + transposeInterval + 12) % 12;

    return chordPart.replace(rootNote, keys[transposedNoteIndex]);
  });

  return transposedChords.join(' ');
}

function transposeChords() {
  const chordsInput = document.getElementById('chords-input');
  const transposedChords = document.getElementById('transposed-chords');
  const currentKeySelector = document.getElementById('current-key-selector');
  const newKeySelector = document.getElementById('new-key-selector');

  const currentKey = currentKeySelector.value;
  const newKey = newKeySelector.value;
  const chordsToTranspose = chordsInput.value;

  const transposedResult = transposeChord(chordsToTranspose, currentKey, newKey);

  transposedChords.value = transposedResult;
}
