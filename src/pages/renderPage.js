import React, {useEffect, useRef, useState, useLayoutEffect} from "react";
import LoadingPage from "./loadingPage";
import App from "../App";
function RenderPage() {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        // Эмулируем задержку загрузки для примера
        const fakeApiCall = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Измените значение на реальное время загрузки

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(fakeApiCall);
    }, []);

    return(
        <>
               {isLoading ? (
                   <LoadingPage/>
               ) : (
                   <App/>
               )
               }
        </>
    )
}

export default RenderPage;