import React from 'react';
import { connect } from 'react-redux';

import Task from './../containers/Task';
import Tasks from './../components/Tasks';
import { getTasksByListId } from './../reducers/tasks';
import { addTask } from './../actions/tasks';

import partial from 'lodash/partial';

const TasksContainer = ({ tasks, onAddTask }) => (
  <main>
    <Tasks onAddTask={onAddTask}>
      <div>
        {tasks.map((task) =>
          <Task key={task.id} task={task} />
        )}
      </div>
    </Tasks>
  </main>
)

const mapStateToProps = (state, props) => ({
  tasks: getTasksByListId(state, props.listId)
});

const mapDispatchToProps = {
  onAddTask: addTask
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  onAddTask: partial(dispatchProps.onAddTask, ownProps.listId)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TasksContainer);
