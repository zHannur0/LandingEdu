import React, {useEffect, useRef, useState} from "react";
import ans from "./accets/ans.svg";
import buy from "./accets/Buy.svg";
import coin from "./accets/coin.svg";
import spider from "./accets/spider.png";
import watch from "./accets/Watch.svg";
import infoButton from "./accets/info.svg";
import er from "./accets/gg.png";
import door from "./accets/rightDoor.svg";
import platform from "./accets/platform.svg";
import bg1 from "./accets/bg12.svg";
import bg2 from "./accets/bg2.svg";
import bg3 from "./accets/bg3.svg";
import bg4 from "./accets/bg4.svg";
import bg5 from "./accets/bg52.svg";
import bg6 from "./accets/bg6.svg";
import cactus from "./accets/cactus.svg";
import run from "./accets/run3.gif";
import Videos from "./components/videos";
import x from "./accets/x.svg";
import logo from "./accets/logo2.png";
import ui from "./accets/ui.svg";
function App() {
   const scrollRef = useHorizontalScroll();
   const [chSrc, setSrc] = useState(run);
   const [video, setVideo] = useState(false);
    const[ans1, setAns1] = useState(true);
    const[ans2, setAns2] = useState(true);
    const[ans3, setAns3] = useState(true);
    const ans1Ref = useRef(null);
    const ans2Ref = useRef(null);
    const ans3Ref = useRef(null);
    const door1Ref = useRef(null);
    const door2Ref = useRef(null);
    const door3Ref = useRef(null);
    const door4Ref = useRef(null);
    const door5Ref = useRef(null);
    const door6Ref = useRef(null);
    const door7Ref = useRef(null);
    const door8Ref = useRef(null);
    const platform1Ref = useRef(null);
    const platform2Ref = useRef(null);
    const platform3Ref = useRef(null);
    const platform4Ref = useRef(null);
    const coinDiv1Ref = useRef(null);
    const coinDiv2Ref = useRef(null);
    const coinDiv3Ref = useRef(null);
    const coin1Ref = useRef(null);
    const coin2Ref = useRef(null);
    const coin3Ref = useRef(null);
    const characterRef = useRef(null);
    const hatRef = useRef(null);
    const hatDivRef = useRef(null);
    const info1Ref = useRef(null);
    const info2Ref = useRef(null);
    const info3Ref = useRef(null);

    const infoRef = useRef(null);
    const why1 = useRef(null);
    const why2 = useRef(null);
    const why3 = useRef(null);

    const getPlacementData = (elementRef) => {
        if (!elementRef?.current) return null
        return elementRef?.current?.getBoundingClientRect()
    }
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function useMoveCharacter() {
        const charRef = useRef();
        useEffect(() => {
            const ch = charRef.current;
            if (ch) {
                const onWheel = (e) => {
                    const newPositionLeft = ch?.getBoundingClientRect()?.left;
                    const newPositionRight = ch?.getBoundingClientRect()?.left;

                    if (newPositionRight > getPlacementData(ans1Ref)?.left && info1Ref.current.style.display === "none") {
                        ans1Ref.current.classList.add('coin-remove-animation');
                        setTimeout(() => {
                            info1Ref.current.style.display = 'block';
                            info1Ref.current.classList.add('info-appear-animation');
                            ans1Ref.current.style.display = 'none';
                        }, 500);
                    } if (newPositionRight > getPlacementData(ans2Ref)?.left && info2Ref.current.style.display === "none") {
                        ans2Ref.current.classList.add('coin-remove-animation');
                        setTimeout(() => {
                            info2Ref.current.style.display = 'block';
                            info2Ref.current.classList.add('info-appear-animation');
                            ans2Ref.current.style.display = 'none';
                        }, 500);
                    } if (newPositionRight > getPlacementData(ans3Ref)?.left && info3Ref.current.style.display === "none") {
                        ans3Ref.current.classList.add('coin-remove-animation');
                        setTimeout(() => {
                            info3Ref.current.style.display = 'block';
                            info3Ref.current.classList.add('info-appear-animation');
                            ans3Ref.current.style.display = 'none';
                        }, 500);
                    }

                    if (newPositionRight < getPlacementData(info1Ref)?.left) {
                        ans1Ref.current.style.display = "block";
                        info1Ref.current.style.display = "none";
                        ans1Ref.current.classList.remove('coin-remove-animation');

                    } if (newPositionRight < getPlacementData(info2Ref)?.left) {
                        ans2Ref.current.style.display = "block";
                        info2Ref.current.style.display = "none";
                        ans2Ref.current.classList.remove('coin-remove-animation');

                    } if (newPositionRight < getPlacementData(info3Ref)?.left) {
                        ans3Ref.current.style.display = "block";
                        info3Ref.current.style.display = "none";
                        ans3Ref.current.classList.remove('coin-remove-animation');
                    }


                    if (newPositionRight > getPlacementData(coinDiv1Ref)?.left - 100){
                        coin1Ref.current.style.display = "none";
                    }else {
                        coin1Ref.current.style.display = "block";
                    }

                    if (newPositionRight > getPlacementData(coinDiv2Ref)?.left - 100){
                        coin2Ref.current.style.display = "none";
                    }else {
                        coin2Ref.current.style.display = "block";
                    }

                    if (newPositionRight > getPlacementData(coinDiv3Ref)?.left - 100){
                        coin3Ref.current.style.display = "none";
                    }else {
                        coin3Ref.current.style.display = "block";
                    }

                    if (newPositionLeft > getPlacementData(infoRef)?.left) {
                        ch.style.transform = "scaleX(-1)";
                        setSrc(er);

                    }else {
                        ch.style.transform = "scaleX(1)";
                    }

                    if (
                        (newPositionRight > getPlacementData(coinDiv1Ref)?.left - 150 &&
                            newPositionLeft < getPlacementData(coinDiv1Ref)?.right+150) ||
                        (newPositionRight > getPlacementData(coinDiv2Ref)?.left - 150 &&
                            newPositionLeft < getPlacementData(coinDiv2Ref)?.right+150) ||
                        (newPositionRight > getPlacementData(coinDiv3Ref)?.left - 150 &&
                            newPositionLeft < getPlacementData(coinDiv3Ref)?.right+150)
                    ) {
                        setSrc(er);
                        ch.style.bottom = "50%";
                    } else if (
                        (newPositionLeft > getPlacementData(platform1Ref)?.right - 100 &&
                            newPositionLeft < getPlacementData(platform2Ref)?.left + 20) ||
                        (newPositionLeft > getPlacementData(platform2Ref)?.right - 100 &&
                            newPositionLeft < getPlacementData(platform3Ref)?.left + 20) ||
                        (newPositionLeft > getPlacementData(platform3Ref)?.right - 100 &&
                            newPositionLeft < getPlacementData(platform4Ref)?.left + 20)
                    ) {
                        ch.style.bottom = "26%";
                    } else if(newPositionLeft > getPlacementData(door6Ref)?.right &&
                        newPositionRight < getPlacementData(door7Ref)?.left-20){
                        ch.style.bottom = "10%";
                    } else {
                        setSrc(run);
                        ch.style.bottom = "20%";
                    }


                    const isInRestrictedArea =
                        (newPositionRight > getPlacementData(door1Ref)?.left && newPositionLeft < getPlacementData(door2Ref)?.left) ||
                        (newPositionRight > getPlacementData(door3Ref)?.left && newPositionLeft < getPlacementData(door4Ref)?.left) ||
                        (newPositionRight > getPlacementData(door5Ref)?.left && newPositionLeft < getPlacementData(door6Ref)?.left) ||
                        (newPositionRight > getPlacementData(door7Ref)?.left && newPositionLeft < getPlacementData(door8Ref)?.left);

                    characterRef.current.style.display = isInRestrictedArea ? 'none' : 'block';

                };

                window.addEventListener('wheel', onWheel);

                return () => window.removeEventListener('wheel', onWheel);
            }
        }, []);

        return charRef;
    }


        return (
    <div ref={scrollRef} className="App relative inline flex overflow-x-auto ">
        <div className="relative w-[4584px]">
            <img src={logo} alt="" className="absolute left-[1%] top-[1%] h-[11%] "/>
                <div className="absolute left-[40%] bottom-[25%] flex justify-between w-[100vw] font-[Montserrat] font-bold">
                    <div className="flex flex-col items-center justify-end text-center w-[25%]  ">
                        <p ref={info1Ref} className=" mb-[80%] text-white text-center">Біздің бағдарламалау курстарына қосылыңыз
                            және технологияға деген құштарлығыңызды табысты мансапқа айналдырыңыз!</p>
                        <img src={coin} alt="" ref={ans1Ref} className="w-[150px]" id="ans2"/>
                    </div>
                    <div className="flex flex-col items-center justify-end text-center w-[25%]">
                        <p ref={info2Ref} className="mb-[80%] text-white text-center">Біздің курс күрделі және түсініксіз нәрсені қызықты және түсінікті саяхатқа айналдыруға арналған. </p>
                        <img src={coin} alt="" ref={ans2Ref} className="w-[150px]" id="ans2"/>
                    </div>
                    <div className="flex flex-col items-center justify-end text-center w-[25%]">
                        <p ref={info3Ref} className="mb-[80%] text-white text-center" >Бізбен сіз бағдарламалауды біртіндеп игере аласыз және IT-де мүмкіндіктер әлемін таба аласыз.</p>
                        <img src={coin} alt="" ref={ans3Ref} className="w-[150px]" id="ans2"/>
                    </div>
                </div>

            <div className="absolute flex left-[85%] bottom-[20%] z-[100]" ref={door1Ref}>
                <img src={door}  alt=""className=""/>
            </div>
            <img src={bg1} alt="" className="h-[100vh] w-auto"/>
        </div>
        <div className="relative w-[2775px]">
            <div className="absolute flex items-center left-[36%] top-[1%] z-[100] h-[100vh]" id="buy1">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform">
                    <img src={buy} alt=""className="w-[400px]" />
                </a>

            </div>
            <div className="absolute flex left-[80%] top-[2%] z-[100]" id="buy2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform">
                    <img src={buy} alt=""className="w-[300px]" />
                </a>
            </div>
            <div className="absolute flex left-[10%] bottom-[20%] z-[100]"  ref={door2Ref}>
                <img src={door}   alt=""className=""/>
            </div>
            <div className="absolute flex right-[7%] bottom-[20%] z-[100]" ref={door3Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <div className="absolute flex left-[10%] top-[78%] z-[100]" id="infoButton">
                <img src={platform} ref={platform1Ref} alt=""className=""/>
            </div>
            <div className="absolute flex left-[33%] top-[78%] z-[100]" id="infoButton">
                <img src={platform} ref={platform2Ref} alt=""className=""/>
            </div>
            <div className="absolute flex left-[55%] top-[78%] z-[100]" id="infoButton">
                <img src={platform} ref={platform3Ref} alt=""className=""/>
            </div>
            <div className="absolute flex right-[7%] top-[78%] z-[100]" id="infoButton">
                <img src={platform} ref={platform4Ref} alt=""className=""/>
            </div>
            <img src={bg2} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[4213px]">
            <div className="absolute flex left-[10%] bottom-[20%] z-[100]" id="infoButton" ref={door4Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <div className="absolute flex left-[85%] bottom-[20%] z-[100]" id="infoButton" ref={door5Ref}>
                <img src={door} alt=""className=""/>
            </div>

            <div className="absolute flex left-[35%] top-[30%] z-[100]" id="coin1"  ref={coinDiv1Ref}>
                <img src={coin} ref={coin1Ref} alt=""className="w-[150px]" />
            </div>
            <div className="absolute flex left-[50%] top-[30%] z-[100]" id="coin2" ref={coinDiv2Ref}>
                <img src={coin} ref={coin2Ref} alt=""className="w-[150px]" />
            </div>
            <div className="absolute flex left-[65%] top-[30%] z-[100]" id="coin3" ref={coinDiv3Ref}>
                <img src={coin}  ref={coin3Ref} alt=""className="w-[150px]"  />
            </div>

            <div className="absolute flex left-[29%] bottom-[23%] z-[100]" id="coin1" >
                <img src={cactus} alt="" className="w-[640px]"/>
            </div>
            <div className="absolute flex left-[44%] bottom-[23%] z-[100]" id="coin2">
                <img src={cactus} alt="" className="w-[640px]" />
            </div>
            <div className="absolute flex left-[59%] bottom-[23%] z-[100]" id="coin3">
                <img src={cactus} alt="" className="w-[640px]"  />
            </div>

            <img src={bg3} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[2586px]">

            <div className="absolute flex left-[10%] bottom-[20%] z-[100]" id="infoButton" ref={door6Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <div className="absolute flex left-[80%] bottom-[20%] z-[100]" id="infoButton" ref={door7Ref}>
                <img src={door} alt=""className=""/>
            </div>

            {video ? (
                <>
                    <div> <img src={x} className='w-[22px] h-[22px] hover:bg-orange-500 fixed z-[250] top-[5%] right-[24%]' onClick={() => setVideo(!video)}></img></div>
                    <Videos/>
                </>
            ) :
                (<div></div>)}

            {/*<div className="absolute flex left-[70%] top-[70%] z-[100]" id="hat" ref={hatDivRef}>*/}
            {/*    <img src={hat} ref={hatRef} alt=""className="w-[180px]"/>*/}
            {/*</div>*/}
            <div className="absolute flex left-[87%] z-[100] rotate-[-135deg]" id="spider">
                <img src={spider} alt=""className="w-[350px]"/>
            </div>
            <div className="absolute flex flex-col left-[30%] top-[15%] z-[100] items-center gap-8" id="watch">
                <p className="font-[Montserrat] font-bold text-white text-center w-[500px] text-2xl">Егер қызықсаңыз бір сабағымызды қарап көріңіз. Солай біздің білім беруімізге баға беріңіз.</p>
                <img src={watch} alt="" className="w-[500px]" onClick={() => setVideo(!video)}/>
            </div>
            <img src={bg4} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[3473px]">
            <img src={bg6} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[4089px]">
            <div className="absolute flex left-[73%] top-[15%] z-[100]" id="infoButton" ref={infoRef}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSnLj_S77CAfcfOFc_o9JcsUNMxSqbrbkx9MFjqkyyNyLX0A/viewform">
                <img src={infoButton} alt="" className="w-[350px]"/>
                </a>
            </div>

            <div className="absolute flex left-[10%] bottom-[20%] z-[100]" id="infoButton" ref={door8Ref}>
                <img src={door} alt="" className=""/>
            </div>
            <img src={bg5} alt="" className="h-[100vh] w-auto"/>
        </div>


        <div
            ref={useMoveCharacter()}
            style={{
                position: 'fixed',
                left: '40%',
                bottom: '20%',
                zIndex: 100,
            }}
            id="animatedImage"
        >
            <img
                ref={characterRef}
                src={chSrc}
                alt=""
                className="w-[150px]"
            />
        </div>


        {/*<img src={background} alt = "" className="h-[100vh] w-auto"/>*/}

    </div>
  );
}


function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollBy(e.deltaY, 0);
            };
            el.addEventListener('wheel', onWheel);

            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);

    return elRef;
}





export default App;
