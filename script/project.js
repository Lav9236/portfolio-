 const projectList = [
            {
                id: 1,
                number: "01",
                title: " Personal Portfolio Website",
                description: "Developed a responsive Personal Portfolio Website to showcase my projects, technical skills, education, and contact information. The website features a modern user interface, smooth navigation, responsive design, typing animations, and an integrated contact form, providing an engaging experience across desktop and mobile devices.",
                techStack: ["HTML", "CSS", "JavaScript","EmailJS"],
                image: "assets/projects/project1.jpg",
                liveLink: "lav9236.github.io/portfolio-/",
                githubLink: "https://github.com/Lav9236/portfolio-"
            },

            {
                id: 2,
                number: "02",
                title: " VOXA Your-AI chat companion",
                description: "Developed VOXA, an AI-powered chatbot, capable of understanding user queries and providing intelligent, context-aware responses for enhanced user interaction.",
                techStack: ["Python Flask", "HTML", "CSS","JavaScript"],
                image: "assets/projects/project2.jpg",
                liveLink: "https://voxa-ai-chatbot-1-9y6s.onrender.com",
                githubLink: "https://github.com/Lav9236/VOXA_AI_ChatBot"
            },

            {
                id: 2,
                number: "03",
                title: "House Price Prediction System Web App",
                description: "Developed a House Price Prediction web application that estimates property prices using Machine Learning. The system features a responsive user interface for entering property details and provides real-time price predictions, offering an intuitive and efficient experience for users.",
                techStack: ["Python Flask","Machine Learning","Scikit-learn","Matplotlib","Seaborn", "HTML", "CSS", "Bootstrap"],
                image: "assets/projects/project3.jpg",
                liveLink: "https://house-price-predictor-ur0p.onrender.com",
                githubLink: "https://github.com/Lav9236/House_Price_Predictor"
            },

            {
                id: 2,
                number: "04",
                title: "AI_Churn_Prediction_Model",
                description: "Developed a Customer Churn Prediction web application that predicts customer attrition using Machine Learning. The system includes an interactive dashboard for customer data analysis, real-time churn predictions, and insightful visualizations to support data-driven business decisions and customer retention strategies.",
                techStack: ["Python Flask","Machine Learning","Scikit-learn", "Streamlit", "Plotly", "Matplotlib","Seaborn"],
                image: "assets/projects/project4.jpg",
                liveLink: "https://churn-prediction-ml-model.streamlit.app/",
                githubLink: "https://github.com/Lav9236/AI_Churn_Prediction_Model"
            },

            {
                id: 2,
                number: "05",
                title: "AI-Powered Financial Fraud Detection System",
                description: "Built a full-stack Financial Fraud Detection web application using Machine Learning to detect fraudulent transactions with high accuracy. The application includes real-time transaction prediction, bulk CSV upload and analysis, interactive dashboards, feature importance visualization, and performance metrics, enabling fast and reliable fraud detection through a responsive web interface.",
                techStack: ["Python Flask","Machine Learning","Scikit-learn", "HTML", "CSS", "Bootstrap","Chart.js"],
                image: "assets/projects/project5.jpg",
                liveLink: "https://ibm-ai-powered-financial-fraud-detection.onrender.com",
                githubLink: "https://github.com/Lav9236/IBM-AI-Powered-Financial-Fraud-Detection-System"
            },
            
        ];


        const projects = document.querySelector(".projects");

        let currentIndex = 0;

        const renderProject = (index) => {
            const projectContent = projectList[index];

            const previousDisabled = currentIndex === 0;

            const nextDisabled = currentIndex === projectList.length - 1;

            projects.innerHTML = `
        <div class="project-info">
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>
                    <div class="tech-stack">
                        ${projectContent?.techStack?.map((tech, i) => {
                return `
                            <span key=${i}>${tech}</span>
                            `;
            }).join(",")}
                        
                    </div>
                    <hr />
                    <div class="links">
                        <a href="${projectContent?.liveLink}"><i class="ph ph-arrow-right"></i></a>
                        <a href="${projectContent?.githubLink}"><i class="ph ph-github-logo"></i></a>
                    </div>
                </div>

                <div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title}>
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled ? "disabled-btn" : ""}><i class="ph ph-caret-left"></i></a>
                        <a href="#" id="next" class=${nextDisabled ? "disabled-btn" : ""}><i class="ph ph-caret-right"></i></a>
                    </div>
                </div> 

    `;

            document.getElementById('previous').addEventListener("click", (e) => {
                e.preventDefault();

                if (currentIndex > 0) {
                    currentIndex--;
                    renderProject(currentIndex);
                }
            });

            document.getElementById('next').addEventListener("click", (e) => {
                e.preventDefault();

                if (currentIndex < projectList.length - 1) {
                    currentIndex++;
                    renderProject(currentIndex);
                }
            });
        };

        renderProject(currentIndex);
