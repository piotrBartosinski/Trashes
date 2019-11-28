import {Dimensions, StyleSheet} from 'react-native';


let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {

    flex: 1,
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

  },

  bins: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    backgroundColor: '#D5D5D5',
  },
  bins__wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },


  categoryWrapper: {
    // position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#C5C4C4',
    margin: 15,
    width: 80,
    height: 120,
  },
  bin_name: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 50,
    left: 15,
    width: '60%'
  },

  category2: {
    color: 'white',
    fontSize: 12,
  },
  draggableContainer: {
    position    : 'absolute',
    bottom: -500,
    left: Window.width/2 - 35,
  
  },
  circle      : {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor     : '#454545',
    borderRadius: 10,
    width: 70,
    height: 70
  },
  icon        : {
    color       : 'white',
  },

  trash: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 150,
    backgroundColor: 'blue'
  },
  trash_name: {
    borderRadius: 3,
    width: '40%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#454545',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scores: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    width: 350,
    height: 60,
    color: 'white'
  },
  
  summary: {
    flex: 1,
    backgroundColor: 'red',
    height: 40
  },
  again: {
    backgroundColor: 'green',
    height: 200
  },
  button: {
    marginBottom: 30,
    height: 70,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  progress: {
    flex: 1,
    backgroundColor: 'red',
    height: 15
  },
  container2: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head2: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper2: { flexDirection: 'row' },
  title2: { flex: 2, backgroundColor: '#f6f8fa' },
  row2: {  height: 30  },
  text2: { textAlign: 'center' }
  
});

export default styles;