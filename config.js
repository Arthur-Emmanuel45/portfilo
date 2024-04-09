const firebaseConfig = {
  apiKey: "AIzaSyBUkR2ZEWKhiy74WJ23rSiDCp-pZmxhYIA",
  authDomain: "portfolio-contact-form-8ed29.firebaseapp.com",
  databaseURL: "https://portfolio-contact-form-8ed29-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-form-8ed29",
  storageBucket: "portfolio-contact-form-8ed29.appspot.com",
  messagingSenderId: "926450403336",
  appId: "1:926450403336:web:1bde5403a7940c552d29bd"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("messages");

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const alertMessage = document.getElementById("alert");

    console.log(email, message);

    ref.push({
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alertMessage.style.display = "block";
        setInterval(() => {
            alertMessage.style.display = "none";
        }, 2000)
    })
    .catch(() => {
        alertMessage.innerHTML = "Failed to submite form";
        alertMessage.style.backgroundColor = "red";
        alertMessage.style.display = "block";
        setInterval(() => {
            alertMessage.style.display = "none";
        }, 2000)
    })

    contactForm.reset();
}