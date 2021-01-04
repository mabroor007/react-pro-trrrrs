import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const MainTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const StartButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: darkslategrey;
  }
`;

export const StartSvg = styled.svg`
  width: 40%;
  height: 40%;
`;

export const TodoContent = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TodosTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const TodoInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 7px;
  border: 3px solid transparent;
  outline: none;
  box-shadow: 0 0 3px #333;
  width: 400px;
  font-weight: bold;

  &:focus {
    border: 3px solid #333;
  }
  &:active {
    border: 3px solid #333;
  }
`;
