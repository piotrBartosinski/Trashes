import {Dimensions, StyleSheet} from 'react-native';
import trashes_list from "../trashes_list";

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
    // bottom: 135,
    bottom: Window.width/2 - 40,
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
    borderColor: '#FDFFE9',
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
    backgroundColor: '#FDFFE9',
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
    color: '#FDFFE9',
  
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
    borderColor: '#FDFFE9',
    margin: 10,
    
  },
  button: {
    marginTop: 5,
    marginBottom:  Window.width/4 - 75,
    height: 30,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F6F6E4',
    borderRadius: 5,
 
  },
  buttonText: {
    textAlign: 'center',
    padding: 5,
    color: '#454545'
  },
  progress: {
    flex: 1,
    backgroundColor: 'red',
    height: 15
  },
  tableContainer: { flex: 1, padding: 5, paddingTop: 2},
  tableHead: {  height: 22},
  tableWrapper: { flexDirection: 'row' },
  tableTittle: { flex: 2,},
  tableRow: {  height: 27,},
  tableText: { textAlign: 'center', fontSize: 12, color: '#FDFFE9'},
  tableTextGrey: { textAlign: 'center', fontSize: 12, color: 'grey'},
  tableHead2: {
    backgroundColor: '#FDFFE9',
    height: 20,
    borderRadius: 5
  },
  tableHeader: {
    backgroundColor: '#FDFFE9',
    borderRadius: 5,
    marginLeft: 1,
    marginRight: 1

  },
  textHeader: {
    textAlign: 'center',
    fontSize: 12,
    color: '#454545',
  },

  textProperBin: {
    textAlign: 'center',
    fontSize: 12,
    color: '#FDFFE9',
  }
  
});

export default styles;