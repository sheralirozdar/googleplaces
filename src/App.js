import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


// Redux
import { Provider } from 'react-redux';
import store from './store';



import AutoComplete from './component/googleplaces'
import './App.css';


const App = () => {

 
    useEffect(() => {
     
    }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        
          <Routes>
             <Route  path="/" element={<AutoComplete />} />
            

          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
