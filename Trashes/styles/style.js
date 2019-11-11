import {Dimensions, StyleSheet} from 'react-native';

const CIRCLE_RADIUS = 30;
let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex    : 1,
  },
  filler: {
    height: 25,
    backgroundColor: 'black'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'orange'
  },
  dropZone    : {
    height  : 100,
    backgroundColor:'red'
  },
  text        : {
    marginTop   : 25,
    marginLeft  : 5,
    marginRight : 5,
    textAlign   : 'center',
    color       : '#fff'
  },
  bins: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    backgroundColor: 'white'
  },
  bins__wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  category: {
    margin: 5,
    backgroundColor: 'yellow',
    width: 80,
    height: 120
  },
  draggableContainer: {
    position    : 'absolute',
    bottom: -500,
    left: Window.width/2 - CIRCLE_RADIUS,
  },
  circle      : {
    backgroundColor     : '#1abc9c',
    width               : CIRCLE_RADIUS*2,
    height              : CIRCLE_RADIUS*2,
  },
  trash: {
    height: 150,
    backgroundColor: 'blue'
  },
  scores: {
    height: '100%',
    backgroundColor: 'pink'
  },
});

export default styles;