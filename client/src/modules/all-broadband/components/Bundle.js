import React from 'react';

import Chip from 'material-ui/Chip';

import {teal100, teal200, teal300, green300} from 'material-ui/styles/colors';

const chipStyle = {width: '100%'};

const getBackugroundColor = (type : string) => {
  switch(type) {
    case 'bb':
      return green300;    
   case 'll':
      return teal300;    
   case 'addon':
      return teal100;    
   case 'tv':
      return teal200;        
    default:
      return 'gray';
  }
}


export class Bundle extends React.Component {

    render() {    
      return (<Chip style={chipStyle} backgroundColor={getBackugroundColor(this.props.type)}>{this.props.name}</Chip>);
    }
  }