import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7cc46f42-d03c-4020-861c-86e23bdb4242");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Success!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8"
    >
      <h1 className="text-center text-6xl font-light text-[#047857]">
        Get in touch
      </h1>

      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-md flex-col gap-8 rounded-2xl border border-[#a7f3d0] bg-[#f7fffb] p-6 shadow-[0_18px_45px_rgba(4,120,87,0.12)] md:max-w-lg lg:max-w-xl"
      >
        <div className="flex flex-col gap-4">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="rounded-lg border-2 border-[#6ee7b7] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#dff7ee] focus:ring-2 focus:ring-[#10b981]"
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="rounded-lg border-2 border-[#6ee7b7] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#dff7ee] focus:ring-2 focus:ring-[#10b981]"
          />
        </div>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write your message here..."
          className="h-32 w-full resize-none rounded-lg border-2 border-[#6ee7b7] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-[#dff7ee] focus:ring-2 focus:ring-[#10b981]"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg border-2 border-[#059669] bg-[#047857] px-6 py-3 text-white transition-all duration-200 hover:bg-[#065f46]"
        >
          Send Message
        </button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
