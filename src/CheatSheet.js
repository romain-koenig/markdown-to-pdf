import React from 'react';

function CheatSheet() {
	return (
		<div className="container">
			<h1>Markdown Cheat Sheet</h1>
			<p>Here is some basic syntax:</p>
			<pre>
				{`
		# Markdown Editor
		
		This is a simple app to edit and print (as PDF?) markdown files.
		
		## Markdown Cheatsheet
		
		### Headers
		
		# H1
		## H2
		### H3
		#### H4
		
		### Emphasis
		
		*italic*  
		**bold**  
		***bold italic***
		
		### Footnotes
		
		Footnotes[^1] have a label[^2] and the footnote's content.
		
		[^1]: This is a footnote content.
		
		[^2]: This is another footnote content.
		
		### Lists
		
		#### Unordered
		
		* Item 1
		* Item 2
		* Item 3
		
		#### Ordered
		
		1. Item 1
		1. Item 2
		1. Item 3
		
		### Links
		
		[Link to Kromatic.fr](https://kromatic.fr)
		
		### Images
		
		![Logo Kromatic](https://kromatic.fr/wp-content/uploads/2019/08/KLogoComplet_Smaller.png)
		
		
		### Blockquotes
		
		> Blockquote
		
		### Tables
		
		| Header 1 | Header 2 |
		| -------- | -------- |
		| Cell 1 | Cell 2 |
		| Cell 3 | Cell 4 |
		
		### Horizontal Rule
		
		---
		
		`}
			</pre>
			<p>
				More informations on these great CheatSheets:
				<ul>
					<li>
						<a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer">Matt Cone's Markdown Guide</a>
					</li>
					<li>
						<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">Adam Pritchard's Markdown CheatSheet</a>
					</li>
				</ul>


			</p>
		</div>
	);
}

export default CheatSheet;
