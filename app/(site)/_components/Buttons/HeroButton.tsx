import Link from "next/link";

type IHeroButtonProps = {
    text: string;
    link: string;
    newTab: boolean;
};


const HeroButton = (props: IHeroButtonProps) => {

    return props.newTab 
        ? <Link href={props.link} rel="noopener noreferrer" target="_blank" >  <div className='inline-block text-center text-base font-semibold py-2 px-4 text-white bg-black hover:bg-gray-600 mt-2'>{props.text}</div>
        </Link>
        : <Link href={props.link}>  <div className='inline-block text-center text-base font-semibold py-2 px-4 text-white bg-black hover:bg-gray-600 mt-2'>{props.text}</div>
        </Link>
    }

export { HeroButton };