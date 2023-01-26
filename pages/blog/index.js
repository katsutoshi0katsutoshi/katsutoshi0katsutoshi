// pages/index.js
import Link from "next/link";
import { client } from "../../libs/client";
import Layout from "../../components/layout";
import MainNav from "../../components/mainnav";

export default function Home({ blog }) {
  return (
    <div>
      <Layout>
      <ul className="mx-4">
        {blog.map((blog) => (
          <li key={blog.id} className='mt-4'>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <MainNav />

      </Layout>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};