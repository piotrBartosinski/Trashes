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



export default class Viewport extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      showDraggable   : true,
      dropZoneValues  : null,
      pan             : new Animated.ValueXY(),
      result: 'nic',
      width: '',
      height: '',
      x: '',
      y: ''
    };
    
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null,{
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {
        if(this.isDropZone(gesture)){
          this.setState({
            showDraggable : false,
            result: 'super!'
          });
        }else{
          Animated.spring(
          this.state.pan,
          {toValue:{x: 0,y:0}}
          ).start();
        }
      }
    });
  }
  
  isDropZone(gesture){
    let dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }
  
  setDropZoneValues(event){
    this.setState({
      dropZoneValues: event.nativeEvent.layout
    });
  }
  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    })
  }
  
  render(){
    return (
    <View style={styles.mainContainer}>
      <View style={styles.filler}/>
      <View style={styles.logo}>
    <Text>Title</Text></View>
      <View style={styles.bins}>
        <View style={styles.bins__wrapper} >
          <Text style={styles.category}>Metals</Text>
          <Text style={styles.category}>Glas</Text>
          <Text style={styles.category}>Papier</Text>
          <Text style={styles.category} onLayout={this.onLayout}>Mix</Text>
          <Text style={styles.category}  onLayout={this.setDropZoneValues.bind(this)}></Text>
          <Text style={styles.category}>Others</Text>
        </View>
      </View>
  
 
      <View style={styles.trash}></View>
      <View style={styles.scores}><Text>{this.state.result}
        {this.state.x} {this.state.y}</Text></View>

      {this.renderDraggable()}
    </View>

    );
  }
  
  renderDraggable(){
    if(this.state.showDraggable){
      return (
      <View style={styles.draggableContainer}>
        <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.circle]}>
          <Text style={styles.text}>Trash1</Text>
        </Animated.View>
      
      </View>
      );
    }
  }
}


