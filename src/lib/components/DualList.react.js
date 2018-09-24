import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Duallist from 'react-duallist';

class DualList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected,
        }

        this.onMove = this.onMove.bind(this);
    }


    onMove(selected) {
        this.setState({selected});

        const {setProps} = this.props;
        if (setProps) {
            setProps({selected: selected})
        }

    }


    render() {


        return (
            <div>
                <Duallist
                    {...this.props} selected={this.state.selected} onMove={this.onMove}
                />
            </div>

        );
    }
}

export default DualList;


DualList.propTypes = {

    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * List of selected options, will appear in the right box
     */
    selected: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string])).isRequired,

    /**
     * List of available options, will appear in the left box
     */
    available: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                label: PropTypes.string.isRequired,
            }),
            PropTypes.shape({
                value: PropTypes.any,
                options: PropTypes.arrayOf(PropTypes.shape({
                    value: PropTypes.any.isRequired,
                    label: PropTypes.string.isRequired
                }))
            }),
        ]),
    ).isRequired,

    /**
     * A header for the left (available) list
     */
    leftLabel: PropTypes.string,

    /**
     * A header for the right (selected) list
     */
    rightLabel: PropTypes.string,

    /**
     * A false value will hide the search field on the top
     */
    searchable: PropTypes.bool,

    /**
     * A false value will hide the reorder buttons on the right
     */
    sortable: PropTypes.bool,

    /**
     * fontawesome icons or icon of your choice
     */
    moveLeftIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveRightIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveAllLeftIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveAllRightIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveUpIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveTopIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveDownIcon: PropTypes.string,

    /**
     * fontawesome icons or icon of your choice
     */
    moveBottomIcon: PropTypes.string,


    setProps: PropTypes.func
}