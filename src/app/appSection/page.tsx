import MainFolder from "../mainFolder/page"
import "../animation.css"

const appData = [
    {
        image: "/img/app-img-one.jpg",
        heading: "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/app-img-two.jpg",
        heading: "Photos of Jupiter From NASA Spacecraft, Both Near and Far",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/app-img-three.jpg",
        heading: "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        id: 1,
        image: "/img/app-img-four.jpg",
        heading: "Broke a Glass? Someday You Might 3-D-Print a New One",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/app-img-five.jpg",
        heading: "6 Bots That Deliver Science and Serendipity on Twitter",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    
]

let appSection = () => {
    return(
        <section className="mb-20 mt-20">
            <div className="flex flex-row gap-20 max-lt:gap-12 justify-center max-mt:flex-col max-mt:items-center">
              <div className="w-[750px] flex flex-col gap-16 max-xl:w-[550px] max-lg:w-[480px] max-lt:w-[420px] max-mt:w-[480px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                <h1 className="text-5xl font-bold max-lt:text-4xl max-mm:text-3xl animation-leftlandingpage">Apps</h1>
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

export default appSection