import Link from "next/link";

const BlogItem = ({ title, description, id }) => {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <Link href="/articles/[id]" as={`/articles/${id}`}>
        <a>Читать</a>
      </Link>
    </div>
  );
};

export default BlogItem;
