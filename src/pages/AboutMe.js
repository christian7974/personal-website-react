import Navigation from "../components/Navigation";
import AboutMeSection from "../components/AboutMeSection";
import { about_me_list } from "../assets/about_me_list";

export default function AboutMePage() {
    return (
      <div className="h-fit">
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="reg-header">Who Am I?</h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-4">
          {about_me_list.map((item, index) => {
            const isPhoto = index === 1;
            const background = !isPhoto ? "bg-featured-project" : "";

            return (
              <AboutMeSection
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                background={background}
              />
            );
          })}
        </div>
      </div>
    );
  }