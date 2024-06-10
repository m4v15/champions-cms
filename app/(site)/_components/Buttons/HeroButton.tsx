import Link from 'next/link';

type IHeroButtonProps = {
  text: string;
  link: string;
  newTab: boolean;
};

const HeroButton = (props: IHeroButtonProps) => {
  return props.newTab ? (
    <Link href={props.link} rel="noopener noreferrer" target="_blank">
      {' '}
      <div className="mt-2 inline-block bg-black px-4 py-2 text-center text-base font-semibold text-white hover:bg-gray-600">
        {props.text}
      </div>
    </Link>
  ) : (
    <Link href={props.link}>
      {' '}
      <div className="mt-2 inline-block bg-black px-4 py-2 text-center text-base font-semibold text-white hover:bg-gray-600">
        {props.text}
      </div>
    </Link>
  );
};

export { HeroButton };
