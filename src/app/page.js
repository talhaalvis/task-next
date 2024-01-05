import Appheader from "./components/Appheader";
import Image from "next/image";
import * as homePage from "../../public/assets/index";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Appheader />
      <div className="bg-hero">
        <div className="w-10/12 sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto relative h-screen flex flex-col  justify-center">
          <h1 className="max-w-[650px] bg-text-grad bg-clip-text bg-gradd text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-roboto-flex uppercase font-black mt-10">
            Your path to incredible gaming
          </h1>

          <h2 className="max-w-[325px] text-blue text-4xl md:text-3xl lg:text-3xl  xl:text-5xl font-roboto-flex uppercase font-black mt-16">
            Embark on gaming today!
          </h2>

          <button className="uppercase font-roboto-flex text-white border-2 border-[rgba(238, 237, 238, 0.68)] w-fit px-5 lg:px-7 py-2 lg:py-2.5   rounded-lg font-bold mt-12 text-sm  lg:text-base">
            Explore servers
          </button>
        </div>
      </div>
      <div className="bg-black ">
        <div className="w-full  sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto bg-black">
          <div className="flex justify-between pb-9 items-end">
            <div className="max-w-2xl">
              <h2 className="text-6xl text-white leading-[56px] font-semibold tracking-wide bg-linearGrad inline-block bg-gradd">
                No Hesi is more than community.
              </h2>
            </div>
            <div>
              <button className="text-white px-7 py-4 border border-l-neutral-100 rounded-lg">
                Read about us
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 p-6 border border-borderThree rounded-2xl w-[33%] hover:bg-hoverBackground hover:shadow-xl hover:shadow-shadowColor">
              <div>
                <Image src={homePage.green} />
              </div>
              <div>
                <h3 className="text-[#6AFF67] text-4xl font-black uppercase font-roboto-flex">
                  Volutpat scelerisque cursus
                </h3>
              </div>
              <div>
                <p className="text-whiteLightt ">
                  Malesuada sagittis risus ut ut. Lacus non nullam eleifend
                  bibendum ultrices in. Sapien duis pulvinar lectus a ultrices
                  elementum odio scelerisque malesuada.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 p-6 border border-borderThree rounded-2xl w-[33%] hover:bg-hoverBackground hover:shadow-xl hover:shadow-shadowColor">
              <div>
                <Image src={homePage.red} />
              </div>
              <div>
                <h3 className="text-yellow text-4xl font-black uppercase font-roboto-flex">
                  Ac in interdum arcu
                </h3>
              </div>
              <div>
                <p className="text-whiteLightt ">
                  Malesuada sagittis risus ut ut. Lacus non nullam eleifend
                  bibendum ultrices in. Sapien duis pulvinar lectus a ultrices
                  elementum odio scelerisque malesuada.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 p-6 border border-borderThree rounded-2xl w-[33%] hover:bg-hoverBackground hover:shadow-xl hover:shadow-shadowColor">
              <div>
                <Image src={homePage.yellow} />
              </div>
              <div>
                <h3 className="text-red text-4xl font-black uppercase font-roboto-flex">
                  Nec porta diam sit enim. Tincidunt
                </h3>
              </div>
              <div>
                <p className="text-whiteLightt ">
                  Malesuada sagittis risus ut ut. Lacus non nullam eleifend
                  bibendum ultrices in. Sapien duis pulvinar lectus a ultrices
                  elementum odio scelerisque malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className='container mx-auto  '>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

        </div>

      </div>
      </div>
    </>
  );
}
