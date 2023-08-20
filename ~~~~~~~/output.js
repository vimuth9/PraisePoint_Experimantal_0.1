// Object with letter replacements
let replacementsArr = {
    "C": "D",
    "C#": "D#",
    "D": "E",
    "D#": "F",
    "E": "F#",
    "F": "G",
    "F#": "G#",
    "G": "A",
    "G#": "A#",
    "A": "B",
    "A#": "C",
    "B": "C#",
};

// Characters that need to be merged with the letter before them
const mergedChars = ['#', '♭'];

// Get all elements with class "PraisePoint_Chords_Line"
let paragraphs = document.querySelectorAll('.PraisePoint_Chords_Line');

// Iterate through each paragraph
paragraphs.forEach(paragraph => {
    // Get the text content of the paragraph
    let paragraphText = paragraph.textContent;
    
    // Replace merged characters with the preceding letter
    mergedChars.forEach(mergedChar => {
        paragraphText = paragraphText.replace(new RegExp(`([A-Ga-g])${mergedChar}`, 'g'), '$1');
    });
    
    // Convert the paragraph text into an array of words
    let words = paragraphText.split(" ");

    // Iterate through the array of words and perform letter replacements
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = "";

        // Iterate through each letter in the word
        for (let j = 0; j < word.length; j++) {
            let letter = word[j].toUpperCase(); // Convert to uppercase for consistent lookup
            if (replacementsArr[letter]) {
                newWord += replacementsArr[letter];
            } else {
                newWord += word[j]; // Keep the original character if not found in replacements
            }
        }

        words[i] = newWord;
    }

    // Convert the array of words back to a paragraph
    let newPraisePoint_Chords_Line = words.join(" ");

    // Set the updated text content back to the paragraph
    paragraph.textContent = newPraisePoint_Chords_Line;
});

