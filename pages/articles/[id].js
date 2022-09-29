import Head from "next/head";

export async function getStaticPaths() {
  const dat = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await dat.json();

  const paths = data.map((pos) => {
    return {
      params: { id: pos.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const dat = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post = await dat.json();
  return {
    props: {
      post,
    },
  };
}

const singleArticle = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.id}</title>
      </Head>

      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </div>
  );
};

export default singleArticle;
