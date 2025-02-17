import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { setOnContact } from '../redux/projectSlice'

function ContactForm() {
  const { ref, inView } = useInView()
  const { ref: refContact, inView: inViewContact } = useInView()
  const { ref: refContactName, inView: inViewContactName } = useInView()
  const { ref: refContactEmail, inView: inViewContactEmail } = useInView()
  const { ref: refContactMessage, inView: inViewContactMessage } = useInView()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setOnContact(inViewContact))
  }, [inViewContact, dispatch])

  return (
    <section
      className='grid overflow-hidden h-screen leftSide md:ml-[20rem] xl:ml-[25rem]'
      id='contactForm'>
      <h2
        ref={ref}
        className={`text-4xl md:text-5xl font-bold mt-14 ${
          inView ? 'titleAnimation' : ''
        }`}>
        {t('contactForm.title')}
      </h2>

      <form
        ref={refContact}
        className='w-10/12 max-w-md mx-auto'
        action='https://formspree.io/f/myyanyge'
        method='POST'
        target='_blank'>
        <div
          className={`relative z-0 w-full mb-10 group ${
            inViewContactName ? 'moveLeft' : ''
          }`}
          ref={refContactName}>
          <input
            type='text'
            name='floating_name'
            id='floating_name'
            className='block py-2.5 px-0 w-full text-lg text-myGray dark:text-white pl-2
            bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-myPurple peer'
            placeholder=' '
            required
          />

          <label
            htmlFor='floating_name'
            className='peer-focus:font-medium absolute text-myGray dark:text-myLightBlue duration-300 
          transform -translate-y-9 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-myBlue dark:peer-focus:text-myLightBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-9'>
            {t('contactForm.name')}{' '}
          </label>
        </div>

        <div
          className={`relative z-0 w-full mb-5 group ${
            inViewContactEmail ? 'moveRight' : ''
          }`}
          ref={refContactEmail}>
          <input
            type='email'
            name='floating_email'
            id='floating_email'
            className='block py-2.5 px-0 w-full text-lg text-myGray dark:text-white pl-2
          bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-myPurple peer'
            placeholder=' '
            required
          />

          <label
            htmlFor='floating_email'
            className='peer-focus:font-medium absolute text-myGray dark:text-myLightBlue duration-300
          transform -translate-y-9 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-myBlue dark:peer-focus:text-myLightBlue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-9'>
            {t('contactForm.email')}
          </label>
        </div>

        <div ref={refContactMessage} className=''>
          <textarea
            rows='4'
            name='textarea'
            className={`block p-2.5 w-full text-lg text-myGray bg-myYellow rounded-lg border
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
            inViewContactMessage ? 'moveBottom' : 'opacity-0'
          }`}
            placeholder={t('contactForm.textAreaPlaceHolder')}
            aria-label='write me'></textarea>

          <button
            className={`bg-myYellow p-2 w-2/4 font-bold active:bg-myGray active:text-white dark:text-myGray dark:active:text-white shadow-myShadow 
          border border-myGray hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all mt-14
          ${inViewContactMessage ? 'moveBottom' : 'opacity-0'}`}>
            {t('contactForm.submit')}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
