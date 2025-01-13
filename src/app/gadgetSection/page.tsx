import MainFolder from "../mainFolder/page"
import "../animation.css"

const appData = [
    {
        image: "/img/gadget-img-one.jpg",
        heading: "How a Gadget Drives Human Creativity",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-two.jpg",
        heading: "An IoT Failure Worst Nightmare",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-three.jpg",
        heading: "Dogs Do Their Duty for Science",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-four.jpg",
        heading: "Spend a Dollar on Upcoming iPhone 13, and How to Save More",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-five.jpg",
        heading: "Apple opens another megastore in China amid William Barr criticism",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-six.jpg",
        heading: "For Families of Teens at Microsoft Surface",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    {
        image: "/img/gadget-img-seven.jpg",
        heading: "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
        editorName: "Apps, Editors Pick / akbarh",
        paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"
    },
    
]

const GameSection = () => {
    return(
        <section className="mb-20 mt-20">
            <div className="flex flex-row gap-20 max-lt:gap-12 justify-center max-mt:flex-col max-mt:items-center">
              <div className="w-[750px] flex flex-col gap-16 max-xl:w-[550px] max-lg:w-[480px] max-lt:w-[420px] max-mt:w-[480px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                <h1 className="text-5xl font-bold max-lt:text-4xl max-mm:text-3xl animation-leftlandingpage">Gadget</h1>
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