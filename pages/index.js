import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/posts">
              <a>Blog Md</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/articles">
              <a>Blog fetching</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
