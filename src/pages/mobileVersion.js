import bg1 from "../accets/mobile-version/bg1.svg";
import bg2 from "../accets/mobile-version/bg2.svg";
import bg3 from "../accets/mobile-version/bg3.svg";
import bg4 from "../accets/mobile-version/bg4.svg";
import bg5 from "../accets/mobile-version/bg5.svg";
import logo from "../accets/logo2.png";
import buy from "../accets/Buy.svg";
import slogan from "../accets/mobile-version/slogan.png"
import board1 from "../accets/board1.svg";
import board2 from "../accets/board2.svg";
import board3 from "../accets/board3.svg";
import coursePrice from "../accets/mobile-version/coursePrice.png";
import infoText from "../accets/infoText.svg";
import info from "../accets/info.svg";
import courseAuthor from "../accets/mobile-version/courseAuthor.svg"
import erzhanPhoto from "../accets/mobile-version/erzhan.png";
import erzhanName from "../accets/mobile-version/erzhanName.svg";
import star from "../accets/mobile-version/star.svg";
import insta from "../accets/mobile-version/insta.png";
function MobileApp() {
    return(
        <>
            <div className="h-[1020px]" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
            }}>
                <img src={logo} alt="" className={"w-[35%] ml-4"}/>
                <div className={"flex flex-col items-center mt-[13%] font-[Montserrat] gap-10"}>
                    <img src={slogan} alt=""/>
                    <p className={"text-center font-bold text-white w-[70%]"}>Ақпараттық технологияларды
                        үйренгісі келетіндерге арналған курстар </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform" className={"w-[60%]"}>
                    <img src={buy} alt="" className={"w-[100%]"}/>
                    </a>
                    <img src={board1} alt="" className={"moving-element w-[60%]"}/>
                    <img src={board2} alt="" className={"moving-element w-[60%]"}/>
                    <img src={board3} alt="" className={"moving-element w-[60%]"}/>
                </div>
            </div>
            <div className="h-[740px]" style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: 'cover',
            }}>
                <div className={"flex flex-col items-center pt-[40%] font-[Montserrat] gap-10"}>
                    <img src={coursePrice} alt=""/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform" className={"w-[70%]"}>
                    <img src={buy} alt="" className={"w-[100%]"}/>
                    </a>
                    <p className={"text-center font-bold text-black w-[70%]"}>Оны алу арқылы, курстарға 3 айға қол жеткізу, бағыт-бағдар алу, үй жұмысын талқылау және басқа мүмкіндіктеріге ие бола аласыз</p>
                </div>
            </div>
            <div className="h-[815px]" style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }}>
            </div>
            <div className="" style={{
                backgroundImage: `url(${bg4})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }}>
                <div className={"flex flex-col items-center pt-[15%] pb-[20%] font-bold font-[Montserrat] gap-8 text-l text-white text-center"}>
                    <img src={courseAuthor} alt=""/>
                    <img src={erzhanPhoto} alt=""/>
                    <img src={erzhanName} alt="" />
                    <a href="https://www.instagram.com/madiever?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className={"w-[10%]"}>
                        <img src={insta} alt="" className={"w-[100%]"} />

                    </a>
                    <img src={star} alt=""/>
                    <p className={"w-[70%]"}>4 жыл бағдарламалауда тәжірибесі бар</p>
                    <img src={star} alt=""/>
                    <p className={"w-[70%]"}>АТФ, АЛЬФА, БЦК банктерінде тәжірибе </p>
                    <img src={star} alt=""/>
                    <p className={"w-[70%]"}>Оқушылар тәрбиелеуде үлкен нәтижеге жетті</p>
                    <img src={star} alt=""/>
                    <p className={"w-[70%]"}>EduCode СЕО</p>

                </div>
            </div>
            <div className="h-[665px]" style={{
                backgroundImage: `url(${bg5})`,
                backgroundSize: 'cover',
            }}>
                <div className={"flex flex-col items-center pt-[40%] font-[Montserrat] gap-10"}>
                    <img src={infoText} alt="" className={"w-[80%]"}/>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform" className={"w-[70%]"}>
                    <img src={info} alt="" className={"w-[100%]"}/>
                    </a>
                    <p className="font-bold text-black text-center w-[70%]">
                        <a href="https://edukey.kz/">edukey.kz</a> платформасындағы 4 курсқа және ағылшын тілі курстарына қол жеткізіңіз
                    </p>
                </div>
            </div>
        </>
    )
}

export default MobileApp;