import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
  <div>
    <p>{url}</p>
    <p>{method}</p>
  </div>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
