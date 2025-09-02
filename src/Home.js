import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import './Home.css';

const instructions = ``;

function Home() {
  // Initialize markdown from localStorage or default to instructions
  const [markdown, setMarkdown] = useState(localStorage.getItem('markdown') || instructions);

  useEffect(() => {
    // Whenever markdown changes, update it in localStorage
    localStorage.setItem('markdown', markdown);
  }, [markdown]);

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };


  const markdownOptions = {
    overrides: {
      h1: { component: 'h1', props: { className: 'h1' } },
      h2: { component: 'h2', props: { className: 'h2' } },
      // ...and so on for each element you want to style
    },
  };



  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Markdown to PDF Converter</h1>
            <p>Type your Markdown in the left box and see the formatted output on the right.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <textarea
              className="form-control"
              style={{ height: '70vh' }}
              value={markdown}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-6">
            <div id="markdownOutput" className="print-only">
              <Markdown options={markdownOptions}>
                {markdown}
              </Markdown>
            </div>
            <button className="btn btn-primary download-button" onClick={() => window.print()}>
              Print
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;