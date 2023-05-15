import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const markdownOutput = document.getElementById('markdownOutput').innerHTML;

    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
        </head>
        <body>
        <div class="container">
        ${markdownOutput}
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
          </div>
          <div className="col-6">
            <div id="markdownOutput">
              <Markdown options={markdownOptions}>
                {markdown}
              </Markdown>

            </div>
            <button className="btn btn-primary download-button" onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
