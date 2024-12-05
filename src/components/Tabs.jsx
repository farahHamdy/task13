

import React, { useState } from "react";

export default function Tabs({ authors, setFilter }) {
    const [activeTab, setActiveTab] = useState("All"); // الحالة اللي هتحتفظ بالتاب النشط

    // الدالة اللي بتغير الـ activeTab وبتفلتر البوستات
    const handleTabClick = (author) => {
        setActiveTab(author); // تغيير التاب النشط
        setFilter(author); // تحديث الفلتر في HomePage
    };

    return (
        <div className="tabs">
            <span className={activeTab === "All" ? "active" : ""} onClick={() => handleTabClick("All")}>
                All
            </span>
            {authors.map((author) => (
                <span key={author} className={activeTab === author ? "active" : ""} onClick={() => handleTabClick(author)}>
                    {author}
                </span>
            ))}
        </div>
    );
}