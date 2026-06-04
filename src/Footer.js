import React from 'react';

function Footer() {
	return (
		<footer className="bg-light text-center py-3 mt-5">
			<span>© {new Date().getFullYear()} Romain Koenig — Markdown to PDF. MIT License.</span>
		</footer>
	);
}

export default Footer;
