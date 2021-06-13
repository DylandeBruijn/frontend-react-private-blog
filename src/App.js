// React

import React, { useState } from "react";

// React Router

import { Switch, Route, Redirect } from "react-router-dom";

// Components

import TopMenu from "./components/TopMenu";

// Pages

import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";

// Blogposts

import posts from "./data/posts.json";

// CSS

import "./css/styles.css";

function App() {
	// States

	const [isAuthenticated, toggleIsAuthenticated] = useState(false);

	const handleLogin = () => {
		toggleIsAuthenticated(!isAuthenticated);
	};

	return (
		<>
			<TopMenu isAuthenticated={isAuthenticated} handleLogin={handleLogin} />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					{isAuthenticated ? (
						<Redirect to="/blog" />
					) : (
						<Login
							isAuthenticated={isAuthenticated}
							handleLogin={handleLogin}
						/>
					)}
				</Route>
				<Route exact path="/blog">
					{isAuthenticated ? <Blog posts={posts} /> : <Redirect to="/login" />}
				</Route>
				<Route exact path="/blog/:id">
					{isAuthenticated ? (
						<Blogpost posts={posts} />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
			</Switch>
		</>
	);
}

export default App;
