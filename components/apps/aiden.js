import Image from "next/image";
import { Component } from "react";
import ReactGA from "react-ga";
import Link from "next/link";

export class AboutAiden extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
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
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden mori"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
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
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
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
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="aiden's resume"
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
          Hi, I'm <span className="font-bold">Aiden</span>,
        </div>
        <div className="font-normal ml-1">
          <span className="text-pink-600 font-bold">
            Senior Full Stack Engineer
          </span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <div className="flex items-center gap-5">
        <Image
          src="/images/logos/discord.svg"
          alt="Discord Logo"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://discord.com/users/aiden77mori", "_blank")
          }
        />
        <Image
          src="/images/logos/telegram.svg"
          alt="Telegram Logo"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() => window.open("https://t.me/evw77", "_blank")}
        />
        <Image
          src="/images/logos/email.svg"
          alt="Telegram Logo"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={() => window.open("mailto:aiden77mori@gmail.com", "_blank")}
        />
      </div>
      <ul className="my-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className="list-pc my-2 md:text-base">
          9+ years of experience building scalable platforms across{" "}
          <span className="font-bold">Web2</span>,{" "}
          <span className="font-bold">Web3</span>, and{" "}
          <span className="font-bold">AI-enabled systems</span>.
        </li>

        <li className="list-pc my-2 md:text-base">
          Designed and delivered large-scale{" "}
          <span className="font-bold">digital asset platforms</span>, including
          wallets, exchanges, blockchain explorers, token ecosystems, and
          high-concurrency backend services.
        </li>

        <li className="list-pc my-2 md:text-base">
          Led cross-functional engineering efforts at{" "}
          <span className="font-bold">KURONURI</span> and contributed to multiple{" "}
          <span className="font-bold">DeFi</span>,{" "}
          <span className="font-bold">NFT</span>, and{" "}
          <span className="font-bold">Web3 infrastructure</span> projects across
          Ethereum-compatible networks.
        </li>

        <li className="list-pc my-2 md:text-base">
          Experienced in architecting{" "}
          <span className="font-bold">distributed backend systems</span>,
          exchange and wallet infrastructure, and cloud-native applications using
          modern TypeScript and Node.js ecosystems.
        </li>

        <li className="list-pc my-2 md:text-base">
          Product-focused engineer combining strong technical ownership,
          system design thinking, and collaborative problem-solving to deliver
          reliable, scalable production systems.
        </li>
      </ul>
    </>
  );
}
function History() {
  const project_list = [
    {
      company: "DIFINES",
      role: "Senior Full Stack Engineer",
      location: "Remote",
      date: "Feb 2024 - Jan 2026",
      link: "https://www.difines.org/",
      description: [
        <p>
          Led architecture and development of the DFS Chain ecosystem, a web-based Layer-0 blockchain platform implementing a centralized ledger and transaction engine simulating decentralized infrastructure for wallets, exchanges, token issuance, launchpads, and digital asset services.
        </p>,
        <p>
          Designed and implemented DFS Scan, a blockchain explorer comparable to Etherscan/BscScan, delivering real-time block aggregation, transaction indexing pipelines, and optimized analytics for large-scale ledger inspection.
        </p>,
        <p>
          Engineered MetaFace Wallet, a MetaMask-style digital asset wallet supporting DFS-native and bridged Web3 assets, implementing wallet abstraction, transaction execution workflows, and secure authorization across ecosystem applications.
        </p>,
        <p>
          Developed Quick IDO, a hybrid exchange and launchpad supporting Web3↔Web3, Web2↔Web2, and Web3↔DFS asset bridging, including custody handling, liquidity settlement, and cross-ledger deposit/withdrawal pipelines.
        </p>,
        <p>
          Built Moegi IDO platform enabling project onboarding, whitelist validation, vesting configuration, and automated token distribution integrated with shared ledger infrastructure.
        </p>,
        <p>
          Implemented DFS WhiteCreator, enabling no-code token issuance with configurable supply models, ownership governance, and ecosystem-wide integration with wallet and exchange services.
        </p>,
        <p>
          Architected WEX, an AMM-style trading platform similar to PancakeSwap implementing swap routing, pricing algorithms, liquidity accounting, and centralized settlement backed by ledger state management.
        </p>,
        <p>
          Developed Uhalisi, a ledger-backed digital content registration system providing timestamped ownership verification and immutable metadata validation.
        </p>,
        <p>
          Built POIPI, a token airdrop and campaign orchestration platform implementing automated reward distribution and wallet-based participation tracking.
        </p>,
        <p>
          Designed Burn-to-Earn economic mechanisms, integrating token burn tracking, emission modeling, and automated reward distribution within DFS tokenomics.
        </p>,
        <p>
          Architected shared ledger and transaction infrastructure including block simulation, confirmation handling, wallet synchronization, and cross-application interoperability.
        </p>,
        <p>
          Implemented cross-ledger asset bridges integrating external Web3 networks via blockchain event monitoring, asset mint/burn mapping, and secure settlement workflows.
        </p>,
        <p>
          Integrated AI-assisted analytics and operational automation to monitor transaction behavior, improve ecosystem insights, and support intelligent platform management workflows.
        </p>,
        <p>
          Leveraged LLM-assisted engineering workflows to accelerate development, automate debugging/testing processes, and improve delivery efficiency across distributed services.
        </p>,
        <p>
          Optimized backend services, database schemas, and caching strategies supporting high-throughput financial operations across interconnected DApps.
        </p>,
      ],
    },
    {
      company: "Dwayne",
      role: "Back End Engineer",
      location: "Remote",
      date: "Aug 2023 - Feb 2025",
      link: "#",
      description: [
        <p>
          Engineered scalable backend infrastructure using Node.js, TypeScript, Express.js, and MongoDB supporting 5M+ daily transactions with 99.9% uptime.
        </p>,
        <p>
          Designed real-time communication and gaming interaction systems using Socket.io, improving user engagement and retention by 30%.
        </p>,
        <p>
          Developed AI-assisted payment processing and fraud detection workflows, improving transaction speed by 50% while strengthening platform security.
        </p>,
        <p>
          Implemented secure authentication architecture using JWT, CAPTCHA, and session orchestration reducing unauthorized access by 40%.
        </p>,
        <p>
          Built affiliate and referral systems increasing traffic by 40% and driving measurable revenue growth.
        </p>,
        <p>
          Designed customer ticketing workflows reducing average response time from 48h to 12h.
        </p>,
      ],
    },
    {
      company: "Decent Reviews",
      role: "Back End Engineer & Smart Contract Developer",
      location: "Remote",
      date: "Apr 2023 - Aug 2023",
      link: "https://decentreviews.co",
      description: [
        <p>
          Crafted a user review API and automated review aggregation engine using Node.js, TypeScript, and Express.js, improving data collection efficiency by 50% for the customer support team.
        </p>,
        <p>
          Established a badge generation engine, resulting in a 25% increase in user-generated content shared across social media, improving brand visibility and engagement.
        </p>,
        <p>
          Integrated Ethereum smart contracts via Web3.js enabling automated verification workflows and reducing manual operations by 60%.
        </p>,
        <p>
          Implemented CI/CD pipelines using GitHub Actions improving deployment reliability and reducing release failures.
        </p>,
        <p>
          Generated detailed API documentation with Swagger and conducted thorough API testing using Cypress and Jest, boosting developer onboarding by 40% and increasing system uptime by 15%.
        </p>,
        <p>
          Containerized backend services with Docker, reducing database response times below 200ms.
        </p>,
      ],
    },
    {
      company: "KURONURI",
      role: "Blockchain Full Stack Engineer",
      location: "Remote",
      date: "Jan 2021 - Apr 2023",
      link: "https://kuronuri.com/pro",
      description: [
        <p>
          Spearheaded the creation of a comprehensive DeFi ecosystem, token
          generation and ICO platforms, 5 play-to-earn games, 2 NFT
          marketplaces, and 10+ Web3 projects.
        </p>,
        <p>
          Developed an auto DEX bot for Burn&Drop that executed trades in under
          2 seconds, increasing transaction efficiency by 40% and enhancing user
          engagement across the platform for over 1,000 active users.
        </p>,
        <p>
          Designed a series of robust token bridges that facilitated seamless
          asset transfers across five different blockchain networks, enhancing
          transaction efficiency and improving cross-chain communication by 40%
          within the first quarter of implementation.
        </p>,
        <p>
          Automated the integration process between React.js front-end and smart
          contracts using Web3.js and Ethers.js; streamlined deployment time by
          60%, allowing quicker updates and feature rollouts for end-users.
        </p>,
        <p>
          Built a robust internal back-end system by synchronizing with a
          blockchain database using Node.js and Express.js; improved data
          retrieval speed by 40% while enhancing security measures across the
          platform.
        </p>,
        <p>
          Reconstructed existing API endpoints to utilize GraphQL, providing a
          more flexible data querying mechanism; this effort yielded a 50%
          reduction in code complexity, improving maintainability across the
          development team.
        </p>,
        <p>
          Managed CI/CD processes for the development team, utilizing CircleCI,
          Bitbucket, GitHub, and AWS Lambda functions; achieved a 40% reduction
          in deployment time and improved overall software quality.
        </p>,
      ],
    },
    {
      company: "Defichain Value",
      role: "Smart Contract Developer",
      location: "Remote",
      date: "Apr 2020 - Jan 2021",
      link: "#",
      description: [
        <p>
          Developed and deployed smart contracts supporting liquidity pools and yield farming strategies on Binance Smart Chain.
        </p>,
        <p>
          Achieved full automated testing coverage using Truffle and Hardhat frameworks.
        </p>,
        <p>
          Built Web3 interfaces improving staking and liquidity onboarding workflows.
        </p>,
      ],
    },
    {
      company: "Incarta",
      role: "Software Engineer (MERN Stack)",
      location: "Remote",
      date: "Apr 2019 - Feb 2020",
      link: "https://incarta.com.au/",
      description: [
        <p>
          Contributed to development of cloud-based healthcare and clinical data platforms supporting real-time patient monitoring and electronic medical record workflows aligned with Incarta's mission of improving healthcare accessibility through scalable medical technology solutions.
        </p>,
        <p>
          Designed and implemented interactive clinical visualization dashboards using React.js and D3.js to present physiological and patient data insights, improving accessibility of complex medical datasets for healthcare professionals during high-demand COVID-19 operations.
        </p>,
        <p>
          Developed scalable backend services using Node.js, Express, and MongoDB, enabling secure ingestion, processing, and visualization of high-volume clinical and operational data streams.
        </p>,
        <p>
          Collaborated with cross-functional teams including clinicians and infrastructure engineers to deliver user-centric healthcare applications emphasizing reliability, usability, and data accuracy in critical care environments.
        </p>,
        <p>
          Implemented performance optimizations and responsive UI architectures improving system usability and contributing to measurable increases in treatment workflow efficiency.
        </p>,
        <p>
          Supported deployment of applications within private cloud environments, ensuring secure handling of sensitive healthcare data and compliance with medical system reliability requirements.
        </p>,
      ],
    },
    {
      company: "Open Agent",
      role: "Front End Developer",
      location: "Remote",
      date: "Aug 2017 - Apr 2019",
      link: "https://www.openagent.com.au/",
      description: [
        <p>
          Developed and maintained large-scale web applications using React.js, TypeScript, HTML5, and CSS3, delivering reusable and maintainable UI component architectures.
        </p>,
        <p>
          Built over 100+ production-grade UI components following modern frontend patterns, improving development scalability and consistency across applications.
        </p>,
        <p>
          Collaborated within Agile teams to translate product and design requirements into performant frontend implementations, accelerating feature delivery timelines by approximately 25%.
        </p>,
        <p>
          Led frontend debugging and stabilization efforts, resolving 300+ production issues across application lifecycle stages and improving platform reliability.
        </p>,
        <p>
          Implemented responsive layouts and cross-browser compatible interfaces ensuring consistent user experience across desktop and mobile environments.
        </p>,
        <p>
          Participated in continuous integration workflows, application testing, and release cycles to maintain production stability.
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
            <div className="flex flex-wrap justify-between items-center mr-2">
              <div className="flex flex-col items-start">
                <Link href={project.link} target="_blank">
                  <div className="text-base font-semibold md:text-lg hover:underline">
                    {project.company}
                  </div>
                </Link>
                <div className="text-gray-300 font-light text-sm">
                  {project.role}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-gray-300 font-light text-sm">
                  {project.location}
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
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
            Victoria University
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2013 - 2017</div>
          <div className=" text-sm md:text-base">Bachelor of Science (BS), Computer Science Engineering</div>
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
      <div className="w-full md:w-10/12 flex justify-start items-center font-bold text-center">
        <div className="px-2 flex flex-wrap items-start mt-2">
          <img
            className="m-1"
            src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"
            alt="aiden react"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=ffffff"
            alt="aiden next.js"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white"
            alt="aiden angular"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/Node.js-86BE00?style=flat&logo=node.js&logoColor=white"
            alt="aiden svelte"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"
            alt="aiden remix"
          />
          <img
            className=" m-1"
            src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"
            alt="aiden web3"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Wordpress-21759B?style=flat&logo=wordpress&logoColor=white"
            alt="aiden hardhat"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white"
            alt="aiden react native"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white"
            alt="aiden ionic framework"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"
            alt="aiden flutter"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white"
            alt="aiden tailwind css"
          />
          <img
            src="https://img.shields.io/badge/MySQL-F79F17?style=flat&logo=mysql&logoColor=white"
            alt="aiden node.js"
            className="m-1"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white"
            alt="aiden express.js"
            className="m-1"
          />
          <img
            src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"
            alt="aiden jquery"
            className="m-1"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"
            alt="aiden redux"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Python-FFD43B?style=flat&logo=python&logoColor=blue"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/VS_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Cursor-000000?style=flat&logo=cursor&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/v0-000000?style=flat&logo=v0&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Redux_Toolkit-593D88?style=flat&logo=redux&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/NextAuth-000000?style=flat&logo=nextdotjs&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Material_UI-0081CB?style=flat&logo=mui&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white"
            alt="aiden docker"
          /><img
            className="m-1"
            src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/AWS_Lambda-FF9900?style=flat&logo=awslambda&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Amazon_S3-569A31?style=flat&logo=amazons3&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/REST_API-02569B?style=flat&logo=fastapi&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/Microservices-FF6C37?style=flat&logo=docker&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/WebSockets-010101?style=flat&logo=socketdotio&logoColor=white"
            alt="aiden docker"
          />
          <img
            className="m-1"
            src="https://img.shields.io/badge/CI/CD-2088FF?style=flat&logo=githubactions&logoColor=white"
            alt="aiden docker"
          />
        </div>
      </div>
    </>
  );
}
function Projects() {
  const project_list = [
    {
      name: "Verge3D | Interactive 3D Model Viewer",
      date: "",
      imgUrl: "./images/projects/interfactive-model-verge3d.webp",
      link: "https://interactive-model-verge3d.vercel.app",
      description: [
        <p>Built an interactive 3D model viewer using Verge3D and WebGL, enabling real-time rendering and manipulation of complex 3D assets directly in the browser. Designed a modular architecture for dynamic model loading and configurable scene management.</p>,
        <p>Optimized asset loading and interaction logic to maintain high performance across devices, delivering a scalable and immersive 3D visualization experience.</p>,
      ],
      domains: ["html",
        "react.js",
        "css",
        "javascript",
        "three.js",
        "panolens",
        "verge3d",
        "webgl",
        "3d-rendering",
        "virtual-reality",
        "interactive-3d",
        "cms-integration"
      ],
    },
    {
      name: "Verge3D | Interactive 3D Space Viewer",
      date: "",
      imgUrl: "./images/projects/agromin-verge3d.webp",
      link: "https://verge3d-vrapp.vercel.app",
      description: [
        <p>Developed a browser-based immersive VR experience using Three.js, Panolens, and Verge3D, enabling users to explore interactive 3D environments directly in the browser via WebGL. Built a modular scene architecture supporting dynamic uploads of panoramic images and 3D assets, allowing administrators to manage content without redeployment.</p>,
        <p>Implemented optimized asset loading, texture compression, and event-driven interactions to maintain smooth performance across devices. Integrated interactive product flows within the VR environment, bridging immersive visualization with real-time commerce functionality.</p>,
      ],
      domains: ["html",
        "react.js",
        "css",
        "javascript",
        "three.js",
        "panolens",
        "verge3d",
        "webgl",
        "3d-rendering",
        "virtual-reality",
        "interactive-3d",
        "cms-integration"
      ],
    },
    {
      name: "DIOR Virtual Shop | Immersive 3D Commerce Experience",
      date: "",
      imgUrl: "./images/projects/dior.webp",
      link: "https://dior-vrshop.vercel.app",
      description: [
        <p>Engineered a browser-based immersive 3D shopping experience using Three.js, Panolens, and WebGL, enabling users to explore a fully interactive virtual showroom directly in the browser. Designed a modular scene architecture supporting dynamic loading of panoramic environments and high-resolution 3D product assets.</p>,
        <p>Developed an administrative content pipeline allowing real-time uploads of images and 3D models, with HubSpot-integrated mapping workflows for product placement and metadata management. Implemented optimized asset streaming, texture compression, and event-driven interaction handling to maintain smooth rendering performance across devices.</p>,
        <p>Integrated interactive product selection and purchase flows within the VR environment, bridging immersive visualization with functional e-commerce capabilities.</p>,
      ],
      domains: ["html", "javascript", "php", "panolens", "css", "three.js", "e-commerce", "webgl",
        "3d-rendering",
        "virtual-reality",
        "interactive-3d",],
    },
    {
      name: "Memory Garden",
      date: "",
      link: "https://plant-memory.bolt.host",
      imgUrl: "./images/projects/memory-garden.webp",
      description: [
        <p>
          Memory Garden is an interactive web-based experience that transforms
          user-submitted memories, emotions, and reflections into a living
          digital landscape. Each contribution blooms as a unique generative
          plant—its shape, color, and movement reflecting the mood of the text.
          Visitors can explore a shared garden filled with these emotional
          plants, click to read anonymous entries, and plant their own.
        </p>,
        <p>
          Built using modern web technologies and generative art tools, Memory
          Garden combines personal storytelling, emotional design, and
          collaborative creativity. The result is a poetic, immersive space
          where individual moments grow into a collective emotional
          archive—quiet, reflective, and always evolving.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "tailwind",
        "generative art",
        "web2",
        "bolt",
        "ai",
        "openai",
        "node.js",
        "supabase",
      ],
    },
    {
      name: "DFS BurnToEarn",
      date: "",
      link: "https://dfs-burntoearn.vercel.app/",
      imgUrl: "./images/projects/dfs-burntoearn.webp",
      description: [<p>BurnToEarn platform on DFS chain</p>],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "dfs chain",
        "dfsscan",
        "web2",
        "web2.5",
        "web3",
      ],
    },
    {
      name: "DFS Wallet Private",
      date: "",
      link: "https://dfs-wallet-private.vercel.app/",
      imgUrl: "./images/projects/dfs-private.webp",
      description: [<p>MetaFace wallet private on DFS chain</p>],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "dfs chain",
        "dfsscan",
        "web2",
        "web2.5",
        "web3",
      ],
    },
    {
      name: "DIFINES Intro",
      date: "",
      link: "https://intro.difines.io",
      imgUrl: "./images/projects/difines-intro.webp",
      description: [<p>DIFINES introduction website</p>],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "dfs chain",
        "dfsscan",
        "ai",
        "royalty",
        "web2",
        "web2.5",
        "web3",
      ],
    },
    {
      name: "DIFINES Web Chain",
      date: "",
      link: "https://difines.org",
      imgUrl: "./images/projects/difines.webp",
      description: [<p>DIFINES web chain website</p>],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "web2",
        "web2.5",
        "difines",
        "DFS",
        "DFS Web Chain",
      ],
    },
    {
      name: "Tiger Bucks",
      date: "",
      link: "https://tiger-bucks.vercel.app",
      imgUrl: "./images/projects/tiger-bucks.webp",
      description: [<p>Token landing page</p>, <p>Tiger Bucks bep20 token</p>],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "royalty",
        "web3",
        "bep20",
        "bsc",
      ],
    },
    {
      name: "Uhalisi",
      date: "",
      link: "https://uhalisi.com",
      imgUrl: "./images/projects/uhalisi.webp",
      description: [
        <p>
          ✅ AI detects unauthorized use (supports all images, videos, audio,
          and text)
        </p>,
        <p>✅ Instantly record evidence with DFSChain</p>,
        <p>✅ Instantly issue authentic certificates</p>,
        <p>
          ✅ Comprehensive support for royalty claims, damage compensation, and
          monetization
        </p>,
        <p>
          ✅ Automatically detects slanderous comments on social media and
          preserves logs
        </p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "firebase/firestore",
        "dfs chain",
        "dfsscan",
        "ai",
        "royalty",
        "metaface",
        "web2",
        "web2.5",
        "web3",
      ],
    },
    {
      name: "WEX Swap",
      date: "",
      link: "https://wexswap.com",
      imgUrl: "./images/projects/wex.webp",
      description: [
        <p>
          WEX Swap is a decentralized exchange on the DFS Chain, enabling users
          to add liquidity and swap tokens while earning rewards.
        </p>,
        <p>
          WEX has same functionality with Web3 DEX platform, but it is on the
          DFS Chain, so it is more secure and faster.
        </p>,
        <p>Please wait for more features coming...</p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "firebase/firestore",
        "wex",
        "dfs chain",
        "dfsscan",
        "dex",
        "swap",
        "liquidity",
        "reward",
        "web2",
        "web2.5",
        "web3",
        "trading",
        "staking",
        "farming",
        "defi",
      ],
    },
    {
      name: "RakuEarn",
      date: "",
      link: "https://www.rakuearn.com/en",
      imgUrl: "./images/projects/rakuearn.webp",
      description: [
        <p>
          RakuEarn platform is the one that you can earn points easily by
          answering for surveys.
        </p>,
        <p>
          You can exchange points for real money via bank transfer, as well as
          redeem them for gift cards and rewards such as Bank Transfer, Amazon,
          Apple Store, Google Play, PayPay, and more.
        </p>,
        <p>Creating an account and using the AI tool is completely free.</p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "supabase",
        "AI",
        "point",
        "exchange",
      ],
    },
    {
      name: "POIPI",
      date: "",
      link: "https://www.poipi.com",
      imgUrl: "./images/projects/poipi.webp",
      description: [
        <p>
          Earn points daily by participating in the project, visiting our
          platform and social channels, and inviting others.
        </p>,
        <p>
          Redeem your points for cryptocurrency anytime or use them to join our
          DFS Chain token airdrop.
        </p>,
        <p>
          Complete surveys and Q&A sessions to earn additional points and
          rewards.
        </p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "firebase/firestore",
        "dfs chain",
        "point",
        "poipi",
        "dripoi",
        "surpoi",
        "airdrop",
      ],
    },
    {
      name: "DFS Scan",
      date: "",
      link: "https://dfsscan.com/",
      imgUrl: "./images/projects/dfs_scan.webp",
      description: [
        <p>
          DFS Scan is a tool that allows you to scan the DFS network for
          transactions and blocks.
        </p>,
        <p>
          It provides a user-friendly web interface to explore and analyze
          blockchain data, including transaction history, wallet balances, smart
          contract interactions, and real-time network statistics.
        </p>,
        <p>
          It is a web-based analytics tool that provides insights and
          visualization for transaction data and block information from various
          data sources.
        </p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "firebase",
        "dfs chain",
        "difines",
        "web2",
      ],
    },
    {
      name: "MetaFace - DFS Wallet",
      date: "",
      link: "http://metaface.dfsscan.com/",
      imgUrl: "./images/projects/dfs_wallet.webp",
      description: [
        <p>
          MetaFace is a secure wallet on the DFSChain platform, enabling
          universal access to the Web2.5 ecosystem.
        </p>,
        <p>
          It is a web-based wallet that allows you to send and receive tokens.
        </p>,
        <p>
          It integrates with the DFS Scan project to provide real-time
          transaction history and analytics directly within the wallet
          interface.
        </p>,
      ],
      domains: [
        "next.js",
        "typescript",
        "tailwind",
        "firebase",
        "dfs chain",
        "difines",
        "web2",
      ],
    },
    {
      name: "Micro Bitcoin Spin",
      date: "",
      link: "https://micro-spin.vercel.app/",
      imgUrl: "./images/projects/wbtc-spin.webp",
      description: [
        <p>マイクロビットコインの魅力</p>,
        <p>豊富なコンテンツが続々と誕生し、「使えるビットコイン」として</p>,
        <p>少額から使えるビットコインのマイクロペイメントとして</p>,
        <p>ビットコインの価格と常に連動している</p>,
        <p>100万分の1の価格だから買いやすく便利</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "meme",
        "burn",
        "burn to earn",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Burn To Earn",
      date: "",
      link: "https://burntoearn.net",
      imgUrl: "./images/projects/b2e.webp",
      description: [
        <p>
          Burn the token with low price and get the high price of token and make
          the profit
        </p>,
        <p>Burn the locked token and get the high price of token</p>,
        <p>Supports over 10+ meme coins</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "meme",
        "burn",
        "burn to earn",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Micro Bitcoin",
      date: "",
      link: "https://wbtc-landing.vercel.app/",
      imgUrl: "./images/projects/wbtc-lp.webp",
      description: [
        <p>
          Micro Bitcoin is a user-friendly cryptocurrency, represending
          one-millionth of of a Bitcoin
        </p>,
        <p>It offers the flexibility of a BEP-20 token</p>,
        <p>1,000,000 uBTC = 1 BTC</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "meme",
        "burn",
        "burn to earn",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Sato Pump",
      date: "",
      link: "https://satopump.fun",
      imgUrl: "./images/projects/sato-pump.webp",
      description: [
        <p>
          The First Multi-Functional Meme Coin DEX Platform & DEX Hub on the EVM
          Chain
        </p>,
        <p>Control the token environment freely</p>,
        <p>Enjoy your referral feature</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "XMR - Casnior Platform",
      date: "",
      link: "https://xmr.gg/",
      imgUrl: "./images/projects/casino.webp",
      description: [
        <p>
          Step into the thrill of winning with our sleek and secure online
          casino!
        </p>,
        <p>
          Enjoy a wide selection of games, from classic slots to exciting table
          games, all designed to bring the Vegas experience right to your
          screen.
        </p>,
        <p>
          With generous bonuses, fast payouts, and 24/7 support, it's time to
          elevate your gaming to a whole new level!
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Crash Landing",
      date: "",
      link: "https://crash-landing.vercel.app",
      imgUrl: "./images/projects/crashlanding.webp",
      description: [
        <p>Two token support, KKR and HMK</p>,
        <p>Burn one token and get same amount of another token</p>,
        <p>KAKERUNRUN and HIMEKAN story</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Gateway - Email Wallet",
      date: " - Mar 2024",
      link: "https://gateway.difines.io",
      imgUrl: "./images/projects/gateway.webp",
      description: [
        <p>Email wallet development</p>,
        <p>Create shop</p>,
        <p>Token transfer between emails, user to shop</p>,
      ],
      domains: [
        "Web3.js",
        "Wallet",
        "React.js",
        "TailwindCSS",
        "Typescript",
        "Crypto",
      ],
    },
    {
      name: "Roppongi Ai",
      date: " - Feb 2024",
      link: "https://roppongi-ai.netlify.app/",
      imgUrl: "./images/projects/roppongi-ai.webp",
      description: [
        <p>AI website development</p>,
        <p>Wordpress theme</p>,
        <p>Elementor Pro</p>,
      ],
      domains: ["Wordpress", "AI", "Elementor", "HTML", "CSS", "JavaScript"],
    },
    {
      name: "Plinko Lotto Dapp",
      date: " - Jan 2024",
      link: "https://plinko-lotto.netlify.app/",
      imgUrl: "./images/projects/plinko-lotto.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Roppongi Lotto Dapp",
      date: " - Jan 2024",
      link: "https://lotto-droplocker.netlify.app/",
      imgUrl: "./images/projects/roppongi-lotto.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Lucky Wheel Lotto Dapp",
      date: " - Feb 2024",
      link: "https://lucky-wheel-lotto.netlify.app/",
      imgUrl: "./images/projects/lucky-wheel.webp",
      description: [
        <p>Lotto game development</p>,
        <p>Blockchain game development</p>,
        <p>Lotto token integration</p>,
      ],
      domains: [
        "Dapp",
        "Lotto",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
      ],
    },
    {
      name: "Decent Reviews",
      date: " - Nov 2023",
      link: "https://www.linkedin.com/company/decentreviews/about/",
      imgUrl: "./images/projects/decent-reviews.webp",
      description: [
        <p>Worked on backend and smart contract develoment</p>,
        <p>
          Created the user review API, automatic review aggregation engine,
          automatic review logo generation engine
        </p>,
        <p>
          Integrated with smart contract using web3.js and synced with backend
        </p>,
        <p>
          Implemented the backend including database using cypress and jext
          testing library and finalize the API document using swagger API
          framework
        </p>,
      ],
      domains: [
        "Node.js",
        "Express.js",
        "Blockchain",
        "Solidity",
        "React.js",
        "Web3.js",
        "MongoDB",
        "CI/CD",
        "Github",
      ],
    },
    {
      name: "AI Play - Video Generator",
      date: " - Dec 2023",
      link: "https://ai-play.netlify.app/",
      imgUrl: "./images/projects/ai-video-generator.webp",
      description: [
        <p>Used D-ID API for generation video from image</p>,
        <p>Genrate AI video from image</p>,
        <p>Upload image</p>,
        <p>Choose voice, voice style and language</p>,
      ],
      domains: [
        "react.js",
        "css",
        "AI",
        "D-ID",
        "API integration",
        "animation",
        "video",
      ],
    },
    {
      name: "Speaking Girl AI",
      date: " - Nov 2023",
      link: "https://speakingai.difines.io",
      imgUrl: "./images/projects/ai-speaking-girl.webp",
      description: [
        <p>Use chatGPT</p>,
        <p>Use Microsoft Azure for TTS function</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "AI",
        "chatGPT",
        "microsoft",
        "tts",
      ],
    },
    {
      name: "SHIBUYA Ecosystem",
      date: " - Apr 2022",
      link: "https://shibuya.difines.io",
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
      name: "AIFX Platform",
      date: " - Dec 2023",
      link: "https://aifx.pepesushi.vip/",
      imgUrl: "./images/projects/aifx.webp",
      description: [
        <p>Forex trading real time data</p>,
        <p>A trade with a winning rate of 99.99% is guaranteed</p>,
        <p>No specialized knowledge or techniques are required</p>,
        <p>Easily start from Trial plan</p>,
        <p>Integrated with the blockchain for the crypto payment</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "AI",
        "trading",
        "crypto",
        "binance smart chain",
      ],
    },
    {
      name: "Staking Platform",
      date: " - Dec 2023",
      link: "https://stakes.difines.io",
      imgUrl: "./images/projects/stake-referral-reward.webp",
      description: [
        <p>Has 5 level referral system working on CEX</p>,
        <p>Staking with multiple tokens working on DEX</p>,
        <p>Re-staking, withdrawing and add-staking are possible</p>,
        <p>Strong reward system based on star earning for each actions</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "dex",
        "cex",
        "binance smart chain",
      ],
    },
    {
      name: "Token Bridge",
      date: " - Aug 2023",
      link: "https://bridgeone.netlify.app/bridge",
      imgUrl: "./images/projects/bridge.webp",
      description: [
        <p>Support the multichain token transfer</p>,
        <p>
          Created the bridge backend and bridge smart contract on ethereum and
          binance
        </p>,
        <p>Built with web3.js, react.js, node.js and solidity</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "bridge",
        "binance smart chain",
        "ethereum",
      ],
    },
    {
      name: "Web3.0 Chatting Platform - Fuji Chat",
      date: "",
      imgUrl: "./images/projects/chatfi.webp",
      link: "https://fujichat.vercel.app",
      description: [
        <p>Chat each other using wallet address</p>,
        <p>Create the group and invite people</p>,
        <p>Transfer token easily</p>,
        <p>Create the token airdrop and voting event</p>,
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
      name: "FC Marketplace",
      date: "",
      link: "https://fc-market.netlify.app/",
      imgUrl: "./images/projects/fcmarket.webp",
      description: [
        <p>
          Users can swap the crypto to real cash using this platform. We made
          the secure pool that user can deposit token to make a contract.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "firebase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "PEPE Sushi",
      date: "",
      link: "https://pepe-sushi.vercel.app/",
      imgUrl: "./images/projects/pepe-sushi.webp",
      description: [
        <p>
          PEPE SUSHI is a member of the PEPE family. The PEPE family loved sushi
          and wanted to become a sushi chef, so they came to learn the technique
          Japan. It also offers a service called The Messages, which will be a
          platform where the messages you post will be permanently recorded on
          the blockchain. Every time a message is posted, PEPES is inspired by
          mysterious tokens that burn indefinitely!
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "DEX Orderbook",
      date: "",
      link: "https://orderbook.pepesushi.vip",
      imgUrl: "./images/projects/dex-orderbook.webp",
      description: [
        <p>Dex orderbook platform</p>,
        <p>
          Support PEPE Bep20, PEPE Sushi, PEPE MSG and more than 11 meme tokens
        </p>,
        <p>Added TradinvView</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "PEPE Bep20 | Burn & Drop",
      date: "",
      link: "https://pepe.markets/",
      imgUrl: "./images/projects/burn_drop.webp",
      description: [
        <p>
          Burn & Drop is the service that burns and airdrop each token to make a
          token price rising up.
        </p>,
        <p>
          Support PEPE Bep20, PEPE Sushi, PEPE MSG and more than 11 meme tokens
        </p>,
        <p>PEPE Syndicate</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "binance smart chain",
      ],
    },
    {
      name: "Genogram",
      date: "",
      link: "https://genogram-gojs.netlify.app/",
      imgUrl: "./images/projects/genogram.webp",
      description: [
        <p>Genorgram using react.js and gojs</p>,
        <p>Generate the data from the database and editable by drag.</p>,
      ],
      domains: ["react.js", "gojs", "gosj-react", "html", "css"],
    },
    {
      name: "Food Website",
      date: "",
      link: "#",
      imgUrl: "./images/projects/food.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Dentist Website",
      date: "",
      link: "#",
      imgUrl: "./images/projects/dentist.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Fashion Website",
      date: "",
      link: "https://aura-fashion-theme.netlify.app/",
      imgUrl: "./images/projects/fashion.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Crypto Website",
      date: "",
      link: "https://crypto-aura-theme.netlify.app/",
      imgUrl: "./images/projects/crypto.webp",
      description: [<p>Website Theme Development</p>],
      domains: ["react", "html5", "scss", "javascript", "css3"],
    },
    {
      name: "Xocial Media App",
      date: "",
      link: "#",
      imgUrl: "./images/projects/xocial.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "PEPE MSG",
      date: "",
      link: "https://pepe-msg.vercel.app",
      imgUrl: "./images/projects/pepe-msg.webp",
      description: [
        <p>The Messages. Combining Meme culture with utility.</p>,
        <p>
          Experience the Fusion of Meme Coin and Social Media: Power Up Your
          Blockahin Experience!
        </p>,
        <p>
          $TBNB, $ARMY, and $MSG. $MSG is on Binance Smart Chain, while the
          others are on the testnet.
        </p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "ethers.js",
        "wallet connect",
        "metamask",
        "coinbase",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Token Faucet Platform",
      date: "",
      link: "https://faucet.themessages.xyz",
      imgUrl: "./images/projects/faucet.webp",
      description: [
        <p>ERC20 Token faucet platform</p>,
        <p>Binance smart chain tesetnet support</p>,
        <p>Time limitation implemented</p>,
      ],
      domains: [
        "react.js",
        "typescript",
        "scss",
        "web3.js",
        "solidity",
        "hardhat",
        "token",
        "binance smart chain",
      ],
    },
    {
      name: "Home Of 12V",
      date: "",
      imgUrl: "./images/projects/12v.webp",
      link: "#",
      description: [
        <p>Front end working</p>,
        <p>Mobile responsive using tailwindCSS and Next.js</p>,
      ],
      domains: ["next.js", "typescript", "tailwindCSS", "react.js", "netlify"],
    },
    {
      name: "Voice Emailer App",
      date: "",
      link: "#",
      imgUrl: "./images/projects/voice.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "Catch Me App",
      date: "",
      link: "#",
      imgUrl: "./images/projects/catch.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "NFT Marketplace",
      date: " - Aug 2022",
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
      name: "KOILLECTIBLE",
      date: " - Nov 2022",
      imgUrl: "./images/projects/koi.webp",
      link: "https://koi.difines.io",
      description: [
        <p>
          The platform that brings fundraising to the global stage by combining
          traditional web2 and the emerging web3 industries.
        </p>,
        <p>Koi fishes will be growing day by day</p>,
        <p>Change water function</p>,
        <p>
          Fish swimming speed will be decreased based on the weight growing day
          by day
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
      name: "NFT Marketplace (Bloodshed)",
      date: " - Dec 2019",
      imgUrl: "./images/projects/nftfront.webp",
      link: "#",
      description: [<p>Minting, Selling, Buying, Bidding, Listing NFTs</p>],
      domains: [
        "react.js",
        "scss",
        "node.js",
        "express.js",
        "mongodb",
        "ethers.js",
        "solidity",
        "truffle",
        "ethereum",
      ],
    },
    {
      name: "White Creator Token Minting Platform",
      date: "",
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
      date: "",
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
      name: "Electon JS Project",
      date: "",
      imgUrl: "./images/projects/movie-electron.webp",
      link: "#",
      description: [<p>ElectronJS</p>, <p>Tailwind</p>, <p>React.js</p>],
      domains: ["electronJS", "react.js", "tailwind"],
    },
    {
      name: "Guessing App",
      date: "",
      link: "#",
      imgUrl: "./images/projects/hairshop.webp",
      description: [<p>Mobile App Development</p>],
      domains: ["mobile", "ios", "ipad", "android"],
    },
    {
      name: "The Messages (record)",
      date: "",
      imgUrl: "./images/projects/message.webp",
      link: "https://record.themessages.xyz",
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
      name: "The Messages (booker)",
      date: "",
      imgUrl: "./images/projects/booker.webp",
      link: "https://bettor.pepesushi.vip",
      description: [
        <p>Post to earn web3 project</p>,
        <p>Integrated wallet connect, coinbase, metamask</p>,
        <p>Use the nft.storage SDK to save metadata</p>,
        <p>Post, Edit, Delete, Buy article</p>,
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
      date: "",
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
      date: "",
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
      date: " 2021",
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
    {
      name: "Facial Recognize",
      date: "",
      imgUrl: "./images/projects/facial-recognize.webp",
      link: "https://github.com/aiden77mori/facial-recognization",
      description: [
        <p>Face dectection project using face-api.js</p>,
        <p>API integration with react</p>,
        <p>Multi faces recognize possible</p>,
        <p>Recognize face using the camera</p>,
      ],
      domains: ["react.js", "face-api.js", "restful-api", "integration"],
    },
    {
      name: "Art Worker",
      date: "",
      imgUrl: "./images/projects/art.webp",
      link: "https://nft.difines.io/art",
      description: [
        <p>Photo Edition tools using fabric.js and react.js</p>,
        <p>Filter, Adjust, Overlay, Drawing functions</p>,
      ],
      domains: ["fabric.js", "react.js", "typescript", "nft"],
    },
    {
      name: "Album App",
      date: "",
      imgUrl: "./images/projects/app.webp",
      link: "#",
      description: [
        <p>Sign up by OTP</p>,
        <p>User can post images</p>,
        <p>Make friend</p>,
        <p>Social platform integration</p>,
        <p>Upload and edit image using uploadcare widget</p>,
        <p>Display address book of the mobile</p>,
      ],
      domains: [
        "ionic",
        "angular",
        "node.js",
        "express.js",
        "postgreSql",
        "scss",
      ],
    },
    {
      name: "Kingdom Battle",
      date: "",
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
      date: "",
      imgUrl: "./images/projects/worldspeed.webp",
      link: "https://hamadeco.jp/cargame/",
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
      date: "",
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
      date: "",
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
      date: "",
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
      date: "",
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
