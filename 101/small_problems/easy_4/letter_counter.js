/*Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Examples: */

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}

function wordSizes(word) {
	let result = {};
	let wordArr = word.split(" ").map((x) => x.trim());

	wordArr.forEach((value) => {
		let len = String(value.length);
		if (!result[len]) {
			result[len] = 1;
		} else result[len]++;
	});

	// console.log(result);
	return result;
}
