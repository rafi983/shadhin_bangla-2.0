import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const TributeSection = () => {
    const [shohids, setShohids] = useState([]);
    const axiosPublic = UseAxiosPublic();

    // ----------------- Fetch Shohid info from API
    useEffect(() => {
        const fetchShohids = async () => {
            try {
                const response = await axiosPublic.get("/Shohid");
                setShohids(response.data);
            } catch (err) {
                console.error("Shohid fetch error:", err);
            }
        };

        fetchShohids();
    }, [axiosPublic]);


    return (
        <section className="relative bg-gradient-to-b from-green-950 via-black to-red-950 text-white py-24 overflow-hidden">
            {/* 🇧🇩 Subtle flag overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://wallpapercave.com/wp/wp9361750.jpg')] bg-cover bg-center"></div>

            {/*  Shohid Marquee */}
            {shohids.length > 0 && (
                <div className="relative z-10 mb-12">
                    <Marquee speed={30} >
                        {shohids.map((s) => (
                            <div key={s.name} className="mx-4 flex flex-col items-center">
                                <img
                                    src={s.image}
                                    alt={s.name}
                                    className="w-24 h-24 opacity-50 object-cover rounded-full border-2 border-white shadow-lg grayscale"
                                />
                                <p className="mt-2 text-xs sm:text-sm text-white text-center">{s.name}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            )}

            {/* ✨ Floating particles */}
            {[...Array(65)].map((_, i) => (
                <motion.span
                    key={`y-${i}`}
                    className="absolute bg-yellow-300 rounded-full opacity-20"
                    style={{
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3 + Math.random() * 3,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-amber-400 drop-shadow-lg">
                        শহীদদের প্রতি গভীর শ্রদ্ধা 🕯️
                    </h2>
                </Fade>

                <Fade direction="up" delay={200} triggerOnce>
                    <p className="text-lg sm:text-xl font-medium mb-12 leading-relaxed text-gray-200">
                        “তাদের রক্তে রচিত আমাদের স্বাধীনতার পথ।”<br />
                        <span className="text-sm text-gray-400">— স্মরণে জুলাই আন্দোলনের বীর শহীদগণ</span>
                    </p>
                </Fade>

                <Link to={'/shohid'}>
                    <button className="border-2 border-white hover:bg-white hover:text-black rounded-xl font-semibold text-white transition-all duration-300 px-4 py-2">
                        সকল শহীদদের দেখুন
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default TributeSection;
