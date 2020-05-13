import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ url, method, body, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}> 
    <input type="text" name="url" value={url} onChange={onChange} />

    <label>
      <input type="radio" name="method" checked={method === 'POST'} value="POST" />
      POST
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'GET'} value="GET" />
      GET
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PUT'} value="PUT" />
      PUT
    </label>

    <label>
      <input type="radio" name="method" checked={method === 'PATCH'} value="PATCH" />
      PATCH
    </label>

    <textarea name="body" value={body} onChange={onChange}></textarea>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body:  PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
