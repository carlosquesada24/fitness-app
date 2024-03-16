import React, { useState } from 'react'
import { BUTTON_STYLES, INPUT_STYLES } from '@/app/(styles)';
import { DEFAULT_LANDING_SECTION_TITLE, HEADINGS } from '@/app/(styles)/variables'
import { supabase } from '@/app/(config)/supabase';

const formStyles = `
  lg:w-[80%]
  w-[100%]
  mb-4
  py-4
  px-4 
  mr-auto 
  bg-[#444444] 
  border 
  border-solid 
  border-[#5b5b5b] 
  rounded-[6px]
  flex 
  flex-col
  sm:flex-row
  justify-between
`

const Contact = () => {
  const [email, setEmail] = useState('');
  const cleanEmailInput = () => setEmail('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { error } = 
      await supabase
        .from('Emails')
        .insert(
          { email }
        );

    error === null
      ? alert('Thank you for subscribing to our newsletter!')
      : alert('An error occurred. Please try again.')

    cleanEmailInput();
  };

  return (
    <section
      className="h-auto mb-20"
    >
      <h1 className={`${DEFAULT_LANDING_SECTION_TITLE}`}>Contact</h1>

      <h2 className={`${HEADINGS.H2} font-bold`}>Stay in the Loop!</h2>
      <br />

      <h3 className={`${HEADINGS.H3} font-bold`}>🌟 Join Our Fitness Community! 🌟</h3>
      <br />

      <p>Be the first to know about the latest workouts, feature updates, and exclusive wellness tips straight to your inbox. Whether you're looking to enhance your fitness journey or seeking new challenges, our newsletter has it all.</p>
      <br />

      <p>Simply enter your email below to subscribe to our newsletter and never miss a beat on new releases and insider fitness insights.</p>
      <br />
      <form
        className={`${formStyles}`}
        onSubmit={handleSubmit}>
        <input
          className={`${INPUT_STYLES} inline rounded-[6px]`}
          type="email"
          value={email}
          placeholder='admin@example.com'
          onChange={e => setEmail(e.target.value)}
          required />
        <button
          className={`${BUTTON_STYLES} mt-6 sm:mt-0 sm:ml-6 rounded-[6px] font-bold`}
          type="submit"
        >Subscribe</button>
      </form>

      <br />
      <p>We promise to keep your inbox lean and meaningful - just like our workouts!</p>
    </section>
  )
}

export default Contact