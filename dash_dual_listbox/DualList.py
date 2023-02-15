# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DualList(Component):
    """A DualList component.


Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components  in
    callbacks. The ID needs to be unique across all of the  components
    in an app.

- available (list of dicts; required):
    List of available options, will appear in the left box.

    `available` is a list of dicts with keys:

    - label (string; required)

    - value (boolean

      Or number | string | dict | list; required) | dict with keys:

    - options (list of dicts; optional)

        `options` is a list of dicts with keys:

        - label (string; required)

        - value (boolean | number | string | dict | list; required)

    - value (boolean | number | string | dict | list; optional)

- leftLabel (string; optional):
    A header for the left (available) list.

- moveAllLeftIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveAllRightIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveBottomIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveDownIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveLeftIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveRightIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveTopIcon (string; optional):
    fontawesome icons or icon of your choice.

- moveUpIcon (string; optional):
    fontawesome icons or icon of your choice.

- rightLabel (string; optional):
    A header for the right (selected) list.

- searchable (boolean; optional):
    A False value will hide the search field on the top.

- selected (list of strings; required):
    List of selected options, will appear in the right box.

- sortable (boolean; optional):
    A False value will hide the reorder buttons on the right."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_dual_listbox'
    _type = 'DualList'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selected=Component.REQUIRED, available=Component.REQUIRED, leftLabel=Component.UNDEFINED, rightLabel=Component.UNDEFINED, searchable=Component.UNDEFINED, sortable=Component.UNDEFINED, moveLeftIcon=Component.UNDEFINED, moveRightIcon=Component.UNDEFINED, moveAllLeftIcon=Component.UNDEFINED, moveAllRightIcon=Component.UNDEFINED, moveUpIcon=Component.UNDEFINED, moveTopIcon=Component.UNDEFINED, moveDownIcon=Component.UNDEFINED, moveBottomIcon=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'available', 'leftLabel', 'moveAllLeftIcon', 'moveAllRightIcon', 'moveBottomIcon', 'moveDownIcon', 'moveLeftIcon', 'moveRightIcon', 'moveTopIcon', 'moveUpIcon', 'rightLabel', 'searchable', 'selected', 'sortable']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'available', 'leftLabel', 'moveAllLeftIcon', 'moveAllRightIcon', 'moveBottomIcon', 'moveDownIcon', 'moveLeftIcon', 'moveRightIcon', 'moveTopIcon', 'moveUpIcon', 'rightLabel', 'searchable', 'selected', 'sortable']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['available', 'selected']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DualList, self).__init__(**args)
