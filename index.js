const photos = document.querySelectorAll(".photo");
const nextBtn = document.querySelector(".next-button")
const prevBtn = document.querySelector(".prev-button")

let nextCount = 1;
let prevCount = 9;



//Event listeners

photos.forEach(photo => {
  photo.addEventListener("click", ()=>{
    removeActiveClass()
    photo.classList.add("photo-active")
  })
})

//Buttons EventListeners
nextBtn.addEventListener("click", () => {
  photos.forEach(photo => {
    removeActiveClass()
    photos[nextCount].classList.add("photo-active")
  })
  nextCount ++
  if(nextCount === 10){
    nextCount = 0
  }

})

prevBtn.addEventListener("click", () => {
  photos.forEach(photo => {
    removeActiveClass()
    photos[prevCount].classList.add("photo-active")
  })
  prevCount --
  if(prevCount < 0){
    prevCount = 9
  }

})


//functions
function removeActiveClass() {
  photos.forEach(photo => {
    photo.classList.remove("photo-active")
  })
}