const url = "./data.json"
const destinationRow = document.querySelector("#destination-row")
let index = 0
let global = null
let destinations = []

async function getData() {
  console.log("getData")
  const response = await fetch(url)
  const data1 = await response.json()
  return (global = data1)
}

//destination js //////////////////////////////////////////////////////////////////////////////////////////////
async function showHTML() {
  data = global ? global : await getData()
  destinations = data.destinations
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

  const listPadre = document.querySelector(".destination-list")
  console.log(listPadre)

  ////////generando dinamicamente los li //////////////////////////////////
  const buttonMaker = (arrayDestination) => {
    for (let index = 0; index < arrayDestination.length; index++) {
      const nuevoLi = document.createElement("li")
      const textLi = document.createTextNode(arrayDestination[index].name)
      listPadre.appendChild(nuevoLi)
      nuevoLi.appendChild(textLi)
      nuevoLi.classList.add("destination-nav")
      nuevoLi.setAttribute("data-id", index)
    }
  }
  buttonMaker(data.destinations)

  ////////capturando y cambiando valores segun index //////////////////////////////////
  function changeDestination(number) {
    console.log("entro a changeDestination")
    var imgDestination = document.getElementById("img-destination")
    var titleDestination = document.getElementById("destination-title")
    var textDestination = document.getElementById("destination-text")
    var kmDestination = document.getElementById("destination-km")
    var daysDestination = document.getElementById("destination-days")
    imgDestination.src = destinations[number].images.png
    titleDestination.innerHTML = destinations[number].name
    textDestination.innerHTML = destinations[number].description
    kmDestination.innerHTML = destinations[number].distance
    daysDestination.innerHTML = destinations[number].travel
  }

  ////////uniendo index con data id de cada li y pasando funcion changeDestination //////////////////////////////////
  const destButtons = document.getElementsByClassName("destination-nav")
  console.log(destButtons)
  for (const button of destButtons) {
    button.addEventListener("click", function buttonClick() {
      var butIndex = button.dataset.id
      index = butIndex
      changeDestination(index)
    })
  }
}

if (typeof destinationRow != undefined && destinationRow != null) {
  window.addEventListener("DOMContentLoaded", showHTML())
}

//Start of navigation bar js ////////////////////////////////////////////////////////////////////////////////////////////////

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

//Crew js //////////////////////////////////////////////////////////////////////////////////////////////

const crewRow = document.querySelector("#crew-row")

async function crewHTML() {
  data = global ? global : await getData()
  crew = data.crew
  console.log(crew)

  const crewwHtml = `
       <div id ="crew-row">
                <div class="col-12 col-lg-6">
                    <div class="crew-top">
                    <p class="text-center text-md-start mt-4 top-title-destination title-crew"> <span class="me-3">02</span>MEET YOUR CREEW</p>
                    </div>
                     <div class="crew-info col order-1 big-screen">
                        <p id="crew-position" class="crew-position text-center text-lg-start">${crew[index].role}</p>
                        <p id="crew-name" class="crew-name text-center text-xl-start">${crew[index].name}</p>
                        <p id="crew-text" class="crew-text text-center text-xl-start">
                            ${crew[index].bio}
                        </p>
                        </div>
                    <div class="crew-top-bot">
                        <div class="crew-nav justify-content-center justify-content-xl-start col order-2">
                            
                        </div>
                        <div class="crew-info col order-1 small-screen">
                        <p id="crew-position" class="crew-position text-center text-lg-start">${crew[index].role}</p>
                        <p id="crew-name" class="crew-name text-center text-xl-start">${crew[index].name}</p>
                        <p id="crew-text" class="crew-text text-center text-xl-start">
                            ${crew[index].bio}
                        </p>
                        </div>
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

  const navPadre = document.querySelector(".crew-nav")
  console.log(navPadre)

  ////////generando dinamicamente los div //////////////////////////////////
  const divMaker = (crewDestination) => {
    for (let index = 0; index < crewDestination.length; index++) {
      const nuevoDiv = document.createElement("div")
      navPadre.appendChild(nuevoDiv)
      nuevoDiv.classList.add("nav-circles")
      nuevoDiv.setAttribute("data-id", index)
    }
  }
  divMaker(data.crew)

  ////////capturando y cambiando valores segun index //////////////////////////////////
  function changeCrew(number) {
    var crewPosition = document.getElementById("crew-position")
    var crewName = document.getElementById("crew-name")
    var crewText = document.getElementById("crew-text")
    var crewImg = document.getElementById("crew-img")

    crewImg.src = crew[number].images.png
    crewText.innerHTML = crew[number].bio
    crewName.innerHTML = crew[number].name
    crewPosition.innerHTML = crew[number].role
  }

  ////////uniendo index con data id de cada div y pasando funcion changeCrew //////////////////////////////////
  const navCircles = document.getElementsByClassName("nav-circles")
  console.log(navCircles)
  for (const button of navCircles) {
    button.addEventListener("click", function buttonClick() {
      console.log(button)
      var butIndex = button.dataset.id
      index = butIndex
      changeCrew(index)
    })
  }
}

if (typeof crewRow != undefined && crewRow != null) {
  window.addEventListener("DOMContentLoaded", crewHTML())
}

//Tech js //////////////////////////////////////////////////////////////////////////////////////////////

const techRow = document.querySelector("#tech-row")

async function techHTML() {
  data = global ? global : await getData()
  tech = data.technology
  console.log(tech)

  const techhHtml = `
            <div id="tech-row" class="row ">
                <div class="col-lg-7">
                    <p class="text-center text-md-start mt-4 top-title-destination title-crew title-tech"> <span class="me-3">03</span>SPACE LAUNCH 101
                    </p>

                    <div class="tech-content">
                        <div class="tech-num d-flex justify-content-center">
                         
                        </div>
                      <div class="tech-bot mt-5">
                        <p id="tech-subtitleId" class="tech-subtitle text-center text-xl-start">THE TERMINOLOGY...</p>
                        <p id="tech-titleId" class="tech-title text-center text-xl-start">${tech[index].name}</p>
                        <p id="tech-textId" class="tech-text text-center text-xl-start">${tech[index].description}</p>
                         
                      </div>
                    </div>

                </div>

                <div class="col-lg-5">
                    <div class="tech-img">
                        <img id="techimgId" class="techimg" src=${tech[index].images.landscape} alt="">
                        <img id="techimg-bigId" class="techimg-big" src=${tech[index].images.portrait} alt="">
                    </div>
                </div>
                   
            </div>
       
      `
  techRow.innerHTML = techhHtml

  const techPadre = document.querySelector(".tech-num")

  ////////generando dinamicamente los div //////////////////////////////////
  const techMaker = (arrayTech) => {
    for (let index = 0; index < arrayTech.length; index++) {
      const nuevoDiv = document.createElement("div")
      const textNuevoDiv = document.createTextNode(index + 1)
      techPadre.appendChild(nuevoDiv)
      nuevoDiv.appendChild(textNuevoDiv)
      nuevoDiv.classList.add("numcircles")
      nuevoDiv.setAttribute("data-id", index)
    }
  }
  techMaker(data.technology)

  ////////capturando y cambiando valores segun index //////////////////////////////////
  function changeTech(number) {
    var techTitle = document.getElementById("tech-titleId")
    var techText = document.getElementById("tech-textId")
    var techImg = document.getElementById("techimgId")
    var techImgBig = document.getElementById("techimg-bigId")

    techImg.src = tech[number].images.landscape
    techImgBig.src = tech[number].images.portrait
    techText.innerHTML = tech[number].description
    techTitle.innerHTML = tech[number].name
  }

  ////////uniendo index con data id de cada div y pasando funcion changeTech //////////////////////////////////
  const techNumbers = document.getElementsByClassName("numcircles")
  console.log(techNumbers)
  for (const button of techNumbers) {
    button.addEventListener("click", function buttonClick() {
      var butIndex = button.dataset.id
      index = butIndex
      changeTech(index)
    })
  }
}

if (typeof techRow != undefined && techRow != null) {
  window.addEventListener("DOMContentLoaded", techHTML())
}
