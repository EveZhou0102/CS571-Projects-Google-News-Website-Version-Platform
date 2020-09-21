import React from 'react';
import './css/SectionTag.css';


function DateSection(props) {
  return (
    <div>
      <p style={{ flow: 'left' }}>2030-03-07</p>
      <div style={{ flow: 'right' }}>
        {props.sections.map((section) =>
          <p className={section}>{section}</p>
        )}
      </div>
    </div>
  );
}