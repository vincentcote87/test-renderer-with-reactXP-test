import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import TestRenderer from 'react-test-renderer';

describe('<App />', () => {

  it('is testing renderer', () => {
    const tr = TestRenderer.create(<App/>);
    console.log(tr.toJSON().tyoe.props);
  })
});


