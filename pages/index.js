import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import tobs from "../public/me.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Martins Eweniyi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Martins Eweniyi<br></br>
            <p className="text-sm text-gray-400"><a href="mailto:oloruntobaeweniyi@gmail.com">oloruntobaeweniyi@gmail.com</a></p>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/Eweniyi_Oloruntoba_Martins_CV.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Martins Eweniyi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a Fullstack Software Developer with over 5+ years of demonstrated experience in delivering successful 
              technology solutions across multiple industries. I possess a solid track record in developing contemporary 
              web applications and effectively leveraging API integrations. Furthermore, I am a dedicated leader and team collaborator, 
              consistently ensuring the prompt and accurate completion of projects.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://x.com/eweniyitoba" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/martins-eweniyi-919168156/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Toba99" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Career highlight</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            -	Led and managed a team of six (6) in the setup and development of critical internal tools and solutions, resulting in increased efficiency, productivity, and cost savings for BesaCare.<br></br> 
            -	Collaborated with a team of seven (7) at PETRA Trust Company Limited in the design, development, and deployment of frontend and backend services (APIs) to redesign the main ERP system with Ruby on Rails, REST API, GraphQL, and PostgreSQL, generating $22.3 million per year from 223K+ customers.<br></br> 
            -	Domain Knowledge: E-Commerce, Health, Media and Publishing, Telecommunication, E-Learning. 
            </p>
          </div>

          <div>
              <h3 class="text-3xl py-1 dark:text-white">Programming Languages & Tools Used</h3>
              <div class="flex flex-wrap gap-4">
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">JavaScript (React js Express, Node js, Vue)</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Typescript</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Ruby (Ruby on rails)</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">MongoDB</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Appollo Client</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">GraphQL</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">GIT</div>
              </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image src="https://www.liverpool.ac.uk/logo-size-test/full-colour.svg" width={100} height={100} />
                <h3 className="text-lg font-medium pt-2 pb-2">UNIVERSITY OF LIVERPOOL</h3>
                <h4 className="py-2 text-teal-600">Digital Coach</h4>
                <p className="text-gray-800 py-1">Optimized digital systems through comprehensive assessments, improving efficiency and functionality.</p>
                <p className="text-gray-800 py-1">Led workshops and training sessions to enhance staff and student proficiency in digital tools and systems.</p>
                <p className="text-gray-800 py-1">Fostered collaboration across departments, leveraging feedback to drive continuous improvement initiatives and achieve cost-effective solutions.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image src="https://www.besacare.com/assets/besaCareLogo-32691436.png" width={100} height={100} />
                <h3 className="text-lg font-medium pt-2 pb-2">BESACARE</h3>
                <h4 className="py-2 text-teal-600">Software Engineer</h4>
                <p className="text-gray-800 py-1">BesaCare App: Designed and developed a highly responsive marketing website for besaCare app, a healthcare application that enables individuals to schedule in-person medical appointments using React, CSS, and Bootstrap.</p>
                <p className="text-gray-800 py-1">Successfully led and managed a team of six (6) in the setup and development of critical internal tools and solutions utilizing React, Typescript, React Context, GraphQL, and Apollo client technologies.</p>
                <p className="text-gray-800 py-1">Offered high-level technical support to customers in collaboration with engineers to enable seamless navigation and use of the application by diagnosing and resolving complex issues faced by customers.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg" width={100} height={100} />
                <h3 className="text-lg font-medium pt-2 pb-2">PIGGYVEST</h3>
                <h4 className="py-2 text-teal-600">Software Engineer</h4>
                <p className="text-gray-800 py-1">Engineered and deployed sophisticated email services within the event data system, ensuring seamless integration and functionality by meticulously addressing all project requirements and feedback.</p>
                <p className="text-gray-800 py-1">Developed and maintained front-end functionalities of the company's website, specializing in UI/UX design and web development with a focus on HTML, CSS, and JavaScript to enhance user experience and interface efficiency.</p>
                <p className="text-gray-800 py-1">Created prototypes for applications and websites, ensuring efficient and effective design implementations that meet both user needs and technical specifications.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <div className="bg-[#1d3865] p-1 inline-block">
                <Image src="https://petraonline.com/wp-content/uploads/2020/09/petra_logo.png" width={100} height={100} />
            </div>
                <h3 className="text-lg font-medium pt-2 pb-2">PETRA Trust Company Limited</h3>
                <h4 className="py-2 text-teal-600">Software Engineer</h4>
                <p className="text-gray-800 py-1">Collaborated with a team of 7 in the design, development, and deployment of frontend and backend services (APIs) to redesign the main ERP system with Ruby on Rails, REST API, GraphQL, and PostgreSQL, generating $22.3 million per year from 223K+ customers.</p>
                <p className="text-gray-800 py-1">Developed live reporting and visibility on GraphQL schema in PDF and CSV formats for C-level executives using Microsoft Graph API and OAuth authentication to restrict access privileges.</p>
                <p className="text-gray-800 py-1">Carried out and translated business requirements into Web and Mobile applications.</p>
            </div>
          </div>

        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Education</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            •	University of Liverpool (United Kingdom), MSc Computer Science (Sept 2023 – Sept 2024) – In view<br></br> 
            •	Kwame Nkrumah University of Science and Technology, BSc Information Technology (Network Systems) (Sept 2019 – Dec 2022)
            </p>
          </div>

          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Certifications</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            •	Agile Scrum for Beginners + Scrum Master Certification Prep – In view<br></br> 
            •	Service Now IT Leadership Professional Certificate – In view
            </p>
          </div>

          <div>
              <h3 class="text-3xl py-1 dark:text-white">Skills</h3>
              <div class="flex flex-wrap gap-4">
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">UI/UX Design</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Database Management</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Prototype Development</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Cross-Browser Compatibility</div>
                  <div class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full text-sm">Team Collaboration and Mentorship</div>
              </div>
          </div>

        </section>
      </main>
        <footer>
          <p>© 2024 Martins Eweniyi. All rights reserved.</p>
        </footer>
    </div>
  );
}