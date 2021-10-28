const sectionAPriceMin = 100;
const sectionAPriceMax = 200;

const sectionBPriceMin = 100;
const sectionBPriceMax = 300;

const sectionCPriceMin = 100;
const sectionCPriceMax = 300;

const sectionAPriceElements = [
  document.getElementById("A1seat"),
  document.getElementById("A2seat"),
  document.getElementById("A3seat"),
  document.getElementById("A4seat"),
  document.getElementById("A5seat"),
  document.getElementById("A6seat"),
];
const sectionBPriceElements = [
  document.getElementById("B1seat"),
  document.getElementById("B2seat"),
  document.getElementById("B3seat"),
  document.getElementById("B4seat"),
  document.getElementById("B5seat"),
  document.getElementById("B6seat"),
];
const sectionCPriceElements = [
  document.getElementById("C1seat"),
  document.getElementById("C2seat"),
  document.getElementById("C3seat"),
  document.getElementById("C4seat"),
  document.getElementById("C5seat"),
  document.getElementById("C6seat"),
];

var plane = {
  seats: {
    sectionA: [
      {
        name: "A1",
        price: -1,
        occupied: false,
      },
      {
        name: "A2",
        price: -1,
        occupied: false,
      },
      {
        name: "A3",
        price: -1,
        occupied: false,
      },
      {
        name: "A4",
        price: -1,
        occupied: false,
      },
      {
        name: "A5",
        price: -1,
        occupied: false,
      },
      {
        name: "A6",
        price: -1,
        occupied: false,
      },
    ],
    sectionB: [
      {
        name: "B1",
        price: -1,
        occupied: false,
      },
      {
        name: "B2",
        price: -1,
        occupied: false,
      },
      {
        name: "B3",
        price: -1,
        occupied: false,
      },
      {
        name: "B4",
        price: -1,
        occupied: false,
      },
      {
        name: "B5",
        price: -1,
        occupied: false,
      },
      {
        name: "B6",
        price: -1,
        occupied: false,
      },
    ],
    sectionC: [
      {
        name: "C1",
        price: -1,
        occupied: false,
      },
      {
        name: "C2",
        price: -1,
        occupied: false,
      },
      {
        name: "C3",
        price: -1,
        occupied: false,
      },
      {
        name: "C4",
        price: -1,
        occupied: false,
      },
      {
        name: "C5",
        price: -1,
        occupied: false,
      },
      {
        name: "C6",
        price: -1,
        occupied: false,
      },
    ],
  },
};

function updatePriceElements() {
  for (let i = 0; i < plane.seats.sectionA.length; i++) {
    sectionAPriceElements[i].innerHTML =
      sectionAPriceElements[i].innerHTML +
      "<br>" +
      "<p class='secAPrice'>$" +
      plane.seats.sectionA[i].price +
      "</p>";
    }
    for (let i = 0; i < plane.seats.sectionB.length; i++) {
        sectionBPriceElements[i].innerHTML =
          sectionBPriceElements[i].innerHTML +
          "<br>" +
          "<p class='secBPrice'>$" +
          plane.seats.sectionB[i].price +
          "</p>";
    }
    for (let i = 0; i < plane.seats.sectionC.length; i++) {
        sectionCPriceElements[i].innerHTML =
          sectionCPriceElements[i].innerHTML +
          "<br>" +
          "<p class='secCPrice'>$" +
          plane.seats.sectionC[i].price +
          "</p>";
      }
}

function populateSeatPrice() {
  for (let i = 0; i < plane.seats.sectionA.length; i++) {
    plane.seats.sectionA[i].price = (
      Math.random() * (sectionAPriceMax - sectionAPriceMin) +
      sectionAPriceMin
    ).toFixed(2);
    console.log("seat A" + i + ": $" + plane.seats.sectionA[i].price);
  }
  console.log("");
  for (var i = 0; i < plane.seats.sectionB.length; i++) {
    plane.seats.sectionB[i].price = (
      Math.random() * (sectionBPriceMax - sectionBPriceMin) +
      sectionBPriceMin
    ).toFixed(2);
    console.log("seat B" + i + ": $" + plane.seats.sectionB[i].price);
  }
  console.log("");
  for (var i = 0; i < plane.seats.sectionA.length; i++) {
    plane.seats.sectionC[i].price = (
      Math.random() * (sectionCPriceMax - sectionCPriceMin) +
      sectionCPriceMin
    ).toFixed(2);
    console.log("seat C" + i + ": $" + plane.seats.sectionC[i].price);
  }
  updatePriceElements();
}

console.log("howdy");
populateSeatPrice();

// console.log(seatA1elm.innerHTML);
// sectionAPriceElements[1].innerHTML =
//   sectionAPriceElements[1].innerHTML + "<br>" + "test";
