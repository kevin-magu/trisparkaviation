function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    if (sideMenu.style.right === '0px') {
        sideMenu.style.right = '-400px'; // Slide out
    } else {
        sideMenu.style.right = '0px'; // Slide in
    }
    console.log("button is pressed");
}
