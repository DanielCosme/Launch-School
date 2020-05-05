/*Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

triangle(0);
triangle(1);
triangle(2);
triangle(5);
triangle(9);

function triangle(height) {
	let stars = 1;
	while (stars <= height) {
		console.log(getLine(height, stars));
		stars++;
	}
}

function getLine(len, numOfStars) {
	return " ".repeat(len - numOfStars) + "*".repeat(numOfStars);
}
