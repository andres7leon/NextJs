import Link from 'next/link';
import { LikeButton } from './LikeButton';

const getData = () => {
  console.log('entraa hace la peticion');
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store'
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const data = await getData();

  return data.map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
