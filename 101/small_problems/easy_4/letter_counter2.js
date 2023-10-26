/* Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples: */

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}

function wordSizes(word) {
	let result = {};
	if (word.length === 0) return result;

	let wordArr = word.split(" ").map((x) => {
		return extractNonLetters(x);
	});

	wordArr.forEach((value) => {
		let len = String(value.length);

		result[len] = result[len] || 1;
		result[len]++;
	});

	console.log(result);
	return result;
}

function extractNonLetters(word) {
	let result = "";

	for (let i = 0; i < word.length; i++) {
		if (word[i].toLowerCase() >= "a" && word[i].toLowerCase() <= "z") {
			result += word[i];
		}
	}

	return result;
}
