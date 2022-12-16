import { FC, useEffect, useState } from "react";

const About: FC<any> = (props) => {

    const { result, posts } = props;

    const [apiResponse, setApiResponse] = useState<any>();

    useEffect(() => {
        fetch('/').then(res => setApiResponse(res))
    }, [])

    return (
        <div>{result}</div>
    )
}

export default About


//Gera página estáticas
//Gera em tempo build
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
        revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = [1, 2, 3, 4, 5, 6, 7, 8]

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}