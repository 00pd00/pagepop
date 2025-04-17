import React from "react";

const About = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535905557558-afc4877a26fc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGJvb2tzfGVufDB8fDB8fHww')"
      }}
    >
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white p-8 max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">About PagePop</h2>
          <p className="text-sm leading-relaxed mb-4">
            PagePop is your personal eBook companion — designed to help you
            browse, explore, and manage your favorite digital reads. Whether
            you're discovering new stories or organizing your current
            collection, PagePop makes it effortless and enjoyable.
          </p>
          <p className="text-sm leading-relaxed">
            Built with a love for books and technology, PagePop is lightweight,
            responsive, and user-friendly — giving you a seamless reading
            experience anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
