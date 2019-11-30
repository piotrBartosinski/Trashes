import {
  Text,
  View,
  Image,
  ImageBackground,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";

import React, {Component} from "react";
import styles from './styles/style.js';
import trashesList from './trashes_list';
import {Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      
      index: 0,
      points: 0,
      info: '',
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
        
        for (let i = 0; i <= bins.length; i++) {
          if (dropzones[i] && this.renderTrash().props.trashTarget === bins[i]) {
            this.goodAnswer(i);
            this.animationReturn();
            this.showAgain();
          } else if (dropzones[i] && this.renderTrash().props.trashTarget !== bins[i]) {
            this.badAnswer(i);
            this.animationReturn();
            this.showAgain();
          } else {
            Animated.spring(
            this.state.pan,
            {toValue: {x: 0, y: 0}}).start();
          }
        }
      }
    });
  }
  
  goodAnswer(i) {
    this.setState({
      showDraggable: false,
      index: this.state.index + 1,
      points: this.state.points + 1,
      summaryArr: this.state.summaryArr.concat('1'),
      summaryBin: this.state.summaryBin.concat(i),
      info: 'DOBRZE !'
    });
  }
  
  badAnswer(i) {
    this.setState({
      showDraggable: false,
      index: this.state.index + 1,
      summaryArr: this.state.summaryArr.concat('0'),
      summaryBin: this.state.summaryBin.concat(i),
      info: 'ŹLE'
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
    if (this.state.showDraggable) {
      return (<Text style={styles.trash_name}>{trashesList[this.state.index].name}</Text>);
    } else {
      return (<Text style={(this.state.info === 'DOBRZE !') ? styles.good : styles.bed}>{this.state.info}</Text>)
    }
  }
  
  render() {
    let points;
    if (this.state.points === 1) {
      points = 'PUNKT';
    } else if (this.state.points === 2 || this.state.points === 3 || this.state.points === 4) {
      points = 'PUNKTY';
    } else {
      points = 'PUNKTÓW'
    }
    
    let questions;
    if ((trashesList.length - this.state.index) === 1) {
      questions = 'PYTANIE';
    } else if ((trashesList.length - this.state.index) === 2
    || (trashesList.length - this.state.index) === 3
    || (trashesList.length - this.state.index) === 4) {
      questions = 'PYTANIA';
    } else {
      questions = 'PYTAŃ';
    }
    
    if (this.state.index < trashesList.length) {
      let bins;
      return (<>
        <View>
          <ImageBackground source={require('./img/background.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.filler}/>
            <View style={styles.logo}>
              <Image source={require('./img/logo.png')} style={{width: 305, height: 70}}/>
            </View>
            <View style={styles.bins}>
              <View style={styles.bins__wrapper}>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_1')}>
                  <ImageBackground source={require('./img/bins/bin_1.png')} style={styles.trashimage}/>
                </View>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_2')}>
                  <ImageBackground source={require('./img/bins/bin_2.png')} style={styles.trashimage}/>
                </View>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_3')}>
                  <ImageBackground source={require('./img/bins/bin_3.png')} style={styles.trashimage}/>
                </View>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_4')}>
                  <ImageBackground source={require('./img/bins/bin_4.png')} style={styles.trashimage}/>
                </View>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_5')}>
                  <ImageBackground source={require('./img/bins/bin_5.png')} style={styles.trashimage}/>
                </View>
                
                <View style={styles.categoryWrapper} onLayout={this.setDropZoneValues.bind(this, 'bin_6')}>
                  <ImageBackground source={require('./img/bins/bin_6.png')} style={styles.trashimage}/>
                </View>
              </View>
            </View>
            <View style={styles.place}>
              <View>
                {/*<Icon name='indeterminate-check-box' size={20} color={'#439029'}/>*/}
                {/*      <Icon name='check-box' size={20} color={'#df4230'}/>*/}</View>
              
              <View style={styles.trash}>
                {this.trashName()}
              </View>
              
              <View></View>
            </View>
            
            <View style={styles.scores}>
              <Text style={styles.scores2}>{this.state.points} {points} |
                JESZCZE {trashesList.length - this.state.index} {questions}
                {/*s: {this.state.summaryArr.map(el=> {return el})} i:  s: {this.state.summaryBin.map(el=> {return el})}*/}
              </Text>
            </View>
            {/*<View style={{width: `${(100/trashesList.length)*(this.state.index)}%`, height: 20, backgroundColor: 'red'}}></View>*/}
          </ImageBackground>
        </View>
        {this.renderTrash()}
      </>
      );
    } else {
      
      const tableHead = [
        <View style={styles.tableHeader}><Text style={styles.textHeader}>śmieć</Text></View>,
        <View style={styles.tableHeader}><Text style={styles.textHeader}>wrzuciłeś do:</Text></View>,
        <View style={styles.tableHeader}><Text style={styles.textHeader}>ok?</Text></View>,
        <View style={styles.tableHeader}><Text style={styles.textHeader}>poprawnie</Text></View>,
        <View style={styles.tableHeader}><Text style={styles.textHeader}>pkt</Text></View>
      ];
      const summary = [
        <View></View>,
        <View style={styles.tableHeader}><Text style={styles.textHeader}>{this.state.points} pkt</Text></View>
      ];
      
      const inflectionBin = ['tworzyw', 'szkła', 'papieru', 'bio', 'zmieszanych', 'innych'];
      const tableData = [];
      const checkOk = <Image source={require('./img/yes.png')} style={{width: 32, height: 16, marginLeft: 3}}/>;
      const checkNot = <Image source={require('./img/no.png')} style={{width: 32, height: 16, marginLeft: 3}}/>;
      
      const {summaryBin, summaryArr} = this.state;
      for (let i = 0; i < trashesList.length; i++) {
        
        tableData.push(
        [inflectionBin[summaryBin[i]],
          (summaryArr[i] === '1') ? checkOk : checkNot,
          (summaryArr[i] === '1') ? ' ' :
          <View style={{borderRadius: 5, marginLeft: 1, marginRight: 1, backgroundColor: trashesList[i].color}}>
            <Text style={styles.textProperBin}>{trashesList[i].target}</Text></View>,
          (summaryArr[i] === '1') ? '1' : '0',
        ]);
      }
      
      return (
      <View>
        <ImageBackground source={require('./img/background.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.filler}/>
          <View style={styles.logo}>
            <Image source={require('./img/logo.png')} style={{width: 305, height: 70}}/></View>
          <View style={styles.again}>
            
            <View style={styles.tableContainer}>
              
              {/*<View style={styles.tableHead2}></View>*/}
              
              <Table borderStyle={{borderWidth: 0}}>
                
                <Row data={tableHead} flexArr={[2, 2, 1, 2, 1]} style={styles.tableHead}
                     textStyle={styles.tableTextGrey}/>
                <TableWrapper style={styles.tableWrapper}>
                  <Col data={trashesList.map(el => el.name)} style={styles.tableTittle} heightArr={[27, 27]}
                       textStyle={styles.tableText}/>
                  <Rows data={tableData} flexArr={[2, 1, 2, 1]} style={styles.tableRow} textStyle={styles.tableText}/>
                </TableWrapper>
                <Row data={summary} flexArr={[4, 1]} style={styles.tableHead} textStyle={styles.tableTextGrey}/>
              </Table>
              
              
              <View>
                <TouchableOpacity onPress={() => this.setState({index: 0, points: 0, summaryArr: [], summaryBin: []})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>ZAGRAJ JESZCZE RAZ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      )
    }
  }
  
  renderTrash() {
    if (this.state.showDraggable) {
      return (
      <View style={styles.draggableContainer} trashTarget={trashesList[this.state.index].target}>
        <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.circle]}>
          <ImageBackground source={trashesList[this.state.index].img} style={styles.icon}/>
          {/*<Image source={require('./img/trash_1.png')} style={styles.icon}/>*/}
        </Animated.View>
      </View>
      )
    }
  }
}
