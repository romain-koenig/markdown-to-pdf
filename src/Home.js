import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import './Home.css';

const instructions = `# Welcome to Markdown to PDF

Type your **Markdown** on the left and see a live preview on the right.
When you're happy with the result, click **Print / Export PDF** to export.

## Features

- Live preview as you type
- One-click PDF export via your browser's print dialog
- Content saved automatically in your browser (no account needed)
- No tracking, no data sent to any server

## Quick syntax reference

### Text formatting

*italic*, **bold**, ~~strikethrough~~, \`inline code\`

### Lists

- Unordered item
- Another item

1. Ordered item
2. Second item

### Code block

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Table

| Feature      | Status |
| ------------ | ------ |
| Live preview | ✅     |
| PDF export   | ✅     |
| Privacy      | ✅     |

---

*Clear this text and start writing your own Markdown!*
`;

function Home() {
  const [markdown, setMarkdown] = useState(localStorage.getItem('markdown') || instructions);

  useEffect(() => {
    localStorage.setItem('markdown', markdown);
  }, [markdown]);

  return (
    <div className="editor-root">
      <div className="editor-columns">
        <div className="editor-pane">
          <div className="pane-header">Markdown</div>
          <textarea
            className="editor-textarea"
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="preview-pane">
          <div className="pane-header">
            <span>Preview</span>
            <button className="btn btn-primary btn-sm" onClick={() => window.print()}>
              Print / Export PDF
            </button>
          </div>
          <div id="markdownOutput" className="print-only">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
