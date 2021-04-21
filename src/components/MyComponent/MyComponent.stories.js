




import * as React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('MyComponent', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('greet USA', () => <MyComponent name={'Fred'} greeting={'Good afternoon'} lang={'EN'} />)
  .add('greeting Poland', () => <MyComponent name={'Agnieszka'} greeting={'Dobry wieczor'} lang={'PL'} />)
  







