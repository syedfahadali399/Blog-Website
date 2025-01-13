import MainFolder from "../mainFolder/page"
import "../animation.css"

const appData = [
    {
        image: "/img/tecnology-img-one.jpg",
        heading: "The Sounds of Space as NASA's Cassini Dives by Saturn",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-two.jpg",
        heading: "Why Netflix shares are down 10%",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-three.jpg",
        heading: "Watching Their Dust: Photographing Players in Pollination",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-four.jpg",
        heading: "No Longer a Dream: Silicon Valley Takes On the Flying Car",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-five.jpg",
        heading: "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-six.jpg",
        heading: "What Moves Gravel-Size Gypsum Crystals Around the Desert?",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/tecnology-img-seven.jpg",
        heading: "Scientists, Feeling Under Siege, March Against Trump Policies",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    
]

const TecnologySection = () => {
    return(
        <section className="mb-20 mt-20">
            <div className="flex flex-row gap-20 max-lt:gap-12 justify-center max-mt:flex-col max-mt:items-center">
              <div className="w-[750px] flex flex-col gap-16 max-xl:w-[550px] max-lg:w-[480px] max-lt:w-[420px] max-mt:w-[480px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                 <h1 className="text-5xl font-bold max-lt:text-4xl max-mm:text-3xl animation-leftlandingpage">Tecnology</h1>
                 <hr />
                 {appData.map((key, index) => {
                    return(
                        <div className="flex flex-col gap-4 animation-popup" key={index}>
                            <img className="max-xl:w-[550px] max-lg:w-[480px] max-lg:h-[320px] max-lt:w-[420px] max-lt:h-[300px] max-mt:w-[480px] max-mt:h-[300px] max-sm:w-[420px] max-sm:h-[270px] max-lm:w-[360px] max-lm:h-[240px] max-mm:w-[340px] max-mm:h-[220px] max-st:w-[300px] max-st:h-[200px]" src={key.image} alt="app-image" />
                            
                            <h1 className="text-3xl font-bold text-black max-lt:text-2xl max-lm:text-xl">{key.heading}</h1>
                            <h5 className="text-base max-mm:text-sm font-medium cursor-pointer text-purple-700">{key.editorName}</h5>
                            <p className="text-lg max-lm:text-base mb-6">{key.paragraph}</p>
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

export default TecnologySection