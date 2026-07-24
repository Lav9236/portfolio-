        const aboutTabs = document.querySelectorAll('.tab');

        const aboutContent = document.querySelectorAll(".tab-content");

        document.addEventListener('DOMContentLoaded', () => {
            if (aboutTabs) {
                aboutTabs[0].click();
            }
        });

        aboutTabs.forEach((tab) => {
            tab.addEventListener("click", (e) => {
                e.preventDefault();

                aboutTabs.forEach((a) => {
                    a.classList.remove("active");
                });

                tab.classList.add("active");

                aboutContent.forEach((c) => {
                    c.classList.remove("active");
                });

                const activeTab = tab.dataset.section;
                document.getElementById(activeTab).classList.add("active");

                if (activeTab === "experience") {
                    const experiences = document.querySelector(".experience-list");

                    const experienceList = [{
                        id: 1,
                        date: "2025 - 2026",
                        position: "Software Developer",
                        company: "XYZ Company Pvt. Ltd",
                        details: "Built responsive and optimized software."
                    }, {
                        id: 2,
                        date: "2025 - 2026",
                        position: "Data Analyst",
                        company: "XYZ Company Pvt. Ltd",
                        details: "Collected, cleaned, and analyzed data to extract meaningful insights and support data-driven decision making."
                    }, {
                        id: 3,
                        date: "2025 - 2027",
                        position: "AI Developer",
                        company: "XYZ Company Pvt. Ltd",
                        details: "Developed intelligent systems using AI techniques to process data, understand user input, and deliver smart, automated solutions."
                    }];

                    const experienceContent = experienceList.map((ele) => {
                        return `
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
                    }).join("");

                    if (experiences) {
                        experiences.innerHTML = experienceContent;
                    }
                } else if (activeTab === "education") {
                    const education = document.querySelector('.education-list');

                    const educationList = [{
                        id: 1,
                        date: "2023 - 2027",
                        degree: "Bachelor of Computer Technology (B. Tech)",
                        institution: " SR Institute Of Management and Technology Lucknow, Uttar Pradesh",
                        details: "Study core subject like operating system, python, c, DBMS"
                    },
                    {
                        id: 2,
                        date: "2022 - 2023",
                        degree: "Higher Secondary",
                        institution: " SMT. Kaushalya Devi Inter College Chaumukha Maharajganj, Uttar Pradesh",
                        details: "Study core subject like Physics, Chemistry, Math "
                    },
                    {
                        id: 3,
                        date: "2020 - 2021",
                        degree: "Secondary",
                        institution: " SMT. Kaushalya Devi Inter College Chaumukha Maharajganj, Uttar Pradesh",
                        details: "Study core subject like Math, Science"
                    }];

                    const educationContent = educationList.map((ele) => {
                        return `
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `
                    }).join("");

                    if (education) {
                        education.innerHTML = educationContent;
                    }
                } else if (activeTab === "skills") {
                    const skills = document.querySelector('.skill-list');
                    // skills List
                    const skillList = [
                        {
                            id: 1,
                            name: "Python",
                            icon: "assets/skills/python.png",
                        },
                        {
                            id: 2,
                            name: "JavaScript",
                            icon: "assets/skills/js.png",
                        },
                        {
                            id: 3,
                            name: "React JS",
                            icon: "assets/skills/react.png",
                        },
                        {
                            id: 4,
                            name: "SQL",
                            icon: "assets/skills/sql.png",
                        },
                        {
                            id: 5,
                            name: "MongoDB",
                            icon: "assets/skills/mongodb.png",
                        },
                        {
                            id: 6,
                            name: "Excel",
                            icon: "assets/skills/excel.png",
                        },

                        {
                            id: 7,
                            name: "HTML",
                            icon: "assets/skills/html.png",
                        },
                        {
                            id: 8,
                            name: "CSS",
                            icon: "assets/skills/css.png",
                        },

                    ];

                    const skillContent = skillList.map((ele) => {
                        return `
             <div class="skill-box" key=${ele?.id}>
                        <img src=${ele?.icon}
                        alt=${ele?.name} 
                        title=${ele?.name} 
                        loading="lazy">
                    </div>
            `
                    }).join("");

                    if (skills) {
                        skills.innerHTML = skillContent;
                    }
                } else if (activeTab === "about-me") {
                    const myInfo = document.querySelector(".my-info");

                    const infoList = [{
                        id: 1,
                        key: "Name : ",
                        value: "Lavakush Gond"
                    },
                    {
                        id: 2,
                        key: "Country",
                        value: "India",
                    },
                    {
                        id: 3,
                        key: "Institute",
                        value: "SR Institute Of Management And Technology, Lucknow",
                    },
                    {
                        id: 4,
                        key: "Year",
                        value: "2023 - 2027",
                    },
                    {
                        id: 5,
                        key: "Address",
                        value: "Lakshmipur Mahanth, Nebuiyan, Maharajganj, Uttar Pradesh - 273301",
                    }
                    ];

                    const infoContent = infoList.map((ele) => {
                        return `
            <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                <span>${ele?.value}</span>
            </div>
            `
                    }).join("");

                    if (myInfo) {
                        myInfo.innerHTML = infoContent;
                    }
                }

            });

        });
