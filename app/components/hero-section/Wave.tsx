"use client";

import { motion } from "framer-motion";

const Wave = () => {
    return (
        <div className="wave-wrapper relative w-full overflow-hidden">
          <motion.img
    src="/images/wave.svg"
    alt="wave"
    className="wave-image w-full block h-auto object-cover"
    style={{
        transformOrigin: "50% 50%",
    }}
    animate={{
        rotate: [0, 2.5, 0, -2.5, 0],
        y: [0, -6, 0, -6, 0],
    }}
    transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
    }}
/>
        </div>
    );
};

export default Wave;
