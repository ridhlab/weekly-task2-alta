import { useState } from "react";

const useWinddowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    return { windowWidth };
};

export { useWinddowWidth };
