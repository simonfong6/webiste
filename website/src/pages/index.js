import React from 'react'
import resume from '../static/resume.pdf';

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Simon Fong</h1>
    <a 
      href = {resume}
      target = "_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  </div>
)
