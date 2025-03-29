import React ,{ Suspense, lazy } from "react";
import "../styles/home.css";
import TypingText from "../components/typing";
import Model from "../components/model";
const Home = () => {
  const LazyModel = lazy(() => import('../components/model'));

  return (
    <div className="home">
      <div className="title">
        <h1>
          Reliable,<br /> Affordable,<br /> and Ready to <br /> Dig!
          <TypingText texts={["!!!"]} speed={500} delay={2500} />
        </h1>
      </div>

      <div className="home_main">
        <div className="description">
          <h1>Excavator Hire</h1>
          <p>
            Experience reliable and efficient construction support with our
            Excavator 30, perfect for small-scale works. Whether you need
            digging, trenching, or site preparation, our machine is ideal for
            compact spaces and smaller projects. Available for hire with
            flexible plans to suit your construction needs.
          </p>
        </div>
        <div className="canvas-container">
        <Suspense fallback={<div>Loading Model...</div>}>
  <LazyModel />
</Suspense>
        </div>
      </div>

      <div className="services">
        <h1>Services We Offer</h1>
        <div className="service-item">
          <b>Small-Scale Construction Work</b>
          <p>Perfect for tasks like digging, trenching, and grading.</p>
        </div>
        <div className="service-item">
          <b>Site Preparation</b>
          <p>Efficient land leveling and clearing for small projects.</p>
        </div>
        <div className="service-item">
          <b>Trenching</b>
          <p>Ideal for laying pipes, cables, or foundation works.</p>
        </div>
        <div className="service-item">
          <b>Compact-Space Excavation</b>
          <p>Designed for projects in tight or limited spaces.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
