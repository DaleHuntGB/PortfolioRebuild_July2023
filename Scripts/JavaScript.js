// Fetch the relevant image holder.
var NavigationBar_Logo = document.querySelector(".NavigationBar_Logo > img")

// Assign each logo to their own variable for neater code. Change these paths if you want to swap profile pictures.
const DH_Logo = "/Media/Images/DH_Logo.png";
const UH_Logo = "/Media/Images/UH_Logo.png";

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

var ToggleBackgroundButton = document.querySelector(".SocialBar_TurnOffBG")
ToggleBackgroundButton.style.color = "#40FF40"
ToggleBackgroundButton.innerHTML = "Background: On"

var NavigationBarContainer = document.querySelector(".NavigationBarContainer")
var NavigationBarContainer_Portfolio = document.querySelector(".NavigationBarContainer_Portfolio")
var HomeContainer = document.querySelector(".HomeContainer")
var AboutMeContainer = document.querySelector(".AboutMeContainer")
var PortfolioContainer = document.querySelector(".PortfolioContainer")
var SocialBarContainer = document.querySelector(".SocialBarContainer")
var BGActive = true;

function ToggleBackground()
{
    if (BGActive)
    {

        if (document.title == "Dale Hunt")
        {
            HomeContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
            AboutMeContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
            NavigationBarContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
            SocialBarContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
        }
        else if (document.title == "Portfolio" || document.title == "Personal Projects")
        {
            NavigationBarContainer_Portfolio.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
            PortfolioContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
            SocialBarContainer.style.backgroundImage = "url('/Media/Images/04_BG_Texture.png')";
        }
        ToggleBackgroundButton.style.color = "#FF4040"
        ToggleBackgroundButton.innerHTML = "Background: Off"
        BGActive = false;
    }
    else
    {
        if (document.title == "Dale Hunt")
        {
            HomeContainer.style.backgroundImage = "url('/Media/Images/02_BG_Texture.png')";
            AboutMeContainer.style.backgroundImage = "url('/Media/Images/02_BG_Texture.png')";
            NavigationBarContainer.style.backgroundImage = "url('/Media/Images/07_BG_Texture.png')";
            SocialBarContainer.style.backgroundImage = "url('/Media/Images/07_BG_Texture.png')";
        }
        else if (document.title == "Portfolio" || document.title == "Personal Projects")
        {
            NavigationBarContainer_Portfolio.style.backgroundImage = "url('/Media/Images/07_BG_Texture.png')";
            PortfolioContainer.style.backgroundImage = "url('/Media/Images/02_BG_Texture.png')";
            SocialBarContainer.style.backgroundImage = "url('/Media/Images/07_BG_Texture.png')";
        }

        ToggleBackgroundButton.style.color = "#40FF40"
        ToggleBackgroundButton.innerHTML = "Background: On"
        BGActive = true;
    }
    
}

ToggleBackgroundButton.addEventListener("click", ToggleBackground)
