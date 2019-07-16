import plotly.plotly as py
import plotly.graph_objs as go

data = [go.Bar(
            x=[20, 14, 23],
            y=['giraffes', 'orangutans', 'monkeys'],
            orientation = 'h'
)]

py.iplot(data, filename='horizontal-bar')