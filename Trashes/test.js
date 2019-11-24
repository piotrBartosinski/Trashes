import {
  Text,
  View,
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
            
          } else if (dropzones[i]  && this.renderTrash().props.trashTarget !== bins[i]) {
            this.badAnswer();
            this.animationReturn();
            this.showAgain();
            
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
  
  render() {
    if (this.state.index < trashesList.length) {
      return (
      <View style={styles.mainContainer}>
        <View style={styles.filler}/>
        <View style={styles.logo}>
          <Text>Title {this.state.info}</Text></View>
        <View style={styles.bins}>
          <View style={styles.bins__wrapper}>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_1')}>1. Metale i tworzywa sztuczne</Text>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_2')}>2d.Szkło</Text>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_3')}>3.Papier</Text>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_4')}>4.Bio</Text>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_5')}>5.Zmieszane</Text>
            <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bin_6')}>6.Inne (PSZOK, apteki itp.)6</Text>
          </View>
        </View>
        <View style={styles.trash}></View>
        <View style={styles.scores}><Text>punkty: {this.state.points} index: {this.state.index}
        result: {this.state.result}
        </Text></View>
        <View style={{width: `${(100/trashesList.length)*(this.state.index)}%`, height: 20, backgroundColor: 'red'}}></View>
      
        {this.renderTrash()}
      </View>
      );
    } else {
    
      return(<>
      <View style={styles.mainContainer}>
        <View style={styles.filler}/>
        <View style={styles.logo}>
          <Text>Title {this.state.info}</Text></View>
        <View style={styles.summary}><Text>wynik: {this.state.points}/{trashesList.length} pkt.</Text></View>
        <View style={styles.again}>
          <TouchableOpacity onPress={() => this.setState({index: 0, points: 0})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Zagraj jeszcze raz</Text>
            </View>
          </TouchableOpacity>
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
          <Text style={styles.text}>{trashesList[this.state.index].name}</Text>
        </Animated.View>
      </View>
      )
    }
  }
}




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