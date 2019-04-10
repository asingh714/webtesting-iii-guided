import React from 'react';
import renderer from 'react-test-renderer'; 

import App from './App';

describe('<App />', () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    // this is all done with jest. not react-test-renderer
    expect(tree).toMatchSnapshot();
  })
});
