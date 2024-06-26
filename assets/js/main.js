/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND 
HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll('section[id]')
//  console.log("section is ",sections)
// const scrollActive = () => {
//     const scrollDown = window.scrollY

//     sections.forEach(current => {
//         console.log("current is",current)
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id')
//             console.log(sectionId);
//             const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
               
//         if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//              sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
    /*=============== SHOW SCROLL UP ===============*/
// const scrollUp = () => {
//     const scrollUp = document.getElementById('scroll-up')
//         // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
//     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
//         scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data,.footer__container, .footer__group`)
sr.reveal(`home__img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.logos__img, .program__card`, { interval: 100 })
sr.reveal(`.choose__img,.calculate__content`, { origin: 'left' })
sr.reveal(`.choose__content,.calculate__img`, { origin: 'right' })

/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')
    console.log(contactForm,contactMessage);
contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactUser.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //Show message
        contactMessage.textContent = 'You must enter your email'

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_t1m9k5t', 'template_nlhcsjg', '#contact-form', 'rCWh_Zf3HT_CcZ_wv')
            .then(() => {
                // Show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'

                // Remove message three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                // Mail sending error   
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        // To clear the input field
        contactUser.value = ''    
    }
}
contactForm.addEventListener('submit', sendEmail)