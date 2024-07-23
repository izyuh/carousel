const reviews = [
    {
        id:1, 
        name: "susan smith",
        job: 'web dev',
        img: "img/alex-starnes-WYE2UhXsU1Y-unsplash.jpg",
        text: "This is just filler text to describe this individual"
    },
    {
        id:2, 
        name: "John Doe",
        job: 'senior',
        img: "img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
        text: "This is just filler text to describe this individual"
    },
    {
        id:3, 
        name: "Marty Mcfly",
        job: 'Time Traveler',
        img: "img/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg",
        text: "You know who I am"
    },
    {
        id:4, 
        name: "Phillip J Fry",
        job: '20th century man',
        img: "img/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg",
        text: "huh"
    },
]


const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentItem = 0

//load initial item
window.addEventListener('DOMContentLoaded', () => {
    retrieveData()
    showPerson(currentItem)
})

function showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

function saveData() {
    localStorage.setItem('index', currentItem)
}

function retrieveData() {
    currentItem = localStorage.getItem('index')
}

prevBtn.addEventListener('click', () => {
    currentItem = currentItem -1

    if(currentItem < 0){
        currentItem = reviews.length -1
      }
      saveData()
    showPerson(currentItem)
})

nextBtn.addEventListener('click', () => {
    currentItem = currentItem + 1  
    if(currentItem > reviews.length -1){
      currentItem = 0  
    }
    saveData()
    showPerson(currentItem)
})