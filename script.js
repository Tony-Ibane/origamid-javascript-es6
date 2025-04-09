const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('active');


    function activeTab(section) {
        tabContent.forEach((i) => {
            i.classList.remove('active');
        })
        tabContent[section].classList.add('active');
    }

    tabMenu.forEach((menuItem, i) => {
        menuItem.addEventListener('click', () => {
            activeTab(i);
        })
    })
}