import Link from "next/link";

const BlogItem = (title, description, slug) => {
  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: title.contentHtml }} />
      <p dangerouslySetInnerHTML={{ __html: description.contentHtml }} />
      <Link href="/articles/[slug]" as={`/articles/${slug}`}>
        <a>Читать</a>
      </Link>
    </div>
  );
};

export default BlogItem;
