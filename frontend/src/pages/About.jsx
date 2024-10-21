import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            debitis officiis amet incidunt dolor accusantium temporibus
            consectetur totam autem architecto!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptate incidunt illo culpa doloribus harum beatae veritatis
            ipsum, optio nesciunt ducimus! Sint officia soluta molestias,
            possimus voluptate dolore fugiat velit est, temporibus optio
            obcaecati facere adipisci consectetur excepturi fugit dolorum enim!
            Temporibus veniam voluptates enim veritatis illo quibusdam velit
            molestiae!
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            optio quia maiores asperiores illum minus, officia accusantium
            dignissimos harum, quaerat tenetur voluptatum. Sint accusamus
            libero, voluptatibus quo explicabo tempore quisquam, quas obcaecati
            amet ad laudantium nemo neque deserunt dolores officia.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            maxime!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            maxime!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            maxime!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
