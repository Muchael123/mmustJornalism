import React from 'react';
import Bounce from 'react-reveal/Bounce';

class BounceExample extends React.Component {
  render() {
    return (
      <h1>
        <Bounce left cascade>
          React Reveal
        </Bounce>
      </h1>
    );
  }
}

export default BounceExample;