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
        else if (document.title == "Portfolio" || document.title == "Personal Projects")
        {
            NavigationBarContainer_Portfolio.style.backgroundImage = BackgroundOffURL;
            PortfolioContainer.style.backgroundImage = BackgroundOffURL;
            SocialBarContainer.style.backgroundImage = BackgroundOffURL;
        }
        BGActive = false;
        ToggleBackgroundButtonOff.setAttribute("id", "Hide") // Hide Off Button
        ToggleBackgroundButtonOn.removeAttribute("id", "Hide") // Show On Button
    }
    else // Turn BG On
    {
        if (document.title == "Dale Hunt")
        {
            HomeContainer.style.backgroundImage = ContentBackgroundURL;
            AboutMeContainer.style.backgroundImage = ContentBackgroundURL;
            NavigationBarContainer.style.backgroundImage = TopBotBarBackgroundURL;
            SocialBarContainer.style.backgroundImage = TopBotBarBackgroundURL;          
        }
        else if (document.title == "Portfolio" || document.title == "Personal Projects")
        {
            PortfolioContainer.style.backgroundImage = ContentBackgroundURL;
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