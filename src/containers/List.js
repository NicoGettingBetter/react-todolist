import { connect } from 'react-redux';
import List from './../components/List';
import { removeList } from './../actions/lists';
import { removeTasksByListId } from './../actions/tasks';

const mapDispatchToProps = {
  removeList,
  removeTasksByListId
};

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps,
  onRemoveList: () => {
    dispatchProps.removeList(ownProps.list.id);
    dispatchProps.removeTasksByListId(ownProps.list.id);
  }
});

export default connect(null, mapDispatchToProps, mergeProps)(List)
