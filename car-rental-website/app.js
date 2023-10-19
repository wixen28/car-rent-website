
const data = [
    {
        id: 1,
        name: 'Peter',
        img1: "./images/star-full.png",
        img2: "./images/star-full.png",
        img3: "./images/star-full.png",
        img4: "./images/star-full.png",
        img5: "./images/star-full.png",
        description: 'looooorem'
    }, 
    {
        id: 2,
        name: 'Kristina', 
        img1: "./images/star-full.png",
        img2: "./images/star-full.png",
        img3: "./images/star-full.png",
        img4: "./images/star-full.png",
        img5: "./images/star.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!'
    },
    {
        id: 3,
        name: 'David', 
        img1: "./images/star-full.png",
        img2: "./images/star-full.png",
        img3: "./images/star-full.png",
        img4: "./images/star-full.png",
        img5: "./images/star-full.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!'
    },
    {
        id: 4,
        name: 'Chewie', 
        img1: "./images/star-full.png",
        img2: "./images/star-full.png",
        img3: "./images/star-full.png",
        img4: "./images/star.png",
        img5: "./images/star.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!'
    },
    {
        id: 5,
        name: 'Chilli', 
        img1: "./images/star-full.png",
        img2: "./images/star-full.png",
        img3: "./images/star-full.png",
        img4: "./images/star-full.png",
        img5: "./images/star.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!'
    },
    {
        id: 6,
        name: 'Kristina', 
        img1: "./images/star-full.png",
        img2: "./images/star.png",
        img3: "./images/star.png",
        img4: "./images/star.png",
        img5: "./images/star.png",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!'
    },
]


const menuIcon = document.querySelector('.img-menu')
const pages = document.querySelectorAll('.pages')
const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const reviews = document.querySelectorAll('.review')
const container = document.querySelector('.review-part')
const logInBtn = document.querySelector('.sign-up')
const myBooking = document.querySelector('#my-booking')
const loginButton = document.querySelector('.login-btn')
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

// const signUpCars = document.querySelector('.sign-up-cars')
const closeBtn = document.querySelector('.close-btn')
const loginContainer = document.querySelector('.login-part')
console.log(myBooking)
//menu shower
menuIcon.addEventListener('click', function(e){
    e.preventDefault()
    pages.forEach( (onePage) => {
        onePage.classList.toggle('active')
        if(onePage.classList.contains('active')) {
            document.querySelector('.menu-icon').src = './images/icon-close-menu.svg'
        } else if (!onePage.classList.contains('active')) {
            document.querySelector('.menu-icon').src = './images/icon-menu.svg'
        }
    })
})

//validate login function
const validateLogin = () => {
    if(usernameInput.value !== "" && passwordInput.value !== "" && passwordInput.value.length >= 8) {
         window.open('myBooking.html')
    }
}

loginButton.addEventListener('click', function(e) {
    validateLogin()
})



closeBtn.addEventListener('click', function(e){
    loginContainer.style.display = 'none'
})

logInBtn.addEventListener('click', function(e) {
        loginContainer.style.display = 'block'
    })

myBooking.addEventListener('click', function(e) {
    loginContainer.style.display = 'block'
})  




//show reviews in website
// function showReviews() {
//     const showInHTML = data.map ( (onePerson, index) => {
//         console.log(index)
//         return `<div class="review hide-review" id="0">
//                 <h1 class="user-name">${onePerson.name}</h1>
//                 <div class="stars">
//                     <img src='${onePerson.img1}' alt="star" class="star">
//                     <img src="${onePerson.img2}" alt="star" class="star">
//                     <img src="${onePerson.img3}" alt="star" class="star">
//                     <img src="${onePerson.img4}" alt="star" class="star">
//                     <img src="${onePerson.img5}" alt="star" class="star">
//                 </div> 
//                 <p class=${onePerson.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo enim veniam itaque? Provident quas tempore veniam facere, ad accusantium!</p>
//                 <hr>
//                 </div>`
//     }).join('')

//     document.querySelector('.rew-section').innerHTML = showInHTML
   
// }



leftArrow.addEventListener('click', function(e){
    prevReview()
})

rightArrow.addEventListener('click', function(e){
    nextReview()
})

const prevReview = () => {
    reviews.forEach( (oneReview) => {
        if(oneReview.classList.contains('next-review')){
            oneReview.style.display = 'none'
        } else if(oneReview.classList.contains('hide-review')){
            oneReview.style.display = 'block'
           }
    })
}

const nextReview = () => {
    // console.log(e)
    reviews.forEach( (oneReview) => {
        // oneReview.classList.remove('next-review')
       if(oneReview.classList.contains('next-review')) {
        oneReview.classList.add('next-review')
            oneReview.style.display = 'block'
       } else if(oneReview.classList.contains('hide-review')){
        oneReview.style.display = 'none'
       }
    })

}





