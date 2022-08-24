class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!

    this.fullName = `${firstname} ${lastname}`;
    this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
  }
}
emp1 = new Employee("John", "Smith")


console.log(emp1.fullName);
console.log(emp1.email);

emp2 = new Employee("Mary",  "Sue")
console.log(emp2.fullName);
console.log(emp2.email);


emp3 = new Employee("Antony", "Walker")

console.log(emp3.fullName);
console.log(emp3.email);
