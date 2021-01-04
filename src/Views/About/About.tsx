import { AboutPageProps } from "./About.Logic";

export const About: React.FC<AboutPageProps> = ({ location }) => {
  // logging details to console
  // console.log("Logging location details from About page:", location);

  return (
    <div className="win">
      <h1>About Page</h1>
      {location.state && <h4>{location.state.name}</h4>}
      <ul>
        {location.state &&
          location.state.qual &&
          location.state.qual.map((val) => {
            return <li key={val}>{val}</li>;
          })}
      </ul>
    </div>
  );
};
