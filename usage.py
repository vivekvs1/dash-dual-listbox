from dash_dual_listbox import DualList
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    DualList(id='DualList', available=[{'label': 'sdf', 'value': 'AL'},
                                       {'label': 'Alassdfsdfka', 'value': 'AK'},
                                       {'label': 'Arizona', 'value': 'AZ'},
                                       {'label': 'Arkansas', 'value': 'AR'},
                                       {'label': 'California', 'value': 'CA'},
                                       {'label': 'Colorado', 'value': 'CO'},
                                       {'label': 'sdfg', 'value': 'CT'},
                                       {'label': 'Delaware', 'value': 'DE'},
                                       {'label': 'Florida', 'value': 'FL'},
                                       {'label': 'Georgia', 'value': 'GA'}], selected=['AL']),
])


# @app.callback(Output('display', 'children'),
#               [Input('DualList', 'selected'),
#                ])
# def display_output(c):
#     return c[0]


if __name__ == '__main__':
    app.run_server(debug=True)
