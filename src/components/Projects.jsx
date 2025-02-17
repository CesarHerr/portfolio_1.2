import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { setProject } from '../redux/projectSlice'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import images from '../assets/images'
import { setOnProject } from '../redux/projectSlice'

function Projects() {
  const { ref: refA, inView: inViewA } = useInView()
  const { ref: refB, inView: inViewB } = useInView()
  const { ref: refC, inView: inViewC } = useInView()
  const { ref: refD, inView: inViewD } = useInView()
  const { ref: refE, inView: inViewE } = useInView()
  const { ref: refF, inView: inViewF } = useInView()
  const { ref: refProjectTitle, inView: inViewProjectTitle } = useInView()
  const { ref: refProject, inView: inViewProject } = useInView()
  const { ref: refProjectA, inView: inViewProjectA } = useInView()
  const { ref: refProjectB, inView: inViewProjectB } = useInView()
  const { ref: refProjectC, inView: inViewProjectC } = useInView()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const inViews = useMemo(
    () => [inViewProject, inViewProjectA, inViewProjectB, inViewProjectC],
    [inViewProject, inViewProjectA, inViewProjectB, inViewProjectC]
  )

  const handleClick = id => {
    dispatch(setProject(id))
  }

  useEffect(() => {
    const inViewAnyProject = inViews.some(inView => inView)
    dispatch(setOnProject(inViewAnyProject))
  }, [dispatch, inViews])

  return (
    <section
      className='flex flex-col gap-8 items-center relative pb-28 md:ml-[20rem] xl:ml-[25rem] overflow-hidden'
      id='projects'>
      <span ref={refProjectTitle}>
        <h2
          className={`container text-center my-10 md:my-14 text-4xl md:text-5xl font-bold dark:text-myLightBlue ${
            inViewProjectTitle ? 'titleAnimation' : 'hidden'
          }`}>
          {t('projects.title')}
        </h2>
      </span>
      <div className='w-full'>
        <div
          ref={refA}
          className='flex flex-col-reverse lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            ref={refProject}
            className={`${
              inViewA
                ? 'moveLeft w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(0)
            }}>
            <img
              src={images.rfad2}
              alt='rent for a day'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-500'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
          </div>
          <div
            className={`${
              inViewA ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project1.name')}
            </p>
            <p className='md:text-xl text-left'>
              {t('projects.project1.description')}
            </p>
          </div>
        </div>

        <hr className='bg-myBlue border border-myBlue w-2/6 mx-auto md:w-1/12 my-28 dark:border-white' />

        <div
          ref={refB}
          className='flex flex-col lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            className={`${
              inViewB ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project2.name')}
            </p>
            <p className='md:text-xl text-left lg:text-right'>
              {t('projects.project2.description')}
            </p>
          </div>
          <div
            ref={refProjectC}
            className={`${
              inViewB
                ? 'moveRight w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(1)
            }}>
            <img
              src={images.paids}
              alt='paid ups'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300'
            />
          </div>
        </div>

        <hr className='bg-myBlue border border-myBlue w-2/6 mx-auto md:w-1/12 my-28 dark:border-white' />

        <div
          ref={refC}
          className='flex flex-col-reverse lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            className={`${
              inViewC
                ? 'moveLeft  w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(2)
            }}>
            <img
              src={images.recipe}
              alt='recipe app'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300'
            />
          </div>
          <div
            ref={refProjectA}
            className={`${
              inViewC ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project3.name')}
            </p>
            <p className='md:text-xl text-left'>
              {t('projects.project3.description')}
            </p>
          </div>
        </div>

        <hr className='bg-myBlue border border-myBlue w-2/6 mx-auto md:w-1/12 my-28 dark:border-white' />

        <div
          ref={refD}
          className='flex flex-col lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            className={`${
              inViewD ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project4.name')}
            </p>
            <p className='md:text-xl text-left lg:text-right'>
              {t('projects.project4.description')}
            </p>
          </div>
          <div
            className={`${
              inViewD
                ? 'moveRight  w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(3)
            }}>
            <img
              src={images.zelda}
              alt='bow encyclopedia'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300'
            />
          </div>
        </div>

        <hr className='bg-myBlue border border-myBlue w-2/6 mx-auto md:w-1/12 my-28 dark:border-white' />

        <div
          ref={refE}
          className='flex flex-col-reverse lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            ref={refProjectB}
            className={`${
              inViewE
                ? 'moveLeft  w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(4)
            }}>
            <img
              src={images.space}
              alt='space web'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300'
            />
          </div>
          <div
            className={`${
              inViewE ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project5.name')}
            </p>
            <p className='md:text-xl text-left'>
              {t('projects.project5.description')}
            </p>
          </div>
        </div>

        <hr className='border border-myBlue w-2/6 mx-auto md:w-1/12 my-28 dark:border-white' />

        <div
          ref={refF}
          className='flex flex-col lg:flex-row justify-center lg:items-start items-center w-full gap-10 my-12 h-[400px] md:h-[220px]'>
          <div
            className={`${
              inViewF ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}>
            <p className='text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue dark:text-myLightBlue'>
              {t('projects.project6.name')}
            </p>
            <p className='md:text-xl text-left lg:text-right'>
              {t('projects.project6.description')}
            </p>
          </div>
          <div
            className={`${
              inViewF
                ? 'moveRight  w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(5)
            }}>
            <img
              src={images.hiking}
              alt='adventure sports web'
              className='w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow mx-auto'
            />
            <p className='animate-bounce md:animate-none md:group-hover:animate-bounce text-myBlue mt-7 md:mt-14 dark:text-myLightBlue'>
              {t('projects.click')}
            </p>
            <img
              src={images.carpet}
              alt='carpet'
              className='w-full hidden md:block md:absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
