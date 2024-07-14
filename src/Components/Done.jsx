import React from 'react';
import { Link } from 'react-router-dom';

const Done = () => {

  
  return (

<fieldset>
  <legend>Grow Animation</legend>
  <input type="checkbox" class="chip grow" role="switch" value="Pear" aria-label="Pear" />
  <input type="checkbox" class="chip grow" role="switch" value="Banana" aria-label="Banana"  />
  <input type="checkbox" class="chip grow" role="switch" value="Apple" aria-label="Apple"  />
  <input type="checkbox" class="chip grow" role="switch" value="Peach" aria-label="Peach"  checked />
</fieldset>
  );
}

export default Done;
