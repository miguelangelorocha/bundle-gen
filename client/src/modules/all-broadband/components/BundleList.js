import React from 'react';

import Paper from 'material-ui/Paper';
import { FormattedNumber } from 'react-intl';

import { Bundle } from "../components/Bundle";

const styles = {
  paper : {
    margin: '20px',
    textAlign: 'center',
    display: 'inline-block',
  },
  insidePaper: { margin: '10px' },
  priceDiv: { margin: '5px' }
}

export class BundleList extends React.Component {

  render() {
    return <Paper style={styles.paper} zDepth={3}>
            <div style={{ margin: '10px' }}>
              {this.props.bundles.map((item, index) =>
                <Bundle
                  item xs
                  key={index}
                  name={item.name}
                  type={item.type}
                  price={item.price}>
                </Bundle>)}
              <div style={{ margin: '5px' }}>
                  {
                  // style is not a css style
                  // eslint-disable-next-line 
                  }<FormattedNumber value={this.props.price} style="currency" currency="BRL" /> por mês
                  
              </div>
            </div>
          </Paper>
  }

}

