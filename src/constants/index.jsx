export const ABOUT = 'Software Engineer, Flutter Developer & AI Specialist with 1+ years of real working experience developing and maintaining large-scale production mobile applications with 100k+ downloads (Jogja Smart Service at Diskominfosan Kota Yogyakarta). Certified TensorFlow Developer proficient in Flutter, Dart, Python, TensorFlow, Scikit-Learn, OpenCV, and PyTorch. Proven track record in mobile app lifecycle management, AI chatbot integration, and machine learning systems. Experienced in collaborating across disciplines to deliver robust, user-centric software solutions.'

export const EXPERIENCES = [
    {
        role: 'Software Engineer (Flutter Developer)',
        company: 'Dinas Komunikasi Informatika dan Persandian Kota Yogyakarta',
        badge: '1 Year Exp • 100k+ Downloads',
        description: '1+ years of real working experience developing and maintaining the Jogja Smart Service (JSS) mobile application for iOS and Android with 100k+ downloads. Leading mobile feature development, bug fixes, performance optimizations, and integration of the JSS AI Chatbot. Collaborating closely with Business Analysts and Information System Designers to deliver impactful digital public services.',
        descripction: '1+ years of real working experience developing and maintaining the Jogja Smart Service (JSS) mobile application for iOS and Android with 100k+ downloads. Leading mobile feature development, bug fixes, performance optimizations, and integration of the JSS AI Chatbot. Collaborating closely with Business Analysts and Information System Designers to deliver impactful digital public services.',
        year: 'Aug 2025 – Present',
        skills: ['Flutter', 'Dart', '100k+ Downloads', 'iOS & Android', 'AI Chatbot', 'State Management', 'Cross-functional Collaboration'],
        link: 'https://kominfosan.jogjakota.go.id/'
    },
    {
        role: 'Software Engineer Intern (Machine Learning Specialization)',
        company: 'PT. Stechoq Robotika Indonesia',
        description: 'Develop a system for Pan Flute based device with Artificial Intelligence. Integrate data communication from system to the Festo PLC via UDP Port. Successfully became one of the projects showcased in front of “Menteri Sekretaris Negara” and “Menteri Koordinator Bidang Kemaritiman” of the Indonesia Maju Cabinet.',
        descripction: 'Develop a system for Pan Flute based device with Artificial Intelligence. Integrate data communication from system to the Festo PLC via UDP Port. Successfully became one of the projects showcased in front of “Menteri Sekretaris Negara” and “Menteri Koordinator Bidang Kemaritiman” of the Indonesia Maju Cabinet.',
        year: 'Feb 2024 – Jun 2024',
        skills: ['Streamlit', "Spotify's Basic Pitch", 'UDP', 'Festo PLC', 'Teamwork'],
        link: 'https://stechoq.com'
    },
    {
        role: 'Project Manager Intern',
        company: 'PT. Stechoq Robotika Indonesia',
        description: 'Lead multi-disciplinary team to achieve goals by applying the Agile Framework. Revise and approve the budget plan or bill of materials for the project, with mentors and general affair.',
        descripction: 'Lead multi-disciplinary team to achieve goals by applying the Agile Framework. Revise and approve the budget plan or bill of materials for the project, with mentors and general affair.',
        year: 'Feb 2024 – Jun 2024',
        skills: ['Leadership', 'Agile Scrum', 'Bill of Materials', 'Teamwork'],
        link: 'https://stechoq.com'
    },
    {
        role: 'Laboratory Assistant & Coordinator',
        company: 'Universitas Pembangunan Nasional “Veteran” Yogyakarta',
        description: 'Taught and assisted practicums with a total of 9 different practicums, ranging from technical programming to managerial and enterprise information systems. Served as Coordinator of Laboratory Assistants (Jul 2022 - Dec 2022) to establish lecture contracts, revise practicum modules, and monitor all practicums.',
        descripction: 'Taught and assisted practicums with a total of 9 different practicums, ranging from technical programming to managerial and enterprise information systems. Served as Coordinator of Laboratory Assistants (Jul 2022 - Dec 2022) to establish lecture contracts, revise practicum modules, and monitor all practicums.',
        year: 'Feb 2022 – Jun 2024',
        skills: ['C++', 'Flutter', 'Java', 'IT Project Management', 'Requirement Engineering', 'Team Coordination'],
        link: 'http://upnyk.ac.id/'
    },
    {
        role: 'Microsoft Azure AI Specialization',
        company: 'elevAIte (Fresh Graduate Academy) by DigiTalent Scholarship',
        description: 'Develop digital solutions through Microsoft Azure AI services.',
        descripction: 'Develop digital solutions through Microsoft Azure AI services.',
        year: 'May 2025 – Jun 2025',
        skills: ['Azure AI', 'Cloud AI', 'Machine Learning'],
        link: 'https://digitalent.kominfo.go.id/'
    },
    {
        role: 'Google Cloud Platform AI Specialization',
        company: 'Juara GCP Season 11 by Google Developer Community',
        description: 'Develop AI solution through Cloud Platform and Vertex AI.',
        descripction: 'Develop AI solution through Cloud Platform and Vertex AI.',
        year: 'Feb 2025 – Mar 2025',
        skills: ['Google Cloud Platform', 'Vertex AI', 'Cloud AI'],
        link: 'https://cloud.google.com/'
    },
    {
        role: 'Machine Learning Cohort',
        company: 'Bangkit Academy 2023 led by Google, Tokopedia, Gojek, & Traveloka',
        description: 'Develop machine learning model and implement to mobile based application using TensorFlow Lite. Created CaloryIn mobile app with food nutrition image recognition as capstone project.',
        descripction: 'Develop machine learning model and implement to mobile based application using TensorFlow Lite. Created CaloryIn mobile app with food nutrition image recognition as capstone project.',
        year: 'Feb 2023 – Aug 2023',
        skills: ['TensorFlow Lite', 'Deep Learning', 'Machine Learning', 'Python'],
        link: 'https://grow.google/intl/id_id/bangkit/?tab=machine-learning'
    },
    {
        role: 'Google Data Analytics Specialization',
        company: 'Baparekrat Digital Talent Scholarship',
        description: 'Learn data analytics specialization from data cleaning to data-driven decision making.',
        descripction: 'Learn data analytics specialization from data cleaning to data-driven decision making.',
        year: 'Oct 2022 – Dec 2022',
        skills: ['Data Cleaning', 'Data Analysis', 'Data Visualization', 'Data Driven Decision Making'],
        link: 'https://bdd.kemenparekraf.go.id/'
    },
]

import cctvImage from '../assets/images/cctv.png';
import vemdImage from '../assets/images/vemd.png';
import caloryinImage from '../assets/images/caloryin.png';
import portfolioAiImage from '../assets/images/portfolio-ai.svg';
import hrAnalyticsImage from '../assets/images/hr-analytics.svg';

export const PROJECTS = [
    {
        title: 'CCTV Auto Attendance',
        image: cctvImage,
        description: 'Developed auto attendance system using RTSP-based input with Haar Cascade and FaceNet, achieving 89.92% accuracy.',
        skills: ['Python', 'Django', 'RTSP', 'OpenCV', 'PyTorch', 'Haar Cascade', 'FaceNet', 'YOLOv8'],
        link: 'https://github.com/iamfeizal/django-cctv-auto-attendance-system'
    },
    {
        title: 'Portfolio Website with AI Assistant',
        image: portfolioAiImage,
        description: 'Developed a personalized portfolio website integrated with an AI-powered chatbot assistant to enable real-time, interactive conversations with recruiters through a customized dialogue experience.',
        skills: ['JavaScript', 'React JS', 'Gemini API', 'LLM', 'Vite', 'Tailwind CSS'],
        link: 'https://github.com/iamfeizal/react-portfolio'
    },
    {
        title: 'Human Resource Analytics Dashboard',
        image: hrAnalyticsImage,
        description: 'Built a data-driven HR analytics dashboard and predictive machine learning model to identify key factors influencing employee attrition, enabling strategic actions to reduce churn and improve workforce retention.',
        skills: ['Python', 'Jupyter Notebook', 'Metabase', 'PostgreSQL', 'Deep Learning', 'TensorFlow', 'Scikit-Learn'],
        link: 'https://github.com/iamfeizal'
    },
    {
        title: 'CaloryIn',
        image: caloryinImage,
        description: 'Created mobile app that classifies food images and retrieves nutrition data using image recognition. Integrated TensorFlow Lite for inference on-device. Final capstone project for Bangkit Academy.',
        skills: ['Python', 'Jupyter Notebook', 'TensorFlow', 'MobileNetV2', 'Google Cloud Platform (GCP)'],
        link: 'https://github.com/CaroluceRickyHarkrisN/CaloryIn'
    },
    {
        title: 'VEMD Pan Flute',
        image: vemdImage,
        description: 'Built an AI-powered Pan Flute device that detects pitch from audio input using Spotify\'s Basic-Pitch model, processes it with a custom algorithm, and transmits data via UDP to a PLC.',
        skills: ['Python', 'Streamlit', 'Spotify\'s Basic-Pitch', 'UDP', 'PLC'],
        link: 'https://github.com/iamfeizal/streamlit-vemd-pan-flute-nayanika'
    },
]

export const CONTACT = {
    address: 'Klaten, Central Java, Indonesia.',
    email: 'imamagusfaisal120@gmail.com'
}