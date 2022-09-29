import Head from "next/head";
import Layout, { articlesTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import BlogItem from "../components/BlogItem";

export default function Articles({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <Head>
        <title>{articlesTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog fetching</h2>
        {posts.map((pos) => (
          <BlogItem
            key={pos.id}
            title={pos.title}
            description={pos.body}
            id={pos.id}
          />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
