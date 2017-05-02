import React from 'react';
import { connect } from 'react-redux';
import List from './../containers/List';
import Lists from './../components/Lists';
import { addList } from './../actions/lists';

const ListsContainer = ({ lists, onAddList }) => (
  <main>
    <Lists onAddList={onAddList}>
      <div>
        {lists.map((list) => (
          <List key={list.id} list={list} />
        ))}
      </div>
    </Lists>
  </main>
)

const mapDispatchToProps = {
  onAddList: addList
}

export default connect(null, mapDispatchToProps)(ListsContainer)
