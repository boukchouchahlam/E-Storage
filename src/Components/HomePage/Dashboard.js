import React ,{ useEffect}from 'react'
import './Dashboard.css' 
import pic1 from'../../img/image.jpg';

import M from 'materialize-css'
 const Dashboard =() =>{

  useEffect(()=>{
    let elements =document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
    
  }, []);
 
  return (

  <body>
   
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <br/><br/>
                <h1 className="header center pink-text text-darken-0"><i className="material-icons medium" ></i>E-Storage</h1>
                <div className="row center">
                    <h4 className="header col s12 black-text"> E-Storage is a virtual secure storage space for files and user content.</h4>
                </div>
                <div className="row center">
                    <a href='/signup' id="download-button" className="btn-large waves-effect waves-light pink darken-0">SIGN UP FREE</a>
                </div>
                <br/><br/>
                <div className="parallax"><img src={pic1} alt={"Unsplashed background img 1"} /></div>
                
                
           </div>
           
       </div>

       
  </div>
  <div className="container">
    <div className="section">

    
    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">next_week</i></h2>
          <h5 className="center">Creation and Storage </h5>

          <p className="light">Create, store and share cloud content and bundle it with standard files from your E-Storage App.</p>
        </div>
      </div>



      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">devices</i></h2>
          <h5 className="center">Security</h5>

          <p className="light">your data is safe thanks to our secure distributed infrastructure.</p>
        </div>
      </div>


      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">speed</i></h2>
          <h5 className="center">Rapidity</h5>

          <p className="light">All users have access to the content they need, when they need it.</p>
        </div>
      </div>

  </div>
    </div>
  </div>



  
  <footer className="page-footer pink">
    <div className="container">
      <div className="row">
        
        <div className="col s12 center " >
          <h5 className="white-text">Follow Us</h5>

            <a className="white-text" href="#!" ><i className="fab fa-facebook small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-linkedin small fa-4x" href="#!"></i></a>
              
        </div>
      </div>
    </div>

  </footer>
 
  <script src="http://materializecss.com/js/init.js"></script>
  
</body>


  )}

export default Dashboard
