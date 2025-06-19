import ProjectImg from "../assets/projects.png";
import { useState } from "react";
export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${ProjectImg})` }}
      className="bg-cover md:min-h-full max-h-auto bg-center"
    >
      <h1 className="pt-20 text-4xl text-white text-center mb-5">
        Projects
      </h1>

      <div className="flex justify-center px-4">
        <div className="flex flex-col md:flex-row gap-4 p-4 mt-5 max-w-[1600px] w-full ">
          <div className="flex flex-col bg-white/80 p-6 rounded-lg shadow-md min-h-[250px] w-full md:w-[500px] text-center">
            <h2 className="text-xl font-bold">Ecommerce Application</h2>
            <br/>
            <img
                src="../assets/Ecommerce.gif"
                alt="Loading..."
                className="w-full max-h-[250px]"
            />
            <br/>
            <ul className="text-left list-none">
              <li>
                In this project the user can add and delete the products and update the number of stocks in each product.
              </li>
              {showMore && (
                <>
                    <li>
                        <b>Tech Stack:</b> HTML, CSS, JavaScript, React JS, Next JS, Node JS, Express JS, MongoDB, Tailwind CSS
                    </li>
                </>
              
              )}
            </ul>
            <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 hover:underline mt-2 self-start"
                >
                {showMore ? "Read Less" : "Read More"}
            </button>
            <br/>
            <div className="mt-auto flex justify-center">
                {/* <button className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] mr-auto ml-1 hover:bg-blue-700 w-[130px] hover:text-white">Demo</button> */}
                <a
                    href="https://github.com/Angel-12314/Yoga-product-ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] ml-auto mr-auto hover:bg-blue-700 w-[130px] hover:text-white text-center inline-block"
                >
                    Code
                </a>
                
            </div>
          </div>

          <div className="flex flex-col bg-white/80 p-6 rounded-lg shadow-md min-h-[250px] w-full md:w-[500px] text-center">
            <h2 className="text-xl font-bold">Web Phishing Detection</h2>
            <br/>
            <img
                src="../assets/Web-Phishing-Detection.gif"
                alt="Loading..."
                className="w-full h-[250px]"
            />
            <br/>
            <ul className="text-left list-none">
                <li>
                    Developed a webpage to find the legitimacy of a website using its URL
                </li>
                {showMore2 && (
                <>
                <li>
                    The purpose of this project is to detect phishing websites and provide security to the user from web attacks.
                </li>
                <li>
                    <b>Tech Stack:</b> Flask, Python and Machine Learning
                </li>
                
                </>
                )}
                
            </ul>
             <button
                onClick={() => setShowMore2(!showMore2)}
                className="text-blue-600 hover:underline mt-2 self-start"
                >
                {showMore2 ? "Read Less" : "Read More"}
            </button>
            <br/>
            <div className="mt-auto flex justify-center">
                {/* <button className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] mr-auto ml-1 hover:bg-blue-700 w-[130px] hover:text-white">Demo</button> */}
                <a
                    href="https://github.com/Angel-12314/Web-Phishing-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] ml-auto mr-auto hover:bg-blue-700 w-[130px] hover:text-white text-center inline-block"
                >
                    Code
                </a>
            </div>
          </div>

          <div className="flex flex-col bg-white/80 p-6 rounded-lg shadow-md min-h-[250px] w-full md:w-[500px] text-center">
            <h2 className="text-xl font-bold">Credit Card Fraud Transaction Detection</h2>
            <br/>
            <img
                src="../assets/CreditCard.gif"
                alt="Loading..."
                className="w-full h-[250px]"
            />
            <br/>
            <ul className="text-left list-none">
                <li>
                    This project is proposed to find the number of genuine and non-genuine transactions made by the cardholders.
                </li>
                {showMore3 && (
                <>
                <li>
                    The objective of this project is to identify suspicious events and report them to an analyst while letting normal transactions be automatically processed using CNN (Convolutional Neural Network) Algorithm.
                </li>
                <li>
                    <b>Tech Stack:</b> Python, Machine Learning and Deep Learning.
                </li>
                </>)}
                
            </ul>
            <button
                onClick={() => setShowMore3(!showMore3)}
                className="text-blue-600 hover:underline mt-2 self-start"
                >
                {showMore3 ? "Read Less" : "Read More"}
            </button>
            <br/>
            <div className="mt-auto flex justify-center">
                {/* <button className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] mr-auto ml-1 hover:bg-blue-700 w-[130px] hover:text-white">Demo</button> */}
                <a
                    href="https://github.com/Angel-12314/Credit-Card-Fraud-Transaction-Detection-In-Banking-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7800ff] text-white rounded-lg shadow-md px-3 py-1 md:w-[200px] ml-auto mr-auto hover:bg-blue-700 w-[130px] hover:text-white text-center inline-block"
                >
                    Code
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
