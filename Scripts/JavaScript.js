// Fetch the relevant image holder.
const NavigationBar_Logo = document.querySelector(".NavigationBar_Logo > img");

// Assign each logo to their own variable for neater code. Change these paths if you want to swap profile pictures.
var DH_Logo = "/Media/Images/DH_Logo.png";
var UH_Logo = "/Media/Images/UH_Logo.png";

// Swap To Unhalted Logo
function NavigationBar_SwapToUHLogo() {
  NavigationBar_Logo.src = UH_Logo;
}

// Swap to Dale Hunt Logo
function NavigationBar_SwapToDHLogo() {
  NavigationBar_Logo.src = DH_Logo;
}

// This requires two seperate functions instead of if/else. Not entirely sure why.

// Check for mouse events and run relevant functions.
NavigationBar_Logo.addEventListener("mouseover", NavigationBar_SwapToUHLogo);
NavigationBar_Logo.addEventListener("mouseout", NavigationBar_SwapToDHLogo);

// Turn Off Background On Click

const ToggleBackgroundButtonOff = document.querySelector(".SocialBar_TurnOffBG");
const ToggleBackgroundButtonOn = document.querySelector(".SocialBar_TurnOnBG");

const NavigationBarContainer = document.querySelector(".NavigationBarContainer");
const NavigationBarContainer_Portfolio = document.querySelector(".NavigationBarContainer_Portfolio");
const HomeContainer = document.querySelector(".HomeContainer");
const AboutMeContainer = document.querySelector(".AboutMeContainer");
const PortfolioContainer = document.querySelector(".PortfolioContainer");
const PersonalProjectsContainer = document.querySelector(".PersonalProjects_PortfolioContainer");
const SocialBarContainer = document.querySelector(".SocialBarContainer");

var BackgroundOffURL = "url('/Media/Images/00_BG_Texture.png')";
var TopBotBarBackgroundURL = "url('/Media/Images/07_BG_Texture.png')";
var ContentBackgroundURL = "url('/Media/Images/02_BG_Texture.png')";

var BGActive = true;

function ToggleBackground() {
  if (BGActive) {
    // Turn BG Off
    if (document.title == "Dale Hunt") {
      HomeContainer.style.backgroundImage = BackgroundOffURL;
      AboutMeContainer.style.backgroundImage = BackgroundOffURL;
      NavigationBarContainer.style.backgroundImage = BackgroundOffURL;
      SocialBarContainer.style.backgroundImage = BackgroundOffURL;
    } else if (document.title == "Portfolio") {
      NavigationBarContainer_Portfolio.style.backgroundImage = BackgroundOffURL;
      PortfolioContainer.style.backgroundImage = BackgroundOffURL;
      SocialBarContainer.style.backgroundImage = BackgroundOffURL;
    } else if (document.title == "Personal Projects") {
      NavigationBarContainer_Portfolio.style.backgroundImage = BackgroundOffURL;
      PersonalProjectsContainer.style.backgroundImage = BackgroundOffURL;
      SocialBarContainer.style.backgroundImage = BackgroundOffURL;
    }
    BGActive = false;
    ToggleBackgroundButtonOff.setAttribute("id", "Hide"); // Hide Off Button
    ToggleBackgroundButtonOn.removeAttribute("id", "Hide"); // Show On Button
  } else {
    if (document.title == "Dale Hunt") {
      HomeContainer.style.backgroundImage = ContentBackgroundURL;
      AboutMeContainer.style.backgroundImage = ContentBackgroundURL;
      NavigationBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
      SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
    } else if (document.title == "Portfolio") {
      PortfolioContainer.style.backgroundImage = ContentBackgroundURL;
      NavigationBarContainer_Portfolio.style.backgroundImage = TopBotBarBackgroundURL;
      SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
    } else if (document.title == "Personal Projects") {
      PersonalProjectsContainer.style.backgroundImage = ContentBackgroundURL;
      NavigationBarContainer_Portfolio.style.backgroundImage = TopBotBarBackgroundURL;
      SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
    }
    BGActive = true;
    ToggleBackgroundButtonOff.removeAttribute("id", "Hide"); // Hide On Button
    ToggleBackgroundButtonOn.setAttribute("id", "Hide"); // Show Off Button
  }
}

ToggleBackgroundButtonOff.addEventListener("click", ToggleBackground);
ToggleBackgroundButtonOn.addEventListener("click", ToggleBackground);

const AerialSpaceContainer = document.querySelector(".University_Assignments_Year_One_AerialSpace_Slideshow");
const AerialSpaceContainerImages = document.querySelectorAll(".University_Assignments_Year_One_AerialSpace_Slideshow > img");
const PrisonRunContainer = document.querySelector(".University_Assignments_Year_One_Prison_Run_Slideshow");
const PrisonRunContainerImages = document.querySelectorAll(".University_Assignments_Year_One_Prison_Run_Slideshow > img");

const AerialSpace_ImageWidth = 600;
const AerialSpace_ImageHeight = 400;

const PrisonRun_ImageWidth = 720;
const PrisonRun_ImageHeight = 360;

// Aerial Space Slideshow

let AerialSpace_CurrentIndex = 0;
let AerialSpaceInterval;
let isMouseInAerialSpace = false;

function startAerialSpaceSlideshow() {
  AerialSpaceInterval = setInterval(AerialSpace_ShowNextImage, 3000);
}

function pauseAerialSpaceSlideshow() {
  clearInterval(AerialSpaceInterval);
}

AerialSpaceContainer.addEventListener("mouseenter", () => {
  isMouseInAerialSpace = true;
  startAerialSpaceSlideshow();
});

AerialSpaceContainer.addEventListener("mouseleave", () => {
  isMouseInAerialSpace = false;
  pauseAerialSpaceSlideshow();
});

AerialSpaceContainerImages.forEach((image, index) => {
  if (index !== AerialSpace_CurrentIndex) {
    image.style.display = "none";
  }
  image.style.width = `${AerialSpace_ImageWidth}px`; // Set the width
  image.style.height = `${AerialSpace_ImageHeight}px`; // Set the height
});

function AerialSpace_ShowNextImage() {
  if (isMouseInAerialSpace) {
    AerialSpaceContainerImages[AerialSpace_CurrentIndex].style.display = "none";
    AerialSpace_CurrentIndex = (AerialSpace_CurrentIndex + 1) % AerialSpaceContainerImages.length;
    AerialSpaceContainerImages[AerialSpace_CurrentIndex].style.display = "block";
  }
}

// Prison Run Slideshow
let PrisonRun_CurrentIndex = 0;
let PrisonRunInterval;
let isMouseInPrisonRun = false;

function startPrisonRunSlideshow() {
  PrisonRunInterval = setInterval(PrisonRun_ShowNextImage, 3000);
}

function pausePrisonRunSlideshow() {
  clearInterval(PrisonRunInterval);
}

PrisonRunContainer.addEventListener("mouseenter", () => {
  isMouseInPrisonRun = true;
  startPrisonRunSlideshow();
});

PrisonRunContainer.addEventListener("mouseleave", () => {
  isMouseInPrisonRun = false;
  pausePrisonRunSlideshow();
});

PrisonRunContainerImages.forEach((image, index) => {
  if (index !== PrisonRun_CurrentIndex) {
    image.style.display = "none";
  }
  image.style.width = `${PrisonRun_ImageWidth}px`; // Set the width
  image.style.height = `${PrisonRun_ImageHeight}px`; // Set the height
});

function PrisonRun_ShowNextImage() {
  if (isMouseInPrisonRun) {
    PrisonRunContainerImages[PrisonRun_CurrentIndex].style.display = "none";
    PrisonRun_CurrentIndex = (PrisonRun_CurrentIndex + 1) % PrisonRunContainerImages.length;
    PrisonRunContainerImages[PrisonRun_CurrentIndex].style.display = "block";
  }
}

startAerialSpaceSlideshow();
startPrisonRunSlideshow();

// https://chat.openai.com/share/769cfb2d-2267-4241-8358-d4bedae4db08
