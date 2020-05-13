import React, { useState } from 'react';
import Request from '../../components/Request/Request';

export const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('PUT');
  const [body, setBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Request 
        url={url}
        method={method}
        body={body}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};


