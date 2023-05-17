import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="https://sebastiansantivanez.netlify.app/" className="title">HOME</a>
				</li>
				<li>
					<a href="/">ABOUT ME</a>
				</li>
				<li>
					<a href="https://sebastiansantivanez-projects.netlify.app/" className="title">PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
