// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// const square = x => x * x;
// console.log(square(5));

const event = {
  name: "Birthday Party",
  guestList: ["Kejvi", "Egi", "Denis"],
  printGuestList() {
    console.log("Guest List for " + this.name);
    this.guestList.forEach(value => {
      console.log(value + " is attending " + this.name);
    });
  }
};
event.printGuestList();
