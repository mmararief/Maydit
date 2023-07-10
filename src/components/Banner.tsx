import React from "react";

const Banner = () => {
  const backgroundImage = {
    backgroundImage: "url('http://webkadupa.my.id/kelas.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="banner py-12" style={backgroundImage}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">
          Selamat Datang Di Maydit 1.0
        </h1>
        <p className="text-lg sm:text-xl text-white">
          Temukan komunitas berkualitas untuk pengembangan diri Anda
        </p>
        {/* <Link
          className={buttonVariants({
            className:
              "mt-6 px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out",
          })}
          href={`/r/create`}
        >
          Create Community
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
