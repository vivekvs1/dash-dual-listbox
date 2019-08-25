from dash_dual_listbox import DualList
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    DualList(id='DualList', 
             available=[
                 {'label': '+1 Alabama', 'value': 'AL'},
                 {'label': '+1 Alaska', 'value': 'AK'},
                 {'label': '+1 Arizona', 'value': 'AZ'},
                 {'label': '+1 Arkansas', 'value': 'AR'},
                 {'label': '+1 California', 'value': 'CA'},
                 {'label': '+1 Colorado', 'value': 'CO'},
                 {'label': '+1 Connecticut', 'value': 'CT'},
                 {'label': '+1 Delaware', 'value': 'DE'},
                 {'label': '+1 Florida', 'value': 'FL'},
                 {'label': '+1 Georgia', 'value': 'GA'}], 
             selected=['AL']),
    html.Div(id='display_selected'),
    html.Div(id='display_leftright'),
    html.Div(children=[
        html.Button('+ weight', id='plus_button'), 
        html.Button('- weight', id='minus_button')
    ])
])


@app.callback(Output('display_selected', 'children'),
              [Input('DualList', 'selected')])
def display_output(c):
    return 'In listbox on the right: ' + str(c)


@app.callback(Output('display_leftright', 'children'),
              [Input('DualList', 'selectedLeft'), 
              Input('DualList', 'selectedRight')])
def display_leftright(cl, cr):
    return 'Selected left: {}; Selected right: {}'.format(str(cl), str(cr))


@app.callback(Output('DualList', 'available'),
              [Input('plus_button', 'n_clicks'), 
              Input('minus_button', 'n_clicks')],
              [State('DualList', 'selectedLeft'), 
              State('DualList', 'selectedRight'),
              State('DualList', 'available')])
def update_weight(plus_dummy, minus_dummy, 
                  selectedLeft, selectedRight, available):
    ctx = dash.callback_context
    if not ctx.triggered:
        raise dash.PreventUpdate
    if ctx.triggered[0]['prop_id'].split('.')[0] == 'plus_button':
        change = 1
    else:
        change = -1
    if not selectedLeft:
        selectedLeft = []
    if not selectedRight:
        selectedRight = []
    to_be_moved = selectedLeft + selectedRight
    for item in available:
        if item['value'] not in to_be_moved:
            continue
        label_parts = item['label'].split(' ')
        weight = int(label_parts[0])
        weight += change
        if weight == 0:
            weight += change
        elif weight == -10:
            weight = -9
        elif weight == 10:
            weight = 9
        item['label'] = '{:+d} '.format(weight) + ' '.join(label_parts[1:])
    return available


if __name__ == '__main__':
    app.run_server(debug=True)
