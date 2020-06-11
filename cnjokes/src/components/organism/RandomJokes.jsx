import React, { useContext } from 'react';

import GlobalJokesContext from '../../context/GlobalJokesContext';

import JokesWrapper from '../atoms/JokesWrapper';
import ContentWrapper from '../atoms/ContentWrapper';
import NumberSetter from '../molecules/NumberSetter';
import Card from '../molecules/Card';

const RandomJokes = () => {
  const context = useContext(GlobalJokesContext);

  const spliceJokes = () => {
    const { responseData, countOfJokes } = context.state;
    return responseData.splice(0, countOfJokes);
  };

  const handleInputChanged = ({ target }) => {
    const { value } = target;
    const { setCountOfJokes } = context;
    setCountOfJokes(value);
  };

  const renderData = () => {
    const { error, isLoading } = context.state;

    if (error) {
      const { message } = error;
      console.log(message);
      return <div>Error: {message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    const splicedData = spliceJokes();

    return (
      <JokesWrapper>
        {splicedData.map(({ id, value }) => {
          return <Card joke={value} key={id} />;
        })}
      </JokesWrapper>
    );
  };

  const { countOfJokes, responseData } = context.state;
  const jokesLenght = Array.from(responseData).length;

  return (
    <ContentWrapper>
      <NumberSetter
        count={countOfJokes}
        max={jokesLenght}
        onChangeHandler={handleInputChanged}
      />
      {renderData()}
    </ContentWrapper>
  );
};

export default RandomJokes;
