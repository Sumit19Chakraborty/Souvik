'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-betweenlg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              What you will learn ?
            </h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'> Ongoing Enrollment</p>
                <p className='text-[36px] font-bold text-blue'>
                  {' '}
                  + <AnimatedCounter from={0} to={45} />k
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  {' '}
                  Already Enrolled Students
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  +<AnimatedCounter from={0} to={25} />k
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Basic to Intermediate Stock Trading
                </h2>
                <p>
                I am a dedicated stock trader specializing in basic to intermediate trading strategies. With a passion for the stock market, I help individuals and investors build their knowledge of the markets and make sound investment decisions. My approach focuses on simple, proven methods that balance risk and reward, perfect for those looking to enhance their trading skills.
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                Intermediate to Advanced Stock Trading
                </h2>
                <p>
                As a skilled stock trader with expertise in intermediate to advanced trading strategies, I am passionate about navigating the complexities of the stock market to achieve strong returns. My focus is on employing sophisticated techniques, from technical analysis to advanced trading systems, to capitalize on market movements and maximize profitability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
