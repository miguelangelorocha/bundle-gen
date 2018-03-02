import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui-next/Grid';

import { actionsCreator } from '../actionsCreator';
import { selectorsCreator } from '../selectorsCreator';

import AppBar from 'material-ui/AppBar';

import { BundleList } from '../components/BundleList';

const styles = {
  image: {
    height: '45px', 
    borderRadius: '15px', 
    marginTop: '5px'
  },
  appBar: {position:'fixed'},
  grid: {marginTop: '40px'}
};

class BroadbandsContainer extends React.Component {

  componentDidMount() {
    this.props.getAllBroadbandListRequest();
  }


  render() {
    return <div>
              <AppBar
              iconElementLeft={<img alt="Melhor Plano" style={styles.image} src='/images/logo.jpg'/>}
              title="BundleGen"
              style={styles.appBar}
              />
                <Grid container>
                    <Grid item xs style={styles.grid}>
                          {this.props.combos.map( (item, index) => 
                            <BundleList 
                              item xs key={index}
                              price={item.price} 
                              bundles={item.bundles}>
                            </BundleList>)}
                    </Grid>                      
                </Grid>
             </div>
    }

}


const mapStateToProps = state => {
  return {
    combos: selectorsCreator.getCombos(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllBroadbandListRequest: () => {
      dispatch(actionsCreator.getAllBroadbandListRequest());
    }
  }
}

export const Broadbands = connect(mapStateToProps, mapDispatchToProps)(BroadbandsContainer)