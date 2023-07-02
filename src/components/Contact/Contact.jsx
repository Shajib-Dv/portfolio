/** @format */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          e.target.reset();
          setLoading(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message successfully send",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h2 className="text-5xl pb-4 primary-text font-bold text-center">
        Contact With Me
      </h2>
      <form ref={form} onSubmit={sendEmail} className="md:w-3/5 mx-auto mb-20">
        <div className="md:flex gap-4 items-center">
          <div className="form-control w-full">
            <label className="label" htmlFor="name">
              <span className="label-text">Your Name</span>
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              placeholder="Your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label" htmlFor="email">
              <span className="label-text">Your Email</span>
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              placeholder="example@gmail.com"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="message">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="textarea textarea-bordered h-24 input"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-center items-center my-10">
          <button
            disabled={loading}
            type="submit"
            className="send-btn disabled:opacity-40"
          >
            {loading ? (
              <span className="loading"></span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                Send <FaPaperPlane />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
