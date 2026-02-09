import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero/>
      <div className="grid">
        <FeatureCard title="Responsive"/>
        <FeatureCard title="Fast"/>
      </div>
      <Testimonial/>
    </>
  );
};

export default Home;