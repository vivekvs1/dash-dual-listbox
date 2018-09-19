# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ExampleComponent(Component):
    """A ExampleComponent component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- red (string; optional): The value of the red input
- green (string; optional): The value of the green input
- blue (string; optional): The value of the blue input
- alpha (string; optional): The value of the alpha input
- color (string; optional): The value of the hex input

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, red=Component.UNDEFINED, green=Component.UNDEFINED, blue=Component.UNDEFINED, alpha=Component.UNDEFINED, color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'red', 'green', 'blue', 'alpha', 'color']
        self._type = 'ExampleComponent'
        self._namespace = 'dash_color_picker'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'red', 'green', 'blue', 'alpha', 'color']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ExampleComponent, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('ExampleComponent(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'ExampleComponent(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
