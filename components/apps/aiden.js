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
          <span className=" ml-1 md:ml-2 text-gray-50 ">History</span>
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
        <li className=" list-pc my-2">
          Detail oriented professional with great experience in{" "}
          <span className="font-medium">Web</span> and{" "}
          <span className="font-medium">Smart Contract</span> development.
        </li>
        <li className=" list-pc my-2">
          Experience in <span className="font-medium">Leading a Team</span> of
          front-end, back-end and smart contract developers.
        </li>
        <li className=" list-pc my-2">
          Developed <span className="font-medium">DeFi</span>,{" "}
          <span className="font-medium">NFT marketplace</span>,{" "}
          <span className="font-medium">Tokens</span> and many{" "}
          <span className="font-medium">web3</span> projects including{" "}
          <span className="font-medium">games</span> on Ethereum, Polygon,
          Binance Smart Chain and so on.
        </li>
        <li className=" list-pc my-2">
          Advanced knowledge of multiple programming languages, frameworks and
          several database structures.
        </li>
        <li className=" list-pc my-2">
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
          <span className="font-medium">Lead the development team</span> in
          creating a new products over <span className="font-medium">20</span>{" "}
          projects
        </p>,
        <p>
          <span className="font-medium">Oversee</span> the development team in
          fixing bugs and developing new features
        </p>,
        <p>
          Cooperate with over <span className="font-medium">5</span> developers
          to create clean interfaces and simple, intuitive interactions and
          experiences
        </p>,
        <p>
          Built the <span className="font-medium">DeFi</span>,{" "}
          <span className="font-medium">Token Generation</span> and{" "}
          <span className="font-medium">Token IDO</span>,{" "}
          <span className="font-medium">NFT Marketplaces</span>
          including many <span className="font-medium">
            Web3 projects
          </span>, <span className="font-medium">5+ Blockchain P2E Games</span>{" "}
          and <span className="font-medium">Metaverse</span>
        </p>,
        "Learning new skills and apply to daily tasks to improve efficiency and productivity",
      ],
    },
    {
      name: (
        <p>
          Full Stack Developer,{" "}
          <a
            className="border-b-2"
            href="https://www.loadsys.com"
            target="_blank"
            rel="noreferrer"
          >
            Loadsys Solution
          </a>
        </p>
      ),
      date: "Jul 2019 - Oct 2021, Remote",
      link: "https://www.loadsys.com",
      description: [
        <p>
          Designed and developed{" "}
          <span className="font-medium">5+ full-stack</span> web applications
          according to business objectives and needs of various clients with
          react, vue.js, django and express.js
        </p>,
        <p>
          Increased the <span className="font-medium">page speed by 15%</span>{" "}
          for the ecommerce site that generates{" "}
          <span className="font-medium">$25M annually</span> in revenue by
          implementing <span className="font-medium">code-splitting</span> and{" "}
          <span className="font-medium">optimizing performance</span> with
          react, graphQL and apollo
        </p>,
        <p>
          Implemented <span className="font-medium">SEO</span> in react
          application for e-commerce site with a catalog of{" "}
          <span className="font-medium">10 000+ products</span>
          leading to an increase in page views per session of{" "}
          <span className="font-medium">23% with SSR</span> in next.js
        </p>,
        <p>
          Worked on building customer-facing web application with express.js,
          prisma, vue.js, postgreSQL and node.js.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Front End Developer,{" "}
          <a
            className="border-b-2"
            href="https://frontline.com/"
            target="_blank"
            rel="noreferrer"
          >
            FRONTLINE
          </a>
        </p>
      ),
      date: "Nov 2017 - Apr 2019, Japan",
      link: "https://frontline.com/",
      description: [
        <p>
          Worked on the payments team to save over{" "}
          <span className="font-medium">50,000 customers time</span> and improve
          cash flow through the development of modern, responsive customer
          experiences using Angular and Ant Design Library
        </p>,
        <p>
          Contributed to the in-house UI library to create reusable react
          components that saved over{" "}
          <span className="font-medium">50 hours of development time</span> per
          month
        </p>,
        <p>
          Created a web and mobile app <span className="font-medium">MVP</span>{" "}
          for a store delivery management platform with{" "}
          <span className="font-medium">30+ business</span> customers to create,
          manage, and monitor deliveries using React and Redux
        </p>,
        <p>
          Communicated with Senior developer to manage large, complex design
          projects for over{" "}
          <span className="font-medium">10 corporate clients</span>
        </p>,
      ],
    },
    {
      name: (
        <p>
          Software Engineer Intern,{" "}
          <a
            className="border-b-2"
            href="https://frontline.com/"
            target="_blank"
            rel="noreferrer"
          >
            LTD
          </a>
        </p>
      ),
      date: "Apr 2016 - Apr 2017, Japan",
      link: "https://frontline.com/",
      description: [
        <p>
          Contributed to the in-house UI library to create reusable react
          components that saved over{" "}
          <span className="font-medium">50 hours of development time</span> per
          month
        </p>,
        <p>
          Created a web and mobile app <span className="font-medium">MVP</span>{" "}
          for a store delivery management platform with{" "}
          <span className="font-medium">30+ business</span> customers to create,
          manage, and monitor deliveries using React and Redux
        </p>,
        <p>
          Communicated with Senior developer to manage large, complex design
          projects for over{" "}
          <span className="font-medium">10 corporate clients</span>
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work History
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
                <li key={index} className="list-disc mt-1 text-gray-100">
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
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
        </p>,
        <p>
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
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
      name: "NFT Marketplace",
      date: "July 2022 - Aug 2022",
      imgUrl: "./images/projects/nftmarket.webp",
      link: "https://nftmarket.difines.io",
      description: [
        "A boilerplate code to build a chrome extension with react and webpack",
      ],
      domains: [
        "react",
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
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
        </p>,
        <p>
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
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
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
        </p>,
        <p>
          Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js &
          tailwind CSS
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
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
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
      ],
      domains: [
        "unity3D",
        "solidity",
        "web3.js",
        "webgl",
        "metaverse",
        "binance smart chain",
        "play to earn",
      ],
    },
    {
      name: "Chat Fi",
      date: "Feb 2023",
      imgUrl: "./images/projects/chatfi.webp",
      link: "https://chatfi.difines.io",
      description: [
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
      ],
      domains: ["solidity", "web3.js", "binance smart chain"],
    },
    {
      name: "The Messages",
      date: "Mar 2023",
      imgUrl: "./images/projects/message.webp",
      link: "https://themessages.xyz",
      description: [
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
      ],
      domains: ["solidity", "web3.js", "binance smart chain"],
    },
    {
      name: "Mining P2E Game",
      date: "Apr 2023",
      imgUrl: "./images/projects/mining.webp",
      link: "https://intro.mining.difines.io",
      description: [
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
      ],
      domains: ["solidity", "web3.js", "binance smart chain"],
    },
    {
      name: "Partner",
      date: "Mar 2023",
      imgUrl: "./images/projects/partner.webp",
      link: "https://partner.difines.io",
      description: [
        "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
      ],
      domains: ["solidity", "web3.js", "binance smart chain"],
    },
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    metaverse: "blue-300",
    "play to earn": "blue-300",
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
                  <li key={index} className="list-disc mt-2 text-gray-100">
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      const borderColorClass = `border-${tag_colors[domain]}`;
                      const textColorClass = `text-${tag_colors[domain]}`;
                      return (
                        <span
                          key={index}
                          className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
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
