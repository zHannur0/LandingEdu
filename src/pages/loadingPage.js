import logo from "../accets/logo2.png";
import bg from "../accets/bgLoading.svg";
function LoadingPage() {

    return(
        <>
            <div className={"w-[100vw] h-[100vh] flex flex-col items-center justify-center"} style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
            }}>
                <img src={logo} alt="" className={"w-[60%]"}/>
                <div className="loading">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                </div>
            </div>
        </>
    );
}

export default LoadingPage;