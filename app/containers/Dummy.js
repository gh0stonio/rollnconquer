import { connect } from 'react-redux';
import DummyComponent from '../components/Dummy';

const mapStateToProps = (state) => {
  return {
    title: state.get('title')
  };
};

export default connect(mapStateToProps)(DummyComponent);
