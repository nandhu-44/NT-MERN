/**
 * 
 */
const person = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Nandhu",
    email: "nandhu@mymail.com",
    collegeId: 3637,
    marksInInternal: [50, 48],
    subjects: [],
    appliedForScholarship: false,
}


function toggleScholarship() {
    person.appliedForScholarship = !person.appliedForScholarship;
    console.log("Scholarship status: ", person.appliedForScholarship ? "Applied" : "Not Applied");
}

function addSubject() {
    const subjectName = prompt("Enter the subject name: ");
    const totalMarks = parseFloat(prompt("Enter the marks: "));

    if (!totalMarks || !subjectName) return alert("Please enter the subject name and marks");
    if(totalMarks < 0 || totalMarks > 100) return alert("Please enter the marks between 0 and 100");
    

    person.subjects.push({ subjectName, totalMarks });
    console.log(JSON.stringify(person, null, 2));
}