import image from "../assets/myImagebgRemoved.png";

const Home = () => {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} alt="My Image" className="w-55 md:w-65 rounded-full" />
        <div className="space-y-1 md:space-y-3">
          <h1>Towfique Kabir</h1>
          <h3>Web Developer</h3>
          <p>
            I'm a web developer working with React and modern JavaScript. I
            build clean, structured user interfaces and turn ideas into
            practical, real-world applications, with a focus on scalability and
            maintainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
