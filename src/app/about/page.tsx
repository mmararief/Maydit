// pages/about.tsx

import Head from "next/head";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About Page</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">About</h1>

      <p className="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor
        id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit
        amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.
      </p>
      <p>
        Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non
        metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat
        porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p>

      <p className="mt-4">Created by: Ammar</p>
    </div>
  );
};

export default About;
