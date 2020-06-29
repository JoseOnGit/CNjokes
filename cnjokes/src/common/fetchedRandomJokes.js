const fetchJoke = async (category) => {
    const path = category === "random" ? '' : `?category=${category}`;
    return await fetch(`https://api.chucknorris.io/jokes/random${path}`)
        .then((response) => response.json())
        .then(({value}) =>  value);
}

const getRandomJokes = async (amountOfRandomJokes,category) => {
    if (!amountOfRandomJokes) {
        return null;
    }
    let all = [];
    for (let i = 0; i < amountOfRandomJokes; i++) {
        const currentJoke = await fetchJoke(category);
        all = [...all, currentJoke];
    }
    return all;
}
export default getRandomJokes;