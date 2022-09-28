import Head from "next/head";
import Layout, { articlesTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import BlogItem from "../components/BlogItem";

export default function Articles({ posts }) {
  return (
    <Layout>
      <Head>
        <title>{articlesTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog fetching</h2>
        <div className={utilStyles.list}>
          {posts.map((post) => (
            <BlogItem
              title={post.title.rendered}
              description={post.excerpt.rendered}
              slug={post.slug}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch("https://alcofan.com/wp-json/wp/v2/posts");
  const posts = await data.json();
  console.log(posts);

  return {
    props: { posts },
  };
};
