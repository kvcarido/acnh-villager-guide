const getFetch = () => {
    const url = `http://acnhapi.com/v1a/villagers/56`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        console.log(data.)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getFetch()