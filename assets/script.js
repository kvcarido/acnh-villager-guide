const rollBtn = document.querySelector("#roll-btn")
const villagerName = document.querySelector("#villager-name")
const villagerList = document.querySelector("#villager-list")
const species = document.querySelector("#stat-species")
const personality = document.querySelector("#stat-personality")
const gender = document.querySelector("#stat-gender")
const birthday = document.querySelector("#stat-birthday")
const quote = document.querySelector("#quote")
const img = document.querySelector("#stat-img")

// require('dotenv').config()

const random = () => {
    return Math.floor(Math.random() * 390) + 1
}

const getFetch = () => {
    const url = 'https://api.nookipedia.com/villagers?game=nh&birthmonth=8&birthday=7'

    /***************************/
    /* REMOVE THIS BEFORE PUSH */
    const key = 'you-thought-id-slip'
    /***************************/

    fetch(url, {
        headers: {
            'x-api-key': key
        }
    })
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // const random = Math.floor(Math.random() * 413) + 1

        // villagerName.append(data[random].name)
        // species.append(data[random].species)
        // personality.append(data[random].personality)
        // gender.append(data[random].gender)
        // birthday.append(`${data[random].birthday_month} ${data[random].birthday_day}`)
        // quote.innerHTML = data[random].quote
        // img.src = data[random].image_url
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

const updateDom = (name) => {
    villagerName.innerHTML = name
}

rollBtn.addEventListener('click', getFetch)