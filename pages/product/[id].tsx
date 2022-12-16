import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Product = () => {

    const router = useRouter();

    const [id, setId] = useState<string>();

    useEffect(() =>

        setId(router.query.id as string)

        , [router.isReady])

    return (
        <h1>{id}</h1>
    )
}

export default Product

//Gera página estáticas
//Gera em tempo build
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            foo: [1, 2, 3]
        },
        revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {


    // Get the paths we want to pre-render based on posts
    const paths = [1, 2, 3, 4, 5, 6, 7, 8];

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}