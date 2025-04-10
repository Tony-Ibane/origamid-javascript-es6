function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const activeClass = 'active'
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add(activeClass);


        function activeTab(section) {
            tabContent.forEach((i) => {
                i.classList.remove(activeClass);
            })
            tabContent[section].classList.add(activeClass);
        }

        tabMenu.forEach((menuItem, i) => {
            menuItem.addEventListener('click', () => {
                activeTab(i);
            })
        })
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active'
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((i) => {
            i.addEventListener('click', activeAccordion);
        })
    }
}
initAccordion();

const internLinks = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo(section);
}

internLinks.forEach((link)=>{
    link.addEventListener('click', scrollToSection);
});