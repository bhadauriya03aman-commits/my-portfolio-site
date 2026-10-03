



// 1. PERSONAL INFORMATION  

const portfolioData = {
    name: "Shiv",
    title: "Webflow & Shopify Developer | Problem Solver",
    heroGreeting: "Hi, I'm Shiv",
    heroDescription: "A freelance web developer specializing in websites that not only look great but feel intuitive. I focus on Webflow, Shopify, and custom code to build digital experiences that reflect the unique identity of every brand.",
    profileImage: "profile.jpg", // Stored in the same folder as Shiv.html
    email: "bhadauriya.03.aman@gmail.com", // Your real email address
    location: "Available Worldwide",

};



// 2. SOCIAL MEDIA LINKS
// Simply paste your link or username!


const socialLinks = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://www.instagram.com/_thakuramanbhadauriya?stkn=aHQ0cXU5ZnMwZDd0&utm_source=qr",
    twitter: "https://x.com/",
    youtube: "https://youtube.com/",
    email: "bhadauriya.03.aman@gmail.com" // Just your email here
};



// 3. ABOUT ME DETAILS  
const aboutData = {
    introduction: "I am a dedicated web developer passionate about crafting minimal, lightning-fast, and user-centric websites. I merge creative design thinking with clean, maintainable engineering.",
    details: [
        {
            category: "Who I Am",
            content: "A passionate developer driven by curiosity, design precision, and building digital products that make a lasting impression."
        },
        {
            category: "What I Am Doing",
            content: "Crafting modern Webflow websites, custom Shopify e-commerce stores, responsive web applications, and fast frontends with bespoke interactions."
        },
        {
            category: "How I Learn",
            content: "Constantly exploring advanced frontend architectures, modern frameworks, interactive web animations, and algorithmic problem solving."
        }
    ]
};



// 4. SKILLS SECTION 

const skillsData = [
    { name: "Webflow", category: "Design & CMS" },
    { name: "Shopify", category: "E-Commerce" },
    { name: "HTML5 / Semantic HTML", category: "Core Web" },
    { name: "CSS3 / Modern Layouts", category: "Core Web" },
    { name: "JavaScript (ES6+)", category: "Programming" },
    { name: "React", category: "Frontend" },
    { name: "C++", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Web Development", category: "Core" },
    { name: "Responsive Design", category: "Design" },
    { name: "Problem Solving", category: "Core" }
];



// 5. DEFAULT PROJECTS (1 FEATURED PROJECT)

const defaultProjects = [
    {
        id: "proj-1",
        title: "Modern E-Commerce Store",
        description: "A high-converting, bespoke Shopify & custom code shopping experience featuring dynamic cart drawer, fast catalog filtering, and smooth page transitions.",
        image: "assets/project1.svg",
        technologies: ["HTML", "REACT", "JavaScript", "CSS3"],
        github: "https://github.com",
        liveDemo: "https://jansetu-jharkhand-2-o.onrender.com/",
        date: "2026",
        featured: true
    }
];



// 6. DEFAULT COURSES & CERTIFICATIONS (EDIT HERE)
const defaultCourses = [
    {
        id: "course-1",
        title: "The Complete 2026 Web Development Bootcamp",
        platform: "Udemy / Angela Yu",
        description: "Comprehensive training covering full-stack web development, modern frontend standards, responsive architectures, and developer tooling.",
        image: "assets/course1.svg",
        certificate: "https://udemy.com",
        date: "2026"
    },
    {
        id: "course-2",
        title: "Advanced React & Component Architecture",
        platform: "Frontend Masters & Coursera",
        description: "Deep dive into reactive state design, performant component lifecycles, accessible UI patterns, and modern client-side rendering.",
        image: "assets/course2.svg",
        certificate: "https://coursera.org",
        date: "2026"
    }
];



// 7. EXPERIENCE & ACHIEVEMENTS (EDIT HERE)

const experienceData = [
    {
        period: "2025 - Present",
        role: "Freelance Web Developer",
        organization: "Independent Client Engagements",
        description: "Developing custom brand websites, high-performing Shopify themes, and Webflow landing pages with intuitive UX, 98+ PageSpeed scores, and tailored brand identities."
    },
    {
        period: "2024 - 2025",
        role: "Frontend Development & Open Source",
        organization: "Self-Directed Projects & Community",
        description: "Engineered responsive modern UI components, collaborated on GitHub repositories, and solved algorithmic challenges in C++ and JavaScript."
    }
];



// 8. SMART LINK FORMATTER HELPER


function formatSafeUrl(url, type = "url") {
    if (!url || typeof url !== "string") return "#";
    let trimmed = url.trim();
    if (!trimmed || trimmed === "#") return "#";

    // Handle email
    if (type === "email" || trimmed.includes("@") && !trimmed.startsWith("http")) {
        return trimmed.startsWith("mailto:") ? trimmed : `mailto:${trimmed}`;
    }

    // Handle web links
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("mailto:")) {
        return trimmed;
    }

    return `https://${trimmed}`;
}


// 9. CLIENT-SIDE CONTENT STORAGE (LOCALSTORAGE)

const STORAGE_KEYS = {
    PROJECTS: "shiv_portfolio_projects_v2",
    COURSES: "shiv_portfolio_courses_v2"
};

// Retrieve projects from localStorage or fallback to defaults
function loadSavedProjects() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("Unable to load projects from localStorage; using defaults.", e);
    }
    return defaultProjects;
}

// Save projects to localStorage
function persistProjects(projectsArray) {
    try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projectsArray));
        return true;
    } catch (e) {
        console.error("Error saving projects to localStorage", e);
        return false;
    }
}

// Retrieve courses from localStorage or fallback to defaults
function loadSavedCourses() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.COURSES);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("Unable to load courses from localStorage; using defaults.", e);
    }
    return defaultCourses;
}

// Save courses to localStorage
function persistCourses(coursesArray) {
    try {
        localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(coursesArray));
        return true;
    } catch (e) {
        console.error("Error saving courses to localStorage", e);
        return false;
    }
}

// Reset data back to default values
function resetPortfolioData() {
    try {
        localStorage.removeItem(STORAGE_KEYS.PROJECTS);
        localStorage.removeItem(STORAGE_KEYS.COURSES);
        return true;
    } catch (e) {
        console.error("Error resetting data", e);
        return false;
    }
}

//menu bar
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("active");
        });
    });
});

//email copied

copyBtn.onclick = () => {
    navigator.clipboard.writeText(document.getElementById("displayEmail").textContent);
    copyBtn.textContent = "✓ Copied";
    copyBtn.style.color = "#22c55e";

    setTimeout(() => {
        copyBtn.textContent = "Copy Email";
        copyBtn.style.color = "";
    }, 2000);
};

