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
            color: {
                r: '222',
                g: '111',
                b: '11',
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
                    <div>I want to display color hex here</div>
                    <ExampleComponent
                        setProps={this.setProps}
                        {...this.state}
                    />

                </div>
            )
        }
    }

    export
    default
    App;

