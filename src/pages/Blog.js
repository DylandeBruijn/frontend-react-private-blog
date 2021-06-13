import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ posts }) {
	return (
		<main className="blog-wrapper">
			<section className="blog-container">
				<div className="page-title py-16 px-16 text-left bg-gray-200">
					<h2 className="font-bold text-5xl">Blog</h2>
				</div>
				<section className="post-count bg-gray-100 px-16 py-4">
					<h3 className="text-2xl text-gray-500 font-bold">
						Total posts: {posts.length}
					</h3>
				</section>
				<div className="blog-list py-16">
					{posts.map((post) => {
						return (
							<article className="blog-post" key={post.id}>
								<Link to={`/blog/${post.id}`}>
									<h3 className="blog-title px-16 py-4 capitalize hover:underline text-blue-400 font-bold text-2xl">
										{post.title}
									</h3>
								</Link>
							</article>
						);
					})}
				</div>
			</section>
		</main>
	);
}
