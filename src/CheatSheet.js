import Markdown from 'markdown-to-jsx';

const content = `
# Markdown Cheat Sheet

### Headers

# H1
## H2
### H3
#### H4

### Emphasis

*italic*, **bold**, ***bold italic***, ~~strikethrough~~

### Lists

#### Unordered

* Item 1
* Item 2
* Item 3

#### Ordered

1. Item 1
2. Item 2
3. Item 3

### Links

[Markdown Guide](https://www.markdownguide.org)

### Images

![Kromatic logo](https://kromatic.fr/wp-content/uploads/2019/08/KLogoComplet_Smaller.png)

### Blockquotes

> This is a blockquote.

### Code

Inline \`code\` and fenced blocks:

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

### Horizontal Rule

---

### Footnotes

Text with a footnote[^1].

[^1]: This is the footnote content.
`;

function CheatSheet() {
	return (
		<div className="scrollable-page">
			<div className="container">
				<div id="markdownOutput">
					<Markdown>{content}</Markdown>
				</div>
				<p className="mt-3">More information on these great resources:</p>
				<ul>
					<li>
						<a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer">Matt Cone's Markdown Guide</a>
					</li>
					<li>
						<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">Adam Pritchard's Markdown Cheatsheet</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default CheatSheet;
