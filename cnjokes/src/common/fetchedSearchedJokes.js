function fetchSearchedJokes(query) {
  const endpoint = 'https://api.chucknorris.io/jokes/search?query=' + query;
  return fetch(endpoint)
      .then(response => response.json())
      .then(
          (data) => {
              let list = data.result;
              return list ? list.map(item => item.value) : '';
          }
      );
}
export default fetchSearchedJokes;