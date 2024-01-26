import bg1 from "../accets/mobile-version/bg1.svg";
import bg2 from "../accets/mobile-version/bg2.svg";
import bg3 from "../accets/mobile-version/bg3.svg";
import bg4 from "../accets/mobile-version/bg4.svg";
import bg5 from "../accets/mobile-version/bg5.svg";
import logo from "../accets/logo2.png";
import buy from "../accets/Buy.svg";
import slogan from "../accets/mobile-version/slogan.png"
import coursePrice from "../accets/mobile-version/coursePrice.png";
import infoText from "../accets/infoText.svg";
import info from "../accets/info.svg";
import courseAuthor from "../accets/mobile-version/courseAuthor.svg"
import erzhanPhoto from "../accets/mobile-version/erzhan.png";
import erzhanName from "../accets/mobile-version/erzhanName.svg";
import star from "../accets/mobile-version/star.svg";
import insta from "../accets/mobile-version/insta.png";
import erzhan from "../accets/mobile-version/erzhan para3.png"
import coin from "../accets/mobile-version/coin.gif";
import why from "../accets/mobile-version/whatYouLearn.svg";
import board1 from "../accets/board1.svg";
import board2 from "../accets/board2.svg";
import board3 from "../accets/board3.svg";
import board4 from "../accets/mobile-version/board1.svg";
import board5 from "../accets/mobile-version/board2.svg";
import board6 from "../accets/mobile-version/board3.svg";

import {useEffect, useRef, useState } from "react";

function MobileApp() {
    const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);
    const bg4Ref = useRef(null);
    const bg5Ref = useRef(null);
    const mainRef = useRef(null);
    const board1Ref = useRef(null);
    const board2Ref = useRef(null);
    const board3Ref = useRef(null);
    const [board1Src, setBoard1Src] = useState({
        src: coin,
        width: "60px",
    });
    const [board2Src, setBoard2Src] = useState({
        src: coin,
        width: "60px",
    });
    const [board3Src, setBoard3Src] = useState({
        src: coin,
        width: "60px",
    });

    function useMoveCharacter() {
        const charRef = useRef(null);
        useEffect(() => {
            const ch = charRef.current;

            if (ch) {
                const onWheel = (e) => {
                    const newPositionLeft = ch.getBoundingClientRect().left;
                    const newPositionRight = ch.getBoundingClientRect().right;
                    const newPositionTop = ch.getBoundingClientRect().top;
                    const newPositionBottom = ch.getBoundingClientRect().bottom;

                    if (newPositionBottom >= board1Ref.current?.getBoundingClientRect().top) {
                        setBoard1Src({
                            src: board1,
                            width: "50%"
                        });
                    } else if (newPositionBottom < board1Ref.current?.getBoundingClientRect().top) {
                        setBoard1Src({
                            src: coin,
                            width: "60px"
                        });
                    }

                    if (newPositionBottom >= board2Ref.current?.getBoundingClientRect().top) {
                        setBoard2Src({
                            src: board2,
                            width: "50%"
                        });
                    } else if (newPositionBottom < board2Ref.current?.getBoundingClientRect().top) {
                        setBoard2Src({
                            src: coin,
                            width: "60px"
                        });
                    }

                    if (newPositionBottom >= board3Ref.current?.getBoundingClientRect().top) {
                        setBoard3Src({
                            src: board3,
                            width: "50%"
                        });
                    } else if (newPositionBottom < board3Ref.current?.getBoundingClientRect().top) {
                        setBoard3Src({
                            src: coin,
                            width: "60px"
                        });
                    }

                    if (bg1Ref.current?.getBoundingClientRect().top === 0) {
                        if (newPositionTop < bg1Ref.current?.getBoundingClientRect().bottom) {
                            e.preventDefault();
                        }

                        const originalTopValue = ch.style.top;
                        const originalRightValue = ch.style.right;
                        let subtractedTopValue = parseInt(originalTopValue);
                        let subtractedRightValue = parseInt(originalRightValue);

                        if (e.deltaY < 0) {
                            if (newPositionBottom > bg1Ref.current?.getBoundingClientRect().top) {
                                subtractedTopValue -= 1;
                                if (newPositionTop > bg1Ref.current?.getBoundingClientRect().top) {
                                    subtractedRightValue -= 1;
                                }
                            }
                        } else {
                            if (newPositionTop < bg1Ref.current?.getBoundingClientRect().bottom) {
                                subtractedTopValue += 1;
                                if (newPositionTop > bg1Ref.current?.getBoundingClientRect().top) {
                                    subtractedRightValue += 1;
                                }
                            }
                        }

                        ch.style.top = `${subtractedTopValue}vh`;
                        ch.style.right = `${subtractedRightValue}vw`;
                    }
                };

                mainRef.current.addEventListener('touchmove', onWheel);

                return () => mainRef.current?.removeEventListener('touchmove', onWheel);
            }
        }, []);
        return charRef;
    }


    return(
        <div ref={mainRef}>
            <div className="h-[1020px]" ref={bg1Ref} style={{
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
                    <div className={"flex flex-col gap-16 items-center"}>
                        <img src={board1Src.src} alt="" className={`moving-element`}
                        style={{
                        width: board1Src.width,
                        }
                        }
                        ref={board1Ref} />
                        <img src={board2Src.src} alt="" className={`moving-element`}
                             style={{
                                 width: board2Src.width,
                             }
                             }
                             ref={board2Ref} />
                        <img src={board3Src.src} alt="" className={`moving-element`}
                             style={{
                                 width: board3Src.width,
                             }
                             }
                             ref={board3Ref} />
                    </div>

                </div>
            </div>


            <div className="h-[740px] relative" id="js-target" ref={bg2Ref} style={{
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

            <div className="h-[815px] relative" ref={bg3Ref} style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }}>
                <div className={"flex flex-col items-center pt-[13%] font-[Montserrat] gap-24"}>
                    <img src={why} className={"w-[80%]"} alt=""/>
                    <img src={board4} alt="" className={"moving-element w-[50%]"}/>
                    <img src={board5} alt="" className={"moving-element w-[50%]"}/>
                    <img src={board6} alt="" className={"moving-element w-[50%]"}/>
                </div>

            </div>


            <div className="relative" ref={bg4Ref} style={{
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

            <div className="h-[665px] relative" ref={bg5Ref} style={{
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
                {/*<div*/}
                {/*    className=""*/}
                {/*    ref={useMoveCharacter2()}*/}
                {/*    style={{*/}
                {/*        position: "absolute",*/}
                {/*        width: "40vw",*/}
                {/*        height: "40vh",*/}
                {/*        top: "0",*/}
                {/*        left: "-40vw",*/}
                {/*        transform: 'scaleX(-1)',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <img src={erzhan} alt="" className="w-full" />*/}
                {/*</div>*/}
            </div>
            <div
                className=""
                ref={useMoveCharacter()}
                style={{
                    position: "absolute",
                    width: "40vw",
                    top: "-40vh",
                    right: "0",
                }}
            >
                <img src={erzhan} alt="" className="w-full" />
            </div>
        </div>
    )
}




export default MobileApp;