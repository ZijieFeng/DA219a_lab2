import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Provider } from 'react-redux'
import 'ts-polyfill'

import { MuiThemeProvider } from '@material-ui/core/styles'

import HttpsRedirect from 'config/https-redirect'
import Routes from 'routes'
import store, { history } from 'store'
import theme from 'theme'

import Snackbar from 'components/snackbar'

ReactDOM.render((
  <HttpsRedirect disabled={process.env.NODE_ENV === 'development'}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
            <Snackbar />
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </HttpsRedirect>
  ),
  document.getElementById('root')
)
