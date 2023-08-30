import TitleBar from "../../components/LandingPage/TitleBar";
import Mouth from "../../components/LandingPage/Mouth";
import EnterButton from "../../components/LandingPage/EnterButton";
import Socials from "../../components/shared/socials/Socials";

import "./landingPage.css";

function LandingPage() {
  return (
    <div className="landing-page-body page">
      <TitleBar />
      <Mouth />
      <EnterButton />
      <Socials />
    </div>
  );
}

export default LandingPage;
