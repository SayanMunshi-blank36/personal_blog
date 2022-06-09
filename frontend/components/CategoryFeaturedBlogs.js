import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CategoryFeaturedBlogs = ({ category, categoryDesc }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });

      animation2.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.6,
        },
      });
    }
    // else {
    //   animation.start({
    //     x: "-100vw",
    //   });
    //   animation2.start({
    //     opacity: 0,
    //   });
    // }
  }, [inView]);

  return (
    <div ref={ref} className="my-20 mx-auto w-[58rem]">
      <motion.h2
        animate={animation}
        className="w-fit text-5xl font-extrabold text-secondary mb-4 border-b-4 border-b-secondary"
      >
        {category.toUpperCase()} BLOGS
      </motion.h2>
      <motion.p animate={animation2} className="mb-4 text-lg">
        {categoryDesc}
      </motion.p>
      <motion.div animate={animation2} className="grid grid-cols-2 gap-8">
        <div>
          <Image
            src="/webdevlopment.jpg"
            width={500}
            height={300}
            className="rounded-md"
          />
          <div className="mx-auto w-11/12">
            <p className="mt-4 text-xl text-accent font-bold border-2 border-accent w-fit px-1 rounded-lg">
              {category.toUpperCase()}
            </p>
            <h3 className="my-4 text-xl font-bold hover:underline cursor-pointer">
              Web Development: The Booming Field in Modern World
            </h3>
            <p className="text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              voluptates minus temporibus deleniti nobis harum non veniam eaque
              dolorum iste nesciunt corporis mollitia minima aliquam?
            </p>
            <p className="my-4">June 6, 2022</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <Image
              className="rounded-md"
              src="/webdevlopment.jpg"
              width={500}
              height={300}
            />
            <p className="mt-2 text-sm text-accent font-semibold w-fit px-1">
              {category.toUpperCase()}
            </p>
            <h3 className="my-4 text-base font-bold hover:underline cursor-pointer">
              Web Development: The Booming Field in Modern World
            </h3>
            <p className="my-4">June 6, 2022</p>
          </div>
          <div>
            <Image
              className="rounded-md"
              src="/webdevlopment.jpg"
              width={500}
              height={300}
            />
            <p className="mt-2 text-sm text-accent font-semibold w-fit px-1">
              {category.toUpperCase()}
            </p>
            <h3 className="my-4 text-md font-bold hover:underline cursor-pointer">
              Web Development: The Booming Field in Modern World
            </h3>
            <p className="my-4">June 6, 2022</p>
          </div>
          <div>
            <Image
              className="rounded-md"
              src="/webdevlopment.jpg"
              width={500}
              height={300}
            />
            <p className="mt-2 text-sm text-accent font-semibold w-fit px-1">
              {category.toUpperCase()}
            </p>
            <h3 className="my-4 text-md font-bold hover:underline cursor-pointer">
              Web Development: The Booming Field in Modern World
            </h3>
            <p className="my-4">June 6, 2022</p>
          </div>
          <div>
            <Image
              className="rounded-md"
              src="/webdevlopment.jpg"
              width={500}
              height={300}
            />
            <p className="mt-2 text-sm text-accent font-semibold w-fit px-1">
              {category.toUpperCase()}
            </p>
            <h3 className="my-4 text-md font-bold hover:underline cursor-pointer">
              Web Development: The Booming Field in Modern World
            </h3>
            <p className="my-4">June 6, 2022</p>
          </div>
        </div>
      </motion.div>
      <motion.button animate={animation} className="btn btn-primary">
        Read More {category} Blogs
      </motion.button>
    </div>
  );
};

export default CategoryFeaturedBlogs;
