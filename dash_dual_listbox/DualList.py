# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DualList(Component):
    """A DualList component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- selected (list; required): List of selected options, will appear in the right box
- available (list; required): List of available options, will appear in the left box
- selectedLeft (list; optional): List of selected options in the box on the left before move
- selectedRight (list; optional): List of selected options in the box on the right before move
- leftLabel (string; optional): A header for the left (available) list
- rightLabel (string; optional): A header for the right (selected) list
- searchable (boolean; optional): A false value will hide the search field on the top
- sortable (boolean; optional): A false value will hide the reorder buttons on the right
- moveLeftIcon (string; optional): fontawesome icons or icon of your choice
- moveRightIcon (string; optional): fontawesome icons or icon of your choice
- moveAllLeftIcon (string; optional): fontawesome icons or icon of your choice
- moveAllRightIcon (string; optional): fontawesome icons or icon of your choice
- moveUpIcon (string; optional): fontawesome icons or icon of your choice
- moveTopIcon (string; optional): fontawesome icons or icon of your choice
- moveDownIcon (string; optional): fontawesome icons or icon of your choice
- moveBottomIcon (string; optional): fontawesome icons or icon of your choice"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selected=Component.REQUIRED, available=Component.REQUIRED, selectedLeft=Component.UNDEFINED, selectedRight=Component.UNDEFINED, leftLabel=Component.UNDEFINED, rightLabel=Component.UNDEFINED, searchable=Component.UNDEFINED, sortable=Component.UNDEFINED, moveLeftIcon=Component.UNDEFINED, moveRightIcon=Component.UNDEFINED, moveAllLeftIcon=Component.UNDEFINED, moveAllRightIcon=Component.UNDEFINED, moveUpIcon=Component.UNDEFINED, moveTopIcon=Component.UNDEFINED, moveDownIcon=Component.UNDEFINED, moveBottomIcon=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selected', 'available', 'selectedLeft', 'selectedRight', 'leftLabel', 'rightLabel', 'searchable', 'sortable', 'moveLeftIcon', 'moveRightIcon', 'moveAllLeftIcon', 'moveAllRightIcon', 'moveUpIcon', 'moveTopIcon', 'moveDownIcon', 'moveBottomIcon']
        self._type = 'DualList'
        self._namespace = 'dash_dual_listbox'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selected', 'available', 'selectedLeft', 'selectedRight', 'leftLabel', 'rightLabel', 'searchable', 'sortable', 'moveLeftIcon', 'moveRightIcon', 'moveAllLeftIcon', 'moveAllRightIcon', 'moveUpIcon', 'moveTopIcon', 'moveDownIcon', 'moveBottomIcon']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in [u'selected', u'available']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DualList, self).__init__(**args)
