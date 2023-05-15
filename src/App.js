import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import html2pdf from 'html2pdf.js';

function App() {
  const [markdown, setMarkdown] = useState('');

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

  const handleDownloadPDF = () => {
    const element = document.getElementById('markdownOutput');
    html2pdf().from(element).save();
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
            <div id="markdownOutput">
              <Markdown>
                {markdown}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary download-button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
