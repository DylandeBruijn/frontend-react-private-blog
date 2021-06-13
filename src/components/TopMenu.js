import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function TopMenu({ isAuthenticated, handleLogin }) {
	return (
		<nav className="bg-gray-100">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between">
					<div className="flex space-x-4">
						<div>
							<Link
								to="/"
								className="flex items-center py-4 px-4 text-gray-700 text-xl"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 mr-2 text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
									/>
								</svg>
								<span>My Private Blog</span>
							</Link>
						</div>
						<div className="flex items-center space-x-1">
							<NavLink
								to="/"
								exact
								className="py-4 px-4 text-gray-700 text-xl"
								activeClassName="active-link"
							>
								Home
							</NavLink>
							{isAuthenticated && (
								<NavLink
									to="/blog"
									className="py-4 px-4 text-gray-700 text-xl"
									activeClassName="active-link"
								>
									Blog
								</NavLink>
							)}
						</div>
					</div>
					<div className="flex items-center space-x-4">
						{isAuthenticated ? (
							<div className="logout py-4 px-4 text-gray-700 text-xl">
								<NavLink to="/" onClick={handleLogin}>
									Logout
								</NavLink>
							</div>
						) : (
							<div className="login py-4 px-4 text-gray-700 text-xl">
								<NavLink to="/login" activeClassName="active-link">
									Login
								</NavLink>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
