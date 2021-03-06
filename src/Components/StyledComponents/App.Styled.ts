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
  height: 50px;
  padding: 10px;
  border-radius: 7px;
  border: 3px solid transparent;
  font-size: 1rem;
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

export const TodoCover = styled.div<{ done: boolean }>`
  width: 400px;
  height: 50px;
  margin: 0.5rem 0;
  padding: 5px;
  border-radius: 7px;
  background-color: ${(props) => (!props.done ? "#e0e0e0" : "palegreen")};
  box-shadow: 0 0 3px #333;
  display: flex;
  align-items: center;
`;

export const TodoTask = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

export const TodoDoneBtn = styled.button<{ done: boolean }>`
  height: 40px;
  border-radius: 5px;
  width: 50px;
  box-shadow: 0 0 3px #333;
  font-weight: bold;
  border: none;
  color: #333;
  outline: none;
  cursor: ${(props) => (props.done ? "not-allowed" : "pointer")};

  &:hover {
    background-color: lightgray;
  }
`;

export const TodoDelBtn = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  box-shadow: 0 0 3px #333;
  width: 60px;
  background-color: #444;
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  color: white;
  &:hover {
    background-color: #333;
  }
`;

export const TodoAddBtn = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  box-shadow: 0 0 3px #333;
  width: 60px;
  background-color: #555;
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  position: absolute;
  top: 5px;
  right: 0px;
  color: white;
  &:hover {
    background-color: #333;
  }
`;

export const TodoForm = styled.form`
  position: relative;
`;
