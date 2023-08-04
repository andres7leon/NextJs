import Image from "next/image";

const getData = async (id) => {
  console.log('entraa hace la peticion');

  await new Promise( resolve => setTimeout(resolve, 3000 ) )

  // throw new Error('se totio tooddoo')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json());
};


export default async function Page ({ params}) {
    const { id } = params;
    const comments = await getData(id);

    return (
        <ul>
            {
                comments.map((data) => (
                    <li key={data.id}>
                      <p>
                        {data.id}:  {data.name}  - { data.email}
                      </p>
                      <Image src={`https://avatars.dicebear.com/api/pixel-art-neutral/${data.email}.svg`} width={200} height={200} alt="Avatar"/>
                    </li>
                ))
            }
        </ul>
        
    )
  }
  