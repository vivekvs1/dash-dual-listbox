import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';
import reactCSS from 'reactcss';


export default class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayColorPicker: false,
            color: {
                hex: props.color
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            color: {
                hex: nextProps.color
            }
        });
    }


    handleClick() {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose() {
        this.setState({displayColorPicker: false})
    };

    handleChange(color) {

        this.setState({color: {hex: color.hex}})
        const {setProps} = this.props;
        if (setProps) {
            setProps({color: color.hex})
        }

    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: this.state.color.hex,
                },
                swatch: {
                    padding: '4px',
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>

                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color}/>

                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose}/>
                    <SketchPicker color={this.state.color} onChange={this.handleChange}
                    />
                </div> : null}

            </div>
        )
    }
}


ColorPicker.propTypes = {

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,
    /**
     * The value of the hex input
     */
    color: PropTypes.string,
    setProps: PropTypes.func
};

