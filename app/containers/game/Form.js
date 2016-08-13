import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FormComponent from '../../components/game/Form';
import { createGame } from '../../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event) => {
      event.preventDefault();

      const config = {
        name: event.target.querySelector('#inputName').value
      };

      dispatch(createGame(config));
      browserHistory.push('/play');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
