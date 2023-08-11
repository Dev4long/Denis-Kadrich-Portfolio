import React from 'react'
import "./projects.css"

function projects() {
  return (
    <div id="skills" className="projectContainer">
      <h3 className='skillsTitle'>Skills</h3>
        <div style={{color:"white", textAlign:'center'}}>
          REACT.JS
         <br/><br/>
          <div className="project one">
            <div className="skill">
              <h2>93%</h2>
            </div>
          </div>  
        </div>

        <div style={{color:"white", textAlign:'center'}}>
          RUBY ON RAILS
          <br/><br/>
          <div className="project two">
            <div className="skill">
              <h2>79%</h2>
            </div>
          </div>  
        </div>
        
        <div style={{color:"white", textAlign:'center'}}>
          PYTHON
          <br/><br/>
          <div className="project three">
            <div className="skill">
              <h2>83%</h2>
            </div>
          </div>  
        </div>

        <div style={{color:"white", textAlign:'center'}}>
          JAVA
          <br/><br/>
          <div className="project four">
            <div className="skill">
              <h2>73%</h2>
            </div>
          </div>  
        </div>

        <div style={{color:"white", textAlign:'center'}}>
        API'S / LIBRARIES
          <br/><br/>
          <div className="project five">
            <div className="skill">
              <h2>87%</h2>
            </div>
          </div>  
        </div>

        <div style={{color:"white", textAlign:'center'}}>
        HTML CSS
          <br/><br/>
          <div className="project six">
            <div className="skill">
              <h2>93%</h2>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default projects