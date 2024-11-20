let currentURL = window.location.href;
const menuItems = document.querySelectorAll("nav>ul>li>a");
menuItems.forEach(item => {
    if(item.href === currentURL){
        item.classList.add('active');
    }
});
    