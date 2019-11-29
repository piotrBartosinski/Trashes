import {Dimensions, StyleSheet} from 'react-native';


let Window = Dimensions.get('window');
const styles = StyleSheet.create({

  filler: {
    height: 22,
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
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    width: 350,
    height: 60,
    opacity: 0.5
  },
  scores2: {
    fontSize: 20,
    color: 'white',
  
  },
  
  summary: {
    flex: 1,
    backgroundColor: 'red',
    height: 40
  },
  again: {
    height: 500,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    
  },
  button: {
    marginBottom: 30,
    height: 40,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#F6F6E4',
    borderRadius: 5,
 
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'black'
  },
  progress: {
    flex: 1,
    backgroundColor: 'red',
    height: 15
  },
  tableContainer: { flex: 1, padding: 5, paddingTop: 5},
  tableHead: {  height: 40, backgroundColor: 'white'},
  tableWrapper: { flexDirection: 'row' },
  tableTittle: { flex: 2,},
  tableRow: {  height: 30  },
  tableText: { textAlign: 'center', fontSize: 12, color: 'white'},
  tableTextGrey: { textAlign: 'center', fontSize: 12, color: 'grey'},
  
});

export default styles;