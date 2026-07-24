 const media = document.querySelector('.contact-media');

        const contactList = [
            {
                id: 1,
                icon: "ph ph-phone-call",
                name: "Phone",
                value: "+91 9236683334",
                href: "tel:+919236683334",
            },
            {
                id: 2,
                icon: "ph ph-envelope",
                name: "E-Mail",
                value: "lavakushg3334@gmail.com",
                href: "mailto:lavakushg3334@gmail.com", // ✅ FIXED
            },
            {
                id: 3,
                icon: "ph ph-map-pin-area",
                name: "Country",
                value: "India",
                href: "#"
            }
        ];

        const contactContent = contactList.map((ele) => {
            return `
        <div class="media">
            <span>
                <i class="${ele.icon}"></i>
            </span>

            <div class="contact-value">
                <p>${ele.name}</p>
                <a href="${ele.href}">${ele.value}</a>
            </div>
        </div>
    `;
        }).join("");

        if (media) media.innerHTML = contactContent;

        const sendBtn = document.querySelector('#send-msg');

        const originalText = sendBtn.innerHTML;

        const originalStyle = {
            backgroundColor: sendBtn.style.backgroundColor,
            color: sendBtn.style.color,
            border: sendBtn.style.border,
            boxShadow: sendBtn.style.boxShadow,
        };

        // ✅ SEND MESSAGE
        document.getElementById('contact-form').addEventListener("submit", (event) => {
            event.preventDefault();
            sendBtn.innerHTML = "Sending...";
            sendBtn.style.backgroundColor = "gray";
            sendBtn.style.color = "white";
            sendBtn.style.border = "none";
            sendBtn.style.boxShadow = "none";
            sendBtn.disabled = true

            console.log("Form submitted"); // debug

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !phone || !message) {
                sendBtn.innerHTML = originalText;
                Object.assign(sendBtn.style, originalStyle);
                sendBtn.disabled = false
                return Toastify({
                    text: "All Fields are mandatory !",
                    duration: 3000,
                    //   newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "rgb(206 , 16, 16)",
                    },

                }).showToast();
            }

            emailjs.send("service_zpaivis", "template_23p1lkf", {
                from_name: name,      // ✅ IMPORTANT FIX
                from_email: email,    // ✅ IMPORTANT FIX
                phone: phone,
                message: message,
            })
                .then(() => {
                    Toastify({
                        text: "Message Sent",
                        duration: 3000,
                        //   newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "rgb(9, 222, 38)",
                        },

                    }).showToast();
                    // document.getElementById('contact-form').reset(); // ✅ reset form
                    setTimeout(() => {
                        sendBtn.innerHTML = originalText;

                        Object.assign(sendBtn.style, originalStyle);

                        sendBtn.disabled = false
                    }, 2000);
                })
                .catch((error) => {

    console.log("EmailJS Error:", error);

    alert(JSON.stringify(error));

    Toastify({
        text: "Error!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        style: {
            background: "rgb(206,16,16)"
        }
    }).showToast();

                    setTimeout(() => {
                        sendBtn.innerHTML = originalText;

                        Object.assign(sendBtn.style, originalStyle);

                        sendBtn.disabled = false
                    }, 2000);
                });
        });