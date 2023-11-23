/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: string): boolean {
  return Weekend[day] ? true : false;
}
