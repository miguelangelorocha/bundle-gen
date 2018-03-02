import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';   

import { store } from './store'
import { muiTheme } from "./theme";

import { Broadbands } from './modules/all-broadband';

import { IntlProvider, addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
addLocaleData([...pt, ...en]);

render(
<Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <IntlProvider locale="pt">
            <Broadbands />
        </IntlProvider>    
    </MuiThemeProvider>
</Provider>,
document.getElementById('root'),
)


registerServiceWorker();