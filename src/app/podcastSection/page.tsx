import "../animation.css"

const podcastData = [
    {
        image: "/img/podcast-img-three.jpg",
        heading: "Glitchy Light",
        paragraph: "Adipiscing hendrerit eu nulla est, faucibus bibendum mi metus ut massa phasellus."
    },
    {
        image: "/img/podcast-img-four.jpg",
        heading: "Powerup Games",
        paragraph: "Adipiscing hendrerit eu nulla est, faucibus bibendum mi metus ut massa phasellus."
    },
    {
        image: "/img/podcast-img-five.jpg",
        heading: "Tech 4 Life",
        paragraph: "Adipiscing hendrerit eu nulla est, faucibus bibendum mi metus ut massa phasellus."
    },
]

const PodcastSection = () => {
    return(
        <section className="mt-20">
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="w-[1400px] flex flex-row gap-12 justify-center mb-10 max-2xl:w-[1220px] max-xl:w-[1000px] max-lg:w-[856px] max-lt:w-[728px] max-mt:w-[600px] max-mt:flex-col max-mt:items-center max-sm:w-[440px] max-lm:w-[400px] max-mm:w-[340px] max-st:w-[300px]">
                    <div className="flex flex-col gap-10 max-lg:w-[350px] max-mt:w-[550px] max-sm:w-[440px] max-lm:w-[400px] max-mm:w-[340px] max-st:w-[300px] max-lt:gap-6">
                        <h1 className="text-6xl font-bold text-black max-xl:text-5xl max-lg:text-4xl max-mt:text-3xl animation-leftlandingpage">Podcast</h1>
                        <p className="text-lg max-sm:text-base font-medium text-gray-700 animation-leftlandingpage">Quis malesuada vestibulum augue non dui leo purus aliquet a semper risus nec placerat libero tempor interdum faucibus</p>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-purple-700 uppercase font-semibold animation-leftlandingpage">Subscribe on:</h3>
                            <div className="flex flex-row gap-10 max-lt:gap-6 max-mm:gap-3 animation-leftlandingpage">
                                <div className="flex flex-col gap-2">
                                    <img className="w-8 h-8 max-lm:w-6 max-lm:h-6" src="/icon/podcast.png" alt="podacst-icon" />
                                    <p className="text-base max-lt:text-sm font-medium text-black">Apple Podcast</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                   <img className="w-8 h-8 max-lm:w-6 max-lm:h-6" src="/icon/spotify.png" alt="spotify-icon" />
                                   <p className="text-base max-lt:text-sm font-medium text-black">Spotify</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                   <img className="w-8 h-8 max-lm:w-6 max-lm:h-6" src="/icon/mic.png" alt="mic-icon" />
                                   <p className="text-base max-lt:text-sm font-medium text-black">Google Podcast</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex flex-row gap-6 items-center animation-leftlandingpage">
                              <img className="w-4 h-4" src="/icon/calendar.png" alt="calendar-icon" />
                              <h1 className="text-base max-lt:text-sm max-lm:text-base max-mm:text-sm uppercase text-black font-semibold">New weekly episodes will be released on Monday & Thursday.</h1>
                            </div>
                        </div>
                    </div>
                    <img className="animation-rightlandingpage max-lg:w-[400px] max-lg:h-[260px] max-mt:w-[550px] max-mt:h-[320px] max-sm:w-[440px] max-sm:h-[300px] max-lm:w-[400px] max-lm:h-[260px] max-mm:w-[340px] max-mm:h-[240px] max-st:w-[300px] max-st:h-[220px]" src="/img/podcast-img-one.jpg" alt="podcast-img" />
                </div>
                <hr />

                <div className="mb-10">
                    <div className="w-[1400px] flex flex-col gap-8 max-2xl:w-[1220px] max-xl:w-[1000px] max-lg:w-[856px] max-lt:w-[728px] max-mt:w-[600px] max-sm:w-[440px] max-lm:w-[400px] max-mm:w-[340px] max-st:w-[300px]">
                        <div className="flex flex-col gap-6 max-mm:gap-4 animation-popup">
                            <h1 className="text-5xl text-black font-bold max-lg:text-4xl max-sm:text-3xl max-lm:text-2xl">Latest Episode</h1>
                            <p className="text-lg max-lt:text-base max-lm:text-sm text-gray-700 font-medium">Weekly shows to listen to with earbuds, headphones and more</p>
                        </div>
                        <div className="flex flex-row gap-10 max-lt:gap-6 max-mt:flex-col max-mt:items-center">
                            <img className="animation-up max-lg:w-[400px] max-lg:h-[260px] max-mt:w-[600px] max-mt:h-[340px] max-sm:w-[440px] max-sm:h-[300px] max-lm:w-[400px] max-lm:h-[280px] max-mm:w-[340px] max-mm:h-[250px] max-st:w-[300px] max-st:h-[200px]" src="/img/podcast-img-two.jpg" alt="podcast-img" />
                            <div className="animation-right flex flex-col gap-10 max-mt:gap-6 max-mm:gap-4 justify-center">
                                <h1 className="text-4xl text-black font-semibold max-lg:text-3xl max-lm:text-2xl max-mm:text-xl">Work from Home: The Future</h1>
                                <p className="text-base max-lt:text-sm text-gray-700 font-medium">Purus convallis nunc quam turpis ultrices gravida consectetur id imperdiet nibh feugiat netus ut ultricies gravida leo feugiat porttitor venenatis proin ut lectus et aliquam leo amet proin erat congue montes, aliquam.</p>
                                <div className="flex flex-row gap-5">
                                    <div className="flex flex-row gap-3 items-center">
                                        <img className="w-4 h-4" src="/icon/mic.png" alt="mic-icon" />
                                        <p>Ethan H</p>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center">
                                        <img className="w-4 h-4" src="/icon/calendar.png" alt="calendar-icon" />
                                        <p>June 28</p>
                                    </div>
                                </div>   
                                <button type="button" className="animation-popup w-40 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Listen Now</button>                    
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                {/* Ad-Section-2 */}
                <div className="w-full flex justify-center mb-16 max-lm:mb-8">
                  <img className="w-[1200px] max-2xl:w-[1100px] max-xl:w-[900px] max-lg:w-[800px] max-lt:w-[700px] max-mt:w-[550px] max-mt:h-[100px] max-sm:w-[440px] max-lm:w-[380px] max-mm:w-[340px] max-mm:h-[80px] max-st:w-[300px] cursor-pointer" src="/img/ad-img.jpg" alt="" />
                </div>

                <div className="mb-20 max-lm:mb-10">
                    <div className="w-[1400px] flex flex-row gap-10 max-2xl:w-[1220px] max-xl:w-[1000px] max-lg:w-[856px] max-lt:w-[728px] max-lt:gap-6 max-mt:w-[550px] max-mt:flex-col max-mt:items-center max-sm:w-[440px] max-lm:w-[400px] max-mm:w-[340px] max-st:w-[300px]">
                        {podcastData.map((key, index) => {
                            return(
                                <div className="flex flex-col gap-5 max-sm:mb-3" key={index}>
                                  <img className="animation-up max-mt:w-[550px] max-mt:h-[320px] max-sm:w-[440px] max-sm:h-[300px] max-lm:w-[400px] max-lm:h-[260px] max-mm:w-[340px] max-mm:h-[230px] max-st:w-[300px] max-st:h-[210px]" src={key.image} alt="podcast-image" />
                                  <h1 className="text-2xl text-black font-bold max-lg:text-xl max-mt:text-2xl max-mm:text-xl">{key.heading}</h1>
                                  <p className="text-lg text-gray-700 font-medium max-lg:text-base max-st:text-sm">{key.paragraph}</p>
                                   <div className="flex flex-row gap-5">
                                       <div className="flex flex-row gap-3 items-center">
                                          <img className="w-4 h-4" src="/icon/mic.png" alt="mic-icon" />
                                          <p>Ethan H</p>
                                       </div>
                                       <div className="flex flex-row gap-3 items-center">
                                          <img className="w-4 h-4" src="/icon/calendar.png" alt="calendar-icon" />
                                          <p>June 28</p>
                                       </div>
                                  </div> 
                                  <button type="button" className="animation-popup w-40 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Listen Now</button>
                               </div>       
                            )
                        })}
                  </div>
                </div>  
            </div>
        </section>
    )
}

export default PodcastSection