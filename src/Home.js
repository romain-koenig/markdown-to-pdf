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

  const handleReset = () => {
    retrieveInitialMarkdown();
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const markdownOutput = document.getElementById('markdownOutput').innerHTML;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
          <style>
          @media print {
            .printInstructions {
              display: none;
            }
          }
          </style>
        </head>
        <body>
        <div class="container">
          ${markdownOutput}
          <div class="printInstructions">
            <p><em>Please use your browser's print functionality to print this page. This is typically accessible by pressing Ctrl+P (Windows) or Command+P (Mac). You can also click on the button below.</em></p>
            <button class="btn btn-primary printInstructions" onclick="window.print()">Print</button>
            <button class="btn btn-secondary printInstructions" onclick="window.close()">Back to editor</button>

          </div>
        </div>

        <script type="text/javascript">
        window.onload = function() {
          window.print();
            }
          </script>
        </body>
      </html>
    `);
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
            <button className="btn btn-primary download-button" onClick={handleReset}>Reset demo text</button>
          </div>
          <div className="col-6">
            <div id="markdownOutput">
              <Markdown options={markdownOptions}>
                {markdown}
              </Markdown>

            </div>
            <button className="btn btn-primary download-button" onClick={handlePrint}>
              Print Preview
            </button>
          </div>
        </div>
      </div>

    </div>
  );

  function retrieveInitialMarkdown() {
    // Clear localStorage and reset markdown to instructions
    localStorage.removeItem('markdown');
    setMarkdown(instructions);
  }
}

export default Home;