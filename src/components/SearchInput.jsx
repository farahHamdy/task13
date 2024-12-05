import React from 'react'

export default function SearchInput({ setSearchVal }) {
    return (
        <div className="search_input">
            <input type="text" placeholder="search..." onChange={(e) => setSearchVal(e.target.value)} />
        </div>
    );
}
