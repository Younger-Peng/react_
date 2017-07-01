import React, { Component } from 'react';
import {view as Todos} from './todos'
import {view as Filter} from './filter'

import './App.css';

function TodoApp() {
    return (
      <div>
        <Todos />
        <Filter />
      </div>
    );
}

export default TodoApp;
