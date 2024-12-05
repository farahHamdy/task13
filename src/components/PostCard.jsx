

import React from "react";

export default function PostCard({ title, content, author }) {
    return (
        <div className="post_card">
            <span
                className={`author ${
                    author === "John"
                        ? "John"
                        : author === "Smith"
                        ? "Smith"
                        : author === "Emily"
                        ? "Emily"
                        : author === "Michael"
                        ? "Michael"
                        : author === "Sarah"
                        ? "Sarah"
                        : author === "Amanda"
                        ? "Amanda"
                        : "David"
                }`}>
                {author}
            </span>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}