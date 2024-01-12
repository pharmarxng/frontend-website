import Tag from './Tag';
import { Fade } from "react-awesome-reveal";
import HeroBg from "../assets/svg/abstract-1.svg"

interface JumbotronProps {
  btn: string;
  title: string;
  subTitle: string;
}

export default function Jumbotron({ btn, title, subTitle }: JumbotronProps) {
  return (
    <main
      className='pt-14 md:pt-20 lg:pt-28 pb-10 md:h-[80%] bg-cover bg-center'
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className='w-11/12 m-auto pt-12 pb-20 lg:pb-28 max-w-7xl'>
        <div className='w-full font-matter flex flex-col justify-center items-center gap-y-2 md:gap-y-4'>
          <Fade direction='bottom-right'>
            <Tag text={btn} />
            <h1 className='text-3xl text-black font-semibold text-center leading-tight md:text-3xl max-w-[670px] xl:max-w-[750px] lg:text-4xl xl:text-5xl xl:leading-tight'>{title}</h1>
            <p className='text-md max-w-[450px] md:text-sm lg:text-base text-gray-800'>{subTitle}</p>
          </Fade>
        </div>
      </div>
    </main>
  );
}