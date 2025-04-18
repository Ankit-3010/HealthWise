import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="h-screen w-screen bg-purple-50">
        <div className="h-full w-full flex justify-center items-center">
          <div className="">
            <div className="text-6xl tracking-wider text-purple-400">
              Diabetes Prediction
              <br /> & Lifestyle
              <br /> Recommendations
            </div>
            <div className="text-xl mt-8 text-gray-400">
              Learn how machine learning models helps to detect diabetes
              <br />
              early by analysing health data. Take control of your health and
              <br />
              get personalized recommendations to manage or prevent
              <br /> diabetes.
            </div>
            <div>
              <button
                className="bg-red-300 mt-5 hover:bg-red-400 transition-all hover:scale-105 p-3 rounded-md"
                onClick={handleButtonClick}
              >
                Check For Diabetes
              </button>
            </div>
          </div>
          <div>
            <img
              src="/HealthIMG.svg"
              alt="Workout Illustration"
              height={300}
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
