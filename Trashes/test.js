import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  PanResponder,
  Animated,
  Button,

  TouchableOpacity,
  Dimensions,
} from "react-native";

import React, {Component} from "react";
import styles from './styles/style.js';
import trashesList from './trashes_list';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';


export default class Viewport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDraggable: true,
      pan: new Animated.ValueXY(),
      bin_1: 0,
      bin_2: 0,
      bin_3: 0,
      bin_4: 0,
      bin_5: 0,
      bin_6: 0,
      points: 0,
      summary: [],
      info: '',
      index: 0,
      result: [],
      summaryArr: [],
      summaryBin: [],
    };
    
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        
        const bins = ['tworzywa', 'szklo', 'papier', 'bio', 'zmieszane', 'inne'];

        const dropzones = [this.isDropZone1(gesture), this.isDropZone2(gesture), this.isDropZone3(gesture),
        this.isDropZone4(gesture), this.isDropZone5(gesture), this.isDropZone6(gesture)];

        for (let i=0; i <= bins.length; i++) {
          if (dropzones[i] && this.renderTrash().props.trashTarget === bins[i]) {
            this.goodAnswer();
            this.animationReturn();
            this.showAgain();
            this.setState({
              summaryArr: this.state.summaryArr.concat('1'),
              summaryBin: this.state.summaryBin.concat(i),
            });
            
          } else if (dropzones[i]  && this.renderTrash().props.trashTarget !== bins[i]) {
            this.badAnswer();
            this.animationReturn();
            this.showAgain();
            this.setState({
              summaryArr: this.state.summaryArr.concat('0'),
              summaryBin: this.state.summaryBin.concat(i),
            })
            
          } else {
            Animated.spring(
            this.state.pan,
            {toValue: {x: 0, y: 0}}).start();}
          }
      }
    });
  }
  
  goodAnswer() {
    this.setState({
      showDraggable: false,
      index: this.state.index + 1,
      points: this.state.points + 1,
      info: 'dobrze'
    });
  }
  
  badAnswer() {
    this.setState({
      showDraggable: false,
      index: this.state.index + 1,
      info: 'źle'
    });
  }
  
  animationReturn() {
    Animated.timing(
    this.state.pan,
    {
      toValue: {x: 0, y: 0},
      duration: 0
    }
    ).start();
  }
  showAgain() {
    setTimeout(() => {
      this.setState({
        showDraggable: true
      })
    }, 1000);
  }
  
  checkingTrash(gesture, bin, position) {
    return (gesture.moveY > bin.y &&
    gesture.moveY < bin.y + bin.height + 100 &&
    gesture.moveY + bin.y + bin.height + 100 > position &&
    gesture.moveX > bin.x + 20 &&
    gesture.moveX < bin.x + bin.width + 20)
  }

  isDropZone1(gesture) {
    let bin = this.state.bin_1;
    return this.checkingTrash(gesture, bin, 350);
  }
  isDropZone2(gesture) {
    let bin = this.state.bin_2;
    return this.checkingTrash(gesture, bin, 350);
  }
  isDropZone3(gesture) {
    let bin = this.state.bin_3;
    return this.checkingTrash(gesture, bin, 350);
  }
  isDropZone4(gesture) {
    let bin = this.state.bin_4;
    return this.checkingTrash(gesture, bin, 600);
  }
  isDropZone5(gesture) {
    let bin = this.state.bin_5;
    return this.checkingTrash(gesture, bin, 600);
  }
  isDropZone6(gesture) {
    let bin = this.state.bin_6;
    return this.checkingTrash(gesture, bin, 600);
  }
  
  setDropZoneValues(bin, e) {
    this.setState({
      [bin]: e.nativeEvent.layout
    });
  }
  
  trashName() {
    if(this.state.showDraggable) {
      return (<Text style={styles.trash_name}>{trashesList[this.state.index].name}</Text>);
    } else {
      return null;
    }
  }
  render() {
  
    if (this.state.index < trashesList.length) {
      return (
      <View style={styles.mainContainer}>
        <View style={styles.filler}/>
        <View style={styles.logo}>
          <Text>Ttle {this.state.info}</Text>
      
          </View>
        <View style={styles.bins}>
          <View style={styles.bins__wrapper}>
            
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_1')}>
              <Icon name="trash" size={85} color="#FFB620" />
              <Text style={styles.bin_name}>metale i tworzywa sztuczne</Text>
            </View>
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_2')}>
              <Icon name="trash" size={85} color="#4FAD2F" />
              <Text style={styles.bin_name}>szkło</Text>
            </View>
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_3')}>
              <Icon name="trash" size={85} color="#0073CE" />
              <Text style={styles.bin_name}>papier</Text>
            </View>
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_4')}>
              <Icon name="trash" size={85} color="#9B5F36" />
              <Text style={styles.bin_name}>bio</Text>
            </View>
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_5')}>
              <Icon name="trash" size={85} color="#222222" />
              <Text style={styles.bin_name}>zmieszane</Text>
            </View>
            <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_6')}>
              <Icon name="trash" size={85} color="#FF661C" />
              <Text style={styles.bin_name}>inne (PSZOK, apteki)</Text>
            </View>
            
          

          </View>
        </View>
        <View style={styles.trash}>
        {this.trashName()}
        </View>

        
       
          <View style={styles.scores}>
            <Text>punkty: {this.state.points} pozostało: {trashesList.length - this.state.index} pytań
             s: {this.state.summaryArr.map(el=> {return el})} i:  s: {this.state.summaryBin.map(el=> {return el})}
            </Text>
            
          </View>
          
     
        {/*<View style={{width: `${(100/trashesList.length)*(this.state.index)}%`, height: 20, backgroundColor: 'red'}}></View>*/}
  
        
        {this.renderTrash()}

      </View>
      );
    } else {
      const tableHead = ['śmieć', 'do', 'dob/zle', 'pkt', 'popr'];
      const inflection= ['metali i tworzyw', 'szkła', 'papieru', 'bio', 'mieszanych', 'innych'];
      const tableData = [];
      
      const {info, points, summaryBin, summaryArr} = this.state;
        for (let i = 0; i < trashesList.length; i++) {
          tableData.push([inflection[summaryBin[i]], (summaryArr[i] ==='1')? 'dobrze' : 'źle', (summaryArr[i] ==='1')? '1' : '0', (summaryArr[i] ==='1')? ' ' : trashesList[i].target]);
        }
        
      return(<>
      <View style={styles.mainContainer}>
        <View style={styles.filler}/>
        <View style={styles.logo}>
          <Text>Title {info}</Text></View>
        <View style={styles.summary}><Text>wynik: {points}/{trashesList.length} pkt.</Text></View>
        <View style={styles.again}>
          <TouchableOpacity onPress={() => this.setState({index: 0, points: 0, summaryArr: [], summaryBin: []})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Zsagrdaj jeszcze raz</Text>
            </View>
          </TouchableOpacity>
  
          <View style={styles.container2}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row data={tableHead} flexArr={[2, 1, 1, 1, 1]} style={styles.head2} textStyle={styles.text2}/>
              <TableWrapper style={styles.wrapper2}>
                <Col data={trashesList.map(el=> el.name)} style={styles.title2} heightArr={[30,30]}  textStyle={styles.text2}/>
                <Rows data={tableData} flexArr={[1, 1, 1, 1]} style={styles.row2} textStyle={styles.text2}/>
              </TableWrapper>
            </Table>
          </View>
        </View>
      </View>
      </>
      )
    }
  }
 
  renderTrash() {
    if(this.state.showDraggable) {
      return (
      <View style={styles.draggableContainer} trashTarget={trashesList[this.state.index].target}>
        <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.circle]}>
          <Icon name={trashesList[this.state.index].icon} size={40} style={styles.icon}/>
        </Animated.View>
      </View>
      )
    }
  }
}


// data={[
//   [inflection[this.state.summaryBin[0]], (this.state.summaryArr[0] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[0] ==='1')? '1' : '0', (this.state.summaryArr[0] ==='1')? ' ' : trashesList[0].target],
//   [inflection[this.state.summaryBin[1]], (this.state.summaryArr[1] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[1] ==='1')? '1' : '0', (this.state.summaryArr[1] ==='1')? ' ' : trashesList[1].target],
// [inflection[this.state.summaryBin[2]], (this.state.summaryArr[2] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[2] ==='1')? '1' : '0', (this.state.summaryArr[2] ==='1')? ' ' : trashesList[2].target],
// [inflection[this.state.summaryBin[3]], (this.state.summaryArr[3] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[3] ==='1')? '1' : '0', (this.state.summaryArr[3] ==='1')? ' ' : trashesList[3].target],
// [inflection[this.state.summaryBin[4]], (this.state.summaryArr[4] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[4] ==='1')? '1' : '0', (this.state.summaryArr[4] ==='1')? ' ' : trashesList[4].target],
// [inflection[this.state.summaryBin[5]], (this.state.summaryArr[5] ==='1')? 'dobrze' : 'źle', (this.state.summaryArr[5] ==='1')? '1' : '0', (this.state.summaryArr[5] ==='1')? ' ' : trashesList[5].target],
// ]}

{/*<View style={styles.rodzic}>*/}
{/*  {trashesList.map((el)=> {*/}
{/*   return (<><Text style={styles.potomek}>{el.id}. {el.name} wrzuciłeś do: xxx  a powinno być w {el.target}</Text>*/}
{/*    <Text style={styles.potomek}></Text>*/}
{/*    <Text style={styles.potomek}>{el.target}</Text></>)*/}
{/*    */}
{/*  })}*/}

{/*</View>*/}


{/*{trashesList.map((el)=> {*/}
{/*  return ( <View style={styles.summary} key={el.id}>*/}
{/*    <View style={styles.summaryEl}><Text>{el.name}</Text></View>*/}
{/*    <View style={styles.summaryEl}><Text>wrzuciłeś do</Text></View>*/}
{/*    <View style={styles.summaryEl}><Text>dobrze/źle</Text></View>*/}
{/*  </View>)*/}
{/*})}*/}



{/*  <View>*/}
{/*{trashesList.map((el)=>{*/}
{/*  return <Text key={el.id}>{el.name}</Text>*/}
{/*})}*/}
{/*  </View>*/}


//       //kosz 1 - zmieszane
//     if (this.isDropZone1(gesture) && this.renderTrash().props.trashTarget === 'tworzywa') {
//       this.goodAnswer();
//       this.animationReturn();
//
//     } else if (this.isDropZone1(gesture) && this.renderTrash().props.trashTarget !== 'tworzywa') {
//      this.badAnswer();
//      this.animationReturn();
//
//       //kosz 2 - szklo
//     } else if (this.isDropZone2(gesture) && this.renderTrash().props.trashTarget === 'szklo') {
//       this.goodAnswer();
//       this.animationReturn();
//     } else if (this.isDropZone2(gesture) && this.renderTrash().props.trashTarget !== 'szklo') {
//       this.badAnswer();
//       this.animationReturn();
//       //kosz 3 - papier
//     } else if(this.isDropZone3(gesture) && this.renderTrash().props.trashTarget === 'papier') {
//       this.goodAnswer();
//       this.animationReturn();
//     } else if (this.isDropZone3(gesture) && this.renderTrash().props.trashTarget !== 'papier') {
//       this.badAnswer();
//       this.animationReturn();
//       // kosz 4 - bio
//     } else if(this.isDropZone4(gesture) && this.renderTrash().props.trashTarget === 'bio') {
//       this.goodAnswer();
//       this.animationReturn();
// } else if (this.isDropZone4(gesture) && this.renderTrash().props.trashTarget !== 'bio') {
//       this.badAnswer();
//       this.animationReturn();
//       // kosz 5 - zmieszane
//     } else if(this.isDropZone5(gesture) && this.renderTrash().props.trashTarget === 'zmieszane') {
//       this.goodAnswer();
//       this.animationReturn();
//     } else if (this.isDropZone5(gesture) && this.renderTrash().props.trashTarget !== 'zmieszane') {
//       this.badAnswer();
//       this.animationReturn();
//       // kosz 6 - inne
//   } else if(this.isDropZone6(gesture) && this.renderTrash().props.trashTarget === 'inne') {
//       this.goodAnswer();
//       this.animationReturn();
// } else if (this.isDropZone6(gesture) && this.renderTrash().props.trashTarget !== 'inne') {
//       this.badAnswer();
//       this.animationReturn();
// } else {
//       Animated.spring(
//       this.state.pan,
//       {
//         toValue: {x: 0, y: 0}
//       }
//       ).start();
//     }


///warianty rozposane
//
// isDropZone1(gesture) {
//   let trash = this.state.bin_1;
//   return (
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 350 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
// }

//kosz 2 - szkło
// isDropZone2(gesture) {
//   let trash = this.state.bin_2;
//   return (
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 350 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
// }
//
// //kosz 3 - papier
// isDropZone3(gesture) {
//   let trash = this.state.bin_3;
//   return (
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 350 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
// }
//
// //dolne!!
// //kosz 4 - bio
// isDropZone4(gesture) {
//   let trash = this.state.bin_4;
//   return (
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 600 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
// }
//
// //kosz 5 - odpady zmieszane
// isDropZone5(gesture) {
//
//   let trash = this.state.bin_5;
//   return (
//   //warunek dla koszy na dole!
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 600 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
//
// }
//
// //kosz 6 - inne
// isDropZone6(gesture) {
//   let trash = this.state.bin_6;
//   return (
//
//   gesture.moveY > trash.y &&
//   gesture.moveY < trash.y + trash.height + 100 &&
//   gesture.moveY + trash.y + trash.height + 100 > 600 &&
//
//   gesture.moveX > trash.x + 20 &&
//   gesture.moveX < trash.x + trash.width + 20
//   );
// }
//


///
//uniwersalna funkcja - ale co dalej?
//
// isDropZoneExtra(gesture) {
//
//   for (let i = 0; i <= 6; i++) {
//
//     const bins = [this.state.bin_1, this.state.bin_2, this.state.bin_3, this.state.bin_4, this.state.bin_5, this.state.bin_6];
//     if (
//     gesture.moveY > bins[i].y &&
//     gesture.moveY < bins[i].y + bins[i].height + 100 &&
//     gesture.moveY + bins[i].y + bins[i].height + 100 > 350 &&
//
//     gesture.moveX > bins[i].x + 20 &&
//     gesture.moveX < bins[i].x + bins[i].width + 20
//     ) {
//       this.setState({
//         result: this.state.result.push('true')
//       });
//     } else {
//       this.setState({
//         result: this.state.result.push('false')
//       });
//     }
//   }
// }

{/*<ImageBackground source={require('./img/test1.jpg')} style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_6')}>*/}
{/*  <Text style={styles.category2} >metale i tworzywa sztuczne</Text>*/}
{/*</ImageBackground>*/}

{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_1')}>1d. Metale i tworzywa sztuczne</Text>*/}
{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_2')}>2d.Szkło</Text>*/}
{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_3')}>3.Papier</Text>*/}
{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_4')}>4.Bio</Text>*/}
{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_5')}>5.Zmieszane</Text>*/}
{/*<Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_6')}>6.Inne (PSZOK, apteki itp.)6</Text>*/}