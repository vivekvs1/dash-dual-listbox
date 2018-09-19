import dash_color_picker
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dash_color_picker.ExampleComponent(id='ColorPicker', color='#f22'),
    html.Div([], id='display')
])

@app.callback(Output('display', 'children'),
              [Input('ColorPicker', 'color'),
])
def display_output(c):
    return 'You have entered {}'.format(c)


if __name__ == '__main__':
    app.run_server(debug=True)
