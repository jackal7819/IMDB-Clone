import Image from 'next/image';

const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image
                src='bean_eater.svg'
                alt='loading...'
            />
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
