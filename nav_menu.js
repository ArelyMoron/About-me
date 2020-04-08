isVisible = false;
Menu = document.getElementById("navbar");
Icon = document.getElementById("button-icon");
function Onclick_menu()
{
    if(isVisible == false)
    {
        Icon.classList.remove("fa-bars");
        Icon.classList.add("fa-times");
        Menu.style.opacity = "1"; 
        Menu.style.zIndex = "1"
        isVisible = true;
    }

    else
    {
        Icon.classList.remove("fa-times");
        Icon.classList.add("fa-bars");
        Menu.style.opacity = "0";
        Menu.style.zIndex = "-1"
        isVisible = false;
    }
}