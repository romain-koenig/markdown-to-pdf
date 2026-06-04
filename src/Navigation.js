import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
	const [open, setOpen] = useState(false);

	const close = () => setOpen(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand fw-semibold" to="/" onClick={close}>Markdown to PDF</Link>
				<button
					className="navbar-toggler"
					type="button"
					onClick={() => setOpen(!open)}
					aria-label="Toggle navigation"
					aria-expanded={open}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse${open ? ' show' : ''}`}>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/" onClick={close}>Editor</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/cheatsheet" onClick={close}>Cheat Sheet</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about" onClick={close}>About</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
