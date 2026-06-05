import { Fragment } from 'react';
import Markdown from 'markdown-to-jsx';

const sections = [
	{
		title: 'Headers',
		rows: [
			{ syntax: '# H1' },
			{ syntax: '## H2' },
			{ syntax: '### H3' },
			{ syntax: '#### H4' },
		],
	},
	{
		title: 'Emphasis',
		rows: [
			{ syntax: '*italic*' },
			{ syntax: '**bold**' },
			{ syntax: '***bold italic***' },
			{ syntax: '~~strikethrough~~' },
		],
	},
	{
		title: 'Unordered list',
		rows: [
			{ syntax: '* Item 1\n* Item 2\n* Item 3' },
		],
	},
	{
		title: 'Ordered list',
		rows: [
			{ syntax: '1. Item 1\n2. Item 2\n3. Item 3' },
		],
	},
	{
		title: 'Links',
		rows: [
			{ syntax: '[Markdown Guide](https://www.markdownguide.org)' },
		],
	},
	{
		title: 'Images',
		rows: [
			{ syntax: '![Kromatic logo](https://kromatic.fr/wp-content/uploads/2019/08/KLogoComplet_Smaller.png)' },
		],
	},
	{
		title: 'Blockquotes',
		rows: [
			{ syntax: '> This is a blockquote.' },
		],
	},
	{
		title: 'Inline code',
		rows: [
			{ syntax: 'Inline `code` example.' },
		],
	},
	{
		title: 'Fenced code block',
		rows: [
			{
				syntax: '```js\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```',
			},
		],
	},
	{
		title: 'Tables',
		rows: [
			{
				syntax: '| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |',
			},
		],
	},
	{
		title: 'Horizontal rule',
		rows: [
			{ syntax: '---' },
		],
	},
];

function CheatSheet() {
	return (
		<div className="scrollable-page">
			<div className="container">
				<div id="markdownOutput">
					<h1>Markdown Cheat Sheet</h1>
					<p>Each row shows the markdown syntax on the left and the rendered result on the right.</p>

					<table className="cheatsheet-table">
						<thead>
							<tr>
								<th style={{ width: '50%' }}>Syntax</th>
								<th style={{ width: '50%' }}>Result</th>
							</tr>
						</thead>
						<tbody>
							{sections.map((section) => (
								<Fragment key={section.title}>
									<tr className="cheatsheet-section">
										<th colSpan={2}>{section.title}</th>
									</tr>
									{section.rows.map((row, idx) => (
										<tr key={`${section.title}-${idx}`}>
											<td>
												<pre className="cheatsheet-syntax"><code>{row.syntax}</code></pre>
											</td>
											<td>
												<Markdown>{row.syntax}</Markdown>
											</td>
										</tr>
									))}
								</Fragment>
							))}
						</tbody>
					</table>
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
