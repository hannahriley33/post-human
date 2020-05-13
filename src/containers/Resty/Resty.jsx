import React, { useState } from 'react';
import Request from '../../components/Request/Request';
import Response from '../../components/Response/Response';
import { makeRequest } from '../../services/makeRequest';
import HistoryList from '../../components/History/HistoryList';

export const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('PUT');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    makeRequest(url, method, body)
      .then(json => setResponse(json));
  };

  return (
    <>
      <HistoryList history={history} />
      <Request 
        url={url}
        method={method}
        body={body}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Response response={response} />
    </>
  );
};


