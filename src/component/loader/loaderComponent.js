import React from 'react';
import { Spinner } from 'reactstrap';

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>
    );
  }
}