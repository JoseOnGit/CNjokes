import React from 'react';

function JokeList(props) {
  const { jokeList, isLoading } = props || {};

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <table className="table">
      <tbody>
        {jokeList.map((joke) => (
          <tr>
            <td>{joke}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JokeList;
