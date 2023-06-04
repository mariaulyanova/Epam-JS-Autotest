// BONUS TASKS
// Write a function that takes an object representing a schedule,
// with properties for the name of the schedule and an array of events, 
// each represented as objects with a name, start time, and end time, 
// and returns an array of all the time slots where there are no events scheduled. 
// For example, if the input object is { name: "Weekday schedule", events: 
// [{ name: "Meeting", start: "9:00", end: "10:00" }, 
// { name: "Lunch", start: "12:00", end: "13:00" }, 
// { name: "Call", start: "15:00", end: "16:00" }] }, 
// the function should return 
// ["0:00-9:00", "10:00-12:00", "13:00-15:00", "16:00-24:00"].
//-------------------------------------------------------------------------------------------

function Schedule(nameOfSch, events) {
  this.nameOfSch = nameOfSch;
  this.events = events;
}

Schedule.prototype.freeTime = function() {
  const startTimes = ["0:00", ...this.events.map(e => e.end)];
  const endTimes = [...this.events.map(e => e.start), "24:00"];
  const freeTime = startTimes.reduce((acc, start, index) => {
    const end = endTimes[index];
    if (start < end) {
      acc.push(`${start}-${end}`);
    }
    return acc;
  }, []);

  return freeTime;
}

const schedule = new Schedule("Weekday schedule", [
  { name: "Meeting", start: "9:00", end: "10:00" }, 
  { name: "Lunch", start: "12:00", end: "13:00" }, 
  { name: "Call", start: "15:00", end: "16:00" }
]);

const schedule2 = new Schedule("My usual Monday", [
  { name: "Meeting", start: "9:00", end: "09:30" }, 
  { name: "Lunch", start: "12:00", end: "13:00" }, 
  { name: "Call", start: "15:30", end: "16:00" },
  { name: 'English', start: '18:00', end: '19:00'},
]);

console.log(schedule.freeTime()); // [ '0:00-9:00', '10:00-12:00', '13:00-15:00', '16:00-24:00' ]
console.log(schedule2.freeTime()); //[ '0:00-9:00', '09:30-12:00', '13:00-15:30', '16:00-18:00', '19:00-24:00' ]


//-----------------------------------------------------------------------------------------------------------------------------------
// Create an object representing a student with properties for name, 
// grade, and attendance, where attendance is an array of booleans 
// representing whether the student was present or absent on each day
// of the school year. Write a method that returns the percentage of days
//  the student was present. To call this method for multiple objects, use apply, call or bind.

function Student(name, grade, attendance) {
  this.name = name;
  this.grade = grade;
  this.attendance = attendance;
}

Student.prototype.getAttendancePercentage = function() {
  const numOfDays = this.attendance.length;
  const numOfPresentDays = this.attendance.filter(Boolean).length;
  return ((numOfPresentDays / numOfDays) * 100).toFixed();
}

const students = [
  new Student("Ann", 10, [true, true, false, true, true, true, false]),
  new Student("Kity", 11, [true, false, true, true, true, true, true]),
  new Student("Phil", 9, [true, true, true, false, true, true, false]),
  new Student("Colin", 8, [true, true, true, false, true, true, false, true, false, false, true]),
];

students.forEach(function(student) {
  const attendancePercentage = Student.prototype.getAttendancePercentage.call(student);
  //   const attendancePercentage = student.getAttendancePercentage();
  console.log(`${student.name} was present for ${attendancePercentage}% of the school year.`);
});

// Ann was present for 71% of the school year.
// Kity was present for 86% of the school year.
// Phil was present for 71% of the school year.
// Colin was present for 64% of the school year.
