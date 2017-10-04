import React, { Component } from 'react';
/*import logo from './logo.svg';*/
// import {BarChart} from 'react-easy-chart';
import './App.css';

class App extends Component {


  //  mouseOverHandler(d, e) {
  //   this.setState({
  //     showToolTip: true,
  //     top: `${e.screenY - 10}px`,
  //     left: `${e.screenX + 10}px`,
  //     y: d.y,
  //     x: d.x});
  // }

  // mouseMoveHandler(e) {
  //   if (this.state.showToolTip) {
  //     this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
  //   }
  // }

  // mouseOutHandler() {
  //   this.setState({showToolTip: false});
  // }

  render() {
    return (
      <div className="App">
        <nav className="navbar bg-primary" role="navigation">
          <div className="container-fluid">
           
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Tuteria</a>
            </div>
        
           
            
          </div>
        </nav><br /> 



        <div className="container" >
          <div className="row">

            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 col-xs-4">
                  <p>Question 2 of 30-Multiple Choice</p>
                </div>
                <div className="col-md-5 col-xs-4">
                  
                </div>
                <div className="col-md-3 col-xs-4">
                  <p>Time Remaining: 04:30</p>
                </div>
              </div>
              <div className="well well-quz">
                <div className="row">
                <div className="col-md-1 col-xs-1">
                  <span className="number">2 <i className="fa fa-arrow-right"></i></span>
                </div>
                  <div className="col-md-11 col-xs-10">
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
                          <div className="row">
                            <div className="col-md-5 col-xs-6"> 
                              <button className="btn btn-default btn-block prev"><i className="fa fa-chevron-left"></i>Previous</button>  
                            </div>
                            <div className="col-md-7 col-xs-6"> 
                             <button className="btn btn-primary btn-block">Next Question<i className="fa fa-chevron-right"></i></button>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div className="col-md-6">
                        
                           
                        <div id="chartContainer"></div>
                          
                        
                      </div>
                      
                     </div>
                     
                  </div>
                </div>
                
              </div>
            </div>
            
            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
