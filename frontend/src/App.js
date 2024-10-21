import React from 'react';
import Header from './Header';  // Import your Header component
import './App.css';  // Import your App-specific styles (if any)
import Home from './Home';
import Recommend from './Recommend';
import Plans from './Plans';
import Domain from './Domain';
import Migration from './Migration';
import Quotes from './Quotes';
import Dashboard from './Dashboard';
import Performance from './Performance'
import Members from './Members';
import Help from './Help';
import Banner from './Banner';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <Header />  {/* The Header component */}
      <main>
       <Home/>
       <Recommend/>
       <Plans/>
       <Domain/>
       <Migration/>
       <Quotes/>
       <Dashboard/>
      <Performance/>
      <Members/>
      <Help/>
      <Banner/>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
