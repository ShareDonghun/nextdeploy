import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Post: {router.asPath}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking", // true , "blocking"
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    }, // will be passed to the page component as props
    revalidate: 5,
  };
}
