import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <div className='max-w-6xl p-4 mx-auto mt-10 space-y-4'>
            <h1 className='text-2xl font-medium text-center text-amber-600'>
                ABOUT
            </h1>
            <p>
                Hello! My name is Viktor Filippov, and I am a beginner Frontend
                Developer. Welcome to this platform created by me, designed for
                all movie enthusiasts!
            </p>
            <p>
                I have created this project with the aim of providing you with a
                convenient and immersive platform to explore and indulge in the
                world of cinema. Here, you will be able to dive into the endless
                realm of movies, actors, and cinematic creations.
            </p>
            <p>
                On my platform, you will find descriptions and reviews of the
                most popular and captivating movies across various genres. I
                also have a rich database of actors, where you can learn more
                about your favorite cast members and their contributions to the
                world of cinema.
            </p>
            <p>
                I am constantly working on improving this platform to provide
                you with the best experience possible. I add new features, stay
                up to date with the latest trends, and strive to be your go-to
                source for everything related to the world of movies.
            </p>
            <p>
                Your feedback is highly valuable to me! I appreciate your
                suggestions and ideas. If you have any thoughts or remarks,
                please do not hesitate to share them with me. I am always ready
                to listen and enhance my platform to meet your needs.
            </p>
            <p>
                Thank you for choosing my project! I hope you enjoy using my
                platform and discover incredible movies that will captivate your
                imagination and evoke emotions.
            </p>
        </div>
    );
};

export default About;
