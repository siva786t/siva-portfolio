import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background.webp';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import heroImage from "../images/react-resume-template-2.0.0.jpeg";

import heroImage from "../images/resume_bg8.jpeg";
// import heroImage from "../images/react-resume-template-2.0.0.jpg";
// import heroImage from "../images/Untitled.jpeg";
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// // import porfolioImage10 from '../images/portfolio/Siva_Image.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/portfolio/Siva_Image.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from "react";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Siva Portfolio',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sivasubramani T`,
  description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          As a <strong className="text-stone-100">Software Engineer at Zoho Corporation</strong>, I worked on the development of the Zoho Meeting product, a Video Conferencing Application.
          <strong className="text-stone-100"> I am the one managing and responsible for implementing new features in computer & phone audio and screen sharing components </strong> and also maintaining the existing codebase using technologies such as C/C++ and Java.
        </p>
      </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/uc?id=1Q0hLOlCScebXXLQCgQ5_W0MBR_rEv7Tz&export=download',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate and experienced C/C++ software developer with a strong background in system-level programming and algorithm design. 
  Proficient in optimizing code for performance and scalability, and skilled at debugging and troubleshooting complex issues. Have 5+ years of professional experience in C/C++ development.`,
  aboutItems: [
    {label: 'Location', text: 'Chennai (Tamilnadu), India', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cricket, Movies, Sports', Icon: SparklesIcon},
    {label: 'Study', text: 'SSN College of Engineering - Chennai', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Zoho Corporation Private Limited', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C/C++',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Technical Skills',
    skills: [

      {
        name: 'Data Structures & Algorithms',
        level: 9,
      },
      {
        name: 'Scaling & Design Pattern',
        level: 8,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'Freeswitch',
        level: 8,
      },
      {
        name: 'WebRTC',
        level: 8,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'Node JS',
        level: 4,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

// @ts-ignore
// @ts-ignore
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2012 - 2016',
    location: 'SSN college of Engineering (Chennai)',
    title: 'B.Tech, Chemical Engineering ',
    content: (<p>
      <div className = "font-bold  ">
        CGPA: 8.0 / 10.0
        <br/>
        <br/>
      </div>
      <div className = "font-bold">
        Coursework:
      </div>
      <div className = "text">
        Project management, Process design, Fluid Mechanics, Chemical Process Industries,
        Organic Chemistry, Heat Transfer Operations, Mass Transfer Operations, Chemical Engineering Thermodynamics.
      </div>
      <div className = " font-bold">
        <br />
      </div>
      <div className = "font-bold">
        Project : Conversion of Waste Cooking Oil to Biodiesel
      </div>
      <div className = "text">
        - Conducted research on the feasibility of converting waste cooking oil into biodiesel.<br/>
        - Designed and built a pilot plant for the conversion process.<br/>
        - Tested the quality and performance of the produced biodiesel.<br/>
        - Presented findings at a local conference RACEE.
      </div>
    </p>),
  },
  {
    date: '2011 - 2012',
    location: 'Sacred Heart Matriculation Higher Secondary School, Sholinganallur, Chennai',
    title: '12th Standard / Higher Secondary(HSC)',
    content: (
        <p>
      <div className = "font-bold  ">
        Percentage: 95%
        <br/>
        <br/>
      </div>
      <div className = "font-bold">
        Activities:
      </div>
      <div className = "text">
        - Ranked first in School Academic Exam, earned numerous academic awards and recognition.<br/>
        - Won the Senior State Level Throwball Competition in 2011, held at Karur. <br/>
        - Runner up in State Level Throwball Competition in 2010, held at Thirunelveli. <br/>
        - Participated in both cricket and track events at the district levels, demonstrating versatility & athleticism.<br/>
      </div>
      </p>),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2018 - Present',
    location: 'Zoho Corporation Private Limited',
    title: 'Member Technical Staff - Software Developer',
    content: (
        <p>
          <div className = "text">
            - Familiar with open source SIP and have worked with telephone providers TATA & Voxbone.
          </div>
          <div className = "text">
            - Developed screen sharing and audio modules in FreeSWITCH and implemented my own media server
          </div>
          <div className = "text-align: left">
            - Experience in developing real-time communication tools, including audio Fast Forwarding.<br/> - Developed Data Modification Tools using RTP samples and a Jitter Buffer.
          </div>
          <div className = "text">
            - Modified new protocols for team needs and developed an audio transmission layer over WebSocket.
          </div>
          <div className = "text">
            - Implemented an RTP filter algorithm to detect packet loss and enable dynamic changes in transmission.<br/> - Have converted video streams into JPEG images for improved quality. <br/> - Have experience in VP8, VP9, Opus, and H.264 codecs.
          </div>
          <div className = "text">
            - Worked with various transport layer protocols, including TCP, UDP, and WebSocket. <br/> - Have developed server monitoring tools & Fail2ban mechanism.
          </div>
          <div className = "text">
            - Have Experience in working on various features in both meeting and webinar modules.
          </div>
        </p>
    ),
  },
  {
    date: 'May 2016- April 2018',
    location: 'Tata Consultancy Services',
    title: 'System Engineer',
    content: (
        <p>
          <div className = "padding-left: 40px;">
            - Developer in a British Telecom project that designs and develops tools for Information service solutions.
          </div>
          <div className = "text">
            - Built a tool called Piper for designing media platforms.
          </div>
          <div className = "text-align: left">
            - Have experience in FTTP and network profiles
          </div>
          <div className = "text">
            -  Integrated the tools with other submodules
          </div>
        </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'siva786t@gmail.com',
      href: 'mailto:siva786t@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chennai, Tamilnadu, India.',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@siva_4.01',
      href: 'https://www.instagram.com/siva_4.01/',
    },
    {
      type: ContactType.Github,
      text: 'siva786t',
      href: 'https://github.com/siva786t',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/siva786t'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/20952272/siva786t'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sivasubramani-t-4ab50813a/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/siva_4.01/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://www.facebook.com/siva.subramani.786/'},
];
