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