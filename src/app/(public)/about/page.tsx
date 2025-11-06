import Banner from "./components/Banner";
import CoreValues from "./components/CoreValues";
import MeetTheTeam from "./components/Team";
import JoinUs from "./components/JoinUs";
import Footer from "@/components/common/Footer"

export default function About() {
    return (
      <div className="w-full">
        <Banner />
        <CoreValues />
        <MeetTheTeam />
        <JoinUs />
        <Footer />
      </div>
    );
  }
  