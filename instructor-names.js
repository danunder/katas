const instructorWithLongestName = function(instructors) {
  let longestNamedInstructor = {
    name: '',
    course: '',
  };
  let currentLongestNameLength = 0;
  for (let instructor of instructors) {
    if (instructor.name.length > currentLongestNameLength) {
      currentLongestNameLength = instructor.name.length;
      longestNamedInstructor.name = instructor.name;
      longestNamedInstructor.course = instructor.course;
    }
  }
  return longestNamedInstructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
