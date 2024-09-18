import React from 'react';
import Navigation  from './Navigation';

function NotFound() {
  return(
    <div>
      <Navigation></Navigation>
      <h1>Error 404</h1>
      <p>page does not exist.</p>
    </div>
  )
}

export default NotFound;