import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m3bqdu4", "template_0xg7w1q", form.current, "lc1Ac0ibiF3r5P2cV")
      .then(
        () => {
          setSuccess("Message Sent Successfully");
          form.current.reset();
          setShowPopup(true);

          setTimeout(() => {
            setShowPopup(false);
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white/10 backdrop-blur-xl text-white rounded-lg shadow-lg p-6 w-[90%] max-w-md text-center border border-gray-500 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-2">🎉 Thank You!</h2>
            <p className="text-gray-300">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-cyan text-black px-4 py-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              Close
            </button>
          </div>
          <Confetti numberOfPieces={300} recycle={false} />
        </div>
      )}

      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
        />
        <button
  type="submit"
  className="relative overflow-hidden w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-300 active:scale-95 shadow-lg"
  onMouseDown={(e) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
    ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 300);
  }}
>
  Send
</button>
      </form>

      <style>
  {`
    .ripple {
      position: absolute;
      width: 150px;
      height: 150px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 0.4s linear;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `}
</style>
    </div>
  );
};

export default ContactForm;
