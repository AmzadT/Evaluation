

function StudentDetails(name, roll_no, class_name, section, marks_of_5_subjects) {
this.name = name;
this.roll_no = roll_no;
this.class = class_name;
this.section = section;
this.marks_of_5_subjects = marks_of_5_subjects;

this.printTop3Subjects = function () 
{
    var subjects = Object.keys(this.marks_of_5_subjects);
    var sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
    var top3Subjects = sortedSubjects.slice(0, 3);
    console.log("Top 3 Subjects Based On Marks:");
    console.log(top3Subjects);
};

this.printReportCard = function () 
{
    console.log("+--------------------+");
    console.log("|     REPORT CARD    |");
    console.log("+--------------------+");
    console.log(`| Name     - ${this.name}`);
    console.log(`| Roll no. - ${this.roll_no}`);
    console.log(`| Class    - ${this.class}`);
    console.log(`| Section  - ${this.section}`);

    for (var subject in this.marks_of_5_subjects) {
        console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks_of_5_subjects[subject]}`);
    }

    var totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
    var percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
    console.log(`| Percentage - ${percentage.toFixed(1)} %`);
    console.log("+--------------------+");
};
}

// Example usage
var student = new StudentDetails(
"Amzad Hussain",
161,
"12",
"B",
{
    science: 58,
    maths: 71,
    social_science: 84,
    english: 77,
    hindi: 88
}
);

student.printTop3Subjects();
student.printReportCard();

