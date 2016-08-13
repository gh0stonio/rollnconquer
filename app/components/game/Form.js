import React, { PropTypes } from 'react';

const Form = ({ onSubmit }) => {
  return (
    <div>
      <h3>Create new game </h3>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='inputName'>Name</label>
          <input type='text' className='form-control' id='inputName' placeholder='Name' />
        </div>
        <button type='submit' className='btn btn-primary'>Create</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
