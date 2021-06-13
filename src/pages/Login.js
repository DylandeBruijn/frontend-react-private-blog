import React from "react";

export default function Login({ handleLogin }) {
	return (
		<main>
			<div className="page-title py-16 px-16 text-left bg-gray-200">
				<h2 className="font-bold text-5xl">Login</h2>
			</div>
			<button
				className="m-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl"
				onClick={handleLogin}
			>
				Login
			</button>
		</main>
	);
}
