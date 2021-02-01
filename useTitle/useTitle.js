import React, { useEffect, useState } from "react";

export const useTitle = (initial) => {
    const [title, setTitle] = useState(initial);

    const updateTitle = () => {
        const titleHtml = document.querySelector("title");
        titleHtml.innerText = title;
    }
    
    useEffect(updateTitle, [title]);
    
    return setTitle;
}


