import Navigation from "../components/Navigation";
import AboutMeSection from "../components/AboutMeSection";
import { about_me_list } from "../assets/about_me_list";

export default function AboutMePage() {
    return (
      <div className="">
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="reg-header">Who Am I?</h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 h-fill">
          {about_me_list.map((item, index) => {
            return (
              <AboutMeSection
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }