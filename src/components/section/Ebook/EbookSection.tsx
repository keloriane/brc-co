"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cbdFields from "@/../public/images/cbd-field.png";
import GridContainer from "@/components/common/Container/container";
import Column from "@/components/common/Col/col";
import squareBuddy from "@/../public/squaeBuddy.svg";
import Link from "next/link";

const EbookSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this section.
  // With offset ["start end", "end start"]:
  // - When the section's top is at the viewport's bottom, progress = 0.
  // - When the section's bottom is at the viewport's top, progress = 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* 
    Map the scroll progress to a top offset for the white box.
    In this example:
      - At progress 0, the white box is at "80%" from the top.
      - At progress 0.3, it animates to "0%" (i.e. its top hits the viewport top).
      - It stays at "0%" until progress 0.7 (i.e. it remains pinned).
      - At progress 1, it moves to "-20%" (letting it exit as the section ends).
    
    Adjust the keyframes ([0, 0.3, 0.7, 1]) and values (["80%", "0%", "0%", "-20%"]) 
    to suit your layout.
  */

  // (Optional) Also add a parallax effect for the background image.
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Create a motion-enabled version of Next.js Image.
  const MotionImage = motion.create(Image);

  return (
    <section ref={ref} className="relative">
      {/* The white content box – using a fixed position so that we can animate its top value */}
      <motion.div className=" absolute top-[10%]  left-[30%] z-20 bg-white py-[47px] px-[33px] max-w-[448px] flex flex-col items-center justify-center text-center gap-[55px] text-budBlue">
        <div>
          <Image src={squareBuddy} width={282} height={87} alt="Square Buddy" />
        </div>
        <div className="font-black text-[20px]">
          <h3>Discutons de votre projet</h3>
        </div>
        <div>
          <p className="text-md">
            Grâce à nos partenaires dans la grande distribution, nous couvrons
            un réseau de points de tabac inégalé dans l’U.E.
          </p>
        </div>
        <div>
          <Link
            href="#"
            className="font-semibold text-[16px] border border-budBlue uppercase p-2"
          >
            Télécharger notre Brochure
          </Link>
        </div>
      </motion.div>

      <GridContainer columns={24} className="h-[910px]">
        <Column
          colStart={[1, 1, 9, 9, 9]}
          colEnd={[27, 27, 27, 27, 27]}
          className="relative w-full h-full mr-0 bg-gray-500"
        >
          <motion.div className="relative h-full w-full overflow-hidden">
            <MotionImage
              src={cbdFields}
              alt="CBD fields"
              fill
              className="object-cover"
              style={{ y }}
            />
          </motion.div>
        </Column>
      </GridContainer>
    </section>
  );
};

export default EbookSection;
