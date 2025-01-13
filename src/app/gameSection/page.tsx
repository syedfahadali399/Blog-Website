import MainFolder from "../mainFolder/page"
import "../animation.css"

const appData = [
    {
        image: "/img/game-img-one.jpg",
        heading: "A Genetic Oddity May Give Octopuses and Squids Their Smarts",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/game-img-two.jpg",
        heading: "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/game-img-three.jpg",
        heading: "The New Threat to Wolves in and Around Yellowstone",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/game-img-four.jpg",
        heading: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    
]

let GameSection = () => {
    return(
        <section className="mb-20 mt-20">
            <div className="flex flex-row gap-20 max-lt:gap-12 justify-center max-mt:flex-col max-mt:items-center">
              <div className="w-[750px] flex flex-col gap-16 max-xl:w-[550px] max-lg:w-[480px] max-lt:w-[480px] max-mt:w-[480px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                <h1 className="text-5xl font-bold max-lt:text-4xl max-mm:text-3xl animation-leftlandingpage">Games</h1>
                <hr />
                {appData.map((e) => {
                    return(
                        <div className="flex flex-col gap-4 animation-popup">
                            <img src={e.image} alt="app-image" />
                            <h1 className="text-3xl font-bold text-black max-lt:text-2xl max-lm:text-xl">{e.heading}</h1>
                            <h5 className="text-base max-mm:text-sm font-medium cursor-pointer text-purple-700">{e.editorName}</h5>
                            <p className="text-lg max-lm:text-base mb-6">{e.paragraph}</p>
                            <p className="underline mb-3 cursor-pointer font-medium hover:text-purple-700">Read More</p>
                            <hr />
                        </div>
                        
                    )
                })}
              </div>
              <MainFolder></MainFolder> 
            </div>
        </section>
    )
}

export default GameSection