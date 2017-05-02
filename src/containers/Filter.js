import { connect } from 'react-redux';
import Filter from './../components/Filter';
import { addFilter } from './../actions/filter';

const mapDispatchToProps = {
  onAddFilter: addFilter
};

export default connect(null, mapDispatchToProps)(Filter);
