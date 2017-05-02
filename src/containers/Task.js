import { connect } from 'react-redux';
import { toggleTask } from './../actions/tasks';
import Task from './../components/Task';
import partial from 'lodash/partial';

const mapDispatchToProps = {
  onToggleTask: toggleTask
};

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps,
  onToggleTask: partial(dispatchProps.onToggleTask, ownProps.task.id)
});

export default connect(null, mapDispatchToProps, mergeProps)(Task);
