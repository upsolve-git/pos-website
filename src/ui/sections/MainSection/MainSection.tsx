import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPaths } from "../../../constants/assetPaths";
import SleekArrowButton from "../../atoms/buttons/SleekArrow/SleekArrow";

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = () => {
    const [itemIndex, setItemIndex] = useState<number>(0);
    const [currIndex, setCurrIndex] = useState<number>(0);
    const [item, setItem] = useState<{ nailPolishPath: string; nailsImagePath: string; thumbNailPath: string } | null>(null);
    let names = ["Golden Rose", "Luminous Nude", "Soft Pink", "Classic Beige"]
    let description = ["Warm, luxurious elegance", "Timeless, subtle sophistication", "Romantic, delicate blush", "Versatile, everyday neutral"]
    const increaseIndex = () => {
        setItemIndex((prevIndex) => (prevIndex + 1) % assetPaths.size());
    };

    const decreaseIndex = () => {
        setItemIndex((prevIndex) => (prevIndex - 1 + assetPaths.size()) % assetPaths.size());
    };

    useEffect(() => {
        const ele = assetPaths.getElementAt(itemIndex);
        if (ele) {
            setCurrIndex(ele.index);
            setItem(ele.value);
        }
    }, [itemIndex]);

    const getExitAnimation = (index: number) => {
        if (index % 2 === 0) {
            return { opacity: 0, translateY: "-100%" }; 
        } else {
            return { opacity: 0, translateY: "100%" }; 
        }
    };

    return (
        <div className="w-screen h-fit flex relative">
            <div className="w-screen h-[60vh] absolute flex items-center justify-between px-4 z-20 desktop:h-[80vh]">
                {/* <button onClick={decreaseIndex} className="w-8 z-20">
                    <img src="/image/sleekarrow.png" alt="Previous" />
                </button> */}
                <SleekArrowButton 
                rotation="180"
                callBackFunc={decreaseIndex}/>
                {/* <button onClick={increaseIndex} className="w-8 rotate-180 z-20">
                    <img src="/image/sleekarrow.png" alt="Next" />
                </button> */}
                <SleekArrowButton 
                rotation="0"
                callBackFunc={increaseIndex}/>
            </div>

            {item && (
                <>
                    <div className="bg-mainpolishBg bg-contain w-[50%] h-[60vh] flex flex-col items-center z-10 desktop:h-[80vh]">
                        <div className="flex flex-col justify-center items-center w-full grow">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={item.nailPolishPath}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    <img
                                        src={item.nailPolishPath}
                                        alt="Nail Polish"
                                        className="w-[100px] h-[170px] desktop:w-[150px] desktop:h-[250px] -translate-x-[15%]"
                                    />
                                    <p className="text-xxs text-darkgray text-center desktop:text-sm">{names[currIndex]}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="bg-secondarylight text-center text-xxs grid grid-rows-2 grid-cols-3 py-[5%] w-full desktop:text-sm">
                            <p className="font-medium col-span-3 desktop:text-lg">{names[currIndex]}</p>
                            <p>{`${currIndex + 1}`.padStart(2, '0')}/04</p>
                            <p>{description[currIndex]}</p>
                        </div>
                    </div>

                    <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 z-20 w-fit h-fit desktop:top-[26%]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={item.thumbNailPath}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <img
                                    src={item.thumbNailPath}
                                    alt="Thumbnail"
                                    className="w-[150px] h-[250px] object-cover rounded-t-full desktop:w-[250px] desktop:h-[350px]"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-[50%] h-[60vh] overflow-hidden relative z-10 desktop:h-[80vh]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={item.nailsImagePath}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={getExitAnimation(currIndex)}
                                transition={{ duration: 0.5 }}
                                src={item.nailsImagePath}
                                alt="Nails"
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </>
            )}
        </div>
    );
};

export default MainSection;