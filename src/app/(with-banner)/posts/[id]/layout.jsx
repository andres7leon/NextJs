import Link from "next/link";

const getData = (id) => {
  console.log('entraa hace la peticion');
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json());
};


export default async function PostPage ({ children, params}) {
    const { id } = params;
    const post = await getData(id);

    return (
      <div>
        <h1> { post.title } </h1>
        <p> { post.body } </p>
        <h6> publicacion: { post.id } </h6>
        <Link href={`/posts/${id}/comments`} > Ver Comentarios </Link>
        {children}
      </div>
    )
  }
  