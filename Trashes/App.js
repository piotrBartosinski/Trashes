import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

import Test1 from "./test.js";


export default function App() {
  return (
  <View>
    <Test1></Test1>
    <Text>Test</Text>
  </View>
  );
}



// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   PanResponder,
//   Animated,
//   Dimensions
// } from 'react-native';
//
//
// export default function App() {
//   return (
//   <View>
//   <ImageBackground source={require('./img/background.jpg')} style={styles.background}>
//     <View style={styles.filler}>
//     </View>
//     <View style={styles.logo}>
//       <Text>Co gdzie wrzucić?</Text>
//     </View>
//     <View style={styles.bins}>
//       <View style={styles.bins__wrapper}>
//         <Text style={styles.text}>Metale i tworzywa sztuczne</Text>
//         <Text style={styles.text}>Szkło</Text>
//         <Text style={styles.text}>Papier</Text>
//         <Text style={styles.text}>Bio</Text>
//         <Text style={styles.text}>Zmieszane</Text>
//         <Text style={styles.text}>Inne (PSZOK, apteki itp.)</Text>
//       </View>
//     </View>
//     <View style={styles.trash}></View>
//     <View style={styles.scores}></View>
//   </ImageBackground>
//   </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   background: {
//     width: '100%',
//     height: '100%',
//   },
//   filler: {
//     height: 25,
//     backgroundColor: 'black'
//   },
//   logo: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 80,
//     backgroundColor: 'red'
//   },
//   bins: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     backgroundColor: 'white'
//   },
//   bins__wrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//
//     width: '90%',
//     height: '90%',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: 'black'
//   },
//   trash: {
//     height: 150,
//     backgroundColor: 'blue'
//   },
//   scores: {
//     height: '100%',
//     backgroundColor: 'pink'
//   },
//   text: {
//     margin: 5,
//     backgroundColor: 'yellow',
//     width: 80,
//     height: 120
//   }
// });
//

