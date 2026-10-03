
const { useState, useEffect } = React;

// -----------------------------------------------------------------------------
// 1. NAVBAR COMPONENT
// -----------------------------------------------------------------------------
function Navbar({ onOpenAdmin }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Courses", href: "#courses" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
    ];

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">
                <a href="#home" className="brand-logo" aria-label="Shiv - Home">
                    <span>{portfolioData.name}</span>
                    <span className="brand-dot" aria-hidden="true"></span>
                </a>

                {/* Desktop and Mobile Navigation Links */}
                <nav>
                    <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`} role="list">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.href}
                                    className="nav-link"
                                    onClick={handleNavClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-actions">
                    <button
                        className="btn-manage"
                        onClick={onOpenAdmin}
                        title="Manage projects and courses locally"
                        aria-label="Manage Portfolio Content"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        <span>Manage</span>
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

// -----------------------------------------------------------------------------
// 2. HERO COMPONENT (WITH ENHANCED LIGHTING & AMBIENCE)
// -----------------------------------------------------------------------------
function Hero() {
    return (
        <section id="home" className="hero">
            {/* Ambient Lighting Cones & Floating Orbs */}
            <div className="hero-ambient-spotlight" aria-hidden="true"></div>
            <div className="hero-ambient-orb hero-ambient-orb-1" aria-hidden="true"></div>
            <div className="hero-ambient-orb hero-ambient-orb-2" aria-hidden="true"></div>

            <div className="container hero-grid">

                {/* Hero Introduction & CTAs */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-pulse" aria-hidden="true"></span>
                        <span>{portfolioData.availability}</span>
                    </div>

                    <h1 className="hero-greeting">{portfolioData.heroGreeting}</h1>
                    <h2 className="hero-title">{portfolioData.title}</h2>
                    <p className="hero-description">{portfolioData.heroDescription}</p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View My Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Profile Photo Display with Glowing Halo */}
                <div className="hero-visual">
                    <div className="profile-card-wrapper">
                        <div className="profile-card-glow" aria-hidden="true"></div>
                        <div className="profile-image-container">
                            <img
                                src={portfolioData.profileImage}
                                alt={`Portrait of ${portfolioData.name}`}
                                className="profile-img"
                                loading="eager"
                            />
                            <div className="profile-info-pill">
                                <span className="profile-info-name">{portfolioData.name}</span>
                                <span className="profile-info-status">● Online</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 3. ABOUT COMPONENT (3 CARDS ONLY: Who I Am, What I Am Doing, How I Learn)
// -----------------------------------------------------------------------------
function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Background</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-desc">{aboutData.introduction}</p>
                </div>

                <div className="about-grid">
                    {aboutData.details.map((item, index) => (
                        <div key={index} className="about-card">
                            <h3 className="about-category">{item.category}</h3>
                            <p className="about-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 4. SKILLS COMPONENT
// -----------------------------------------------------------------------------
function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Expertise</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-desc">
                        A curated toolset I utilize to design, build, and optimize modern digital platforms.
                    </p>
                </div>

                <div className="skills-container">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="skill-pill">
                            <span className="skill-pill-dot" aria-hidden="true"></span>
                            <span>{skill.name}</span>
                            <span className="skill-category-tag">{skill.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 5. PROJECTS COMPONENT (1 FEATURED PROJECT)
// -----------------------------------------------------------------------------
function Projects({ projects }) {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Selected Works</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc">
                        A showcase of client work, digital stores, and web applications built with precision.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((proj) => (
                        <article key={proj.id} className="project-card">
                            <div className="project-image-box">
                                <img
                                    src={proj.image || "assets/project1.svg"}
                                    alt={proj.title}
                                    className="project-img"
                                    loading="lazy"
                                />
                                {proj.featured && (
                                    <span className="project-featured-badge">Featured</span>
                                )}
                            </div>

                            <div className="project-body">
                                <div className="project-meta">
                                    <span>Web Project</span>
                                    {proj.date && <span>{proj.date}</span>}
                                </div>
                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-desc">{proj.description}</p>

                                <div className="project-tech-tags">
                                    {proj.technologies && proj.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {proj.liveDemo && proj.liveDemo !== "#" && (
                                        <a
                                            href={formatSafeUrl(proj.liveDemo)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            <span>Live Demo</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                    {proj.github && proj.github !== "#" && (
                                        <a
                                            href={formatSafeUrl(proj.github)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-btn"
                                        >
                                            <span>GitHub</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 6. COURSES & CERTIFICATIONS COMPONENT
// -----------------------------------------------------------------------------
function Courses({ courses }) {
    return (
        <section id="courses" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Learning & Growth</span>
                    <h2 className="section-title">Courses & Certifications</h2>
                    <p className="section-desc">
                        Formal certifications and specialized training programs I have completed.
                    </p>
                </div>

                <div className="courses-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="course-card">
                            <div className="course-thumbnail">
                                <img
                                    src={course.image || "assets/course1.svg"}
                                    alt={`${course.title} certificate thumbnail`}
                                    className="course-img"
                                    loading="lazy"
                                />
                            </div>

                            <div className="course-body">
                                <div className="course-platform-row">
                                    <span>{course.platform}</span>
                                    {course.date && <span>{course.date}</span>}
                                </div>
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-desc">{course.description}</p>

                                {course.certificate && course.certificate !== "#" && (
                                    <a
                                        href={formatSafeUrl(course.certificate)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="course-cert-link"
                                    >
                                        <span>View Credential</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 7. EXPERIENCE & ACHIEVEMENTS COMPONENT
// -----------------------------------------------------------------------------
function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Milestones</span>
                    <h2 className="section-title">Experience & Achievements</h2>
                    <p className="section-desc">
                        A timeline of my professional journey and milestone accomplishments.
                    </p>
                </div>

                <div className="experience-timeline">
                    {experienceData.map((item, index) => (
                        <div key={index} className="timeline-card">
                            <div className="timeline-period">{item.period}</div>
                            <h3 className="timeline-role">{item.role}</h3>
                            <div className="timeline-org">{item.organization}</div>
                            <p className="timeline-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 8. CONTACT COMPONENT ("Let's Work Together")
// -----------------------------------------------------------------------------
function Contact() {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(portfolioData.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(formData.subject || "Project Inquiry")}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-desc">
                        Have a project idea, e-commerce brand, or custom web design in mind? Let's connect.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Details & Social Links */}
                    <div className="contact-info-card">
                        <h3 className="contact-info-title">Direct Inquiries</h3>
                        <p className="contact-info-text">
                            I am currently open to freelance design/development contracts, consulting, and full-time opportunities.
                        </p>

                        <div className="contact-direct-email">
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <a href={formatSafeUrl(portfolioData.email, "email")} className="nav-link" style={{ fontWeight: 600 }}>
                                    {portfolioData.email}
                                </a>
                            </div>

                            <button
                                className="btn-copy-email"
                                onClick={handleCopyEmail}
                                title="Copy email address"
                            >
                                {copied ? (
                                    <span>✓ Copied!</span>
                                ) : (
                                    <span>Copy Email</span>
                                )}
                            </button>
                        </div>

                        {/* Social Links Row (Auto-formatted) */}
                        <div className="contact-social-icons">
                            {socialLinks.github && socialLinks.github !== "#" && (
                                <a href={formatSafeUrl(socialLinks.github)} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub" aria-label="GitHub">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                            )}
                            {socialLinks.linkedin && socialLinks.linkedin !== "#" && (
                                <a href={formatSafeUrl(socialLinks.linkedin)} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn" aria-label="LinkedIn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            )}
                            {socialLinks.instagram && socialLinks.instagram !== "#" && (
                                <a href={formatSafeUrl(socialLinks.instagram)} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram" aria-label="Instagram">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                            )}
                            {socialLinks.twitter && socialLinks.twitter !== "#" && (
                                <a href={formatSafeUrl(socialLinks.twitter)} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="X / Twitter" aria-label="X / Twitter">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                                </a>
                            )}
                            {socialLinks.youtube && socialLinks.youtube !== "#" && (
                                <a href={formatSafeUrl(socialLinks.youtube)} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube" aria-label="YouTube">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                </a>
                            )}
                            {portfolioData.email && (
                                <a href={formatSafeUrl(portfolioData.email, "email")} className="social-icon-btn" title="Send Direct Email" aria-label="Send Direct Email">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Interactive Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-name">Your Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                className="form-input"
                                placeholder="e.g. Alex Miller"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-email">Your Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                className="form-input"
                                placeholder="name@domain.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                className="form-input"
                                placeholder="Project inquiry / Collaboration"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your goals, timeline, and requirements..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                            Send Message
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                        <span className="form-helper">
                            * Clicking Send will draft an email to {portfolioData.email} with your message.
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
}

// -----------------------------------------------------------------------------
// 9. CLIENT-SIDE CONTENT MANAGER (ADMIN MODAL)
// -----------------------------------------------------------------------------
function AdminModal({ isOpen, onClose, projects, setProjects, courses, setCourses }) {
    const [activeTab, setActiveTab] = useState("projects");
    const [editMode, setEditMode] = useState(false);

    const [projectForm, setProjectForm] = useState({
        id: "",
        title: "",
        description: "",
        image: "",
        technologies: "",
        github: "",
        liveDemo: "",
        date: "2026",
        featured: false
    });

    const [courseForm, setCourseForm] = useState({
        id: "",
        title: "",
        platform: "",
        description: "",
        image: "",
        certificate: "",
        date: "2026"
    });

    if (!isOpen) return null;

    const handleProjectImageFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProjectForm(prev => ({ ...prev, image: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCourseImageFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setCourseForm(prev => ({ ...prev, image: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProject = (e) => {
        e.preventDefault();
        const techArray = typeof projectForm.technologies === "string"
            ? projectForm.technologies.split(",").map(t => t.trim()).filter(Boolean)
            : projectForm.technologies;

        let updatedList;
        if (projectForm.id) {
            updatedList = projects.map(p => p.id === projectForm.id ? { ...projectForm, technologies: techArray } : p);
        } else {
            const newProj = {
                ...projectForm,
                id: "proj-" + Date.now(),
                technologies: techArray,
                image: projectForm.image || "assets/project1.svg"
            };
            updatedList = [newProj, ...projects];
        }

        setProjects(updatedList);
        persistProjects(updatedList);
        setEditMode(false);
        setProjectForm({ id: "", title: "", description: "", image: "", technologies: "", github: "", liveDemo: "", date: "2026", featured: false });
    };

    const handleDeleteProject = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            const updated = projects.filter(p => p.id !== id);
            setProjects(updated);
            persistProjects(updated);
        }
    };

    const startEditProject = (proj) => {
        setProjectForm({
            ...proj,
            technologies: Array.isArray(proj.technologies) ? proj.technologies.join(", ") : proj.technologies
        });
        setEditMode(true);
    };

    const handleSaveCourse = (e) => {
        e.preventDefault();
        let updatedList;
        if (courseForm.id) {
            updatedList = courses.map(c => c.id === courseForm.id ? { ...courseForm } : c);
        } else {
            const newCourse = {
                ...courseForm,
                id: "course-" + Date.now(),
                image: courseForm.image || "assets/course1.svg"
            };
            updatedList = [newCourse, ...courses];
        }

        setCourses(updatedList);
        persistCourses(updatedList);
        setEditMode(false);
        setCourseForm({ id: "", title: "", platform: "", description: "", image: "", certificate: "", date: "2026" });
    };

    const handleDeleteCourse = (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            const updated = courses.filter(c => c.id !== id);
            setCourses(updated);
            persistCourses(updated);
        }
    };

    const startEditCourse = (course) => {
        setCourseForm({ ...course });
        setEditMode(true);
    };

    const handleResetAll = () => {
        if (window.confirm("Reset all projects and courses back to the original default examples?")) {
            resetPortfolioData();
            setProjects(defaultProjects);
            setCourses(defaultCourses);
            setEditMode(false);
            alert("Portfolio content reset to original defaults!");
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <div>
                        <h2 className="modal-title">Content Manager (localStorage)</h2>
                        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                            Instant client-side updates saved directly in your browser.
                        </span>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
                </div>

                <div className="modal-tabs">
                    <button
                        className={`modal-tab-btn ${activeTab === "projects" ? "active" : ""}`}
                        onClick={() => { setActiveTab("projects"); setEditMode(false); }}
                    >
                        Projects ({projects.length})
                    </button>
                    <button
                        className={`modal-tab-btn ${activeTab === "courses" ? "active" : ""}`}
                        onClick={() => { setActiveTab("courses"); setEditMode(false); }}
                    >
                        Courses & Certifications ({courses.length})
                    </button>
                </div>

                <div className="modal-body">
                    {/* PROJECTS TAB */}
                    {activeTab === "projects" && (
                        <div>
                            {!editMode ? (
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                        <span style={{ fontWeight: 600 }}>Active Projects</span>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                setProjectForm({ id: "", title: "", description: "", image: "", technologies: "", github: "", liveDemo: "", date: "2026", featured: false });
                                                setEditMode(true);
                                            }}
                                        >
                                            + Add New Project
                                        </button>
                                    </div>

                                    {projects.map(proj => (
                                        <div key={proj.id} className="admin-list-item">
                                            <div>
                                                <div className="admin-item-title">{proj.title}</div>
                                                <div className="admin-item-sub">
                                                    {Array.isArray(proj.technologies) ? proj.technologies.join(", ") : proj.technologies} • {proj.date}
                                                </div>
                                            </div>
                                            <div className="admin-item-actions">
                                                <button className="btn btn-secondary btn-sm" onClick={() => startEditProject(proj)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProject(proj.id)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <form onSubmit={handleSaveProject} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <h4 style={{ fontWeight: 600 }}>{projectForm.id ? "Edit Project" : "Add New Project"}</h4>

                                    <div className="form-group">
                                        <label className="form-label">Project Name *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            required
                                            value={projectForm.title}
                                            onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Description *</label>
                                        <textarea
                                            className="form-textarea"
                                            rows="3"
                                            required
                                            value={projectForm.description}
                                            onChange={e => setProjectForm({ ...projectForm, description: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Technologies (comma separated)</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="HTML, CSS, JavaScript, React"
                                            value={projectForm.technologies}
                                            onChange={e => setProjectForm({ ...projectForm, technologies: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Project Image (File upload or Image URL)</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="form-input"
                                            onChange={handleProjectImageFile}
                                        />
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Or enter path / URL e.g. assets/project1.svg"
                                            value={projectForm.image}
                                            onChange={e => setProjectForm({ ...projectForm, image: e.target.value })}
                                            style={{ marginTop: "6px" }}
                                        />
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                        <div className="form-group">
                                            <label className="form-label">Live Demo URL</label>
                                            <input
                                                type="url"
                                                className="form-input"
                                                placeholder="https://..."
                                                value={projectForm.liveDemo}
                                                onChange={e => setProjectForm({ ...projectForm, liveDemo: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">GitHub Repository URL</label>
                                            <input
                                                type="url"
                                                className="form-input"
                                                placeholder="https://github.com/..."
                                                value={projectForm.github}
                                                onChange={e => setProjectForm({ ...projectForm, github: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                        <div className="form-group" style={{ width: "120px" }}>
                                            <label className="form-label">Year/Date</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={projectForm.date}
                                                onChange={e => setProjectForm({ ...projectForm, date: e.target.value })}
                                            />
                                        </div>
                                        <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", cursor: "pointer", marginTop: "18px" }}>
                                            <input
                                                type="checkbox"
                                                checked={projectForm.featured}
                                                onChange={e => setProjectForm({ ...projectForm, featured: e.target.checked })}
                                            />
                                            Featured project badge
                                        </label>
                                    </div>

                                    <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                                        <button type="submit" className="btn btn-primary btn-sm">Save Project</button>
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditMode(false)}>Cancel</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}

                    {/* COURSES TAB */}
                    {activeTab === "courses" && (
                        <div>
                            {!editMode ? (
                                <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                        <span style={{ fontWeight: 600 }}>Active Courses</span>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => {
                                                setCourseForm({ id: "", title: "", platform: "", description: "", image: "", certificate: "", date: "2026" });
                                                setEditMode(true);
                                            }}
                                        >
                                            + Add New Course
                                        </button>
                                    </div>

                                    {courses.map(course => (
                                        <div key={course.id} className="admin-list-item">
                                            <div>
                                                <div className="admin-item-title">{course.title}</div>
                                                <div className="admin-item-sub">{course.platform} • {course.date}</div>
                                            </div>
                                            <div className="admin-item-actions">
                                                <button className="btn btn-secondary btn-sm" onClick={() => startEditCourse(course)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <form onSubmit={handleSaveCourse} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <h4 style={{ fontWeight: 600 }}>{courseForm.id ? "Edit Course" : "Add New Course"}</h4>

                                    <div className="form-group">
                                        <label className="form-label">Course / Certification Title *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            required
                                            value={courseForm.title}
                                            onChange={e => setCourseForm({ ...courseForm, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Platform / Organization *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="e.g. Udemy, Coursera, Meta"
                                            required
                                            value={courseForm.platform}
                                            onChange={e => setCourseForm({ ...courseForm, platform: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-textarea"
                                            rows="3"
                                            value={courseForm.description}
                                            onChange={e => setCourseForm({ ...courseForm, description: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Certificate Image (File upload or URL)</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="form-input"
                                            onChange={handleCourseImageFile}
                                        />
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Or enter path / URL e.g. assets/course1.svg"
                                            value={courseForm.image}
                                            onChange={e => setCourseForm({ ...courseForm, image: e.target.value })}
                                            style={{ marginTop: "6px" }}
                                        />
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                        <div className="form-group">
                                            <label className="form-label">Certificate Link</label>
                                            <input
                                                type="url"
                                                className="form-input"
                                                placeholder="https://..."
                                                value={courseForm.certificate}
                                                onChange={e => setCourseForm({ ...courseForm, certificate: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Completion Date</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={courseForm.date}
                                                onChange={e => setCourseForm({ ...courseForm, date: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                                        <button type="submit" className="btn btn-primary btn-sm">Save Course</button>
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditMode(false)}>Cancel</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    <button className="btn btn-danger btn-sm" onClick={handleResetAll}>
                        Reset to Defaults
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={onClose}>
                        Done
                    </button>
                </div>

            </div>
        </div>
    );
}

// -----------------------------------------------------------------------------
// 10. FOOTER COMPONENT
// -----------------------------------------------------------------------------
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-copy">
                    &copy; {currentYear} {portfolioData.name}. All rights reserved. Built with clean code & modern design.
                </div>
                <a href="#home" className="footer-back-top" aria-label="Back to top">
                    <span>Back to Top</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </a>
            </div>
        </footer>
    );
}

// -----------------------------------------------------------------------------
// MAIN APP ROOT
// -----------------------------------------------------------------------------
function App() {
    const [projects, setProjects] = useState(() => loadSavedProjects());
    const [courses, setCourses] = useState(() => loadSavedCourses());
    const [adminOpen, setAdminOpen] = useState(false);

    return (
        <div className="portfolio-wrapper">
            <Navbar onOpenAdmin={() => setAdminOpen(true)} />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects projects={projects} />
                <Courses courses={courses} />
                <Experience />
                <Contact />
            </main>

            <Footer />

            <AdminModal
                isOpen={adminOpen}
                onClose={() => setAdminOpen(false)}
                projects={projects}
                setProjects={setProjects}
                courses={courses}
                setCourses={setCourses}
            />
        </div>
    );
}

// Mount the React Application to #root
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
