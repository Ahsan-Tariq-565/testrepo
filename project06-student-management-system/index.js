import inquirer from "inquirer";
//Define student class & Assigning types:
class Student {
    static counter = 12000;
    id;
    name;
    courses;
    balance;
    //Constructor to initialize the student object:(Assigning values to class properties)
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = ["Introduction to Cybersecurity",
            "Database Management System",
            "Web Development Essentials",
            "Information System Analysis and Design",
            "Machine Learning Engineer",
            "Block Chain Management System",
            "Network Administration Fundamentals"]; // Initialize an empty array for courses
        this.balance = 100;
    }
    //Method to enroll student in a course:
    enroll_course(course) {
        this.courses.push(course);
    }
    //Method to view a student balance:
    view_balance() {
        console.log(`Balance for ${this.name} : ${this.balance} `);
    }
    //Method to pay fees:
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} Fees paid sucessfully for ${this.name}`);
        console.log(`${this.name} Remaining Blance: $${this.balance}`);
    }
    //Method to display student status:
    show_status() {
        console.log(`ID: STID${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: $${this.balance}`);
    }
}
;
//Defining a Student manager class to manage students:
class Student_manager {
    students;
    constructor() {
        this.students = [];
    }
    ;
    //Method to add a new student:
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student: ${name} added sucessfully. Stydent ID: STID-${student.id} `);
    }
    ;
    //Method to enroll a student in a course:
    enroll_student(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    ;
    //Method to view a student balance:
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log(`Student with ID: ${student_id} not found`);
        }
    }
    ;
    //Method to pay student fees:
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log(`Student with ID: ${student_id} not found`);
        }
    }
    ;
    //Method to display student status:
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    }
    ;
    //Method to find a student by student id:
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
    ;
}
;
//Main Function to run the program:
async function main() {
    console.log("Welcome fot 'Code with Ahsan' - Student Management program");
    console.log("-".repeat(50));
    let student_manager = new Student_manager();
}
;
// while loop to keep the program running:
while (true) {
    let choice = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Select an option:",
            choices: [
                "Add Student",
                "Enroll Student",
                "View Student Balance",
                "Pay Student Fees",
                "Show Student Status",
                "Exit"
            ]
        }
    ]);
    //using Switch case to handle user choice: 
    switch (choice.choice) {
        case "add":
            let name_input = await inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Enter a Student Name"
                }
            ]);
            Student_manager.add_student(name_input.name);
            break;
        case "Enroll Student":
            let course_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a Student ID"
                },
                {
                    name: "course",
                    type: "input",
                    message: "Enter a Course Name"
                }
            ]);
            Student_manager.enroll_student(course_input.student_id, course_input.course);
            break;
        case "View Student Balance":
            let balance_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a Student ID"
                }
            ]);
            Student_manager.view_student_balance(balance_input.student_id);
            break;
        case "Pay Student Fees":
            let fees_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a Student ID"
                },
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to pay"
                }
            ]);
            Student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
            break;
        case "Show Student Status":
            let status_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a Student ID"
                }
            ]);
            Student_manager.show_student_status(status_input.student_id);
            break;
        case "Exit":
            console.log("Exiting the program");
            process.exit();
    }
}
;
//Calling a main funtion
main();
