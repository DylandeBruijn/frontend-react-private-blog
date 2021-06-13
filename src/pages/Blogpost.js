import React from "react";
import { useParams } from "react-router-dom";

export default function Blogpost({ posts }) {
	const params = useParams();
	return (
		<main className="blogpost-wrapper">
			{posts
				.filter((post) => params.id === post.id)
				.map((filteredPost) => (
					<article className="blogpost-container p-10" key={filteredPost.id}>
						<h3 className="blogpost-title text-blue-400 uppercase px-10 py-20 text-4xl font-bold">
							{filteredPost.title}
						</h3>
						<p className="blogpost-content px-10 text-2xl">
							{filteredPost.content}
						</p>
					</article>
				))}
		</main>
	);
}
