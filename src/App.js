import React, { Component } from 'react';
/*import logo from './logo.svg';*/

import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
           
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Title</a>
            </div>
        
           
            
          </div>
        </nav><br /> <br />



        <div className="container" >
          <div className="row">

            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 col-xs-4">
                  <p>Question 2 of 30-Multiple Choice</p>
                </div>
                <div className="col-md-5 col-xs-5">
                  
                </div>
                <div className="col-md-3 col-xs-3">
                  <p>Time Remaining: 04:30</p>
                </div>
              </div>
              <div className="well well-quz">
                <div className="row">
                <div className="col-md-1 col-xs-1">
                  <p className="number">2 <i className="fa fa-arrow-right"></i></p>
                </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-6 quiz">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        .(press A - D to answer)</p>
                        <button className="btn btn-success btn-block quet quet-active"><b>A</b>23 Pupils <i className="fa fa-circle-o"></i></button>
                        <button className="btn btn-block quet"><b>B</b>13 Pupils <i className="fa fa-circle-o"></i></button>
                        <button className="btn btn-block quet"><b>C</b>3 Pupils <i className="fa fa-circle-o"></i></button>
                        <button className="btn btn-block quet"><b>D</b>8 Pupils <i className="fa fa-circle-o"></i></button>
                        
                        <div className="butts">
                          <button className="btn btn-default"><i className="fa fa-chevron-left"></i>Previous</button><button className="btn btn-primary">Next Question<i className="fa fa-chevron-right"></i></button>  
                        </div>
                        
                      </div>
                      <div className="col-md-6">
                        
                           

                          
                        
                      </div>
                      
                     </div>
                     <div className="col-md-1">
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="col-md-1"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
