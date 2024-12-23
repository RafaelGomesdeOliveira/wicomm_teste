
/*COMPONENT's*/
import Button from "./Components/Button";
import Header from "./Components/Header";
import ButtonIMG from './Components/ButtonIMG';

import Footer from './Components/Footer';
import Form from './Components/Form';
import InfoGat from './Components/InfoGat';
import Category from './Components/Category';
import AllBenefit from './Components/AllBenefit';
import Carousel from './Components/Carousel';
import Colletion from "./Components/Collection";

/*IMG's*/
import gatoConforto from './imgs/gatoConforto.png'

export default function App() {

  return (
    <>

      <main className='relative flex w-full  flex-col justify-center'>

        <section className='relative flex justify-center border border-t-[10px] border-[#EFEFEF] '>
          <Header />
          <Carousel></Carousel>
        </section>

        <AllBenefit />

        <Colletion/>

        <Category />

        <section className={`w-[1280px] h-[660px] relative`}>
          <img className='w-full object-cover' src={gatoConforto} alt="Gatos brincando em uma casinha" />
          <aside className='bg-white border pl-[32px] pr-[19px] border-black w-[282px] h-[322px] absolute top-[20px] right-[20px] z-10 '>
            <div className='w-full h-full flex flex-col justify-center items-start gap-[22px]'>
              <h2 className='text-[30px] font-bold text-start leading-[38px]'>Lorem Ipsum
                Dolor Sit
              </h2>
              <div className="text-[14px] font-light flex flex-col leading-[18px] space-y-[19px]">
                <p className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className=''>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
              <Button
                text='ver seleção'
                width='182px'
                height='45px'
                fontSize='17px'
                transition={true}
              />
            </div>
          </aside>
          <ButtonIMG
            text='1'
            position='bottom-[45.9%] left-[21.3%]'
          />
          <ButtonIMG
            text='2'
            position='bottom-[41.8%] left-[34.5%]'
          />
          <ButtonIMG
            text='3'
            position='top-[12%] left-[42.3%]'
          />
          <ButtonIMG
            text='4'
            position='top-[23.3%] right-[36%]'
          />
          <ButtonIMG
            text='5'
            position='bottom-[46%] right-[29.5%]'
          />

        </section>

        <InfoGat/>

        <section className="flex flex-col items-center pb-[20px] justify-between">
          <Form />

          <Footer />
        </section>

      </main>
    </>
  )
}


