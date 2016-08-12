import React, { PropTypes } from 'react';

const Item = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired
};

export default Item;
