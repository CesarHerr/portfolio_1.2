import { useTranslation } from "react-i18next";
import images from '../assets/images';
import TicTacToe from './TicTacToe';

function About() {
  const { t } = useTranslation();
  return (
    <section
      className="h-screen relative hidden items-end gap-2 pr-4 md:flex flex-col xl:pr-20
      md:ml-[20rem] xl:ml-[25rem] mb-24 custom-opacity"
      id="about"
    >
      <h3 className="w-10/12 text-left text-3xl lg:text-4xl xl:text-5xl mt-[20%] text-myBlue dark:text-myLightBlue">
        {t('about.developer')}
      </h3>
      <p className="w-10/12 text-left text-xl xl:text-2xl">
        {' '}
        {t('about.me')}
      </p>
      <div className="w-[220px] h-[260px] opacity-80 mt-26 relative lg:top-5 right-10">
        <img
          src={images.post}
          alt="post-it"
          className="w-[220px] h-[220px] rotate-6 -z-10 absolute top-0 right-0"
        />
        <TicTacToe />
      </div>
    </section>
  );
}

export default About;
