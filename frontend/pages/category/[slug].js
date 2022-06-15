import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";

const Slug = ({ blogs }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Sayan Munshi - {slug}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-11/12 lg:w-[58rem]">
        <h1 className="w-fit text-3xl lg:text-5xl font-extrabold mb-4">
          {slug}
        </h1>
        <hr className="w-full border-none h-[0.06px] text-primary bg-primary mb-8" />
        <main className="mx-auto w-full">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="md:flex w-11/12 mx-auto items-center justify-center mb-8"
              >
                <div className="mx-4">
                  <a href={`/blog/${blog.attributes.slug}`}>
                    <Image
                      src={`${blog.attributes.cover.data.attributes.url}`}
                      alt="img"
                      width={400}
                      height={200}
                      className="hover:opacity-95"
                    />
                  </a>
                </div>
                <div className="mx-4">
                  <a href={`/blog/${blog.attributes.slug}`}>
                    <h2 className="font-extrabold text-xl md:text-2xl mb-2 hover:underline">
                      {blog.attributes.title.toUpperCase()}
                    </h2>
                  </a>
                  <p className="md:text-lg mb-2">
                    {blog.attributes.description}
                  </p>
                  <p className="text-secondary-focus">
                    {moment(blog.attributes.createdAt).format("MMM DD, YYYY")}
                  </p>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  let categories;
  let blogs;

  const categoryArrRes = await fetch(
    `${process.env.API_URL}api/categories?populate=*`,
    {
      headers: headers,
    }
  );

  const blogsRes = await fetch(
    `${process.env.API_URL}api/articles?sort=createdAt%3Adesc&populate=*&filters[category][name]=${context.query.slug}&pagination[limit]=5`,
    {
      headers: headers,
    }
  );

  const categoryArr = await categoryArrRes.json();
  const blogsArr = await blogsRes.json();

  categories = categoryArr.data;
  blogs = blogsArr.data;

  return {
    props: { categories, blogs }, // will be passed to the page component as props
  };
}

export default Slug;
