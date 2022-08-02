const url = "./data.json"
const destinationRow = document.querySelector("#destination-row")
let index = 0

async function getData() {
  const response = await fetch(url)
  const data1 = await response.json()
  return data1
}

//destination js //////////////////////////////////////////////////////////////////////////////////////////////
async function showHTML() {
  const data = await getData()
  const destinations = data.destinations

  console.log(destinations)
  const html = `
       <div class="row destination">
                <div class="col-lg-6 d-flex flex-column justify-content-center">
                    <p class="text-center text-md-start mb-4 top-title-destination"> <span class="me-3">01</span>PICK YOUR DESTINATION</p>
                    <img id="img-destination" class="img-destination" src=${destinations[index].images.png} alt="">
                </div>

                <div class="col-lg-6 colito">

                <div class="destination-selection mt-4">
                    <ul class="d-flex justify-content-center destination-list">
                        <li id="moon-button" >MOON</li>
                        <li id="mars-button" >MARS</li>
                        <li id="europa-button" >EUROPA</li>
                        <li id="titan-button" >TITAN</li>
                    </ul>
                </div>
                <h2 id="destination-title" class="destination-title">${destinations[index].name}</h2>
                <p id="destination-text" class="destination-text">
                    ${destinations[index].description}
                </p>
                  <div class="lopito">
                <hr class="line my-4">
                </div>
                <div class="botton-destination d-flex flex-md-row justify-content-md-evenly justify-content-lg-start flex-column align-items-center mb-3">
                    <div class="distance text-center">
                        <p class="bottom-dest-title">AVG. DISTANCE</p>
                        <p id="destination-km" class="bottom-dest-number">${destinations[index].distance}</p>
                    </div>
                    <div class="bottom-time text-center mt-2">
                        <p class="bottom-dest-title">EST. TRAVEL TIME</p>
                        <p id="destination-days" class="bottom-dest-number">${destinations[index].travel}</p>
                    </div>
                </div>
                </div>
        </div>
      `
  destinationRow.innerHTML = html
  const moonButton = document.getElementById("moon-button")
  const marsButton = document.getElementById("mars-button")
  const europaButton = document.getElementById("europa-button")
  const titanButton = document.getElementById("titan-button")

  function handleClick(value) {
    index = value
    showHTML()
  }

  moonButton.addEventListener("click", () => handleClick(0))
  marsButton.addEventListener("click", () => handleClick(1))
  europaButton.addEventListener("click", () => handleClick(2))
  titanButton.addEventListener("click", () => handleClick(3))
}

if (typeof destinationRow != undefined && destinationRow != null) {
  window.addEventListener("DOMContentLoaded", showHTML())
}

//Start of navigation bar js ////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Script loaded nav bar")
var menu1 = new Image()
menu1.src = "assets/shared/icon-hamburger.svg"
var menu2 = new Image()
menu2.src = "assets/shared/icon-close.svg"

var navLinks = document.getElementById("nav-links")
var hamMenu = document.getElementById("toggle-ham-menu")

var homeNavBtn = document.getElementById("home-nav-btn")
var destNavBtn = document.getElementById("dest-nav-btn")
var crewNavBtn = document.getElementById("crew-nav-btn")
var techNavBtn = document.getElementById("tech-nav-btn")

var hamMenuIcon = document.getElementById("toggle-ham-menu").appendChild(menu1)

function imgClick() {
  if (hamMenuIcon.src.match("assets/shared/icon-hamburger.svg")) {
    hamMenuIcon.src = "assets/shared/icon-close.svg"

    navLinks.classList.add("navbar-links-active")
    navLinks.style.display = "block"
  } else {
    hamMenuIcon.src = "assets/shared/icon-hamburger.svg"
    navLinks.classList.remove("navbar-links-active")
    navLinks.style.display = "none"
  }
}
homeNavBtn.classList.add("nav-btn-active")
if (window.location.href.indexOf("index") != -1) {
  homeNavBtn.classList.add("nav-btn-active")
} else if (window.location.href.indexOf("destination") != -1) {
  destNavBtn.classList.add("nav-btn-active")
  homeNavBtn.classList.remove("nav-btn-active")
} else if (window.location.href.indexOf("crew") != -1) {
  crewNavBtn.classList.add("nav-btn-active")
  homeNavBtn.classList.remove("nav-btn-active")
} else if (window.location.href.indexOf("tech") != -1) {
  techNavBtn.classList.add("nav-btn-active")
  homeNavBtn.classList.remove("nav-btn-active")
}

function exploreButtonHover() {
  console.log("Lopo")
}

//Crew js //////////////////////////////////////////////////////////////////////////////////////////////

const crewRow = document.querySelector("#crew-row")

async function crewHTML() {
  const data = await getData()
  const crew = data.crew

  console.log(crew)
  const crewwHtml = `
       <div id ="crew-row">
                <div class="col-12 col-lg-6">
                    <div class="crew-top">
                    <p class="text-center text-md-start mt-4 top-title-destination title-crew"> <span class="me-3">02</span>MEET YOUR CREEW</p>
                    </div>

                    <div class="crew-top-bot">
                        <div class="crew-nav justify-content-center justify-content-xl-start">
                            <div class="nav-circles" id="navcirc1"></div>
                            <div class="nav-circles" id="navcirc2"></div>
                            <div class="nav-circles" id="navcirc3"></div>
                            <div class="nav-circles" id="navcirc4"></div>
                        </div>
                        <p id="crew-position" class="crew-position text-center text-lg-start">${crew[index].role}</p>
                        <p id="crew-name" class="crew-name text-center text-xl-start">${crew[index].name}</p>
                        <p id="crew-text" class="crew-text text-center text-xl-start">
                            ${crew[index].bio}
                        </p>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="crew-bottom">
                       <img id="crew-img" class="crew-img" src=${crew[index].images.png} alt="">
                       <hr class="crew-line">
                    </div>
                </div>
             </div>
      `
  crewRow.innerHTML = crewwHtml
  const navCirc1 = document.getElementById("navcirc1")
  const navCirc2 = document.getElementById("navcirc2")
  const navCirc3 = document.getElementById("navcirc3")
  const navCirc4 = document.getElementById("navcirc4")

  function handleClick(value) {
    index = value
    crewHTML()
  }

  navCirc1.addEventListener("click", () => handleClick(0))
  navCirc2.addEventListener("click", () => handleClick(1))
  navCirc3.addEventListener("click", () => handleClick(2))
  navCirc4.addEventListener("click", () => handleClick(3))
}

if (typeof crewRow != undefined && crewRow != null) {
  window.addEventListener("DOMContentLoaded", crewHTML())
}

//Tech js //////////////////////////////////////////////////////////////////////////////////////////////

const techRow = document.querySelector("#tech-row")

async function techHTML() {
  const data = await getData()
  const tech = data.technology

  console.log(tech)
  const techhHtml = `
            <div id="tech-row" class="row ">
                <div class="col-lg-7">
                    <p class="text-center text-md-start mt-4 top-title-destination title-crew title-tech"> <span class="me-3">03</span>SPACE LAUNCH 101
                    </p>

                    <div class="tech-content">
                        <div class="tech-num d-flex justify-content-center">
                         <div class="num" id="tech1">1</div>
                         <div class="num" id="tech2">2</div>
                         <div class="num" id="tech3">3</div>
                        </div>
                      <div class="tech-bot mt-5">
                        <p class="tech-subtitle text-center text-xl-start">THE TERMINOLOGY...</p>
                        <p class="tech-title text-center text-xl-start">${tech[index].name}</p>
                        <p class="tech-text text-center text-xl-start">${tech[index].description}</p>

                      </div>
                    </div>

                </div>

                <div class="col-lg-5">
                    <div class="tech-img">
                        <img class="techimg" src=${tech[index].images.landscape} alt="">
                        <img class="techimg-big" src=${tech[index].images.portrait} alt="">
                    </div>
                </div>
                   
            </div>
       
      `
  techRow.innerHTML = techhHtml
  const tech1 = document.getElementById("tech1")
  const tech2 = document.getElementById("tech2")
  const tech3 = document.getElementById("tech3")

  function handleClick(value) {
    index = value
    techHTML()
  }

  tech1.addEventListener("click", () => handleClick(0))
  tech2.addEventListener("click", () => handleClick(1))
  tech3.addEventListener("click", () => handleClick(2))
}

if (typeof techRow != undefined && techRow != null) {
  window.addEventListener("DOMContentLoaded", techHTML())
}
