import React from 'react';

function JokeList(props) {
  const { jokeList, isLoading } = props || {};

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <table className="table">
      <tbody>
        {jokeList.map((joke) => {
          const { value, id } = joke;
          return (
            <tr key={id}>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default JokeList;
