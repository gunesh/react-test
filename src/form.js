import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [mark, setMark] = useState('');

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeHandlerMark = (e) => {
    setMark(e.target.value);
  };
  const handlerSubmit = () => {
    alert();
  };
  return (
    <>
      Student Name :{' '}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />{' '}
      <br />
      Student Mark :{' '}
      <input
        type="text"
        name="mark"
        value={mark}
        onChange={(e) => {
          onChangeHandlerMark(e);
        }}
      />{' '}
      <br />
      <button onClick={handlerSubmit}>Submit </button>
    </>
  );
};

export default Form;
