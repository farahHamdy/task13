

import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { postsData } from "../data/data";
import SearchInput from "../components/SearchInput";
import Tabs from "../components/Tabs";

export default function HomePage() {
    const [searchPosts, setSearchPosts] = useState(postsData);
    const [searchVal, setSearchVal] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        console.log("Filter:", filter); // عشان نشوف قيمة الفلتر
        console.log("Search Value:", searchVal); // عشان نشوف قيمة البحث

        const filterPosts = postsData.filter((post) => post.title.toLowerCase().includes(searchVal.toLowerCase()) && (filter === "All" || post.author === filter));
        setSearchPosts(filterPosts);
    }, [searchVal, filter]);

    const authors = [...new Set(postsData.map((post) => post.author))];

    return (
        <div className="px">
            <SearchInput setSearchVal={setSearchVal} />
            <Tabs authors={authors} setFilter={setFilter} />
            <div className="posts_container py">
                {searchPosts.length <= 0 ? <h1>No posts found</h1> : searchPosts.map((post) => <PostCard key={post.id} title={post.title} content={post.content} author={post.author} />)}
            </div>
        </div>
    );
}
