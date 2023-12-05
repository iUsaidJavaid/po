import React from "react";

const Contact = () => {
  return (
    <section className="w-full mx-auto">
      <div className="max-w-2xl mx-auto mt-10 text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <div className="mt-8">
          <p className="text-lg">
            <span className="font-bold">Email:</span>
            <br />
            iusaidjavaid@gmail.com
            <br />
            usaid.javaid@codegenio.com
          </p>
          <p className="mt-4 text-lg">
            <span className="font-bold">Location:</span>
            <br />
            Civic Center, Bahria Town Phase 4
          </p>
          <p className="mt-4 text-lg">
            <span className="font-bold">Phone:</span>
            <br />
            03185400014
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
