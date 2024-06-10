import React, { useState } from 'react';
import Link from 'next/link';
import Search from '../../_components/Search/Search';
import { fetchGFMs } from '@/app/_lib/data';
import type { gfms } from '@prisma/client'


type ICardProps = {
    title: string;
    url: string;
    imageUrl: string;
    progress: string;
};

export const Card = (props: ICardProps) => (
    <div className="m-2 max-w-sm rounded-lg border border-gray-200 bg-white shadow">
        <Link href={props.url} rel="noopener noreferrer" target="_blank">
            <img className="rounded-t-lg" src={props.imageUrl} alt="" />
        </Link>
        <div className="p-5">
            <Link href={props.url} rel="noopener noreferrer" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {props.title}
                </h5>
            </Link>
            <div className="mb-3 flex items-center justify-start">
                <p className="mr-2 text-xl font-bold text-gray-700">
                    ${props.progress} raised so far
                </p>
            </div>
            <Link
                href={`${props.url}`}
                className="inline-flex items-center rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
                rel="noopener noreferrer"
                target="_blank"
            >
                Donate
                <svg
                    className="ms-2 size-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </div>
    </div>
);


// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// function GfmsContainer() {
//   const { data, error, isLoading } = useSWR('https://www.championgaza.xyz/api/gfms', fetcher);
//   const [query, setQuery] = useState('');

//   if (error) {
//     console.log({error})
//     return <div>Failed to load</div>;
//   }
//   if (isLoading) return <div>Loading...</div>;
//   if (!data.result) return <div>Failed to load</div>;
//   const formattedGfms = data.result.sort(
//     (
//       a: {
//         title: string;
//         url: string;
//         imageurl: string;
//         progress: number;
//         target: number;
//       },
//       b: {
//         title: string;
//         url: string;
//         imageurl: string;
//         progress: number;
//         target: number;
//       },
//     ) => a.progress - b.progress,
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   const multipleSearch = (array: []) => {
//     return array.filter((el: any) =>
//       Object.keys(el).some((parameter: string) =>
//         el[parameter].toString().toLowerCase().includes(query),
//       ),
//     );
//   };

//   const filtered = multipleSearch(formattedGfms);

//   return (
//     <>
//       <div className="mb-2 ml-1 flex max-w-xs items-center">
//         <label htmlFor="filter" className="sr-only">
//           Search
//         </label>
//         <input
//           className="block w-full border-gray-800 bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//           onChange={handleChange}
//           placeholder="Search"
//           type="text"
//           id="filter"
//         />
//       </div>
//       <div className="flex flex-wrap">
//         {filtered.map(
//           (gfm: {
//             title: string;
//             url: string;
//             imageurl: string;
//             progress: number;
//             target: number;
//           }) => {
//             if (gfm.imageurl && gfm.title) {
//               return (
//                 <Card
//                   title={gfm.title}
//                   imageUrl={gfm.imageurl}
//                   progress={`${gfm.progress}`}
//                   url={gfm.url}
//                   target={`${gfm.target}`}
//                   key={gfm.url}
//                 />
//               );
//             }
//             return <></>;
//           },
//         )}
//       </div>
//     </>
//   );
// }

const multipleSearch = (array: gfms[], query: string | undefined) => {
    return query
        ? array.filter((el: any) =>
            Object.keys(el).some((parameter: string) =>
                el[parameter].toString().toLowerCase().includes(query),
            ),
        )
        : array
};


async function Fundraisers({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const data = await fetchGFMs()
    const filteredData = multipleSearch(data.sort((a,b) => a.progress - b.progress), searchParams?.query)
    return (
        <div className="text-gray-800 antialiased">
            <div className="mx-auto max-w-screen-xl p-3">
                <div className="w-full text-left">
                    <div className=" text-2xl font-bold">Funds We&apos;re Supporting</div>
                    <br />
                    All of these funds come from people in Gaza we know personally, or
                    else friends of people we know personally. Please support and donate
                    to as many as you can. <br />
                    <br />
                    <p className="text-xs italic">
                        Please note, the amount raised here may not update for a few hours
                        after donations, although it will update on the GoFundMe page
                        directly
                    </p>
                    <br />
                    <Search placeholder='Search' />
                </div>
                <div className="flex flex-wrap">
                    {filteredData.map(
                        (gfm: {
                            title: string;
                            url: string;
                            imageurl: string;
                            progress: number;
                        }) => {
                            if (gfm.imageurl && gfm.title) {
                                return (
                                    <Card
                                        title={gfm.title}
                                        imageUrl={gfm.imageurl}
                                        progress={`${gfm.progress}`}
                                        url={gfm.url}
                                        key={gfm.url}
                                    />
                                );
                            }
                            return <></>;
                        },
                    )}
                </div>
            </div>
        </div>
    );
}

export default Fundraisers;
