const profiles = [
  {
    name: "Lavish X",
    bio: "He is a good guy.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Zoya Khan",
    bio: "Frontend Developer, coffee lover.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amar Singh",
    bio: "Loves coding and poetry.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Tina Roy",
    bio: "Photographer and traveler.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dev Joshi",
    bio: "React developer, UI specialist.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  }
];


const input = document.querySelector("input"); // Select input
const cardContainer = document.querySelector(".card-container"); // select card container


// Cards Function
const shownCards = (data) => {
  cardContainer.innerHTML = ""
  data.forEach((val)=>{

        // Card Container
        const card = document.createElement("div")
        card.className = "rounded border border-gray-600 bg-zinc-800 p-5 text-center md:w-[200px]"

        card.innerHTML = `
             <div class="w-24 h-24 rounded-full mx-auto overflow-hidden border border-blue-500 border-4">
                      <img class="w-full object-fit" src=${val.image} alt="profile pic">
              </div> 
                      <h1 class="mt-2 text-white text-xl">${val.name}</h1>
                      <p class="text-gray-500">${val.bio}</p>
        `

        cardContainer.appendChild(card)
  })
}



// Input function
input.addEventListener('input',()=>{
      const inputValue = input.value.toLowerCase();

      const filteredProfile = profiles.filter((profile)=>{
          return (
            profile.name.toLowerCase().includes(inputValue)
          )
      })
      
      shownCards(filteredProfile)
})
 
shownCards(profiles) 




