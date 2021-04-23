import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function MyComponent({greeting, name, lang}) {

  return (
    <SafeAreaView >
      <Text>{greeting}</Text>
      <Text style={{backgroundColor:lang==='EN'?'blue':'red', fontWeight:'800', color:'green'}}>{name}</Text>
    </SafeAreaView>
  );
}