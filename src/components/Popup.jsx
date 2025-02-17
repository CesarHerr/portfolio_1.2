import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import img from '../assets/images';
import { GrDeploy } from 'react-icons/gr';
import { setProject } from '../redux/projectSlice';
import { FiGithub } from 'react-icons/fi';
import images from '../assets/images';

function Popup() {
  const { project } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const allProjects = [
    {
      image: img.rfad2,
      name: t('popup.project1.name'),
      description:
        t('popup.project1.description'),
      description2: t('popup.project1.description2'),
      link: 'https://rent-for-day-9756573c4a9e.herokuapp.com/api-docs',
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'Swagger',
        'postgreSQL',
        'React-redux',
        'JavaScript',
        'Bootstrap',
        'HTML',
      ],
      live: 'https://cesarherr.github.io/rentforaday-front-end/',
      source: 'https://github.com/CesarHerr/rentforaday-front-end',
    },
    {
      image: img.paids,
      name: t('popup.project2.name'),
      description:
        t('popup.project2.description'),
      description2: t('popup.project2.description2'),
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'postgreSQL',
        'Tailwind CSS',
        'HTML',
      ],
      live: 'https://paid-ups-af6ec0783e54.herokuapp.com/',
      source: 'https://github.com/CesarHerr/budget_app',
    },
    {
      image: img.recipe,
      name: t('popup.project3.name'),
      description:
        t('popup.project3.description'),
      description2: t('popup.project3.description2'),
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'postgreSQL',
        'Bootstrap',
        'HTML',
      ],
      live: 'https://the-best-recipe-app-ever-434c46df89ee.herokuapp.com',
      source: 'https://github.com/CesarHerr/Recipe_App',
    },
    {
      image: img.zelda,
      name: t('popup.project4.name'),
      description:
        t('popup.project4.description'),
      description2: t('popup.project4.description2'),
      tech: ['JavaScript', 'React-redux', 'CSS', 'HTML', 'SASS'],
      live: 'https://cesarherr.github.io/metrics_webapp_botw/',
      source: 'https://github.com/CesarHerr/metrics_webapp_botw',
    },
    {
      image: img.space,
      name: t('popup.project5.name'),
      description:
        t('popup.project5.description'),
      description2: t('popup.project5.description2'),
      tech: ['JavaScript', 'React-redux', 'Jest', 'CSS', 'HTML'],
      live: 'https://cesarherr.github.io/Space_Travelers/',
      source: 'https://github.com/CesarHerr/Space_Travelers',
    },
    {
      image: img.hiking,
      name: t('popup.project6.name'),
      description:
        t('popup.project6.description'),
      description2: t('popup.project6.description2'),
      tech: ['JavaScript', 'SASS', 'HTML'],
      live: 'https://cesarherr.github.io/CapstoneModule1',
      source: 'https://github.com/CesarHerr/CapstoneModule1',
    },
  ];

  const handleClick = () => {
    dispatch(setProject(null));
  };

  return (
    <>
      {allProjects[project] && (
        <section className="fixed w-full h-full grid place-items-center bg-myGreen z-50 dark:dark:bg-slate-900">
          <div className="popup w-11/12 sm:w-9/12 bg-myYellow flex flex-col rounded-xl items-center shadow-myShadow dark:bg-slate-950">
            <h2 className="pt-10 lg:pt-10 hidden md:inline xl:py-7 text-3xl xl:text-5xl font-dancing font-bold dark:text-myLightBlue">
              {allProjects[project].name}
            </h2>
            <img
              src={images.pin}
              className="pin absolute dark:hidden w-2/12 -top-7 md:-top-10 md:w-[110px] lg:-top-14 xl:lg:-top-12"
            />
            <img
              src={images.pinNight}
              className="pin absolute hidden dark:inline w-2/12 -top-7 md:-top-10 md:w-[110px] lg:-top-14 xl:lg:-top-9"
            />
            <button
              type="button"
              className="absolute right-2 top-2 xl:right-10 xl:top-6 text-2xl xl:text-5xl  hover:scale-125 transition duration-300"
              onClick={() => {
                handleClick();
              }}
            >
              X
            </button>
            <div className="sm:w-full">
              <h2 className="pt-5 md:py-3 md:hidden  xl:py-7 text-3xl xl:text-5xl font-dancing font-bold">
                {allProjects[project].name}
              </h2>
              <hr className="border-2 border-myGreen my-2 dark:border-slate-900" />
              <ul className="flex flex-wrap gap-1 xl:gap-2 px-5 pb-3 w-full sm:w-11/12 xl:w-10/12 mx-auto">
                {allProjects[project].tech.map((tech, index) => (
                  <li
                    key={index}
                    className={
                      tech
                        ? 'font-extrabold text-white leading-4 sm:leading-4 sm:p-2 border-2 border-myBlue bg-myPurple rounded p-1 text-sm dark:bg-purple-950 dark:border-purple-800'
                        : 'noDisplay'
                    }
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <img
                src={allProjects[project].image}
                alt="algo"
                className="w-10/12 mx-auto md:hidden mb-4 sm:mb-1 md:mt-2 border-2 
              border-myGray rounded shadow-myShadow"
              />
            </div>

            <div className="w-11/12 lg:w-[95%] flex flex-col lg:flex-row justify-around lg:gap-10 items-center lg:items-start mx-auto sm:h-5/6 lg:h-full mt-2">
              <img
                src={allProjects[project].image}
                alt={allProjects[project].name}
                className="w-7/12 hidden md:inline md:max-w-[380px] xl:max-w-[600px] mx-auto
                mb-4 lg:mb-24 border-2 border-myGray rounded shadow-myShadow"
              />
              <div className="sm:mb-auto lg:w-4/12 xl:w-5/12 lg:min-w-[340px]">
                <p className="w-full text-left sm:text-lg">
                  {allProjects[project].description}
                </p>
                <p className="text-left sm:text-lg">
                  {allProjects[project].description2}
                </p>
                {allProjects[project].link ? (
                  <p className="text-left sm:text-lg">
                    {t('popup.apiDoc.documentation')}{' '}
                    <a
                      href={allProjects[project].link}
                      className="font-extrabold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('popup.apiDoc.here')}
                    </a>
                  </p>
                ) : null}
              </div>
              <div
                className="my-5 lg:my-6 lg:absolute lg:bottom-2 flex justify-between xl:justify-end
              w-8/12 xl:w-11/12 mx-auto min-w-[250px] xl:gap-6"
              >
                <a
                  href={allProjects[project].live}
                  target="_blank"
                  className="bg-myYellow p-2 w-3/12 max-w-[200px] font-bold active:bg-myGray
              active:text-white hover:bg-myHoverButton shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2
              hover:text-myBlue flex justify-center items-center group hover:shadow-none transition-all min-w-[120px] xl:w-2/12
              dark:text-myGray dark:active:text-white"
                  rel="noreferrer"
                >
                  See live
                  <GrDeploy className="w-4 inline group-hover:translate-x-2 group-hover:scale-125 translate-x-2 transition-all" />
                </a>

                <a
                  href={allProjects[project].source}
                  target="_blank"
                  className="bg-myYellow p-1 w-4/12 max-w-[200px] font-bold active:bg-myGray
              active:text-white hover:bg-myHoverButton shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2
              hover:text-myBlue flex justify-center items-center group hover:shadow-none transition-all min-w-[120px] xl:w-2/12
              dark:text-myGray dark:active:text-white"
                  rel="noreferrer"
                >
                  See Source
                  <FiGithub className="w-4 inline group-hover:translate-x-2 group-hover:scale-125 translate-x-2 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Popup;
