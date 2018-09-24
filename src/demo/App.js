import React, {Component} from 'react';
import {DualList} from '../lib';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            available: [
                {label: 'sdf', value: 'AL'},
                {label: 'Alassdfsdfka', value: 'AK'},
                {label: 'Arizona', value: 'AZ'},
                {label: 'Arkansas', value: 'AR'},
                {label: 'California', value: 'CA'},
                {label: 'Colorado', value: 'CO'},
                {label: 'sdfg', value: 'CT'},
                {label: 'Delaware', value: 'DE'},
                {label: 'Florida', value: 'FL'},
                {label: 'Georgia', value: 'GA'},
            ],
            selected: ['AL', 'CA', 'AK'],
        }

    }

    render() {
        const {available, selected} = this.state;
        const leftLabel = ['Left Editable label']
        const rightLabel = ['Right Editable label']


        return (
            <div><DualList
                available={available} selected={selected}  leftLabel={leftLabel} rightLabel={rightLabel} searchable={false}

            /></div>

        );
    }
}

export default App;
