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
var sectionAPriceValueElement = [];
var sectionBPriceValueElement = [];
var sectionCPriceValueElement = [];

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

function populateSeatPrice() {
  let temp = (
    Math.random() * (sectionAPriceMax - sectionAPriceMin) +
    sectionAPriceMin
  ).toFixed(2);
  for (let i = 0; i < plane.seats.sectionA.length; i++) {
    plane.seats.sectionA[i].price = temp;
    console.log("seat A" + i + ": $" + plane.seats.sectionA[i].price);
  }
  console.log("");
  for (var i = 0; i < plane.seats.sectionB.length; i++) {
    plane.seats.sectionB[i].price = temp;
    console.log("seat B" + i + ": $" + plane.seats.sectionB[i].price);
  }
  console.log("");
  for (var i = 0; i < plane.seats.sectionA.length; i++) {
    plane.seats.sectionC[i].price = temp;
    console.log("seat C" + i + ": $" + plane.seats.sectionC[i].price);
  }
}

function updatePriceElements() {
  for (let i = 0; i < plane.seats.sectionA.length; i++) {
    sectionAPriceElements[i].innerHTML = `${
      sectionAPriceElements[i].innerHTML
    }<br><p class='secAPrice'><p class='transparent' id='A${
      i + 1
    }seatPriceValue'>$${plane.seats.sectionA[i].price}</p></p>`;
  }

  for (let i = 0; i < plane.seats.sectionB.length; i++) {
    sectionBPriceElements[i].innerHTML = `${
      sectionBPriceElements[i].innerHTML
    }<br><p class='secBPrice'><p class='transparent' id='B${
      i + 1
    }seatPriceValue'>$${plane.seats.sectionB[i].price}</p></p>`;
    console.log(sectionBPriceElements[i]);
  }

  for (let i = 0; i < plane.seats.sectionC.length; i++) {
    sectionCPriceElements[i].innerHTML = `${
      sectionCPriceElements[i].innerHTML
    }<br><p class='secCPrice'><p class='transparent' id='C${
      i + 1
    }seatPriceValue'>$${plane.seats.sectionC[i].price}</p></p>`;
  }
}

function loadPriceElements() {
  sectionAPriceValueElement = [
    document.getElementById("A1seatPriceValue"),
    document.getElementById("A2seatPriceValue"),
    document.getElementById("A3seatPriceValue"),
    document.getElementById("A4seatPriceValue"),
    document.getElementById("A5seatPriceValue"),
    document.getElementById("A6seatPriceValue"),
  ];
  sectionBPriceValueElement = [
    document.getElementById("B1seatPriceValue"),
    document.getElementById("B2seatPriceValue"),
    document.getElementById("B3seatPriceValue"),
    document.getElementById("B4seatPriceValue"),
    document.getElementById("B5seatPriceValue"),
    document.getElementById("B6seatPriceValue"),
  ];
  sectionCPriceValueElement = [
    document.getElementById("C1seatPriceValue"),
    document.getElementById("C2seatPriceValue"),
    document.getElementById("C3seatPriceValue"),
    document.getElementById("C4seatPriceValue"),
    document.getElementById("C5seatPriceValue"),
    document.getElementById("C6seatPriceValue"),
  ];
}

function updatePriceFontColor() {
  //   let temp = [];
  //   let tempSorted = [];
  //   let red = 255;
  //   let green = 0;
  //   // sorts temp by first member value
  //   for (let i = 0; i < plane.seats.sectionA.length; i++) {
  //     temp.push([plane.seats.sectionA[i].price, plane.seats.sectionA[i].name]);
  //   }
  //   tempSorted = temp.sort((a, b) => {
  //     return b[0] - a[0];
  //   });
  //   red = 255;
  //   green = 0;
  //   for (let i = 0; i < tempSorted.length; i++) {
  //     sectionAPriceValueElement[
  //       parseInt(tempSorted[i][1].charAt(1)) - 1
  //     ].style.color = `RGB(${red},${green},0)`;
  //     red -= 51;
  //     green += 51;
  //     // console.log((tempSorted[i][1]).charAt(1) - 1);
  //   }
  //   temp = [];
  //   for (let i = 0; i < plane.seats.sectionB.length; i++) {
  //     temp.push([plane.seats.sectionB[i].price, plane.seats.sectionB[i].name]);
  //   }
  //   tempSorted = temp.sort((a, b) => {
  //     return b[0] - a[0];
  //   });
  //   red = 255;
  //   green = 0;
  //   for (let i = 0; i < tempSorted.length; i++) {
  //     sectionBPriceValueElement[
  //       parseInt(tempSorted[i][1].charAt(1)) - 1
  //     ].style.color = `RGB(${red},${green},0)`;
  //     red -= 51;
  //     green += 51;
  //     console.log(
  //       sectionBPriceValueElement[parseInt(tempSorted[i][1].charAt(1)) - 1]
  //     );
  //     // console.log((tempSorted[i][1]).charAt(1) - 1);
  //   }
  //   temp = [];
  //   for (let i = 0; i < plane.seats.sectionC.length; i++) {
  //     temp.push([plane.seats.sectionC[i].price, plane.seats.sectionC[i].name]);
  //   }
  //   tempSorted = temp.sort((a, b) => {
  //     return b[0] - a[0];
  //   });
  //   red = 255;
  //   green = 0;
  //   for (let i = 0; i < tempSorted.length; i++) {
  //     sectionCPriceValueElement[
  //       parseInt(tempSorted[i][1].charAt(1)) - 1
  //     ].style.color = `RGB(${red},${green},0)`;
  //     red -= 51;
  //     green += 51;
  //     console.log(
  //       sectionCPriceValueElement[parseInt(tempSorted[i][1].charAt(1)) - 1]
  //     );
  //     // console.log((tempSorted[i][1]).charAt(1) - 1);
  //     }
  for (let i = 0; i < sectionAPriceElements.length; i++) {
    sectionAPriceValueElement[i].style.color = "#455e58";
  }
  for (let i = 0; i < sectionBPriceElements.length; i++) {
    sectionBPriceValueElement[i].style.color = "#12444b";
  }
  for (let i = 0; i < sectionCPriceElements.length; i++) {
    sectionCPriceValueElement[i].style.color = "#245441";
  }
  // temp = [];
  // for (let i = 0; i < plane.seats.sectionC.length; i++) {
  //   temp.push([plane.seats.sectionC[i].price, plane.seats.sectionC[i].name]);
  // }
  // tempSorted = temp.sort((a, b) => {
  //   return b[0] - a[0];
  // });
  // red = 255;
  // green = 0;
  // for (let i = 0; i < tmpSorted.length; i++) {
  //   sectionCPriceValueElement[
  //     parseInt(tempSorted[i][1].charAt(1)) - 1
  //   ].style.color = `RGB(${red},${green},0)`;
  //   red -= 51;
  //   green += 51;
  //   // console.log((tempSorted[i][1]).charAt(1) - 1);
  // }
  // console.log(tempSorted);
  //   sectionAPriceValueElement[0].style.color = "black";
  // document.getElementById("A1seatPriceValue").style.color = 'red'
}
// seatClicked(arg){

// }

console.log("howdy");

populateSeatPrice();
updatePriceElements();
loadPriceElements();
updatePriceFontColor();

// console.log(sectionAPriceValueElement[0]);
// sectionBPriceValueElement[1].style.color = 'blue'

// console.log(seatA1elm.innerHTML);
// sectionAPriceElements[1].innerHTML =
//   sectionAPriceElements[1].innerHTML + "<br>" + "test"
