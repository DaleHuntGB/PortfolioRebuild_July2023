var NavigationBar_Logo = document.querySelector(".NavigationBar_Logo > img")
const DH_Logo = "/Media/Images/DH_Logo.png";
const UH_Logo = "/Media/Images/UH_Logo.png";

console.log(NavigationBar_Logo.src)

function NavigationBar_SwapToUHLogo()
{
    NavigationBar_Logo.src = UH_Logo
}

function NavigationBar_SwapToDHLogo()
{
    NavigationBar_Logo.src = DH_Logo
}

NavigationBar_Logo.addEventListener("mouseover", NavigationBar_SwapToUHLogo)
NavigationBar_Logo.addEventListener("mouseout", NavigationBar_SwapToDHLogo)