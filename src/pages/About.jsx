import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { java, javascript, nodejs, react, mongodb, express, git, github } from '../assets/icons';
import { SiAndroid, SiSpring, SiDocker, SiMysql } from 'react-icons/si';
import { FaCode, FaTools } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const About = () => {
  return (
    <section className='max-container'>
      <div className='flex flex-col gap-8'>
        <div>
          <h1 className='head-text'>
            Hello, I'm <span className='blue-gradient_text font-semibold   drop-shadow'>Vansh Garg</span>
          </h1>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p className='text-lg leading-relaxed text-justify'>
              I'm a Full Stack Developer specializing in the MERN stack and Java development, driven by the excitement of building seamless, scalable web applications. I love turning ideas into interactive digital experiences and believe that the best solutions come from a blend of creativity, clean code, and user-focused design.
            </p>
            <p className='text-lg leading-relaxed text-justify'>
              With extensive experience in Java development and a strong foundation in enterprise applications, I'm currently sharpening my skills with Spring and DevOps while tackling challenging coding problems daily. Proficient in database management using MongoDB and MySQL, I'm always eager to explore new technologies and frameworks that push the boundaries of what I can create.
            </p>
          </div>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Technical Skills</h3>
          <div className='mt-8 flex flex-col gap-6'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-sm font-semibold text-white bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300'>01</span>
                <h4 className='text-xl font-semibold text-slate-800 tracking-tight'>Languages</h4>
              </div>
              <div className='text-slate-600 flex flex-wrap gap-6'>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={0}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={java} alt="Java" className='w-7 h-7' />
                  <span className='font-medium'>Java</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={javascript} alt="JavaScript" className='w-7 h-7' />
                  <span className='font-medium'>JavaScript</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-sm font-semibold text-white bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300'>02</span>
                <h4 className='text-xl font-semibold text-slate-800 tracking-tight'>Development</h4>
              </div>
              <div className='text-slate-600 flex flex-wrap gap-6'>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={0}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={react} alt="MERN" className='w-7 h-7' />
                  <span className='font-medium'>Full Stack Web Development (MERN)</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <SiAndroid className='w-7 h-7 text-[#3DDC84]' />
                  <span className='font-medium'>Android Development (learning)</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <FaCode className='w-7 h-7 text-slate-600' />
                  <span className='font-medium'>Backend Development</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <TbApi className='w-7 h-7 text-slate-600' />
                  <span className='font-medium'>REST APIs</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-sm font-semibold text-white bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300'>03</span>
                <h4 className='text-xl font-semibold text-slate-800 tracking-tight'>Tools/Frameworks</h4>
              </div>
              <div className='text-slate-600 flex flex-wrap gap-6'>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={0}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={nodejs} alt="Node.js" className='w-7 h-7' />
                  <span className='font-medium'>Node.js</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={express} alt="Express.js" className='w-7 h-7' />
                  <span className='font-medium'>Express.js</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={react} alt="React.js" className='w-7 h-7' />
                  <span className='font-medium'>React.js</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={mongodb} alt="MongoDB" className='w-7 h-7' />
                  <span className='font-medium'>MongoDB</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={4}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <SiSpring className='w-7 h-7 text-[#6DB33F]' />
                  <span className='font-medium'>Spring (learning)</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={5}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <SiDocker className='w-7 h-7 text-[#2496ED]' />
                  <span className='font-medium'>Docker (DevOps)</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-sm font-semibold text-white bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300'>04</span>
                <h4 className='text-xl font-semibold text-slate-800 tracking-tight'>General</h4>
              </div>
              <div className='text-slate-600 flex flex-wrap gap-6'>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={0}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <FaCode className='w-7 h-7 text-slate-600' />
                  <span className='font-medium'>Data Structures & Algorithms (DSA)</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <FaCode className='w-7 h-7 text-slate-600' />
                  <span className='font-medium'>Object-Oriented Programming (OOPs)</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group'
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-sm font-semibold text-white bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300'>05</span>
                <h4 className='text-xl font-semibold text-slate-800 tracking-tight'>Others</h4>
              </div>
              <div className='text-slate-600 flex flex-wrap gap-6'>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={0}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={github} alt="GitHub" className='w-7 h-7' />
                  <span className='font-medium'>GitHub</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={git} alt="Git" className='w-7 h-7' />
                  <span className='font-medium'>Git</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <SiMysql className='w-7 h-7 text-[#4479A1]' />
                  <span className='font-medium'>MySQL</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <img src={mongodb} alt="MongoDB" className='w-7 h-7' />
                  <span className='font-medium'>MongoDB</span>
                </motion.div>
                <motion.div 
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={4}
                  className='flex items-center gap-3 bg-slate-50/80 px-4 py-2.5 rounded-2xl hover:bg-slate-100/80 transition-all duration-200 hover:scale-105'
                >
                  <FaTools className='w-7 h-7 text-slate-600' />
                  <span className='font-medium'>CI/CD Pipelines</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Certifications</h3>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <a 
              href="https://coursera.org/share/c41fdb137462cf16ee17656de676f80f" 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 ease-in-out group'
            >
              <h4 className='text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors'>IBM Applied DevOps Engineering</h4>
              <div className='flex flex-col gap-1.5'>
                <p className='text-slate-500'>Issued by: <span className='text-slate-700'>IBM</span></p>
                <p className='text-slate-500'>Completed: <span className='text-slate-700'>2025</span></p>
              </div>
            </a>

            <a 
              href="https://coursera.org/share/7e731538e309ceccd65ef17729c1c5ff" 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 ease-in-out group'
            >
              <h4 className='text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors'>Good With Words : Speaking and Presenting</h4>
              <div className='flex flex-col gap-1.5'>
                <p className='text-slate-500'>Issued by: <span className='text-slate-700'>University of Michigan</span></p>
                <p className='text-slate-500'>Completed: <span className='text-slate-700'>2023</span></p>
              </div>
            </a>

            <a 
              href="https://coursera.org/share/7e94f79a9bbb3b9055966f8551866bce" 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 ease-in-out group'
            >
              <h4 className='text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors'>AI Foundations for Everyone</h4>
              <div className='flex flex-col gap-1.5'>
                <p className='text-slate-500'>Issued by: <span className='text-slate-700'>IBM</span></p>
                <p className='text-slate-500'>Completed: <span className='text-slate-700'>2024</span></p>
              </div>
            </a>

            <a 
              href="https://www.credly.com/badges/e51f0570-5529-4f59-b53b-b09d3debbe2f" 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 ease-in-out group'
            >
              <h4 className='text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors'>Introduction to Cyber Security</h4>
              <div className='flex flex-col gap-1.5'>
                <p className='text-slate-500'>Issued by: <span className='text-slate-700'>Cisco</span></p>
                <p className='text-slate-500'>Completed: <span className='text-slate-700'>2024</span></p>
              </div>
            </a>
          </div>
        </div>

        <div className='py-10'>
          <h3 className='subhead-text'>Future Goals</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p className='text-lg leading-relaxed text-justify'>
              I'm excited about exploring new technologies and expanding my skill set. My future roadmap includes:
            </p>
            <ul className='list-disc ml-5 space-y-2'>
              <li>Diving into AWS for cloud computing solutions</li>
              <li>Exploring Flutter for cross-platform development</li>
              <li>Deep diving into system design and architecture</li>
              <li>Contributing to open-source projects</li>
            </ul>
          </div>
        </div>

        <hr className='border-slate-200' />
        <CTA />
      </div>
    </section>
  )
}

export default About
