const fetchSearchedJokes = async (query) => {
  return await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then((response) => response.json())
      .then(
        // ({result}) => result.map(item => item.value)
        (data) => {
          let list = data.result;
          return list ? list.map(item => item.value) : '';
        }
      );
}
export default fetchSearchedJokes;
