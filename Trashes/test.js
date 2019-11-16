import {
  Text,
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions
} from "react-native";

import React, {Component} from "react";
import styles from './styles/style.js';

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
      result: 0,
      info: '',
      index: 0,
      trashes: ['tapeta', 'butelka', 'paragon', 'blistry', 'chusteczka', 'kości']
    };
    
    this.panResponder = PanResponder.create({
      
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        // console.log('e', e);
        // console.log('g', gesture.moveY, 'y', gesture.moveY);
        
        // console.log(this.renderTrash_1());
        
        
        // console.log(e.nativeEvent);
        // console.log(e.nativeEvent.locationX);
        
        //kosz 1 - metale i tworzywa sztuczne
        // gesture, trash, props
        if (this.isDropZone1(gesture)) {
          this.setState({
            showDraggable: false,
            result: this.state.result - 1,
            index: this.state.index + 1,
          });
          
          //kosz 2 - szkło
        } else if (this.isDropZone2(gesture)) {
          this.setState({
            showDraggable: false,
            result: this.state.result - 1,
            info: 'źle',
            index: this.state.index + 1,
          });
          
          //kosz 3 - papier
        } else if (this.isDropZone3(gesture)) {
          this.setState({
            showDraggable: false,
            result: this.state.result - 1,
            info: 'źle',
            index: this.state.index + 1,
          });
          
          //kosz 4 - bio
        } else if (this.isDropZone4(gesture)) {
          this.setState({
            showDraggable: false,
            result: this.state.result - 1,
            info: 'źle',
            index: this.state.index + 1,
          });
          //kosz 5 - odpady zmieszane
        } else if (this.isDropZone5(gesture) && this.renderTrash_1().props.trashName === this.state.trashes[this.state.index]) {
          this.setState({
            showDraggable: false,
            result: this.state.result + 1,
            info: 'dobrze',
            index: this.state.index + 1,
          });
          //kosz 6 - inne
        } else if (this.isDropZone6(gesture)) {
          this.setState({
            showDraggable: false,
            result: this.state.result - 1,
            info: 'źle',
            index: this.state.index + 1,
          });
        } else {
          Animated.spring(
          this.state.pan,
          {toValue: {x: 0, y: 0}}
          ).start();
        }
        console.log(this.renderTrash_1().props.trashName);
        console.log(this.state.trashes[this.state.index]);
        console.log(this.state.index);
        console.log(this.state.result);
        console.log(this.state.showDraggable);
        console.log(this.state.trashes);
      }
    });
  }
  
  //20 - margines dla dropzone
  //kosz 1 - metale i tworzywa sztuczne
  isDropZone1(gesture) {
    let trash = this.state.bin_1;
    return (
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 350 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  //kosz 2 - szkło
  isDropZone2(gesture) {
    let trash = this.state.bin_2;
    return (
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 350 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  //kosz 3 - papier
  isDropZone3(gesture) {
    let trash = this.state.bin_3;
    return (
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 350 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  //kosz 4 - bio
  isDropZone4(gesture) {
    let trash = this.state.bin_4;
    return (
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 600 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  //kosz 5 - odpady zmieszane
  isDropZone5(gesture) {
    
    let trash = this.state.bin_5;
    return (
    //warunek dla koszy na dole!
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 600 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
    
  }
  
  //kosz 6 - inne
  isDropZone6(gesture) {
    // this.setState({
    //   testX: gesture.moveX.toFixed(),
    //   testY: gesture.moveY.toFixed()
    // });
    let trash = this.state.bin_6;
    return (
    
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 600 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  setDropZoneValues1(event) {
    console.log(event);
    this.setState({
      bin_1: event.nativeEvent.layout
    });
  }
  
  setDropZoneValues2(event) {
    this.setState({
      bin_2: event.nativeEvent.layout
    });
  }
  
  setDropZoneValues3(event) {
    this.setState({
      bin_3: event.nativeEvent.layout
    });
  }
  
  setDropZoneValues4(event) {
    this.setState({
      bin_4: event.nativeEvent.layout
    });
  }
  
  setDropZoneValues5(event) {
    this.setState({
      bin_5: event.nativeEvent.layout
    });
  }
  
  setDropZoneValues6(event) {
    this.setState({
      bin_6: event.nativeEvent.layout
    });
  }
  
  render() {
    return (
    <View style={styles.mainContainer}>
      <View style={styles.filler}/>
      <View style={styles.logo}>
        <Text>Title {this.state.info}</Text></View>
      <View style={styles.bins}>
        <View style={styles.bins__wrapper}>
          <Text style={styles.category} onLayout={this.setDropZoneValues1.bind(this)}>xxx1. Metale i tworzywa
            sztuczne1</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues2.bind(this)}>x2.Szkło</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues3.bind(this)}>3.Papier</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues4.bind(this)}>4.Bio</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues5.bind(this)}>5.Zmieszane</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues6.bind(this)}>6.Inne (PSZOK, apteki
            itp.)6</Text>
        </View>
      </View>
      
      
      <View style={styles.trash}></View>
      <View style={styles.scores}><Text>{this.state.result} index: {this.state.index}
      </Text></View>
      
      {this.renderTrash_1()}
      
      <View><Text>_</Text></View>
      <View>
        <Text> ___________ x: {this.state.bin_5.x} y:{this.state.bin_5.y} h: {this.state.bin_5.height}
          X:{this.state.testX} Y:{this.state.testY} </Text></View>
    </View>
    
    
    );
  }
  //kopia funkcji
  renderTrash_1() {
    if(this.state.showDraggable) {
      return (
      <View style={styles.draggableContainer} trashName={this.state.trashes[this.state.index]}>
        <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.circle]}>
          <Text style={styles.text}>{this.state.trashes[this.state.index]}</Text>
        </Animated.View>
      </View>
      
      )
    }
  }
}







