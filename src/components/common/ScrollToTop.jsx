import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(){
    const { pathname } = useLocation();

    useEffect(() => {
        // ✅ Pequeno delay para funcionar com o loading
        const timer = setTimeout(() => {
            window.scrollTo(0,0);
        }, 100); // Scroll após 100ms

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}

export default ScrollToTop;