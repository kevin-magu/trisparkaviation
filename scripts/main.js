function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    
    if (sideMenu.style.display === 'none' || sideMenu.style.display === '') {
        sideMenu.style.display = 'flex'; // Show the menu
    } else {
        sideMenu.style.display = 'none'; // Hide the menu
    }
    console.log("button is pressed");
}
