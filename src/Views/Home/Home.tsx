import { HomeProps, useHomePage } from "./Home.Logic";
// import {
//   HEAD,
//   PStyled,
//   Button,
// } from "../../Components/StyledComponents/StyledComponents";
import {
  MainContent,
  MainTitle,
  Page,
  StartButton,
  StartSvg,
} from "../../Components/StyledComponents/App.Styled";

export const Home: React.FC<HomeProps> = ({ history }) => {
  const { handleStart } = useHomePage(history);
  return (
    <Page>
      <MainContent>
        <MainTitle>Mabroor Ahmad</MainTitle>
        <StartButton onClick={handleStart}>
          <StartSvg viewBox="0 0 23 30" fill="#fff">
            <path
              d="M22.4142 16.4142C23.1953 15.6332 23.1953 14.3668 22.4142 13.5858L9.68629 0.857864C8.90524 0.0768158 7.63891 0.0768158 6.85786 0.857864C6.07682 1.63891 6.07682 2.90524 6.85786 3.68629L18.1716 15L6.85786 26.3137C6.07682 27.0948 6.07682 28.3611 6.85786 29.1421C7.63891 29.9232 8.90524 29.9232 9.68629 29.1421L22.4142 16.4142ZM0 17L21 17V13L0 13L0 17Z"
              fill="white"
            />
          </StartSvg>
        </StartButton>
      </MainContent>
      {/* <Button background="yellow" onClick={handleGoToAboutPageClick}>
        About Creator
      </Button> */}
    </Page>
  );
};
