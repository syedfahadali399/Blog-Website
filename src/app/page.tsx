"use client"
import Link from "next/link";
import { useToast } from "@/hooks/use-toast"
import "./animation.css"

// For Landing Page 1
const landingPageobject_1 = [
  {
    names: "A p p s",
    paragraph: "Broke a Glass? Someday You Might 3-D-Print a New One",
    url: "/appSection"
  },
  {
    names: "G a m e s",
    paragraph: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.",
    url: "/gameSection"
  },
  {
    names: "E d i t o r s   P i c k",
    paragraph: "For Families of Teens at Microsoft Surface",
    url: "/gadgetSection"
  },
  {
    names: "E d i t o r s   P i c k",
    paragraph: "Why Netflix shares are down 10%",
    url: "/tecnologySection"
  },
]

const icons = [
  {
    icon: "/icon/instagram.png",
    socialMediaName: "TechWire News",
    smparagraph: "2M+ Followers"
  },
  {
    icon: "/icon/twitter.png",
    socialMediaName: "@techwirenews",
    smparagraph: "1.4M+ Followers"
  },
  {
    icon: "/icon/youtube.png",
    socialMediaName: "TechWire",
    smparagraph: "4M+ Subscribers"
  },
]

// For Landing Page 3
const landingPageobject_3 = [
  {
    image: "/img/tecnology-img-five.jpg",
    heading: "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/tecnology-img-six.jpg",
    heading: "What Moves Gravel-Size Gypsum Crystals Around the Desert ?",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/tecnology-img-seven.jpg",
    heading: "Scientists Has Feeling Under Siege, March Against Trump Policies",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
]

// For Landing Page 4
const landingPageobject_4 = [
  {
    image: "/img/gadget-img-one.jpg",
    heading: "How a Gadget Drives Human Creativity",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/gadget-img-two.jpg",
    heading: "An IoT Failure Worst Nightmare",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/gadget-img-three.jpg",
    heading: "Dogs Do Their Duty for Science",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/gadget-img-four.jpg",
    heading: "Spend a Dollar on Upcoming iPhone 13",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
]

// For Landing Page 5
const landingPageobject_5 = [
  {
    image: "/img/game-img-one.jpg",
    heading: "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/game-img-two.jpg",
    heading: "A Genetic Oddity May Give Octopuses and Squids Their Smarts",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
]

// For Landing Page 6
const landingPageobject_6 = [
  {
    image: "/img/app-img-one.jpg",
    heading: "Antarctic Ice Reveals Earth’s Has Been Accelerating Plant Growth",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/app-img-two.jpg",
    heading: "Photos of Planet Jupiter From NASA Spacecraft, Both Near, Far",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
  {
    image: "/img/app-img-three.jpg",
    heading: "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94",
    paragraph: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ..."
  },
]

export default function Home() {
  const { toast } = useToast()
  return (
    <section>
      <div className="mb-24 mt-20 max-lm:mb-16">
        <div className="flex flex-row justify-center gap-8 max-lt:flex-col max-lt:gap-14 max-lt:items-center">
          <Link href={`tecnologySection`} className="flex flex-row w-[900px] h-[600px] bg-[url('/img/tecnology-img-four.jpg')] max-xl:w-[600px] max-xl:h-[550px] max-lg:w-[550px] max-lg:h-[500px] max-lt:w-[600px] max-lt:h-[450px] max-mt:w-[550px] max-mt:h-[425px] max-sm:w-[450px] max-sm:h-[375px] max-lm:w-[360px] max-mm:w-[340px] max-mm:h-[340px] max-st:w-[300px] max-st:h-[320px] bg-center backdrop-brightness-50">
            <div className="flex flex-col gap-4 justify-end pb-6 pl-4">
              <p className="hover:text-purple-700 text-[#e2e8f0] text-lg font-medium cursor-pointer max-mt:text-base max-mm:text-sm">Tecnology</p>
              <Link href={`tecnologySection`} className="hover:text-purple-700 text-[#e2e8f0] font-bold text-3xl max-xl:text-2xl max-lt:text-xl max-sm:text-lg max-mm:text-base" target="_self">No Longer a Dream: Silicon Valley Takes On the Flying Car</Link>
              <div className="h-[24px] flex flex-row gap-[16px]">
                <div className="flex flex-row gap-[8px] items-center">
                  <img className="w-[20px] h-[20px] max-xl:w-[16px] max-xl:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                  <p className="w-[53px] h-[24px] font-normal text-[16px] text-[#e2e8f0] max-lt:text-[14px] max-mm:text-[12px] max-lt:w-[50px] max-lt:h-[20px] hover:text-purple-700 cursor-pointer">Admin</p>  
                </div>
                <div className="flex flex-row gap-[8px] items-center">
                  <img className="w-[20px] h-[20px] max-xl:w-[16px] max-xl:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                  <p className="w-[96px] h-[24px] font-normal text-[16px] text-[#e2e8f0] max-lt:text-[14px] max-mm:text-[12px] max-lt:w-[80px] max-lt:h-[20px] hover:text-purple-700 cursor-pointer">14 Oct 2022</p>  
                </div>
              </div>
              <p className="hover:text-purple-700 text-[#e2e8f0] font-bold cursor-pointer max-xl:text-base max-mt:text-sm max-xl:font-medium max-sm:text-xs">Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...		</p>
            </div>
          </Link>
          <div>
            <div className="flex flex-col gap-3 max-lt:flex-row max-lt:w-[600px] max-mt:w-[550px] max-sm:flex-col max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
              <img className="w-[350px] h-[250px] max-xl:w-[300px] max-xl:h-[200px] max-lg:w-[250px] max-lg:h-[175px] max-lt:w-[230px] max-mt:w-[210px] max-sm:w-[420px] max-sm:h-[260px] max-lm:w-[360px] max-lm:h-[240px] max-mm:w-[340px] max-mm:h-[220px] max-st:w-[300px] max-st:h-[200px]" src="/img/gadget-img-five.jpg" alt="image" />
              <div className="flex flex-col gap-2 max-lt:grid max-lt:grid-cols-2 max-sm:w-[420px] max-lm:w-[360px] max-sm:justify-items-center max-mm:flex max-mm:flex-col max-mm:items-center max-mm:w-[340px] max-st:w-[300px]">
                {landingPageobject_1.map((e) => {
                  for(let i = 0; i <= 2; i++){ 
                    return(
                      <Link href={`${e.url}`} className=" flex flex-col gap-2 w-[300px] max-lg:w-[250px] max-lt:w-[175px] max-mt:w-[170px] max-mm:w-[340px] max-st:w-[300px]">
                        <h1 className="font-semibold text-purple-700">{e.names}</h1>
                         <p className="font-bold text-black cursor-pointer max-lg:text-sm">{e.paragraph}</p>
                      </Link>
                    )
                  }
                  // return(
                  //   <Link href={`/appSection`} className="flex flex-col gap-2 w-[300px] max-lg:w-[250px] max-lt:w-[175px] max-mt:w-[170px] max-mm:w-[340px] max-st:w-[300px]">
                  //     <h1 className="font-semibold text-purple-700">{e.names}</h1>
                  //     <p className="font-bold text-black cursor-pointer max-lg:text-sm">{e.paragraph}</p>
                  //   </Link>
                  // )
                })}
              </div>  
            </div>
          </div>
        </div>
      </div>

      {/* Landing Page 2 */}
      <div className="mb-24 max-lm:mb-16">
        <div className="flex flex-row gap-6 max-lt:flex-col max-lt:gap-12 justify-center items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-baseline animation-up">
              <h1 className="text-black text-3xl font-bold max-lg:tetx-2xl max-mt:text-xl">Tech Reviews</h1>
              <Link href={`tecnologySection`} className="flex flex-row gap-1 w-32 cursor-pointer">
                <p className="text-purple-700 text-base font-semibold">More In Tech</p>
                <img src="/icon/right-arrow.svg" alt="left-arrow" />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
             <Link href={`/gadgetSection`} className="animation-down flex flex-row w-[900px] max-xl:w-[728px] max-lg:w-[622px] max-mt:w-[550px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-sm:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
                <img className="object-cover w-[400px] h-[282px] max-xl:w-[320px] max-xl:h-[260px] rounded-t-lg max-lg:w-[260px] max-mt:w-[220px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] md:rounded-none md:rounded-s-lg" src="/img/tech-img-three.jpg" alt="images"/>
                <div className="flex flex-col justify-between p-4 leading-normal gap-3 max-xl:gap-2">
                  <p className="text-purple-700 font-medium text-sm uppercase">G a d g e t</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black max-lg:text-xl max-mm:text-lg">iPad Pro M1 Chip: Bringing The MacBook Pro Power</h5>
                  <p className="mb-3 font-normal text-gray-700 max-mt:text-sm max-mm:text-xs">Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..</p>
                  <div className="h-[24px] flex flex-row gap-[16px] items-center">
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                      <p className="w-[53px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                      <p className="w-[96px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={`/gadgetSection`} className="animation-down flex flex-row w-[900px] max-xl:w-[728px] max-lg:w-[622px] max-mt:w-[550px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-sm:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
                <img className="object-cover w-[400px] h-[282px] max-xl:w-[320px] max-lg:h-[260px] rounded-t-lg max-lg:w-[260px] max-mt:w-[220px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] md:rounded-none md:rounded-s-lg" src="/img/tech-img-four.jpg" alt="images"/>
                <div className="flex flex-col justify-between p-4 leading-normal gap-3 max-lg:gap-2">
                  <p className="text-purple-700 font-medium text-sm uppercase">G a d g e t</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black max-lg:text-xl max-mm:text-lg">Dell XPS 13 2021: The best Windows laptop now with OLED</h5>
                  <p className="mb-3 font-normal text-gray-700 text-sm max-mm:text-xs">Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..</p>
                  <div className="h-[24px] flex flex-row gap-[16px] items-center">
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                      <p className="w-[53px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                      <p className="w-[96px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={`/tecnologySection`} className="animation-down flex flex-row w-[900px] max-xl:w-[728px] max-lg:w-[622px] max-mt:w-[550px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-sm:flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
                <img className="object-cover w-[400px] h-[282px] max-xl:w-[320px] max-xl:h-[260px] rounded-t-lg max-lg:w-[260px] max-mt:w-[220px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] md:rounded-none md:rounded-s-lg" src="/img/tecnology-img-three.jpg" alt="images"/>
                <div className="flex flex-col justify-between p-4 leading-normal gap-3 max-xl:gap-2">
                  <p className="text-purple-700 font-medium text-sm uppercase">T e c h n o l o g y</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black max-lg:text-xl max-mm:text-lg">Watching Dust: Photographing Players in Pollination</h5>
                  <p className="mb-3 font-normal text-gray-700 text-sm max-mm:text-xs">Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..</p>
                  <div className="h-[24px] flex flex-row gap-[16px] items-center">
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                      <p className="w-[53px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lm:text-[12px] max-lt:w-[50px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                    </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img className="w-[14px] h-[14px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                      <p className="w-[96px] h-[18px] font-normal text-xs text-black max-lt:text-[14px] max-lm:text-[12px] max-lt:w-[80px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-lt:flex-row max-lt:items-center max-lt:gap-12 max-sm:gap-4 max-lm:flex-col">
            <img className="animation-right mb-5 max-xl:w-[260px] max-lg:w-[240px]" src="/img/tech-img-six.jpg" alt="img" />
            <div className="flex flex-col gap-3 mb-2">
              <h1 className="text-2xl font-bold text-black">Stay Connected</h1>
              <div className="flex flex-col gap-2">
                {icons.map((e) => {
                  return(
                    <div className="flex flex-row gap-3 items-center animation-right">
                      <img className="w-10 h-10" src={e.icon} alt="icons" />
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base text-purple-700 cursor-pointer font-bold">{e.socialMediaName}</h3>
                        <p className="font-medium">{e.smparagraph}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Landing Page 3 */}
      <div className="mb-24 max-lm:mb-16">
       <div className="flex flex-col gap-8 justify-center items-center">
         <div className="w-[1400px] max-2xl:w-[1240px] max-xl:w-[1000px] max-lg:w-[866px] max-lt:w-[738px] max-mt:w-[500px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
           <div className="flex flex-row justify-between items-baseline mb-8 animation-up">
              <h1 className="text-black text-3xl font-bold max-sm:text-2xl">Tecnology</h1>
              <Link href={`tecnologySection`} className="flex flex-row gap-1 w-44 max-lm:w-[164px] cursor-pointer">
                <p className="text-purple-700 text-base font-semibold">More in Tecnology</p>
                <img src="/icon/right-arrow.svg" alt="left-arrow" />
              </Link>
            </div>
            <Link href={`tecnologySection`} className="flex flex-row justify-center gap-6 cursor-pointer max-mt:flex-col max-mt:items-center">
              {landingPageobject_3.map((e) => {
                return(
                  <div className="animation-popup flex flex-col gap-3 max-mt:w-[400px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-lm:mb-4">
                    <img className="w-[500px] h-[300px] max-2xl:w-[420px] max-2xl:h-[275px] max-xl:w-[320px] max-xl:h-[220px] max-lg:w-[296px] max-lg:h-[200px] max-lt:w-[260px] max-lt:h-[180px] max-mt:w-[400px] max-mt:h-[240px] max-lm:w-[360px] max-mm:w-[340px] max-mm:h-[220px] max-st:w-[300px] max-st:h-[200px]" src={e.image} alt="tech-image" />
                    <h1 className="text-black text-2xl font-bold cursor-pointer max-xl:text-xl max-lg:text-lg max-lt:text-base">{e.heading}</h1>
                    <div className="h-[24px] flex flex-row gap-[16px] items-center">
                    <div className="flex flex-row gap-1 justify-center items-center">
                      <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                      <p className="w-[53px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                     </div>
                    <div className="flex flex-row gap-[8px] items-center">
                      <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                      <p className="w-[96px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                     </div>
                   </div>
                   <p className="text-base font-medium max-lg:text-sm max-lt:text-xs">{e.paragraph}</p>
                  </div>
                )
              })}
           </Link>
          </div> 
        </div>
      </div>  

      {/* Ad-Section-1 */}
      <div className="w-full flex justify-center mb-16">
        <div className="w-[1400px] max-2xl:w-[1240px] max-xl:w-[900px] max-lg:w-[800px] max-lt:w-[650px] max-mt:w-[550px] max-sm:w-[450px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] flex flex-row justify-between border-2 border-white rounded-2xl items-center pr-7 max-lt:pr-3 bg-[#2563eb]">
          <img className="w-[350px] h-[200px] max-xl:w-[300px] max-lg:w-[260px] max-lt:w-[220px] max-mt:w-[160px] max-mt:h-[140px] max-sm:w-[140px] max-sm:h-[120px] max-mm:w-[130px]" src="/img/ad-img-two.png" alt="ad-image-two" />
          <div className="flex flex-col gap-4 justify-center max-mt:gap-2">
            <h5 className="text-white font-semibold text-xl max-lg:text-base max-mt:text-xs">TechWire Podcast</h5>
            <h1 className="text-white font-bold text-3xl max-xl:text-2xl max-lt:text-xl max-mt:text-lg max-sm:text-base">Listen daily tech news podcast</h1>
          </div>
          <button onClick={() => {
            toast({
              title: "Check Your Email",
              description: "Successfully Register For Podcast",
            })
            }} type="button" className="text-white max-mt:w-[100px] max-lm:hidden max-mt:text-xs bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Listen Now
          </button>
        </div>
      </div>

      {/* Landing Page 4 */}
      <div className="mb-24 max-lm:mb-16">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="w-[1400px] max-2xl:w-[1240px] max-xl:w-[1000px] max-lg:w-[866px] max-lt:w-[738px] max-mt:w-[600px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
            <div className="flex flex-row justify-between items-center mb-6 animation-up">
              <h1 className="text-black text-3xl font-bold max-sm:text-2xl">Gadgets</h1>
              <Link href={`gadgetSection`} className="flex flex-row gap-1 w-40 max-lt:w-40 max-lm:w-[148px] cursor-pointer">
                <p className="text-purple-700 text-base font-semibold">More In Gadgets</p>
                <img src="/icon/right-arrow.svg" alt="left-arrow" />
              </Link>
           </div>
           <Link href={`gadgetSection`} className="grid grid-cols-2 gap-16 max-sm:gap-12 max-sm:flex max-sm:flex-col max-sm:items-center">
              {landingPageobject_4.map((e) => {
                return(
                  <div className="flex flex-col gap-4 animation-popup">
                    <img className="max-2xl:w-[420px] max-2xl:h-[275px] max-xl:w-[400px] max-xl:h-[260px] max-lg:w-[360px] max-lg:h-[230px] max-lt:w-[320px] max-lt:h-[220px] max-mt:w-[300px] max-mt:h-[180px] max-sm:w-[420px] max-sm:h-[250px] max-lm:w-[360px] max-mm:h-[230px] max-mm:w-[340px] max-st:w-[300px] max-st:h-[210px]" src={e.image} alt="gadget-image" />
                    <h1 className="text-black text-2xl font-bold cursor-pointer max-xl:text-xl max-lt:text-base max-mt:text-sm max-sm:text-xl">{e.heading}</h1>
                    <div className="h-[24px] flex flex-row gap-[12px] items-center">
                      <div className="flex flex-row gap-1 justify-center items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                        <p className="w-[53px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                      </div>
                      <div className="flex flex-row gap-[8px] items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                        <p className="w-[96px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                      </div>
                    </div>
                    <p className="text-base font-medium max-2xl:w-[420px] max-xl:w-[400px] max-lg:w-[360px] max-lt:w-[320px] max-mt:w-[270px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-lg:text-sm max-mt:text-xs max-sm:text-base max-lm:text-sm">{e.paragraph}</p>
                 </div>
                )
              })}
           </Link>
          </div> 
        </div> 
      </div>

      {/* Ad-Section-2 */}
      <div className="w-full flex justify-center mb-16">
       <img className="w-[1200px] max-2xl:w-[1050px] max-xl:w-[950px] max-lg:w-[800px] max-lt:w-[700px] max-mt:w-[550px] max-mt:h-[100px] max-sm:w-[420px] max-sm:h-[80px] max-lm:w-[360px] max-lm:h-[100px] max-mm:w-[340px] max-st:w-[300px] cursor-pointer" src="/img/ad-img.jpg" alt="ad-image" />
      </div>

      {/* Landing Page 5 */}
      <div className="mb-24 max-lm:mb-16">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="w-[1400px] max-2xl:w-[1240px] max-xl:w-[1000px] max-lg:w-[866px] max-lt:w-[738px] max-mt:w-[500px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
            <div className="flex flex-row justify-between items-center mb-6">
              <h1 className="text-black text-3xl font-bold max-lt:text-2xl animation-up">Games</h1>
              <Link href={`gameSection`} className="flex flex-row gap-1 w-36 cursor-pointer animation-up">
                <p className="text-purple-700 text-base font-semibold w-44 max-lt:w-40">More In Games</p>
                <img src="/icon/right-arrow.svg" alt="left-arrow" />
              </Link>
           </div>
           <Link href={`gameSection`} className="flex flex-row gap-5 cursor-pointer max-mt:flex-col max-mt:items-center">
              {landingPageobject_5.map((e) => {
                return(
                  <div className="animation-popup flex flex-col gap-5 max-lt:gap-4 max-mt:w-[450px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px] max-lm:mb-4">
                    <img className="w-[700px] h-[400px] max-2xl:w-[640px] max-xl:w-[500px] max-xl:h-[330px] max-lg:w-[440px] max-lg:h-[300px] max-lt:w-[360px] max-lt:h-[265px] max-mt:w-[450px] max-mt:h-[300px] max-sm:w-[420px] max-sm:h-[260px] max-lm:w-[360px] max-lm:h-[240px] max-mm:w-[340px] max-mm:h-[220px] max-st:w-[300px] max-st:h-[200px]" src={e.image} alt="" />
                    <h1 className="text-black text-2xl font-bold cursor-pointer max-xl:text-xl max-lg:text-lg">{e.heading}</h1>  
                    <div className="h-[24px] flex flex-row gap-[16px] items-center">
                      <div className="flex flex-row gap-1 justify-center items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                        <p className="w-[53px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                      </div>
                      <div className="flex flex-row gap-[8px] items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                        <p className="w-[96px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                      </div>
                   </div>
                    <p className="text-base font-medium max-lg:text-sm">{e.paragraph}</p>
                  </div>
                )
              })}
            </Link>
         </div>
        </div>
      </div>

      {/* Landing Page 6 */}
      <div className="mb-24 max-lm:mb-16">
       <div className="w-full flex flex-col gap-6 justify-center items-center">
         <div className="w-[1400px] max-2xl:w-[1240px] max-xl:w-[1000px] max-lg:w-[866px] max-lt:w-[738px] max-mt:w-[500px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
           <div className="flex flex-row justify-between items-center mb-8">
              <h1 className="text-black text-3xl font-bold max-lg:text-2xl animation-up">Apps</h1>
              <Link href={`appSection`} className="flex flex-row gap-1 w-44 max-lt:w-40 max-lm:w-[144px] cursor-pointer">
                <p className="text-purple-700 text-base font-semibold max-lt:text-sm animation-up">More News In App</p>
                <img className="animation-up" src="/icon/right-arrow.svg" alt="left-arrow" />
              </Link>
            </div>
            <Link href={`appSection`} className="flex flex-row justify-center gap-6 cursor-pointer max-mt:flex-col max-mt:items-center">
              {landingPageobject_6.map((e) => {
                return(
                  <div className="animation-popup flex flex-col gap-3 max-mt:w-[500px] max-sm:w-[420px] max-lm:w-[360px] max-mm:w-[340px] max-st:w-[300px]">
                    <img className="w-[500px] h-[300px] max-2xl:w-[420px] max-2xl:h-[275px] max-xl:w-[340px] max-xl:h-[220px] max-lg:w-[290px] max-lg:h-[200px] max-lt:w-[230px] max-lt:h-[175px] max-mt:w-[500px] max-mt:h-[300px] max-sm:w-[420px] max-sm:h-[260px] max-lm:w-[360px] max-lm:h-[240px] max-mm:w-[340px] max-mm:h-[220px] max-st:w-[300px] max-st:h-[200px]" src={e.image} alt="tech-image" />
                    <h1 className="text-black text-2xl font-bold cursor-pointer max-xl:text-xl max-lg:text-lg max-lt:text-base max-sm:text-lg">{e.heading}</h1>
                    <div className="h-[24px] flex flex-row gap-[16px] items-center">
                      <div className="flex flex-row gap-1 justify-center items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/iconone.png" alt="iconone" />  
                        <p className="w-[53px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[50px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">Admin</p>  
                      </div>
                      <div className="flex flex-row gap-[8px] items-center">
                        <img className="w-[16px] h-[16px] max-lt:w-[16px] max-lt:h-[16px]" src="/blogimg/icontwo.png" alt="icontwo" />  
                        <p className="w-[96px] h-[18px] font-normal text-sm text-black max-lt:text-[14px] max-lt:w-[80px] max-lt:h-[20px] max-sm:text-[12px] hover:text-[#3F83F8] cursor-pointer">14 Oct 2022</p>  
                      </div>
                   </div>
                   <p className="text-base font-medium max-lg:text-sm">{e.paragraph}</p>
                  </div>
                )
              })}
           </Link>
          </div> 
        </div>
      </div>
    </section>
  );
}
