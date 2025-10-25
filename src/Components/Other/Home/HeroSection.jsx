import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section
            className="relative py-20 md:py-10 bg-cover bg-center bg-no-repeat min-h-[90vh] md:h-screen flex items-center px-6 bg-gradient-to-br from-green-600 via-emerald-700 to-red-600"
        >

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">

                {/* Left Content */}
                <div className="text-center md:text-left md:ml-20 ml-0">
                    <Zoom triggerOnce>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                            স্বাধীন বাংলা <span className="text-yellow-300">২.০</span>
                        </h1>
                    </Zoom>

                    <Fade direction="up" delay={300} triggerOnce>
                        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-lg mx-auto md:mx-0">
                            জুলাই আন্দোলন আমাদের সাহস, আমাদের ইতিহাস, আমাদের গর্ব। শহীদেরা চলে যান না, তাঁরা পরিণত হন চিরন্তন আলোর উৎসে।  বাংলাদেশ আজ যে গর্বে মাথা উঁচু করে আছে, তা তাদেরই কারণে।
                        </p>
                    </Fade>

                    <Slide direction="up" delay={600} triggerOnce>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/julyGallery"
                                className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold shadow-lg 
                          hover:bg-yellow-300 transform hover:scale-105 transition"
                            >
                                জুলাই গ্যালারি দেখুন
                            </Link>
                            <Link
                                to="/blog"
                                className="px-6 py-3 rounded-lg border-2 border-white font-semibold 
                          hover:bg-white hover:text-green-700 transform hover:scale-105 transition"
                            >
                                জুলাই বিপ্লব সম্পর্কে জানুন
                            </Link>
                        </div>
                    </Slide>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Fade delay={400} duration={2000} triggerOnce>
                        <img
                            src="/graphys/a.png"
                            alt="Bangladesh Graphic"
                            className="w-[300px] md:w-[600px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
