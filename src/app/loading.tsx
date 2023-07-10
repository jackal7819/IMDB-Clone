import Image from 'next/image';

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-[70vh]'>
            <Image
                src='bean_eater.svg'
                width={155}
                height={155}
                alt='loading...'
            />
        </div>
    );
};

export default Loading;
