/* Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:
*/

getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"

function getGrade(one, two, three) {
  let grade = (one + two + three) / 3;
  return mapGradeToLetter(grade);
}

function mapGradeToLetter(gradeToMap) {
  let result;
  if (gradeToMap >= 90) result = "A";
  else if (gradeToMap >= 80) result = "B";
  else if (gradeToMap >= 70) result = "C";
  else if (gradeToMap >= 60) result = "D";
  else result = "F";

  return result;
}
