const url = 'https://v2.jokeapi.dev/joke/Any?type=single'


let JokeButton = document.querySelector(".btn")

let qutu = document.querySelector(".qutu")

// function jokeData () {
//     fetch("url")
//     .then(anar=>anar.json())
//     .then(data =>{
//         qutu.textContent = data.joke;
//     })
// }
// JokeButton.addEventListener("click",()=>{
//      jokeData()
// })

let jokeData = async ()=>{
    const response = await axios.get(url)
  let data = await response.data
    document.querySelector(".qutu").textContent=data.joke;
}
document.querySelector(".btn").addEventListener("click",jokeData)