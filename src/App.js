import React, {useEffect, useRef, useState} from "react";
import ans from "./accets/ans.svg";
import buy from "./accets/Buy.svg";
import coin from "./accets/coin.svg";
import hat from "./accets/cap.png";
import spider from "./accets/spider.png";
import watch from "./accets/Watch.svg";
import infoButton from "./accets/info.svg";
import er from "./accets/gg1.png";
import background from "./accets/backgroung.svg"
import door from "./accets/rightDoor.svg";
import platform from "./accets/platform.svg";
import ggWithHat from "./accets/withHat.png";
import bg1 from "./accets/bg12.svg";
import bg2 from "./accets/bg2.svg";
import bg3 from "./accets/bg3.svg";
import bg4 from "./accets/bg4.svg";
import bg5 from "./accets/bg5.svg";
import cactus from "./accets/cactus.svg";
function App() {
   const scrollRef = useHorizontalScroll();
   const [chSrc, setSrc] = useState(er);
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
    const infoRef = useRef(null);
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
                    const currentPosition = parseFloat(ch.style.left) || 0;
                    // const newPosition = clamp(currentPosition + (e.deltaX || e.deltaY), 200, 15580);
                    const newPositionLeft = ch?.getBoundingClientRect()?.left;
                    const newPositionRight = ch?.getBoundingClientRect()?.left;

                    console.log(newPositionRight, "element", getPlacementData(door1Ref)?.left, "bound")
                    if(newPositionRight > getPlacementData(ans1Ref)?.left && ans1) {
                        setAns1((prevAns1) => {
                            return false;
                        });
                    }else {
                        setAns1((prevAns1) => {
                            return true;
                        });
                    }

                    if(newPositionRight > getPlacementData(ans2Ref)?.left && ans2) {
                        setAns2((prevAns1) => {
                            return false;
                        });
                    }else {
                        setAns2((prevAns1) => {
                            return true;
                        });
                    }

                    if(newPositionRight > getPlacementData(ans3Ref)?.left && ans3) {
                        setAns3((prevAns1) => {
                            return false;
                        });
                    }else {
                        setAns3((prevAns1) => {
                            return true;
                        });
                    }

                    if (newPositionLeft > getPlacementData(hatDivRef)?.left) {
                        setSrc(ggWithHat);
                        hatRef.current.style.display = "none";
                    }else {
                        setSrc(er);
                        hatRef.current.style.display = "block";
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

                    if (newPositionLeft > getPlacementData(infoRef)?.right-200) {
                        ch.style.transform = "scaleX(-1)";
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
            <div className="absolute flex items-center left-[40%] z-[100] h-[100vh]">
                <div className="flex items-center mb-[10%] justify-between w-[90vw]">
                    {
                        ans1 ?  <img src={ans} alt="" ref={ans1Ref} className="w-[50px]" id="ans1"/> :
                            <div ref={ans1Ref}>
                                <h1 className="text-2xl font-[Stolzl] text-white"> Lorem ipsum dolar amet  </h1>
                            </div>
                    }
                    {
                        ans2 ?  <img src={ans} alt="" ref={ans2Ref} className="w-[50px]" id="ans2"/> :
                            <div>
                                <h1 className="text-2xl font-[Stolzl] text-white" ref={ans2Ref}> Lorem ipsum dolar amet  </h1>
                            </div>
                    }
                    {
                        ans3 ?  <img src={ans} alt="" ref={ans3Ref} className="w-[50px]" id="ans3"/> :
                            <div>
                                <h1 className="text-2xl font-[Stolzl] text-white" ref={ans3Ref}> Lorem ipsum dolar amet  </h1>
                            </div>
                    }
                </div>
            </div>
            <div className="absolute flex left-[85%] top-[31%] z-[100]" ref={door1Ref}>
                <img src={door}  alt=""className=""/>
            </div>
            <img src={bg1} alt="" className="h-[100vh] w-auto"/>
        </div>
        <div className="relative w-[2775px]">

            <div className="absolute flex items-center left-[33%] top-[1%] z-[100] h-[100vh]" id="buy1">
                <img src={buy} alt=""className="w-[550px]" />
            </div>
            <div className="absolute flex left-[80%] top-[2%] z-[100]" id="buy2">
                <img src={buy} alt=""className="w-[300px]" />
            </div>
            <div className="absolute flex left-[10%] top-[31%] z-[100]"  ref={door2Ref}>
                <img src={door}   alt=""className=""/>
            </div>
            <div className="absolute flex left-[85%] top-[31%] z-[100]" ref={door3Ref}>
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
            <div className="absolute flex left-[77%] top-[78%] z-[100]" id="infoButton">
                <img src={platform} ref={platform4Ref} alt=""className=""/>
            </div>
            <img src={bg2} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[4213px]">
            <div className="absolute flex left-[10%] top-[31%] z-[100]" id="infoButton" ref={door4Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <div className="absolute flex left-[85%] top-[31%] z-[100]" id="infoButton" ref={door5Ref}>
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

            <div className="absolute flex left-[10%] top-[31%] z-[100]" id="infoButton" ref={door6Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <div className="absolute flex left-[80%] top-[31%] z-[100]" id="infoButton" ref={door7Ref}>
                <img src={door} alt=""className=""/>
            </div>

            <div className="absolute flex left-[70%] top-[70%] z-[100]" id="hat" ref={hatDivRef}>
                <img src={hat} ref={hatRef} alt=""className="w-[180px]"/>
            </div>
            <div className="absolute flex left-[87%] z-[100] rotate-[-135deg]" id="spider">
                <img src={spider} alt=""className="w-[350px]"/>
            </div>
            <div className="absolute flex left-[30%] top-[45%] z-[100]" id="watch">
                <img src={watch} alt=""className="w-[500px]"/>
            </div>

            <img src={bg4} alt="" className="h-[100vh] w-auto"/>

        </div>

        <div className="relative w-[4471px]">
            <div className="absolute flex left-[68%] top-[15%] z-[100]" id="infoButton" ref={infoRef}>
                <img src={infoButton} alt=""className="w-[450px]"/>
            </div>
            <div className="absolute flex left-[10%] top-[31%] z-[100]" id="infoButton" ref={door8Ref}>
                <img src={door} alt=""className=""/>
            </div>
            <img src={bg5} alt="" className="h-[100vh] w-auto"/>

        </div>


        <div
            ref={useMoveCharacter()}
            style={{
                width: '120px',
                position: 'fixed',
                left: '40%',
                bottom: '20%',
                zIndex: 100,
            }}
        >
            <img
                ref={characterRef}
                src={chSrc}
                alt=""
                className="w-[180px]"
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
