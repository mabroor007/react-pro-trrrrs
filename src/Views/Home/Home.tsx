import { HomeProps, useHomePage } from "./Home.Logic";

export const Home: React.FC<HomeProps> = ({ history }) => {
  const { handleGoToAboutPageClick } = useHomePage(history);

  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page of This application its act as the main page and
        result of the route '/' it acts as the index page.
      </p>
      <button onClick={handleGoToAboutPageClick}>About Creator</button>
    </div>
  );
};
