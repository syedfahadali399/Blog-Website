import Link from "next/link"

const MainFolder = () => {
    return(
        <section>
            <div className="flex flex-col gap-8 max-xl:w-[300px] max-lg:w-[280px] max-lt:w-[260px] max-mt:w-[400px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-black font-bold text-2xl">Categories</h1>
                    <div className="flex flex-col gap-2">
                        <Link href={`appSection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Apps  (5)</Link>
                        <Link href={`podcastSection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Editiors Pick  (4)</Link>
                        <Link href={`gadgetSection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Gadget  (7)</Link>
                        <Link href={`gameSection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Games  (4)</Link>
                        <Link href={`tecnologySection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Technology  (7)</Link>
                        <Link href={`podcastSection`} className="text-lg max-lm:text-base font-medium text-purple-700 cursor-pointer">Podcasts</Link>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-5">
                    <h1 className="text-black font-bold text-2xl">Subscribe</h1>
                    <input className="border border-gray-400 p-3 rounded-xl" type="text" placeholder="Email Address"/>
                    <button type="button" className="w-[125px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Subscribe</button>
                </div>
                <hr />
                <img className="animation-right mb-5 max-xl:w-[300px] max-xl:h-[540px] max-lg:w-[280px] max-lg:h-[500px] max-lt:w-[260px] max-lt:h-[460px] max-lm:w-[240px] max-lm:h-[420px] max-mm:w-[220px] max-mm:h-[380px]" src="/img/tech-img-six.jpg" alt="img" />
                <hr />
                <div className="flex flex-col gap-5">
                    <h1 className="text-black font-bold text-2xl animation-up">Recent Posts</h1>
                    <div className="flex flex-col gap-3">
                        <Link href={`/gadgetSection`} className="w-64 max-lt:w-60  text-lg max-lg:text-base font-medium text-purple-700 cursor-pointer animation-popup">Running macOS and Windows 10 on the Same Computer</Link>
                        <Link href={`/gadgetSection`} className="w-80 max-lg:w-72 max-lt:w-64 text-lg max-lg:text-base font-medium text-purple-700 cursor-pointer animation-popup">Apple opens another megastore in China amid William Barr criticism</Link>
                        <Link href={`/tecnologySection`} className="w-64 max-lt:w-60 text-lg max-lg:text-base font-medium text-purple-700 cursor-pointer animation-popup">The Sounds of Space as NASA's Cassini Dives by Saturn</Link>
                        <Link href={`/appSection`} className="w-80 max-lg:w-72 max-lt:w-64 text-lg max-lg:text-base font-medium text-purple-700 cursor-pointer animation-popup">Broke a Glass? Someday You Might 3-D-Print a New One</Link>
                        <Link href={`/gameSection`} className="w-80 max-lg:w-72 max-lt:w-64 text-lg max-lg:text-base font-medium text-purple-700 cursor-pointer animation-down">This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.</Link>
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default MainFolder