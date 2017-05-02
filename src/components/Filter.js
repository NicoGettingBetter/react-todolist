import React from 'react';

const Filter = ({ onAddFilter }) => (
  <main>
    <span onClick={() => onAddFilter('ALL')}>all </span>
    <span onClick={() => onAddFilter('ACTIVE')}>active </span>
    <span onClick={() => onAddFilter('COMPLETED')}>completed </span>
  </main>
);

export default Filter;
