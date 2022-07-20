const rollBtn = document.querySelector("#roll-btn")
const villagerName = document.querySelector("#villager-name")
const villagerList = document.querySelector("#villager-list")
const species = document.querySelector("#stat-species")
const personality = document.querySelector("#stat-personality")
const gender = document.querySelector("#stat-gender")
const birthday = document.querySelector("#stat-birthday")
const img = document.querySelector("#stat-img")


const random = () => {
    return Math.floor(Math.random() * 390) + 1
}

const getFetch = () => {
    let roll = random()
    const url = `https://acnhapi.com/v1a/villagers/${roll}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        villagerName.append(Array(data.name)[0]["name-USen"])
        species.append(data.species)
        personality.append(data.personality)
        gender.append(data.gender)
        birthday.append(data.birthday)
        img.src = data.image_uri
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


const updateDom = (name) => {
    villagerName.innerHTML = name
}

rollBtn.addEventListener('click', getFetch)