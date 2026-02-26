import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Server,
  Terminal,
  Cpu,
  Download,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Moon,
  Sun,
  GraduationCap,
  Briefcase,
  Brain,
  Activity,
  Layers
} from 'lucide-react';

// --- Data Section ---

const PERSONAL_INFO = {
  name: "Sujeet Madihalli",
  title: "Data Scientist | Machine Learning Engineer",
  email: "sujeetmadihalli@gmail.com",
  location: "College Park, MD",
  linkedin: "https://www.linkedin.com/in/sujeet-madihalli/",
  github: "https://github.com/sujeetmadihalli/",
  about: "Master's student in Data Science at UMD with 4+ years of engineering experience. I specialize in building scalable ML pipelines, automating complex data workflows, and deploying predictive models into production. My background in Cloud Operations allows me to bridge the gap between model development and reliable deployment (MLOps).",
  resumeLink: process.env.PUBLIC_URL + "/Docs/Sujeet_Madihalli_Technical.pdf"
};

const EXPERIENCE = [
  {
    id: 1,
    company: "Oracle",
    role: "Cloud Operations Engineer (Data & Automation)",
    period: "Jun 2024 - Aug 2025",
    location: "Bangalore, India",
    description: [
      "Engineered Python-based ETL pipelines to automate data reporting, achieving a 25% gain in data-driven efficiency.",
      "Developed anomaly detection scripts to proactively identify irregularities in SaaS platform logs (CRMOD, OTM), reducing manual investigation time by 10+ hours/week.",
      "Optimized cloud infrastructure reliability by implementing automated health checks and self-healing scripts."
    ]
  },
  {
    id: 2,
    company: "Subex Ltd",
    role: "Senior Software Engineer",
    period: "Aug 2021 - May 2024",
    location: "Bangalore, India",
    description: [
      "Architected Python/Shell automation suites for large-scale telecom datasets, reducing manual data processing effort by 70%.",
      "Designed proactive monitoring frameworks to detect data stream anomalies, improving resolution time by 40%.",
      "Collaborated on production-grade data pipelines, ensuring high availability and integrity of analytics workflows."
    ]
  },
  {
    id: 3,
    company: "Verzeo",
    role: "Machine Learning Intern",
    period: "May 2019 - July 2019",
    location: "Bangalore, India",
    description: [
      "Built a Facial Emotion Recognition model using TensorFlow and Haar Cascade classifiers, achieving 92% accuracy.",
      "Developed an NLP-based text summarization tool leveraging NLTK for efficient information retrieval.",
      "Gained hands-on experience with Computer Vision and Natural Language Processing pipelines."
    ]
  }
];

const EDUCATION = [
  {
    school: "University of Maryland, College Park",
    degree: "Master of Science in Data Science",
    period: "Aug 2025 - May 2027",
    gpa: "4.0/4.0",
    coursework: "Probability & Statistics, Principles of ML, Big Data Systems, Algorithms for Data Science"
  },
  {
    school: "KLS Gogte Institute of Technology",
    degree: "B.E. Computer Science",
    gpa: "3.7/4.0",
    period: "Graduated 2021",
    details: "Senior Project: Automated Timetable Generation using Genetic Algorithms (reduced scheduling time by 95%)."
  }
];

const SKILLS = [
  { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "NLTK", "Pandas", "NumPy"], icon: <Brain size={20} /> },
  { category: "Data Engineering", items: ["ETL Pipelines", "Hadoop", "Spark", "SQL", "Big Data Systems", "Data Wrangling"], icon: <Database size={20} /> },
  { category: "MLOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Google Cloud Run", "Oracle Cloud (OCI)", "Git"], icon: <Cloud size={20} /> },
  { category: "Programming", items: ["Python", "Java", "Bash/Shell", "JavaScript", "SQL"], icon: <Code size={20} /> }
];

const PROJECTS = [
  {
    id: 1,
    title: "Distributed Multi-Agent Decision Engine",
    category: "Machine Learning",
    tags: ["FastAPI", "vLLM", "Redpanda", "Ray RLlib", "Qdrant", "GKE"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    description: "Architected a staff-level distributed system for real-time event streaming and semantic reasoning. Features an LLM orchestrator for routing, an embedded vector DB for context retrieval, and Ray RLlib agents for highly optimized decision making.",
    links: { github: "https://github.com/sujeetmadihalli/distributed-decision-engine", demo: null }
  },
  {
    id: 2,
    title: "BuildingBobs — Construction AI Platform",
    category: "AI Algorithms",
    tags: ["OpenCV", "Gemini API", "Ollama", "Streamlit", "Pandas"],
    image: "https://images.unsplash.com/photo-1541888081692-a1b5590cceea?q=80&w=1000&auto=format&fit=crop",
    description: "End-to-end AI pipeline that ingests construction site video feeds to generate qualitative insights and quantitative metrics. Utilizes an OpenCV vision pipeline and multimodal LLMs to compute a Universal Efficiency Score on a Streamlit dashboard.",
    links: { github: "https://github.com/sujeetmadihalli/Hackathon_BuilderBobs", demo: "https://hackathonbuilderbobs.streamlit.app" }
  },
  {
    id: 3,
    title: "U.S. Flight Delay Prediction",
    category: "Machine Learning",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Cloud Run"],
    image: "https://images.unsplash.com/photo-1436491865332-7a6153217e3a?q=80&w=1000&auto=format&fit=crop",
    description: "End-to-end classification model predicting flight delays using FAA data. Engineered features from large-scale datasets, tuned hyperparameters for high precision, and deployed via serverless container.",
    links: { github: "https://github.com/sujeetmadihalli/flight-delay-ml", demo: null }
  },
  {
    id: 4,
    title: "Facial Emotion Detection",
    category: "Computer Vision",
    tags: ["TensorFlow", "OpenCV", "Deep Learning"],
    image: "images/FacialEmoDec.png",
    description: "Real-time emotion recognition system utilizing deep learning. Optimized inference pipeline to process webcam input with 92% accuracy.",
    links: { github: "#", demo: null }
  },
  {
    id: 5,
    title: "Autonomous Car (Q-Learning)",
    category: "Machine Learning",
    tags: ["Q-Learning", "Reinforcement Learning", "Python", "PyGame"],
    image: "images/q-learning-car.png",
    description: "Trained an autonomous agent to navigate a complex environment using Q-Learning reinforcement learning algorithms.",
    links: { github: "https://github.com/sujeetmadihalli/q-learning-car", demo: "https://sujeetmadihalli.github.io/q-learning-car/" }
  },
  {
    id: 6,
    title: "Automated Time-Table Generation",
    category: "AI Algorithms",
    tags: ["Genetic Algorithms", "Python", "Optimization"],
    image: "images/TimeTableGen.png",
    description: "Constraint satisfaction system using Genetic Algorithms to autonomously generate conflict-free schedules. Reduced administrative overhead by 95%.",
    links: { github: "https://github.com/sujeetmadihalli/Automated_TimeTable_Generation", demo: null }
  },
  {
    id: 7,
    title: "Heart Rate & Workout Analysis",
    category: "Data Science",
    tags: ["Regression", "Time-Series", "Analytics"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    description: "Predictive regression model analyzing the relationship between workout intensity and resting heart rate using time-series fitness data.",
    links: { github: "https://github.com/sujeetmadihalli/CardioSense", demo: null }
  },
  {
    id: 8,
    title: "Project Handbook (Internal Portal)",
    category: "Data Engineering",
    tags: ["Django", "Predictive Analytics", "Docker"],
    image: "images/ProjectHandbook.png",
    description: "Internal data portal with integrated predictive analytics for monthly server usage patterns, enabling proactive capacity planning.",
    links: { github: "#", demo: null }
  },
  {
    id: 9,
    title: "Expense Tracker",
    category: "Full Stack",
    tags: ["Django", "SQLite", "Data Viz"],
    image: "images/ExpenseTracker.png",
    description: "Personal finance tool with data visualization features to track expenses and filter historical data by category.",
    links: { github: "https://github.com/sujeetmadihalli/ExpenseTracker", demo: null }
  }
];

const CERTIFICATIONS = [
  { name: "OCI 2024 Gen AI Professional", issuer: "Oracle", link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4F298D536D25AE69A99904E3E1B551733AF025C27FBB744794CE14F037CDC2D1" },
  { name: "Machine Learning Specialization", issuer: "Coursera (Univ of Washington)", link: "https://www.coursera.org/account/accomplishments/specialization/LNP8M7V8LRPN" },
  { name: "OCI 2023 AI Certified Foundations Associate", issuer: "Oracle", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E2A121E0BE24CA9BF23FEC69082FBDE99FF1A5A422CB94F34B87FF778B24742E" },
  { name: "MTA: Intro to Programming (Python)", issuer: "Microsoft", link: "https://www.dropbox.com/scl/fi/lgr358orl1use6ih3xwy0/MTA_Python.pdf?rlkey=x1q6hd1kubp1tznpdu3ozemjk&e=1&dl=0" }
];

// --- Helper Components ---

// 1. Scroll Reveal Component
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 2. Typewriter Effect
const Typewriter = ({ text, delay = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

// 3. 3D Tilt Card Component
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative transform transition-transform duration-200 ease-out preserve-3d h-full"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500 rounded-xl"
        style={{ opacity }}
      />
    </div>
  );
};

// --- Main Sections ---

const Navigation = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? isDark ? 'bg-slate-950/80 shadow-lg backdrop-blur-md py-4' : 'bg-white/80 shadow-lg backdrop-blur-md py-4'
      : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#about" className={`text-2xl font-bold tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
          SM<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-all hover:scale-105 ${isDark ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all transform hover:rotate-180 ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDark ? 'text-yellow-400' : 'text-slate-600'
              }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden absolute w-full border-t shadow-2xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ isDark }) => (
  <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <RevealOnScroll>
        <div className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase shadow-lg transition-shadow ${isDark
          ? 'border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-blue-900/20'
          : 'border-blue-200 bg-blue-50 text-blue-600 shadow-blue-100'
          }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Ready for Summer 2026 Internships
        </div>
      </RevealOnScroll>

      <div className="min-h-[80px] md:min-h-[120px]">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <Typewriter text={PERSONAL_INFO.name} delay={70} />
        </h1>
      </div>

      <RevealOnScroll delay={500}>
        <h2 className={`text-xl md:text-3xl mb-8 font-light flex items-center justify-center gap-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          {PERSONAL_INFO.title}
        </h2>
        <p className={`max-w-2xl mx-auto mb-10 text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {PERSONAL_INFO.about}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/50">
            View ML Projects
          </a>
          <a
            href={PERSONAL_INFO.resumeLink}
            download
            className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 border group ${isDark
              ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
              : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm'
              }`}
          >
            <Download size={18} className="group-hover:animate-bounce" /> Download Resume
          </a>
        </div>

        {/* Tech Stack Marquee visual element */}
        <div className={`mt-16 pt-8 border-t ${isDark ? 'border-slate-800/50' : 'border-slate-200/50'}`}>
          <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Core Technologies</p>
          <div className={`flex flex-wrap justify-center gap-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            <span className="hover:text-blue-500 transition-colors">Python</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-500 transition-colors">TensorFlow</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-500 transition-colors">PyTorch</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-500 transition-colors">Docker</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-500 transition-colors">SQL</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-500 transition-colors">AWS</span>
          </div>
        </div>
      </RevealOnScroll>
    </div>

    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer transition-colors ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'}`}>
      <a href="#experience"><ChevronDown size={32} /></a>
    </div>
  </section>
);

const Experience = ({ isDark }) => (
  <section id="experience" className={`py-24 relative overflow-hidden ${isDark ? '' : 'bg-slate-50/50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <RevealOnScroll>
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <Briefcase className="text-blue-500" /> Professional Experience
        </h2>
      </RevealOnScroll>

      <div className={`space-y-12 border-l-2 ml-4 md:ml-8 pl-8 md:pl-12 relative ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        {EXPERIENCE.map((job, idx) => (
          <RevealOnScroll key={job.id} delay={idx * 100}>
            <div className="relative group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full border-4 group-hover:scale-125 transition-all duration-300 ${isDark
                ? 'bg-slate-900 border-blue-600 group-hover:border-blue-400'
                : 'bg-white border-blue-600 group-hover:border-blue-500'
                }`}></div>

              <div className={`p-8 rounded-xl border transition-all duration-300 ${isDark
                ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-none'
                : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm'
                }`}>
                <div className="flex flex-col md:flex-row justify-between mb-4 md:items-center">
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'}`}>{job.role}</h3>
                    <p className="text-blue-500 font-medium text-lg">{job.company}</p>
                  </div>
                  <div className={`flex flex-col items-start md:items-end text-sm mt-2 md:mt-0 font-mono gap-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.description.map((desc, i) => (
                    <li key={i} className={`text-sm leading-relaxed flex items-start gap-3 transition-colors ${isDark ? 'text-slate-300 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-800'
                      }`}>
                      <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const Education = ({ isDark }) => (
  <section id="education" className={`py-24 relative overflow-hidden ${isDark ? '' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <RevealOnScroll>
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <GraduationCap className="text-emerald-500" /> Education
        </h2>
      </RevealOnScroll>

      <div className={`space-y-12 border-l-2 ml-4 md:ml-8 pl-8 md:pl-12 relative ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        {EDUCATION.map((edu, idx) => (
          <RevealOnScroll key={idx} delay={idx * 100}>
            <div className="relative group">
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full border-4 group-hover:scale-125 transition-all duration-300 ${isDark
                ? 'bg-slate-900 border-emerald-500 group-hover:border-emerald-400'
                : 'bg-white border-emerald-500 group-hover:border-emerald-400'
                }`}></div>

              <div className={`p-8 rounded-xl border transition-all duration-300 ${isDark
                ? 'bg-slate-900/50 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900'
                : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-xl shadow-sm'
                }`}>
                <div className="flex flex-col md:flex-row justify-between mb-4 md:items-center">
                  <div>
                    <h3 className={`text-xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-emerald-600'}`}>{edu.school}</h3>
                    <p className="text-emerald-500 font-medium text-lg">{edu.degree}</p>
                  </div>
                  <div className={`text-sm mt-2 md:mt-0 font-mono flex items-center gap-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    <Calendar size={14} /> {edu.period}
                  </div>
                </div>
                {edu.gpa && (
                  <p className={`text-sm mb-3 inline-block px-2 py-1 rounded border ${isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-emerald-50 border-emerald-100 text-emerald-700'
                    }`}>
                    GPA: <span className="font-semibold">{edu.gpa}</span>
                  </p>
                )}
                {edu.coursework && <p className={`text-sm italic mb-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}><span className="text-emerald-500 font-semibold not-italic">Coursework:</span> {edu.coursework}</p>}
                {edu.details && <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{edu.details}</p>}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const Skills = ({ isDark }) => (
  <section id="skills" className={`py-24 relative ${isDark ? '' : 'bg-slate-50/50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <RevealOnScroll>
        <h2 className={`text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <Cpu className="text-blue-500" /> Technical Skills
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <RevealOnScroll key={skillGroup.category} delay={idx * 100}>
            <div className={`h-full p-6 rounded-xl border transition-all duration-300 group hover:-translate-y-2 ${isDark
              ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50'
              : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg shadow-sm'
              }`}>
              <div className="flex items-center gap-3 mb-6 text-blue-400 group-hover:text-blue-300">
                <div className={`p-3 rounded-lg transition-colors ${isDark ? 'bg-slate-800 group-hover:bg-blue-500/10' : 'bg-blue-50 group-hover:bg-blue-100'
                  }`}>
                  {skillGroup.icon}
                </div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all cursor-default hover:shadow-lg hover:shadow-blue-600/20 ${isDark
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-blue-500 hover:text-white hover:border-blue-500'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ isDark }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Machine Learning', 'Data Engineering', 'Computer Vision', 'Full Stack'];

  // Helper to loosely match categories if they don't match exactly
  const filterProjects = (projects, category) => {
    if (category === 'All') return projects;
    return projects.filter(p => {
      if (p.category === category) return true;
      // Fallback for 'Machine Learning' to include 'AI Algorithms' or 'Computer Vision' if desired, 
      // but here we keep strict or adjust as needed.
      return false;
    });
  };

  const filteredProjects = filterProjects(PROJECTS, filter);

  return (
    <section id="projects" className={`py-24 relative ${isDark ? '' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <h2 className={`text-3xl md:text-4xl font-bold flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Brain className="text-blue-500" /> Projects
            </h2>

            <div className={`flex flex-wrap gap-2 p-1.5 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${filter === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : isDark
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 100}>
              <TiltCard>
                <div className={`h-full rounded-xl overflow-hidden border group flex flex-col shadow-xl transition-colors duration-300 ${isDark
                  ? 'bg-slate-900 border-slate-800 hover:border-blue-500/30'
                  : 'bg-white border-slate-200 hover:border-blue-400'
                  }`}>
                  <div className={`h-48 overflow-hidden relative ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200/1e293b/cbd5e1?text=Project+Preview' }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-80 ${isDark ? 'from-slate-900 via-transparent to-transparent' : 'from-white via-transparent to-transparent'
                      }`}></div>
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-full text-xs text-blue-300 font-medium">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                      }`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-6 flex-1 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-1 rounded-md border ${isDark
                          ? 'text-blue-200 bg-blue-900/20 border-blue-900/50'
                          : 'text-blue-700 bg-blue-50 border-blue-200'
                          }`}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className={`flex gap-4 mt-auto pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}>
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors ml-auto">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ isDark }) => (
  <section id="contact" className={`py-32 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
    {/* Background elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
      <RevealOnScroll>
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Ready to Collaborate?</h2>
        <p className={`text-lg mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          I'm actively seeking Summer 2026 internships in Data Science and Cloud Operations.
          Let's discuss how I can contribute to your team with reliable cloud infrastructure and ML pipelines.
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/50"
        >
          <Mail size={20} /> Get In Touch
        </a>
      </RevealOnScroll>
    </div>
  </section>
);

const Footer = ({ isDark }) => (
  <footer className={`py-8 border-t relative z-10 ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'}`}>
    <div className={`max-w-7xl mx-auto px-4 text-center text-sm ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>
      <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      <p className="mt-2 flex items-center justify-center gap-2">
        Built with <Code size={12} /> React & Tailwind CSS
      </p>
    </div>
  </footer>
);

// --- Background Animation Component ---
const AnimatedBackground = ({ isDark }) => {
  return (
    <div className="fixed inset-0 -z-10 transition-colors duration-500" style={{
      background: isDark ? '#020617' : '#f8fafc'
    }}>
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15), transparent 50%), radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.1), transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 50%), radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.1), transparent 50%)',
          animation: 'pulse 10s ease-in-out infinite alternate'
        }}
      />

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  // Theme State
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'selection:bg-blue-500/30 selection:text-blue-200' : 'selection:bg-blue-200 selection:text-blue-900'
      }`}>

      <AnimatedBackground isDark={isDark} />

      {/* Interactive Spotlight (Subtle) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${isDark ? 'rgba(29, 78, 216, 0.07)' : 'rgba(59, 130, 246, 0.05)'
            }, transparent 80%)`
        }}
      />

      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <Experience isDark={isDark} />
      <Education isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      {/* Certifications reused logic from Education/Experience style or kept simple */}
      <section className={`py-24 relative border-t ${isDark ? 'border-slate-900 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <h2 className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>Certifications</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <a href={cert.link} className={`block p-6 rounded-xl border transition-all group h-full ${isDark
                  ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80'
                  : 'bg-slate-50 border-slate-200 hover:border-emerald-500 hover:shadow-lg'
                  }`}>
                  <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isDark
                    ? 'bg-slate-800 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white'
                    : 'bg-white text-emerald-600 border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white'
                    }`}>
                    <ExternalLink size={20} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-emerald-700'
                    }`}>{cert.name}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{cert.issuer}</p>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;