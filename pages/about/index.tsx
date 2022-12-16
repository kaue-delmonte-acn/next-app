import { FC } from "react";

const About: FC<any> = (props) => {

    const { time } = props;


    return (
        <h1>{time}</h1>
    )
}

export default About


//Gera página estáticas
//Gera em tempo build
export async function getStaticProps() {
    const time = new Date().toISOString();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            time,
        },
        revalidate: 10, // In seconds
    }
}