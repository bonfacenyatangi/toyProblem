
// Challenge 2:
// Speed Detector (Toy Problem)
// Write a program that takes as input the speed of a car
// e.g 80. If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.

// Take the speed input from the car and assign it to a variable


function speedCheck(carSpeed) {
  if (carSpeed <= 70) {
    return "Ok"
  } else if (carSpeed > 70) {
    newCarSpeed = carSpeed - 70;
    demeritPoints = newCarSpeed / 5;

    if (demeritPoints > 12) {
      return "License Suspended";
    }
  }
  return demeritPoints;
}
// console.log(speedCheck(90));
