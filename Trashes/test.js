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
import trashesList from './trashes_list';

export default class Viewport extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showDraggable: true,
      pan: new Animated.ValueXY(),
      tworzywa: '',
      szklo: '',
      papier: '',
      bio: '',
      zmieszane: '',
      inne: '',
      bin_1: 0,
      bin_2: 0,
      bin_3: 0,
      bin_4: 0,
      bin_5: 0,
      bin_6: 0,
      binName: '',
      result: 0,
      info: '',
      index: 0,
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
        
        // if (this.isDropZone1(gesture)) {
        //   this.setState({
        //     showDraggable: false,
        //     result: this.state.result - 1,
        //     index: this.state.index + 1,
        //   });
        //
        //   //kosz 2 - szkło
        // } else if (this.isDropZone2(gesture)) {
        //   this.setState({
        //     showDraggable: false,
        //     result: this.state.result - 1,
        //     info: 'źle',
        //     index: this.state.index + 1,
        //   });
        //
        //   //kosz 3 - papier
        // } else if (this.isDropZone3(gesture)) {
        //   this.setState({
        //     showDraggable: false,
        //     result: this.state.result - 1,
        //     info: 'źle',
        //     index: this.state.index + 1,
        //   });
        //
        //   //kosz 4 - bio
        // } else if (this.isDropZone4(gesture)) {
        //   this.setState({
        //     showDraggable: false,
        //     result: this.state.result - 1,
        //     info: 'źle',
        //     index: this.state.index + 1,
        //   });
      
          //warunki
        if (this.isDropZone1(gesture) && this.renderTrash().props.trashTarget === this.state.binName) {
          this.setState({
            showDraggable: false,
            index: this.state.index + 1,
            result: this.state.result + 1,
            info: 'dobrze',
          
          });
          Animated.spring(
          this.state.pan,
          {
            toValue: {x: 0, y: 0}
          }
          ).start();
        }
        
        
        if (this.isDropZone1(gesture) && this.renderTrash().props.trashTarget !== this.state.binName) {
          this.setState({
            showDraggable: false,
            index: this.state.index + 1,
            info: 'źle',
          
          });
          Animated.spring(
          this.state.pan,
          {
            toValue: {x: 0, y: 0}
          }
          ).start();
        } else {
          Animated.spring(
          this.state.pan,
          {
            toValue: {x: 0, y: 0}
          }
          ).start();
        }
        
      }
    });
  }
  
  //20 - margines dla dropzone
  //kosz 1 - metale i tworzywa sztuczne
  isDropZone1(gesture) {
    console.log(gesture);
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
    let trash = this.state.bin_6;
    return (
    
    gesture.moveY > trash.y &&
    gesture.moveY < trash.y + trash.height + 100 &&
    gesture.moveY + trash.y + trash.height + 100 > 600 &&
    
    gesture.moveX > trash.x + 20 &&
    gesture.moveX < trash.x + trash.width + 20
    );
  }
  
  setDropZoneValues(param1, param2, e) {
    this.setState({
      [param1]: param1,
      [param2]: e.nativeEvent.layout
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
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'tworzywa', 'bin_1')}>1. Metale i tworzywa
            sztuczne1</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'szklo', 'bin_2')}>xx2.Szkło</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'papier', 'bin_3')}>3.Papier</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'bio', 'bin_4')}>4.Bio</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'zmieszane', 'bin_5')}>5.Zmieszane</Text>
          <Text style={styles.category} onLayout={this.setDropZoneValues.bind(this, 'inne', 'bin_6')}>6.Inne (PSZOK, apteki
            itp.)6</Text>
        </View>
      </View>
      
      
      <View style={styles.trash}></View>
      <View style={styles.scores}><Text>punkty: {this.state.result} index: {this.state.index}
      </Text></View>
      
      {this.renderTrash()}
      
      <View><Text>_</Text></View>
      {/*<View>*/}
      {/*  <Text> ___________ x: {this.state.bin_5.x} y:{this.state.bin_5.y} h: {this.state.bin_5.height}*/}
      {/*    X:{this.state.testX} Y:{this.state.testY} </Text></View>*/}
    </View>
    
    
    );
  }
  //kopia funkcji
  renderTrash() {
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







