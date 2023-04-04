import { Component } from "react";
import ReactGA from "react-ga";

export class AboutAiden extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      history: <History />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.pageview(`/${screen}`);

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden vivek"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden' history"
            src="./themes/Yaru/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="vivek's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutAiden;

export const displayAboutAiden = () => {
  return <AboutAiden />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/aidenmori.png"
          alt="Aiden Mori Logo"
        />
      </div>
      <div className=" mt-2 text-lg md:text-2xl text-center px-1">
        <div>
          My name is <span className="font-bold">Aiden Mori</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Software Engineer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc my-2 md:text-base">
          Detail oriented professional with great experience in{" "}
          <span className="font-medium">Web</span> and{" "}
          <span className="font-medium">Smart Contract</span> development.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Experience in <span className="font-medium">Leading a Team</span> of
          front-end, back-end and smart contract developers.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Developed <span className="font-medium">DeFi</span>,{" "}
          <span className="font-medium">NFT marketplace</span>,{" "}
          <span className="font-medium">Tokens</span> and many{" "}
          <span className="font-medium">web3</span> projects including{" "}
          <span className="font-medium">games</span> on Ethereum, Polygon,
          Binance Smart Chain and so on.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Advanced knowledge of multiple programming languages, frameworks and
          several database structures.
        </li>
        <li className=" list-pc my-2 md:text-base">
          Reliable team player offering exceptional analytical and time
          management skills and the important ability to think critically and
          solve complex problems.
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      name: (
        <p>
          Development Team Lead On The Blockchain Projects,{" "}
          <a
            className="border-b-2"
            href="https://kuronuri.com/pro"
            target="_blank"
            rel="noreferrer"
          >
            KURONURI
          </a>
        </p>
      ),
      date: "Dec 2021 - Present, Remote",
      link: "https://kuronuri.com/pro",
      description: [
        <p>
          As a <span className="font-medium">blockchain and web developer</span>
          , I have been fortunate to work on a wide range of exciting and
          innovative projects. One of my proudest achievements has been
          <span className="font-medium">leading a development team</span> in
          creating new products that have brought value and benefits to users. I
          have also been responsible for{" "}
          <span className="font-medium">overseeing the development team</span>{" "}
          in fixing bugs and developing new features to improve the user
          experience.
        </p>,
        <p>
          I prioritize open{" "}
          <span className="font-medium">
            communication, transparency, and mutual respect
          </span>{" "}
          in all of my interactions with colleagues and clients. I have{" "}
          <span className="font-medium">
            collaborated closely with over 5 developers
          </span>{" "}
          to create clean interfaces and simple, intuitive interactions that
          enhance the usability of our products.
        </p>,
        <p>
          I am particularly proud of my work in building one{" "}
          <span className="font-medium">DeFi Ecosystem</span>,{" "}
          <span className="font-medium">
            Token Generation and Token IDO platforms{" "}
          </span>
          , <span className="font-medium">2 NFT marketplaces</span>, and over
          <span className="font-medium">20+ various Web3 projects</span>. I have
          also developed{" "}
          <span className="font-medium">
            5+ blockchain-based Play-to-Earn games
          </span>{" "}
          and created <span className="font-medium">Metaverse platform</span>{" "}
          that have captured the imagination of users.
        </p>,
        <p>
          I am always eager to take on new challenges and to push the boundaries
          of what is possible in the blockchain and web development space. I am
          committed to delivering high-quality solutions that meet the needs of
          my clients and exceed their expectations.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Full Stack Developer,{" "}
          <a
            className="border-b-2"
            href="https://incarta.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            INCARTA
          </a>
        </p>
      ),
      date: "Jul 2019 - Oct 2021, Australia",
      link: "https://incarta.com.au/",
      description: [
        <p>
          As a developer with experience in the Health and Life Sciences sector,
          I have had the opportunity to work with innovative companies like
          Incarta, which have a demonstrated history of innovation in hardware
          and software development
        </p>,
        <p>
          Improved the{" "}
          <span className="font-medium">patient monitoring and care</span> so
          that the heathcare providers can access{" "}
          <span className="font-medium">
            real-time data on patients' physiological parameters
          </span>{" "}
          and make informed decisions on the treatment option
        </p>,
        <p>
          One of the products I have worked on is their leading clinical records
          platform,{" "}
          <a
            className="font-medium border-b-2 cursor-pointer"
            href="https://incarta.com.au/alarta/"
            target="_blank"
            rel="noreferrer"
          >
            Alarta
          </a>
          , which is among the most{" "}
          <span className="font-medium">
            advanced cloud-based critical care medical record systems
          </span>{" "}
          available
        </p>,
        <p>
          As part of my work with Incarta, I have focused on{" "}
          <span className="font-medium">
            improving the connectivity and integration
          </span>{" "}
          of Alarta with other healthcare technologies. (This includes the
          recent integration of BioBeat wearables, which are some of the most
          advanced physiological monitoring wearables available on the market)
          By{" "}
          <span className="font-medium">
            integrating BioBeat with Incarta's HL7 platform
          </span>
          , we have been able to provide unprecedented connectivity between
          wearables and electronic medical records.
        </p>,
        <p>
          The project that I'd worked here has been especially useful during the
          COVID-19 pandemic, where virtual consultations and remote patient
          monitoring have become increasingly important. These technologies have
          the potential to revolutionize patient care and improve health
          outcomes, and I am proud to have been a part of their development.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Front End Developer,{" "}
          <a
            className="border-b-2"
            href="https://www.openagent.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            OpenAgent
          </a>
        </p>
      ),
      date: "Nov 2017 - Apr 2019, Australia",
      link: "https://www.openagent.com.au/",
      description: [
        <p>
          As a developer on the team that built{" "}
          <span className="font-medium">
            Australia's #1 real estate agent comparison site
          </span>
          , I played a key role in driving a culture of transparency and
          continuous improvement, which resulted in significant value-addition
          to our users in their home selling journey. Through our platform, we
          <span className="font-medium">
            aimed to simplify the home selling process
          </span>
          , which can be quite stressful for many people, and I am proud to say
          that we were able to successfully achieve this goal.
        </p>,
        <p>
          One of my primary focuses was on{" "}
          <span className="font-medium">
            improving the website's user interface, optimizing its speed, and
            ensuring
          </span>{" "}
          that the site was accessible to all users. Through my efforts, we were
          able to improve the website's{" "}
          <span className="font-medium">speed by 35%</span>,{" "}
          <span className="font-medium">resulting in a 20%</span> increase in
          user engagement.
        </p>,
        <p>
          Working closely with the{" "}
          <span className="font-medium">data science team</span>, I developed
          algorithms that could{" "}
          <span className="font-medium">
            analyze user data and recommend the best possible matches
          </span>{" "}
          between users and agents. As a result, our platform was able to match
          over <span className="font-medium">80%</span> of our users with
          top-performing agents in their local area, resulting in a{" "}
          <span className="font-medium">25%</span> increase in customer
          satisfaction.
        </p>,
        <p>
          Additionally, I worked on the payments team, where I was able to save
          over <span className="font-medium">20,000 customers time</span> and
          <span className="font-medium">improve cash flow</span> through the
          development of modern, responsive customer experiences using React and
          Ant Design Library. By streamlining the payment process, we were able
          to reduce payment errors by <span className="font-medium">15%</span>{" "}
          and increase overall customer satisfaction by{" "}
          <span className="font-medium">30%</span>.
        </p>,
        <p>
          Overall, my experience working on Australia's #1 real estate agent
          comparison site was incredibly rewarding, as it allowed me to use my
          skills to create a platform that provided a valuable service to the
          people of Australia. I am proud to have been a part of this project,
          and I look forward to applying the knowledge and experience I gained
          in my future career endeavors.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Software Engineer Intern,{" "}
          <a
            className="border-b-2"
            href="https://legrand.jp/"
            target="_blank"
            rel="noreferrer"
          >
            Le Grand Co, Ltd.
          </a>
        </p>
      ),
      date: "Apr 2016 - Apr 2017, Japan",
      link: "https://legrand.jp/",
      description: [
        <p>
          During my internship, I was also involved in media planning and
          operation, where I collaborated with the marketing team to develop and
          execute successful advertising campaigns across various platforms,
          including social media. By analyzing campaign data and providing
          recommendations for optimization, I was able to increase ad engagement
          by <span className="font-medium">30%</span>, leading to a higher
          conversion rate.
        </p>,
        <p>
          One of the most exciting projects I worked on during my internship was
          content marketing and SEO measures . I collaborated with the content
          team to develop a comprehensive content marketing strategy that aimed
          to increase brand awareness and drive organic traffic to the company's
          website. By{" "}
          <span className="font-medium">utilizing SEO best practices</span> and{" "}
          <span className="font-medium">conducting keyword research</span>, we
          were able to increase website traffic by{" "}
          <span className="font-medium">40%</span> within the first month of
          implementation.
        </p>,
        <p>
          Overall, my internship experience at Legrand was truly rewarding, as
          it provided me with hands-on experience in a variety of digital
          marketing and software engineering projects. I was able to work with a
          talented team of professionals who were passionate about their work
          and committed to delivering high-quality services to clients. I am
          grateful for the opportunity to have worked at Legrand, and I look
          forward to applying the skills and knowledge I gained in my future
          career endeavors.
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className=" text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Osaka University- Handai
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2013 - 2016</div>
          <div className=" text-sm md:text-base">Computer Engineering</div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          I am working as a full stack developer.
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              React.js, Web3.js and Smart Contract
            </strong>{" "}
            development
          </div>
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="aiden javascript"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Typescript-3178c6?style=flat&logo=typescript&logoColor=ffffff"
              alt="aiden typescript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Solidity-ffffff?style=flat&logo=solidity&logoColor=000000&labelColor=%000000"
              alt="aiden solidity"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="aiden c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="aiden python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white"
              alt="aiden dart"
            />
            <img
              src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff"
              alt="aiden SASS"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="aiden git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
              alt="aiden firebase"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="aiden next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="aiden react"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Angular-dd0031?style=flat&logo=angular&logoColor=ffffff"
              alt="aiden angular"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Svelte-ff3e00?style=flat&logo=svelte&logoColor=ffffff"
              alt="aiden svelte"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Remix-00ccbb?style=flat&logo=remix&logoColor=000000"
              alt="aiden remix"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Web3JS-f16822?style=flat&logo=Web3.js&logoColor=ffffff"
              alt="aiden web3"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Hardhat-c5d11700?style=flat&logo=ethereum&logoColor=ffffff"
              alt="aiden hardhat"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=react&logoColor=white"
              alt="aiden react native"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Ionic-3880ff?style=flat&logo=ionic&logoColor=white"
              alt="aiden ionic framework"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
              alt="aiden flutter"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="aiden tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-NodeJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="aiden node.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-ExpressJS-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="aiden express.js"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
              alt="aiden jquery"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
              alt="aiden redux"
            />
          </div>
        </div>
      </div>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "SHIBUYA Ecosystem",
      date: "Dec 2021 - Apr 2022",
      link: "https://difines.io",
      imgUrl: "./images/projects/shibuya.webp",
      description: [
        <p>
          Has <span className="font-medium">special mechanism</span> called{" "}
          <span className="font-medium">Golden Tree</span> that can make the
          token price <span className="font-medium">never go down</span>, and{" "}
          <span className="font-medium">rise day by day</span>
        </p>,
        <p>
          Designed that <span className="font-medium">SMTC token</span> that is
          the main token of Golden Tree that has the special mechanism will be{" "}
          <span className="font-medium">over 100K BUSD</span> finally
        </p>,
        <p>Has 7 ladder system</p>,
        <p>has many rewards system</p>,
        <p>has referral function</p>,
        <p>has team manage feature as being a boss of the team</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "defi",
        "binance smart chain",
      ],
    },
    {
      name: "NFT Marketplace",
      date: "July 2022 - Aug 2022",
      imgUrl: "./images/projects/nftmarket.webp",
      link: "https://nftmarket.difines.io",
      description: [
        <p>Minting, Selling, Buying and Listing NFTs</p>,
        <p>
          Has the <span className="font-medium">royalty</span> for the{" "}
          <span className="font-medium">NFT creators</span>
        </p>,
        <p>
          <span className="font-medium">Swap place</span> where user can swap
          <span className="font-medium">two NFT properties</span>
        </p>,
        <p>
          Planning to develop <span className="font-medium">combine place</span>{" "}
          where makes NFT more <span className="font-medium">stronger</span>
        </p>,
        <p>
          NFTs will be used as the{" "}
          <span className="font-medium">game assets</span>
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "firebase",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "White Creator Token Minting Platform",
      date: "Jun 2022",
      link: "https://whitecreator.difines.io",
      imgUrl: "./images/projects/whitecreator.webp",
      description: [
        <p>
          Support <span className="font-medium">binance</span> and{" "}
          <span className="font-medium">ethereum</span> chains for now.
        </p>,
        <p>
          Create token easily within{" "}
          <span className="font-medium">10 seconds by one click</span>
        </p>,
        <p>
          Plan to add <span className="font-medium">more evm chains</span> such
          like polygon, avax and etc.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "NFT Minting Platform",
      date: "Jun 2022",
      link: "https://nft.difines.io",
      imgUrl: "./images/projects/nft.webp",
      description: [
        <p>
          Support <span className="font-medium">binance</span> and{" "}
          <span className="font-medium">ethereum</span> chains for now.
        </p>,
        <p>
          Create NFT easily within{" "}
          <span className="font-medium">10 seconds by one click</span>
        </p>,
        <p>
          Plan to add <span className="font-medium">more evm chains</span> such
          like polygon, avax and etc.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Kingdom Battle",
      date: "July 2022",
      imgUrl: "./images/projects/kingdom.webp",
      link: "https://kingdom.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 battle type of
          game
        </p>,
        <p>
          Support <span className="font-medium">multiplayer</span> mode in which
          up to <span className="font-medium">8 players</span> playing together
        </p>,
        <p>Defeat goblins and enemy boss to get the more token</p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "World Speed",
      date: "Sep 2022",
      imgUrl: "./images/projects/worldspeed.webp",
      link: "https://worldspeed.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 car racing game
        </p>,
        <p>
          Play with 4 computer players on the{" "}
          <span className="font-medium">easy, middle and hard</span> game mode
        </p>,
        <p>Be top winner to get the more token</p>,
        <p>
          Plan to add <span className="font-medium">multiplayer</span> mode
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Crypto Snaker",
      date: "Aug 2022",
      imgUrl: "./images/projects/cryptosnake.webp",
      link: "https://snake.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 snake game
        </p>,
        <p>
          Play with many <span className="font-medium">snake bots</span>
        </p>,
        <p>
          Survive <span className="font-medium">as long as possible</span> to
          get the more token
        </p>,
        <p>
          Plan to add <span className="font-medium">multiplayer</span> mode
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Puzzle",
      date: "Oct 2022",
      imgUrl: "./images/projects/puzzle.webp",
      link: "https://puzzle.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 puzzle game
          (2048)
        </p>,
        <p>
          Play on the <span className="font-medium">easy, middle and hard</span>{" "}
          mode with the limited time
        </p>,
        <p>
          Solve the puzzle{" "}
          <span className="font-medium">as soon as possible</span> before time
          is up to get the more token
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "BlockDown",
      date: "Nov 2022",
      imgUrl: "./images/projects/blockdown.webp",
      link: "https://blockdown.difines.io",
      description: [
        <p>
          <span className="font-medium">Play to Earn</span> web3 block down game
          (tetris)
        </p>,
        <p>
          Play on the <span className="font-medium">easy, middle and hard</span>{" "}
          mode
        </p>,
        <p>
          Match the block to the{" "}
          <span className="font-medium">right place</span> and break{" "}
          <span className="font-medium">as much as possible</span> get the more
          token
        </p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Crypto Works Metaverse",
      date: "Jan 2023",
      imgUrl: "./images/projects/metaverse.webp",
      link: "https://cryptoworks.difines.io",
      description: [
        <p>Meet the friends and chat each other</p>,
        <p>Buy and sell your NFT assets</p>,
        <p>Plan to add many features</p>,
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "metaverse",
        "play to earn",
        "binance smart chain",
      ],
    },
    {
      name: "Chat Fi",
      date: "Feb 2023",
      imgUrl: "./images/projects/chatfi.webp",
      link: "https://chatfi.difines.io",
      description: [
        <p>Chat each other using wallet address</p>,
        <p>Create the group and invite people</p>,
        <p>Transfer token easily</p>,
        <p>Create the token airdrop and voting event</p>,
        <p>Plan to add many feature</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "chatscope",
        "web3.js",
        "firebase",
        "binance smart chain",
      ],
    },
    {
      name: "The Messages",
      date: "Mar 2023",
      imgUrl: "./images/projects/message.webp",
      link: "https://themessages.xyz",
      description: [
        <p>
          Create the gold, silver and bronze types of congratulation messages to
          the blockchain
        </p>,
        <p>Use the WBC token</p>,
        <p>Share more SNS information by choosing the gold message</p>,
        <p>Plan to add more feature</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "web3.js",
        "solidity",
        "binance smart chain",
      ],
    },
    {
      name: "Mining P2E Game",
      date: "Apr 2023",
      imgUrl: "./images/projects/mining.webp",
      link: "https://intro.mining.difines.io",
      description: [
        <p>Play to Earn web3 mining game</p>,
        <p>Integrate NFT assets with the game</p>,
        <p>Buy the NFTs to earn much more token</p>,
      ],
      domains: [
        "vue.js",
        "web3.js",
        "play to earn",
        "solidity",
        "binance smart chain",
      ],
    },
    {
      name: "Partner",
      date: "Mar 2023",
      imgUrl: "./images/projects/partner.webp",
      link: "https://partner.difines.io",
      description: [
        <p>Create the backend using openAI api with node.js and express.js</p>,
        <p>Made the backend as serverless to run on the netlify</p>,
        <p>Integrated react.js frontend with the backend</p>,
      ],
      domains: ["chatGPT", "react.js", "node.js", "express.js"],
    },
    {
      name: "Clinicial Chart (Alarta)",
      date: "2020 - 2021",
      imgUrl: "./images/projects/clinical.webp",
      link: "https://incarta.com.au/",
      description: [
        <p>
          With over 25 years experience in the Health and Life Sciences sector,
          Incarta has a demonstrated history of innovation in hardware and
          software development. Our leading clinical records platform “Alarta”
          is amongst the most advanced cloud based critical care medical record
          systems available anywhere. It is also one of the most cost effective.
          Alarta can be deployed within a few hours auto-configuring itself via
          HL7.
        </p>,
      ],
      domains: ["chatGPT", "react.js", "node.js", "express.js"],
    },
  ];

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    firebase: "red-300",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    hardhat: "green-300",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    metaverse: "blue-400",
    "play to earn": "blue-500",
    webgl: "blue-600",
    "binance smart chain": "yellow-300",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                      >
                        {domain}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/PResume.pdf"
      title="aiden mori resume"
      frameBorder="0"
    ></iframe>
  );
}
