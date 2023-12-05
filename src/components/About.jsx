import React from "react";

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className={`w-1 sm:h-80 h-40 violet-gradient`} />
        </div>

        <div className="mt-10 text-white">
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="mt-2">
            Mobile App Developer at Codegenio with a Bachelor's degree from ARID
            University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
