/* problem No 1 start here(Convert radian to degree) */

function radianToDegree(radian) {
  if (typeof radian === "number") {
    const degree = radian * (180 / Math.PI);
    const newdegree = degree.toFixed(2);
    const decimalDegree = parseFloat(newdegree);
    return decimalDegree;
  } else {
    return "Please provide your valid input";
  }
}

// const resultDegree = radianToDegree(10);
const resultDegree = radianToDegree(5);

console.log(resultDegree);

/* problem No 2 start here(check whether the given file name is a javaScript file or not) */

function isJavaScriptFile(string) {
  if (typeof "" !== typeof string) {
    return "Not a js file! Please give a js extention file.";
  } else if (string.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

console.log(isJavaScriptFile("app.jpg.js"));
/* problem No 3 start here(calculate the total oil price that I have to pay) */
function oilPrice(diesel, petrol, octane) {
  const dieselPrice = diesel * 114;
  const petrolPrice = petrol * 130;
  const octanePrice = octane * 135;
  const totalPrice = dieselPrice + petrolPrice + octanePrice;
  if (totalPrice > 0) {
    return totalPrice;
  } else {
    return "please give your valid input .";
  }
}

const totalQuantity = oilPrice(1, 0, 2);

console.log(totalQuantity);
/* problem No 4 start here(publicBusFare) */
function publicBusFare(public) {
  if (typeof "" === typeof public) {
    return "Not a Number!, Please valid input number.";
  } else if (public < -1) {
    return "It's not an Integer number! please give an Integer number";
  } else {
    let busCapacity = 50;
    const totalBus = parseInt(public / busCapacity);

    const totalPublicOfTheBus = busCapacity * totalBus;
    const remainingPublic = public - totalPublicOfTheBus;

    const microBusCapacity = 11;
    const totalMicroBus = parseInt(remainingPublic / microBusCapacity);
    const totalPublicOfTheMicroBus = microBusCapacity * totalMicroBus;

    const lastRemainingPublic =
      public - (totalPublicOfTheBus + totalPublicOfTheMicroBus);

    const remainingPublicBusFare = lastRemainingPublic * 250;
    return remainingPublicBusFare;
  }
}
console.log(publicBusFare(112));
/* problem No 5 start here(isBestFriend) */

function isBestFriend(friendOne, friendTwo) {
  if (typeof friendOne === "object" || typeof friendTwo === "object") {
    if (
      friendOne.name.toLowerCase() === friendTwo.friend.toLowerCase() &&
      friendOne.friend.toLowerCase() === friendTwo.name.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please provide a valid  Object";
  }
}

const bestFriend1 = { name: "abul", friend: "babul" };
const bestFriend2 = { name: "babul", friend: "abul" };
const bestFriend3 = { name: "abul", friend: "kabul" };
const bestFriend4 = { name: "kabul", friend: "Abul" };

const result = isBestFriend(bestFriend3, bestFriend4);
console.log(result);
