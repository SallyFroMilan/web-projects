// Image switcher code

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefoxgrey.png") {
    myImage.setAttribute("src", "images/foxworld.png");
  } else {
    myImage.setAttribute("src", "images/firefoxgrey.png");
  }
}

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1"); 

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
<<<<<<< HEAD
  }
=======
  }
>>>>>>> 8a93e0e7229675cc3f71d6558d2e305ed6f9390b
