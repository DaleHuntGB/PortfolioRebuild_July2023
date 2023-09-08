// Fetch the relevant image holder.
const NavigationBar_Logo = document.querySelector(".NavigationBar_Logo > img")

// Assign each logo to their own variable for neater code. Change these paths if you want to swap profile pictures.
var DH_Logo = "/Media/Images/DH_Logo.png";
var UH_Logo = "/Media/Images/UH_Logo.png";

// Swap To Unhalted Logo
function NavigationBar_SwapToUHLogo()
{
    NavigationBar_Logo.src = UH_Logo
}

// Swap to Dale Hunt Logo
function NavigationBar_SwapToDHLogo()
{
    NavigationBar_Logo.src = DH_Logo
}

// This requires two seperate functions instead of if/else. Not entirely sure why.

// Check for mouse events and run relevant functions.
NavigationBar_Logo.addEventListener("mouseover", NavigationBar_SwapToUHLogo)
NavigationBar_Logo.addEventListener("mouseout", NavigationBar_SwapToDHLogo)

// Turn Off Background On Click

const ToggleBackgroundButtonOff = document.querySelector(".SocialBar_TurnOffBG")
const ToggleBackgroundButtonOn = document.querySelector(".SocialBar_TurnOnBG")

const NavigationBarContainer = document.querySelector(".NavigationBarContainer")
const NavigationBarContainer_Portfolio = document.querySelector(".NavigationBarContainer_Portfolio")
const HomeContainer = document.querySelector(".HomeContainer")
const AboutMeContainer = document.querySelector(".AboutMeContainer")
const PortfolioContainer = document.querySelector(".PortfolioContainer")
const PersonalProjectsContainer = document.querySelector(".PersonalProjects_PortfolioContainer")
const SocialBarContainer = document.querySelector(".SocialBarContainer")

var BackgroundOffURL = "url('/Media/Images/00_BG_Texture.png')"
var TopBotBarBackgroundURL = "url('/Media/Images/07_BG_Texture.png')"
var ContentBackgroundURL = "url('/Media/Images/02_BG_Texture.png')"

var BGActive = true;

function ToggleBackground()
{
    if (BGActive) // Turn BG Off
    {
        if (document.title == "Dale Hunt")
        {
            HomeContainer.style.backgroundImage = BackgroundOffURL;
            AboutMeContainer.style.backgroundImage = BackgroundOffURL;
            NavigationBarContainer.style.backgroundImage = BackgroundOffURL;
            SocialBarContainer.style.backgroundImage = BackgroundOffURL;
        }
        else if (document.title == "Portfolio")
        {
            NavigationBarContainer_Portfolio.style.backgroundImage = BackgroundOffURL;
            PortfolioContainer.style.backgroundImage = BackgroundOffURL;
            SocialBarContainer.style.backgroundImage = BackgroundOffURL;
        }
        else if (document.title == "Personal Projects")
        {
            NavigationBarContainer_Portfolio.style.backgroundImage = BackgroundOffURL;
            PersonalProjectsContainer.style.backgroundImage = BackgroundOffURL;
            SocialBarContainer.style.backgroundImage = BackgroundOffURL;
        }
        BGActive = false;
        ToggleBackgroundButtonOff.setAttribute("id", "Hide") // Hide Off Button
        ToggleBackgroundButtonOn.removeAttribute("id", "Hide") // Show On Button
    }
    else
    {
        if (document.title == "Dale Hunt")
        {
            HomeContainer.style.backgroundImage = ContentBackgroundURL;
            AboutMeContainer.style.backgroundImage = ContentBackgroundURL;
            NavigationBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
            SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;          
        }
        else if (document.title == "Portfolio")
        {
            PortfolioContainer.style.backgroundImage = ContentBackgroundURL;
            NavigationBarContainer_Portfolio.style.backgroundImage = TopBotBarBackgroundURL;
            SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
        }
        else if (document.title == "Personal Projects")
        {
            PersonalProjectsContainer.style.backgroundImage = ContentBackgroundURL;
            NavigationBarContainer_Portfolio.style.backgroundImage = TopBotBarBackgroundURL;
            SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
        }
        BGActive = true;
        ToggleBackgroundButtonOff.removeAttribute("id", "Hide") // Hide On Button
        ToggleBackgroundButtonOn.setAttribute("id", "Hide") // Show Off Button
    }
}

ToggleBackgroundButtonOff.addEventListener("click", ToggleBackground)
ToggleBackgroundButtonOn.addEventListener("click", ToggleBackground)

// Get references to the container and image elements
const container = document.querySelector('.University_Assignments_Year_One_AerialSpace_Slideshow');
const images = document.querySelectorAll('.University_Assignments_Year_One_AerialSpace_Slideshow > img');

// Set a fixed size for all images (adjust these values as needed)
const imageWidth = 600; // Set your desired width
const imageHeight = 400; // Set your desired height

// Set initial index and hide all images
let currentIndex = 0;
images.forEach((image, index) => {
  if (index !== currentIndex) {
    image.style.display = 'none';
  }
  image.style.width = `${imageWidth}px`; // Set the width
  image.style.height = `${imageHeight}px`; // Set the height
});

// Function to display the next image
function showNextImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}

// Function to display the previous image
function showPrevImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].style.display = 'block';
}

// Add event listeners for next and previous buttons if you have them
// Example:
// const nextButton = document.getElementById('nextButton');
// const prevButton = document.getElementById('prevButton');
// nextButton.addEventListener('click', showNextImage);
// prevButton.addEventListener('click', showPrevImage);

// You can also add a setInterval to automatically change images
// Example:
setInterval(showNextImage, 1000); // Change image every 5 seconds

