import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago'
import { Link } from 'react-router-dom';
function Homepage() {
  return (
   <main>
    <CallToAction />
    <Specials/>
    <CustomersSay/>
    <Chicago/>
   </main>
  );
}
export default Homepage;