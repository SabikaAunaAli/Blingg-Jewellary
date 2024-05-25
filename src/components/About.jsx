import React from "react";
import heroImage from "../assets/hero.jpg";
import founder from "../assets/about-01.jpg";
import design from "../assets/bg-03.jpg";

export default function About() {


  return (
    <>
      <div
        className="bg-cover bg-no-repeat  container-fluid h-96 h-100"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
     
        <p className="text-center pl-5 pt-40 pb-3"> A Few Words </p>
        <h2 data-aos="zoom-in-up" className="text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text text-1xl text-center text-5xl font-bold mb-3">
          About Us
        </h2>
      </div>

      <div className="container m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <p className="mt-36 text-gray-400 ml-8 mb-2">MATTIS VELIT EGET</p>
            <h2 data-aos="fade-right" className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-4xl font-semi-bold mb-2">
              ABOUT THE <pre></pre>FOUNDER
            </h2>
            <p className="ml-8 text-gray-400 text-2xl mb-2">
              FUSCE EGESTAS MI URNA, <pre></pre>ID PULVINAR IPSUM DICTUM EGET.{" "}
              <pre></pre>MAURIS IN DOLOR VELIT.
            </p>
            <div className="w-32 h-1 border border-b-2 border-orange-500 ml-8 mb-3 mt-3"></div>
            <p className="ml-8 mb-2 text-gray-400 mr-20">
              Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam
              rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
              pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum{" "}
              <pre className="mt-2"></pre>finibus felis non massa commodo
              molestie at id justo. Quisque sollicitudin elit sit amet facilisis
              euismod. Fusce at arcu sed. Nam rutrum mattis velit eget volutpat.
              Fusce egestas mi urna, id pulvinar ipsum dictum eget.
            </p>
          </div>
          <div>
            <img data-aos="slide-left"  data-aos-easing="linear" data-aos-duration="1500" className="mt-5 rounded-lg" src={founder} alt="founder" />
          </div>
        </div>
        <div data-aos="zoom-in"  data-aos-easing="linear" data-aos-duration="1500" 
          className="bg-cover mt-5  container-fluid h-96 w-full rounded"
          style={{ backgroundImage: `url(${design})` }}
        ></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="">
            <p className="mt-36 ml-8 mb-2">MATTIS VELIT EGET</p>
            <h2 className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-4xl font-semi-bold mb-2">
              HOW IT ALL <pre></pre>STARTED
            </h2>
            <p className="text-gray-500 ml-8 text-2xl mb-2">
              FUSCE EGESTAS MI URNA, <pre></pre>ID PULVINAR IPSUM DICTUM EGET.{" "}
              <pre></pre>MAURIS IN DOLOR VELIT.
            </p>
          </div>
          <div>
            <h2 className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold text-4xl font-semi-bold mb-2 mt-10">
              ETIAM VENENATIS MATTIS MAURIS, ET TEMPOR ERAT ULTRICIES NON.
            </h2>
            <p className="ml-8 mb-2 text-gray-400 mr-20 mt-10">
              Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam
              rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
              pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum{" "}
              <pre className="mt-2"></pre>finibus felis non massa commodo
              molestie at id justo. Quisque sollicitudin elit sit amet facilisis
              euismod. Fusce at arcu sed. Nam rutrum mattis velit eget volutpat.
              Fusce egestas mi urna, id pulvinar ipsum dictum eget.
            </p>
            <p className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold mb-2 mt-10 ">
              MATTIS VELIT EGET
            </p>
            <p className="ml-8 mb-2 text-gray-400 mr-20">
              Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam
              rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
              pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum{" "}
              <pre className="mt-2"></pre>finibus felis non massa commodo
              molestie at id justo. Quisque sollicitudin elit sit amet facilisis
              euismod. Fusce at arcu sed. Nam rutrum mattis velit eget volutpat.
              Fusce egestas mi urna, id pulvinar ipsum dictum eget.
            </p>
            <p className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold mb-2 mt-10 ">
              MATTIS VELIT EGET
            </p>
            <p className="ml-8 mb-2 text-gray-400 mr-20">
              Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam
              rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
              pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum{" "}
              <pre className="mt-2"></pre>finibus felis non massa commodo
              molestie at id justo. Quisque sollicitudin elit sit amet facilisis
              euismod. Fusce at arcu sed. Nam rutrum mattis velit eget volutpat.
              Fusce egestas mi urna, id pulvinar ipsum dictum eget.
            </p>
            <p className="ml-8 text-transparent bg-gradient-to-br from-yellow-300 to-orange-400 bg-clip-text font-bold mb-2 mt-10 ">
              MATTIS VELIT EGET
            </p>
            <p className="ml-8 mb-2 text-gray-400 mr-20">
              Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam
              rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
              pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum{" "}
              <pre className="mt-2"></pre>finibus felis non massa commodo
              molestie at id justo. Quisque sollicitudin elit sit amet facilisis
              euismod. Fusce at arcu sed. Nam rutrum mattis velit eget volutpat.
              Fusce egestas mi urna, id pulvinar ipsum dictum eget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
