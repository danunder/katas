const organizeInstructors = function(instructors) {
  let instructorsOrganized = {
    Blockchain:[],
    iOS:[],
    Web:[],
  }
  for (let instructor of instructors) {
    switch (instructor.course) {
      case 'Blockchain':
      instructorsOrganized.Blockchain.push(instructor.name);
      break;
      case 'iOS':
      instructorsOrganized.iOS.push(instructor.name);
      break;
      case 'Web':
      instructorsOrganized.Web.push(instructor.name);
      break;
    }
  }
  for (let course in instructorsOrganized) {
    if (instructorsOrganized[course].length === 0) {
      delete instructorsOrganized[course];
    }
  }
  return instructorsOrganized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
