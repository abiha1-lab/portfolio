const Views = {
    home: () => `
        <section id="hero" class="container">
            <!-- Intro Section: Bio & Profile Pic -->
            <div class="hero-intro" style="padding: 4rem 0 0 0; display: flex; justify-content: center; align-items: stretch; gap: 8rem;">
                <div style="flex: 1; min-width: 0; display: flex; flex-direction: column;">
                    <h1 style="font-size: 4rem; margin-bottom: 1rem; color: var(--color-accent); line-height: 1.1;">Hello, I'm <br><span style="color: var(--color-text-main);">${portfolioData.profile.name}.</span></h1>
                    <h2 style="font-size: 1.5rem; color: var(--color-text-muted); margin-bottom: 2rem; font-weight: 500;">${portfolioData.profile.title}</h2>
                    <p style="font-size: 1.15rem; margin-bottom: 2.5rem; color: var(--color-text-muted); line-height: 1.6; max-width: 700px; flex: 1;">${portfolioData.profile.tagline}</p>
                    <div style="display: flex; gap: 1rem;">
                        <a href="#projects" class="btn-primary">View My Work</a>
                        <a href="#contact" class="btn-primary" style="background: transparent; border: 1px solid var(--color-accent); color: var(--color-accent)!important;">Get in Touch</a>
                    </div>
                </div>
                <div class="hero-image" style="flex: 0 0 400px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 0.5rem 0;">
                    <img src="${portfolioData.about.profileImage}" alt="${portfolioData.profile.name}" style="width: 270px; height: 270px; object-fit: cover; border-radius: 50%; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); border: 8px solid var(--color-bg-alt);">
                    <div style="text-align: center; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; width: 100%; display: flex; flex-direction: column; gap: 0.15rem;">
                        <div style="white-space: nowrap;">PhD Medical Technology</div>
                        <div style="white-space: nowrap;">Indian Institute of Technology (IIT) Jodhpur, Rajasthan, India</div>
                        <div style="white-space: nowrap;">All India Institute of Medical Sciences (AIIMS) Jodhpur, Rajasthan, India</div>
                    </div>
                    
                    <a href="#philosophy" style="text-decoration: none; display: block; width: 100%; margin-top: 2rem;">
                        <div style="background: var(--color-bg-alt); padding: 1rem; border-radius: 8px; border: 1px solid var(--color-border); text-align: center; transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.borderColor='var(--color-accent)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.borderColor='var(--color-border)'; this.style.transform='translateY(0)';">
                            <span style="color: var(--color-accent); font-weight: 600; font-family: var(--font-serif); font-size: 1.1rem; letter-spacing: 0.5px;">"How I Think"</span>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Operating Principles Horizontal Strip -->
            <div style="margin-top: 5rem; margin-bottom: 2rem; width: 100%;">
                <h3 class="section-title">My Product Operating Principles</h3>
                <div class="principles-scroll-container" style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); padding: 2rem 0; overflow: hidden; position: relative; width: calc(100% + 4rem); margin-left: -2rem;">
                    <div class="principles-track" style="display: flex; gap: 6rem; width: fit-content; animation: scroll 50s linear infinite;">
                        <!-- Duplicated for seamless loop -->
                        ${[...portfolioData.operatingPrinciples, ...portfolioData.operatingPrinciples].map(principle => `
                            <div style="display: flex; align-items: center; gap: 1.5rem; flex-shrink: 0;">
                                <span style="font-size: 2.5rem; font-weight: 900; color: var(--color-accent); font-family: var(--font-serif); opacity: 0.15; line-height: 1;">${principle.id}</span>
                                <span style="font-size: 1.2rem; font-weight: 700; color: var(--color-text-main); white-space: nowrap; font-family: var(--font-serif);">${principle.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

            <!-- Updates & Impact Section: Aligned Row -->
            <div class="hero-updates-row" style="margin-top: 3rem; display: flex; justify-content: center; gap: 8rem; align-items: flex-start;">
                <!-- Latest Updates Column -->
                <div style="flex: 1; min-width: 0;">
                    <h3 class="section-title">Latest Updates</h3>
                    <div class="card-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">
                        ${portfolioData.news.slice(0, 2).map(item => `
                            <a href="#news" class="card-link" style="text-decoration: none; color: inherit; display: block;">
                                <div class="card" style="margin: 0; cursor: pointer;">
                                    <div class="card-date">${item.date}</div>
                                    <div class="card-title">${item.title}</div>
                                    <div class="card-desc">${item.summary}</div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Impact Highlight Column: Stretches to match -->
                <div style="flex: 0 0 400px; display: flex; flex-direction: column;">
                    <h3 class="section-title" style="visibility: hidden;">Impact</h3> <!-- Hidden title for alignment -->
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 1rem;">
                        <div style="flex: 1; min-height: 0;">
                            <img src="${portfolioData.home.impactHighlight.image}" alt="Impact Highlight" 
                                style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px -5px rgba(0,0,0,0.1);">
                        </div>
                        <p style="color: var(--color-text-muted); font-size: 1rem; line-height: 1.6; text-align: center; margin: 0;">
                            ${portfolioData.home.impactHighlight.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,

    about: () => `
        <section class="container fade-in">
            <h2 class="section-title">About Me</h2>
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem;">
                <div>
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <img src="${portfolioData.about.profileImage}" alt="${portfolioData.profile.name}" style="width: 220px; height: 220px; object-fit: cover; border-radius: 50%; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin: 0 auto 1.5rem auto; border: 4px solid var(--color-bg-alt); display: block;">
                        <h3 style="font-size: 2rem; color: var(--color-text-main); margin: 0 0 0.5rem 0;">${portfolioData.profile.name}</h3>
                        <p style="color: var(--color-accent); font-weight: 500; font-size: 1.1rem; margin: 0;">${portfolioData.profile.title}</p>
                    </div>
                    ${portfolioData.about.bio.map(p => `<p style="text-align: justify; margin-bottom: 1rem; line-height: 1.8;">${p}</p>`).join('')}
                </div>
                <div>
                    <h3>Skills</h3>
                    <ul style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${portfolioData.about.skills.map(skill => `
                            <li style="background: var(--color-border); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem;">${skill}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            <div style="margin-top: 4rem; width: 100%;">
                <h3 class="section-title">My Product Operating Principles</h3>
                <div class="card-grid" style="margin-top: 2rem; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                    ${portfolioData.operatingPrinciples.map(principle => `
                        <div class="card" style="display: flex; gap: 1rem; align-items: flex-start;">
                            <div class="card-date" style="font-size: 1.5rem; color: var(--color-accent); margin-bottom: 0; line-height: 1;">${principle.id}</div>
                            <p class="card-desc" style="font-weight: 600; color: var(--color-text-main); margin-bottom: 0;">${principle.text}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,

    publications: () => {
        const categories = [
            { id: "Cluster I", title: "I. Diagnostic Signal Modeling & Clinical Performance Engineering" },
            { id: "Cluster II", title: "II. Disease Mechanisms & Clinical Systems Intelligence" },
            { id: "Cluster III", title: "III. Computational & Systems Architecture Frameworks" }
        ];

        return `
            <section class="container fade-in">
                <h2 class="section-title">Peer-reviewed Publications</h2>
                
                <!-- Preamble -->
                <div style="margin-bottom: 4rem; padding: 2rem; background: var(--color-bg-alt); border-radius: 12px; border-left: 5px solid var(--color-accent);">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-text-main);">Research Foundation Behind My Clinical System Architecture</h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 1rem;">
                        My research examines biological systems across scales, from molecular pathways and disease mechanisms to optical signal behavior and computational modeling.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 1rem;">
                        Spanning immunology, nanomedicine, bioinformatics, and multi-site diagnostic validation, my work examines how biological variability can be quantified, modeled, and translated into clinically reliable technologies.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); margin: 0;">
                        This interdisciplinary foundation forms the scientific backbone of my approach to AI-enabled medical product architecture, where molecular insight, signal integrity, validation rigor, and regulatory foresight must align.
                    </p>
                </div>

                <!-- Clusters -->
                ${categories.map(cat => `
                    <div style="margin-bottom: 5rem;">
                        <h3 class="section-title" style="font-size: 1.6rem; color: var(--color-text-main); margin-bottom: 3rem; border: none; padding-bottom: 0;">${cat.title}</h3>
                        <div style="display: flex; flex-direction: column; gap: 2rem;">
                            ${portfolioData.publications
                .filter(pub => pub.category === cat.id)
                .map((pub, index) => `
                                    <div class="card">
                                        <div class="card-date">${index + 1}. ${pub.year} | ${pub.journal}</div>
                                        <h3 class="card-title">${pub.title}</h3>
                                        <p class="card-desc">${pub.authors}</p>
                                        <a href="${pub.link}" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); font-size: 0.9rem; margin-top: 0.5rem; display: inline-block;">Read Paper &rarr;</a>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                `).join('')}

                <!-- Concluding Statement -->
                <div style="margin-top: 6rem; text-align: center; padding: 3rem; border-top: 1px solid var(--color-border);">
                    <p style="font-size: 1.3rem; line-height: 1.6; color: var(--color-text-main);">
                        <strong>Across these domains, my work is unified by a single question:</strong><br>
                        <strong style="font-style: italic; color: var(--color-accent); display: block; margin-top: 1rem;">
                            "How can complex biological systems be modeled, validated, and translated into scalable, clinically reliable technological architectures?"
                        </strong>
                    </p>
                </div>
            </section>
        `;
    },

    projects: () => `
        <section class="container fade-in">
            <h2 class="section-title">Product Portfolio</h2>
            <div class="card-grid">
                ${portfolioData.projects.map(proj => `
                    <div class="card">
                        <div class="card-date">${proj.role}</div>
                        <h3 class="card-title">${proj.title}</h3>
                        <p class="card-desc" style="margin-bottom: 1rem;">${proj.description}</p>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${proj.tech.map(t => `<span style="font-size: 0.75rem; color: var(--color-secondary); border: 1px solid var(--color-border); padding: 2px 8px; border-radius: 4px;">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Acknowledgment Section -->
            <div style="margin-top: 5rem; text-align: center;">
                <h3 style="font-size: 1.25rem; color: var(--color-text-muted); margin-bottom: 2rem; font-weight: 400;">
                    Supported by leading institutions in research and innovation
                </h3>
                <div class="logo-scroll-container">
                    <div class="logo-scroll">
                        <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                        <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                        <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                        <img src="./assets/images/icmr_logo.png" alt="ICMR" class="partner-logo">
                        <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                        <!-- Duplicate for seamless loop -->
                        <img src="./assets/images/aiims_logo.png" alt="AIIMS Jodhpur" class="partner-logo">
                        <img src="./assets/images/iit_logo.png" alt="IIT Jodhpur" class="partner-logo">
                        <img src="./assets/images/tisc_logo.png" alt="TISC IIT Jodhpur" class="partner-logo">
                        <img src="./assets/images/icmr_logo.png" alt="ICMR" class="partner-logo">
                        <img src="./assets/images/iit_madras_gdc_logo.png" alt="IIT Madras GDC" class="partner-logo">
                    </div>
                </div>
            </div>
        </section>
    `,

    ip: () => `
        <section class="container fade-in">
            <h2 class="section-title">Patents and Design Registrations</h2>
            <div class="card-grid">
                ${portfolioData.ip.map(item => `
                    <div class="card">
                        <div class="card-date">${item.year} | ${item.status}</div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.id}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,

    certifications: () => `
        <section class="container fade-in">
            <h2 class="section-title">Certifications & Training</h2>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                ${portfolioData.certifications.map(cert => {
        // Logic to handle "Coursera" visibility
        // If it's a Miro course, we definitely show "Coursera"
        let displayIssuer = cert.issuer;
        if (cert.logo && !cert.title.includes("Miro")) {
            displayIssuer = cert.issuer.replace(/ \| Coursera/g, '').replace(/Coursera/g, '');
        }

        // Special sizing for Microsoft logo
        const isMicrosoft = cert.logo && cert.logo.includes('microsoft');
        const logoHeight = isMicrosoft ? '55px' : '45px';

        return `
                    <div class="card" style="border-left: 4px solid var(--color-accent);">
                        <div style="display: flex; gap: 1.5rem; justify-content: space-between;">
                            <div style="flex: 1;">
                                <h3 class="card-title" style="margin-bottom: 0.5rem; font-size: 1.1rem;">${cert.title}</h3>
                                <div class="card-date" style="color: var(--color-text-main); font-weight: 500; margin-bottom: 0.8rem; text-transform: none;">
                                    ${displayIssuer}
                                </div>
                                <p class="card-desc">${cert.description}</p>
                            </div>
                            <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.8rem; flex-shrink: 0;">
                                <span class="card-date" style="white-space: nowrap;">${cert.date}</span>
                                ${cert.logo ? `
                                    <div style="height: ${logoHeight}; display: flex; align-items: center; justify-content: center; background: transparent;">
                                        <img src="${cert.logo}" alt="${cert.issuer} logo" style="max-height: 100%; width: auto; object-fit: contain; mix-blend-mode: multiply; filter: contrast(1.1);">
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        </section>
    `,

    awards: () => `
        <section class="container fade-in">
            <h2 class="section-title">Honors & Awards</h2>
            <div class="card-grid">
                ${portfolioData.awards.map(award => `
                    <div class="card">
                        <div class="card-date">${award.year}</div>
                        <h3 class="card-title">${award.title}</h3>
                        <div class="card-date" style="color: var(--color-text-main); font-weight: 500; text-transform: none; margin-bottom: 0.5rem;">${award.organization}</div>
                        ${award.description ? `<p class="card-desc">${award.description}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        </section>
    `,

    conferences: () => `
        <section class="container fade-in">
            <h2 class="section-title">Selected Exhibitions, Innovation Platforms & Leadership Roles</h2>
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                ${portfolioData.conferences.map(conf => conf.isSummary ? `
                    <div class="card" style="border-left: 4px solid var(--color-accent); background: var(--color-bg-alt);">
                        <h3 class="card-title" style="font-size: 1.25rem; margin-bottom: 1rem;">${conf.title}</h3>
                        <p class="card-desc" style="line-height: 1.8;">${conf.summary}</p>
                    </div>
                ` : `
                    <div class="card" style="border-left: 4px solid var(--color-secondary);">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                            <h3 class="card-title" style="margin-bottom: 0; font-size: 1.25rem;">${conf.title}</h3>
                            <span class="card-date" style="white-space: nowrap; margin-left: 1rem;">${conf.date}</span>
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; margin-bottom: 1rem; font-size: 0.95rem; color: var(--color-text-main);">
                            <span><strong>Role:</strong> ${conf.role}</span>
                            <span><strong>Location:</strong> ${conf.location}</span>
                        </div>
                        <p class="card-desc">${conf.summary}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,

    cv: () => `
        <section class="container fade-in">
            <h2 class="section-title">Curriculum Vitae</h2>
            
            <!-- CV Download Section -->
            <div class="card" style="text-align: center; padding: 3rem 2rem; margin-bottom: 3rem;">
                <h3 class="card-title" style="font-size: 2rem; margin-bottom: 1rem;">Umme Abiha</h3>
                <p class="card-desc" style="margin-bottom: 2rem;">Download detailed CV below.</p>
                <button class="btn-primary" style="cursor: pointer;">Download PDF</button>
            </div>
            
            <!-- Scientific Outreach & Peer Review Section -->
            <div style="margin-bottom: 3rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-text-main); border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem;">Scientific Outreach & Peer Review</h3>
                
                <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-accent);">
                    <h4 class="card-title" style="margin-bottom: 0.5rem;">Design Thinking Facilitator (User Research & Ideation)</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                        <a href="https://www.ivieschaseyou.com" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: none; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Ivies Chase You</a>
                        <span class="card-date">Jul 2025 – Present</span>
                    </div>
                    <p class="card-desc">Facilitated design thinking workshops, empathy mapping, and solution ideation.</p>
                </div>
                
                <div class="card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--color-accent);">
                    <h4 class="card-title" style="margin-bottom: 0.5rem;">Peer Reviewer</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                        <a href="https://link.springer.com/journal/42235" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: none; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">Journal of Bionic Engineering, Springer Nature</a>
                        <span class="card-date">Dec 2024 – Feb 2025</span>
                    </div>
                </div>
                
                <div class="card" style="border-left: 4px solid var(--color-accent);">
                    <h4 class="card-title" style="margin-bottom: 0.5rem;">Peer Reviewer</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                        <a href="https://innovations.bmj.com" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: none; font-weight: 500; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.7'" onmouseout="this.style.opacity='1'">BMJ Innovations</a>
                        <span class="card-date">Nov 2024 – Jan 2025</span>
                    </div>
                </div>
            </div>
        </section>
    `,

    news: () => `
        <section class="container fade-in">
            <h2 class="section-title">News & Updates</h2>
            <div class="card-grid">
                ${portfolioData.news.map(item => `
                    <div class="card">
                        ${item.image ? `<div style="margin: -2rem -2rem 1.5rem -2rem; overflow: hidden; border-radius: 12px 12px 0 0;">
                            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; display: block;">
                        </div>` : ''}
                        <div class="card-date">${item.date}</div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.summary}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,

    contact: () => `
        <section class="container fade-in">
            <h2 class="section-title">Get in Touch</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
                <div>
                    <h3 style="margin-bottom: 1rem;">Contact Information</h3>
                    <p><strong>Email:</strong> <a href="mailto:${portfolioData.profile.email}">${portfolioData.profile.email}</a></p>
                    <p><strong>LinkedIn:</strong> <a href="${portfolioData.profile.linkedin}" target="_blank" rel="noopener noreferrer">Umme Abiha</a></p>
                    <p><strong>Scholar:</strong> <a href="${portfolioData.profile.scholar}">Google Scholar Profile</a></p>
                </div>
                <form onsubmit="event.preventDefault(); alert('Message sent (demo)!');" style="display: flex; flex-direction: column; gap: 1rem;">
                    <input type="text" placeholder="Name" required style="padding: 1rem; background: var(--color-bg-alt); border: 1px solid var(--color-border); color: var(--color-text-main); border-radius: 4px;">
                    <input type="email" placeholder="Email" required style="padding: 1rem; background: var(--color-bg-alt); border: 1px solid var(--color-border); color: var(--color-text-main); border-radius: 4px;">
                    <textarea placeholder="Message" rows="5" required style="padding: 1rem; background: var(--color-bg-alt); border: 1px solid var(--color-border); color: var(--color-text-main); border-radius: 4px;"></textarea>
                    <button type="submit" class="btn-primary" style="cursor: pointer; border: none;">Send Message</button>
                </form>
            </div>
        </section>
    `,

    philosophy: () => `
        <section class="container fade-in" style="text-align: center;">
            <h2 id="philosophy-heading" class="section-title" style="display: block; text-align: center; margin-left: auto; margin-right: auto;">${portfolioData.philosophy.title}</h2>
            <style>
                #philosophy-heading::after {
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                }
            </style>
            <div style="max-width: 900px; margin: 0 auto;">
                ${portfolioData.philosophy.content.map(p => `
                    <p style="font-size: 1.15rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 2rem; text-align: justify;">
                        ${p}
                    </p>
                `).join('')}
                
                <div style="margin-top: 4rem; text-align: center;">
                    <a href="#home" class="btn-primary" style="display: inline-block;">Back to Home</a>
                </div>
            </div>
        </section>
    `
};
