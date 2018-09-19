/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import {ExampleComponent} from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            displayColorPicker: false,
            Color: {
                r: '68',
                g: '32',
                b: '28',
                a: '1',
            },
        }
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
                <div>
                    <ExampleComponent hex='#f22'/>
                </div>
            )
        }
    }

    export
    default
    App;

