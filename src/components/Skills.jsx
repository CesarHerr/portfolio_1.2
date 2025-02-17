import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import Language from './Language';
import Frameworks from './Frameworks';
import { setOnSkills } from '../redux/projectSlice';

function Skills() {
  const dispatch = useDispatch();
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setOnSkills(inView));
  }, [inView, dispatch]);

  return (
    <section
      className="h-screen md:ml-[20rem] xl:ml-[25rem] bg-myYellow dark:bg-transparent md:bg-transparent overflow-hidden"
      id="skills"
    >
      <h2
        ref={ref}
        className={`text-4xl md:text-5xl font-bold pb-28 mt-14 ${
          inView ? 'titleAnimation' : 'opacity-0'
        }`}
      >
        {t('skills.title')}
      </h2>
      <div className="grid place-content-center">
        <div className="grid h-96">
          <Language />
          <Frameworks />
        </div>
      </div>
    </section>
  );
}

export default Skills;
