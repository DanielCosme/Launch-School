// Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

// be counting the words as we travesrse the string.

function longestSentence(text) {
  let longestSentence = '';
  let tempSentence = '';
  let longestSentenceCount = 0;

  for (let idx = 0 ; idx < text.length ; idx++) {
    let currentChar = text[idx];  

    tempSentence += currentChar;
    
    if (isEndOfSentence(currentChar)) {
      let tempCount = wordCount(tempSentence.trim());

      if (tempCount > longestSentenceCount) { 
        longestSentenceCount = tempCount;
        longestSentence = tempSentence;
      }
      
      tempSentence = '';
    }
  }

  console.log(longestSentence);
  console.log();
  console.log(`The longest sentence has ${longestSentenceCount}`);
  console.log('\n');
}

function wordCount(sentence) {
  // how does a word starts ---> any character but (whiteSpace, tab, endOfsentence)
  // how does a word end? ---> whiteSpace, tab, endOfSentence.
  let count = 0;
  
  for (let idx = 0 ; idx < sentence.length ; idx++) {
    let currentChar = sentence[idx];

    if (currentChar === ' ' || isEndOfSentence(currentChar)) {
      count++;
    }
  }

  return count;
}

function isEndOfSentence(char) {
  return '.!?'.includes(char);
}


// program that prints the longest sentece (number of words) and its word count.
// REQ:
//     What constitutes a sentence?? 
//         Ends with periods (.), exclamation points (!) or question marks (?).
//     Spaces or sentence ending delimit words
//     Preserve punctuation from end of sentences.
//
//     Pay attention to: case, punctuation, tabs, spaces, etc.
// 
// In: String
// Out: Two strings logges into the console.
//
// Separate correctly the sentences into a collection
// Count correcly the number of words in a sentence.
// Out of that collection take out the longest
// Save it's count 
// Print sentence.
// Print lenght.

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.


