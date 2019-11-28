import {Dimensions, StyleSheet} from 'react-native';


let Window = Dimensions.get('window');
const styles = StyleSheet.create({

  filler: {
    height: 25,
    backgroundColor: 'black'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  dropZone    : {
    height  : 100,

  },

  bins: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
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
    bottom: 135,
    left: Window.width/2 - 40,
  
  },
  circle      : {
    width: 90,
    height: 90
 
  },
  icon: {
    height: 90,
    width: 90
  },
  place: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  trash: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 150,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle:'solid',
    width: '40%',
    borderRadius: 7

  },
  trashimage: {
    width: 80,
    height: 120
  },
  trash_name: {
    borderRadius: 3,
 
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#454545',
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  good: {
    borderRadius: 3,
   
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  
  bed: {
    borderRadius: 3,

    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5
  },
  scores: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    width: 350,
    height: 60,
    
    opacity: 0.5
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