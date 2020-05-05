/*Write a function that will take a short line of text, and write it to the console log within a box.


will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
Examples:
*/

const B = {
	corner: "+",
	side: "|",
	floor: "-",
	empty: " ",
};

logInBox("To boldly go where no one has gone before.");
logInBox("");

function logInBox(text) {
	let width = text.length;
	console.log(getPadding(B.corner, B.floor, width));
	console.log(getPadding(B.side, B.empty, width));
	console.log(getMain(B.side, text));
	console.log(getPadding(B.side, B.empty, width));
	console.log(getPadding(B.corner, B.floor, width));
}

function getMain(sides, str) {
	return `${sides} ${str} ${sides}`;
}

function getPadding(ini, medi, x) {
	let result = ini;
	width = x + 2;
	for (let i = 0; i < width; i++) {
		result += medi;
	}
	return result + ini;
}
