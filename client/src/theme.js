import {green700, green400, greenA100 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const muiTheme = getMuiTheme({
    palette: {
      primary1Color: '#29cfc7',
      primary2Color: green700,
      accent1Color: green400,
      pickerHeaderColor: greenA100
    }
  });
