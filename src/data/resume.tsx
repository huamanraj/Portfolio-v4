import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";


export const DATA = {
  name: "Aman Raj",
  initials: "",
  url: "https://aman-raj.xyz",
  location: "Jaipur, IN",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Full-Stack Developer and Open-Source Contributor. I thrive on solving problems, building scalable applications, and mentoring others.",
  summary:
    "I am a passionate full-stack developer pursuing my B.Tech in Computer Science and Engineering at SKIT, Jaipur. With a focus on efficient and scalable web applications, I’ve worked on impactful projects like real-time chat apps and innovative tools such as GitHub README generators. I’ve also contributed to open-source initiatives as a mentor for GSSoC and a Campus Leader for Code4GovTech.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "JavaScript",
    "Appwrite",
    "Firebase",
    "AWS",
    "MongoDB",
    "Tailwind CSS",
    "Material UI",
    "Figma",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amanraj12.ar@gmail.com",
    tel: "+91 8051733380",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/huamanraj",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/huamanraj/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/huamanraj",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Instagram",
        url: "https://www.instagram.com/https.amanraj",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "amanraj12.ar@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "TeleWell",
      href: "https://www.linkedin.com/company/telewell7/",
      badges: [],
      location: "Remote",
      title: " Full Stack Developer Intern",
      logoUrl: "/telewell.jpeg",
      start: "Feb 2025",
      end: "Now",
      description:
        "Developed the Telewell consultation portal and Telewell Yoga platform. Implemented telemedicine features, including prescription management, video calls, and payment gateway integration. Optimized web application engagement in collaboration with the marketing team. Debugged and enhanced code for performance and scalability.",
    },
    {
      company: "Automatically Enterprise",
      badges: [],
      href: "https://automatically.cc/",
      location: "Remote",
      title: "Software Development Intern",
      logoUrl:
        "https://www.automatically.cc/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FautomaticallyLogo.39600f8d.png&w=384&q=75",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "Built and deployed backend services using AWS Lambda and API Gateway to manage real-time ride bookings for the Taxio app. Optimized UI responsiveness and integrated APIs for real-time booking updates using Flutter. Designed key UI components in Figma, enhancing app consistency and user experience.",
    },
    {
      company: "Code for GovTech (C4GT)",
      href: "http://codeforgovtech.in/",
      badges: [],
      location: "Remote",
      title: "Campus Leader",
      logoUrl: "https://codeforgovtech.in/wp-content/uploads/2024/01/logo.webp",
      start: "Nov 2024",
      end: "Now",
      description:
        "As a Campus Leader, I drive excitement around Digital Public Goods (DPGs) and open-source projects by organizing hackathons, speaker sessions, and engaging events. I create and share compelling content to promote the concept of tech for good while receiving the necessary tools and guidance to succeed. With the freedom to bring my own ideas to life, I foster a vibrant community around DPGs on campus.",
    },
    {
      company: "GirlScript Foundation",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Open Source Mentor - GSSOC 24",
      logoUrl: "https://gssoc.girlscript.tech/GS_logo_Black.svg",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Mentored multiple students, reviewed pull requests, conducted regular one-on-one sessions with mentees, and contributed to the success of the GSSoC program by helping students build practical skills and a strong foundation in open source contributions.",
    },
    {
      company: "Incubation Cell, SKIT Jaipur",
      href: "https://li.me/",
      badges: [],
      location: "SKIT Jaipur, RJ",
      title: "Web Development Team Lead",
      logoUrl: "https://www.skit.ac.in/images/headers/skit_logo.png",
      start: "May 2023",
      end: "Dec 2023",
      description:
        "Led a team in building scalable web applications using React, Appwrite, and Firebase, integrating secure user authentication and cloud storage. Mentored junior developers, fostering best practices in coding, UI/UX design, and agile workflows to enhance project efficiency and quality.",
    },
  ],
  education: [
    {
      school:
        "Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur, Rajasthan",
      href: "https://www.skit.ac.in/",
      degree:
        "Bachelor of Techonology in Computer Science and Engineering(IOT)",
      logoUrl: "https://www.skit.ac.in/images/headers/skit_logo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "SS College, Hawaspur, Samastipur",
      href: "",
      degree: "11th & 12th (Science)",
      logoUrl:
        "https://static.vecteezy.com/system/resources/previews/006/788/494/non_2x/university-college-logo-open-book-symbol-of-knowledge-and-education-university-library-and-school-logotype-template-illustration-vector.jpg",
      start: "2021",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Visit Logger",
      href: "https://visitlogger.aman-raj.xyz/",
      dates: "Feb 2025",
      active: true,
      description:
        "Built a lightweight, real-time website analytics tool with dynamic script generation. Tracks visitor data with minimal setup and provides instant insights.",
      technologies: ["Node.js", "React", "Appwrite", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://visitlogger.aman-raj.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/huamanraj/visitLogger-Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/visitlog.png",
      video: "",
    },
    {
      title: "FitBites",
      href: "https://fitbites.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "Transform Your Health with AI-Powered Nutrition - Your all-in-one solution for personalized diet planning and daily nutrition tracking. Features AI-generated meal plans, calorie tracking, and personalized recommendations based on health goals.",
      technologies: ["React", "TailwindCSS", "Appwrite", "Gemini API", "PWA"],
      links: [
        {
          type: "Website",
          href: "https://fitbites.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/huamanraj/FitBites",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fitbites.png",
      video: "",
    },

    {
      title: "Promptly",
      href: "https://promptly.aman-raj.xyz/",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "An AI-powered platform that generates text and images with Pollination AI. Features smooth animations, a clean UI, and SEO optimization to make content shine.",
      technologies: [
        "React 19",
        "Framer Motion",
        "Tailwind CSS",
        "Pollination AI",
        "React Markdown & Syntax Highlighter",
        "React Helmet",
      ],
      links: [
        {
          type: "Website",
          href: "https://promptly.aman-raj.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/huamanraj/Promptly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/promptly.png",
      video: "",
    },

    {
      title: "Mind Mosaic",
      href: "https://mind-mosaic-blogs.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "A comprehensive blogging platform integrating React and Appwrite. Features modern UI components, user authentication, and a rich text editor for blog management.",
      technologies: ["React", "Redux", "Appwrite", "tinyMCE", "Tailwind CSS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/mind-mosaic",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://mind-mosaic-blogs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg",
      video: "",
    },
    {
      title: "BuzzSphere",
      href: "https://buzz-sphere.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "A multi-user chat platform with real-time messaging, password-protected rooms, emoji support, and chat history loading.",
      technologies: [
        "React",
        "Appwrite",
        "Appwrite Realtime",
        "Tailwind CSS",
        "Vite",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/huamanraj/BuzzSphere",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://buzz-sphere.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/buzz.png",
      video: "",
    },
    {
      title: "SnapDrop",
      href: "https://snapdrop.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "A modern and secure file-sharing web app with customizable expiry and short links.",
      technologies: ["React", "Appwrite", "Tailwind CSS", "Vite"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/huamanraj/SnapDrop",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://snapdrop.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/snapdrop.png",
      video: "",
    },
    {
      title: "QuoteCanvas AI",
      href: "https://quotecanvasai.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "A customizable AI-powered quote image creator for social media posts.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Vite",
        "Google Gemini API",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/huamanraj/QuoteCanvasAI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://quotecanvasai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/quotecan.png",
      video: "",
    },
    {
      title: "AI GitHub README Generator",
      href: "https://githubreadmegenerator.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "An AI-powered GitHub README generator using OpenAI API to create professional README files.",
      technologies: ["React.js", "Node.js", "Express.js", "OpenAI API"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/huamanraj?tab=repositories&q=readme-gen&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live Demo",
          href: "https://githubreadmegenerator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png",
      video: "",
    },
    {
      title: "Sharma Interior Website",
      href: "https://www.sharmainteriors.xyz/",
      dates: "Ongoing",
      active: true,
      description:
        "A Next.js and Framer Motion webpage for Sharma Interiors, a small interior design company.",
      technologies: ["Next.js", "Framer Motion", "Email.js", "Tailwind CSS"],
      links: [
        {
          type: "Live Demo",
          href: "https://www.sharmainteriors.xyz/",
        },
      ],
      image: "/sharmaint.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
