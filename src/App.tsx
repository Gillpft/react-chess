import * as React from 'react';


import {GameStartBoard} from './GameStartBoard'

import './App.css';

const S = {
}

export class App extends React.Component<{}, typeof S> {
  render() {
    return <GameStartBoard/>
  }
}
