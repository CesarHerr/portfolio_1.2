import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

function Skills() {
  const { ref: refProjectTitle, inView: inViewProjectTitle } = useInView()
  const { t } = useTranslation()

  return (
    <section className='flex flex-col gap-8 items-center relative pb-28 md:ml-[20rem] xl:ml-[25rem] overflow-hidden'>
      <span ref={refProjectTitle}>
        <h2
          className={`container text-center my-10 md:my-14 text-4xl md:text-5xl font-bold dark:text-myLightBlue ${
            inViewProjectTitle ? 'titleAnimation' : 'hidden'
          }`}>
          {t('experience.title')}
        </h2>
      </span>
      <table border='2' className='border-collapse w-8/12'>
        <tr className='text-myBlue dark:text-myLightBlue'>
          <th className='border-b-2 border-myBlue dark:border-white px-4 py-2 text-right'>
            {t('experience.company')}
          </th>
          <th className='border-b-2 border-myBlue dark:border-white px-4 py-2 text-left'>
            {t('experience.role')}
          </th>
        </tr>
        <tr>
          <td className='border-r-2 border-myBlue dark:border-white px-4 py-2 text-right'>
            <p>{t('experience.job1.company')} </p>
            <p className='text-xs'>{t('experience.job1.date')}</p>
          </td>
          <td className='px-4 py-2 text-left'>
            <p>{t('experience.job1.role')}</p>
            <p className='text-xs'>{t('experience.job1.jobDescription')}</p>
          </td>
        </tr>
        <tr>
          <td className='border-r-2 border-myBlue dark:border-white px-4 py-2 text-right'>
            <p>{t('experience.job2.company')}</p>
            <p className='text-xs'>{t('experience.job2.date')}</p>
          </td>
          <td className='px-4 py-2 text-left'>
            <p>{t('experience.job2.role')}</p>
            <p className='text-xs'>{t('experience.job2.jobDescription')}</p>
          </td>
        </tr>
      </table>
    </section>
  )
}

export default Skills
