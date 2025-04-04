"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/ZCSLogo1.gif";

const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

export const Dashboard = () => {
    const controls = useAnimation();

    useEffect(() => {
        // Trigger the wipe animation when the component mounts (on page load)
        controls.start({ width: "100%", transition: { duration: 1.5, ease: "easeOut" } }); // Faster animation
    }, [controls]);

    return (
        <section
            id="home"
            className="relative bg-radial-blue-gradient bg-gradient-to-r overflow-hidden"
        >
            {/* Wipe effect for background color, from left to right */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#a6c2dd]/30 to-[#b7ccdd] z-10"
                initial={{ width: "0%" }}  // Start with no width (hidden)
                animate={controls}        // Animate to full width (100%)
                style={{
                    background: "linear-gradient(to right, #a6c2dd, #b7ccdd)", // Light-to-dark gradient
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                }}
            ></motion.div>

            <div className="container h-[550px] flex flex-col md:flex-row items-center relative z-20">
                {/* GIF Logo container - Adjust margins for iPad Mini */}
                <div className="w-full flex items-center justify-center order-1 md:order-1 mb-8 md:mb-0 md:-ml-10 lg:-ml-20">
                    <motion.div
                        className="w-[80%] md:w-[400px] lg:w-[700px] opacity-60" // Adjusted width for iPad Mini
                        animate={{ translateY: [-20, 20] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src={Logo}
                            alt="Zenith Core Solutions Logo"
                            width={700}
                            height={700}
                            priority
                            unoptimized={true}
                        />
                    </motion.div>
                </div>

                {/* Text container - Wrap in a new div */}
                <div className="w-full md:w-1/2 md:mr-10 order-2 md:order-2 z-30 flex flex-col justify-center text-center md:text-left">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold tracking-tighter font-montserrat text-transparent bg-clip-text"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <span className="text-[#2297F5]">ZENITH C</span>
                        <span className="text-[#F8CD23]">O</span>
                        <span className="text-[#2297F5]">RE SOLUTIONS</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-[#010D3E] tracking-tight mt-2 font-openSans"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                    >
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                    </motion.p>

                    <motion.div
                        className="flex gap-1 items-center justify-center md:justify-start mt-4"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="#services">
                            <button className="btn btn-primary">More</button>
                        </Link>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};
