import * as React from 'react';

import { Button } from './Button'

import './Home.css';

const S = {

}

export class Home extends React.Component<{}, typeof S> {

    componentWillMount() {
        this.setState(S)
    }

    render() {
        return <div className='home'>
            <Button text='初级' className='undoButton' onclick={() => 1} />
            <Button text='中级' className='undoButton' onclick={() => 1} />
            <Button text='高级' className='undoButton' onclick={() => 1} />
        </div>
    }
}
