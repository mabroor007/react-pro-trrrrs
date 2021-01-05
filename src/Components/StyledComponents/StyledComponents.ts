import styled from "styled-components";
interface BTNProps {
  background: string;
}

export const Button = styled.button<BTNProps>`
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  transition: all 0.3s;
  font-size: 1rem;
  margin: 1rem;
  &:hover {
    background-color: #333;
    color: white;
  }
`;
export const HEAD = styled.h1`
  color: white;
  border-radius: 4px;
  padding: 1rem;
  background-color: #333;
  width: 400px;
  margin: 1rem;
`;

export const H3Styled = styled.h3`
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 0 10px #333;
  background-color: #333;
  color: white;
  width: 400px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 3px;
`;

export const PStyled = styled.p`
  margin: 1rem;
  padding: 1rem;
  background-color: lightskyblue;
  box-shadow: 0 0 10px lightskyblue;
  border-radius: 4px;
  width: 400px;
`;

export const IMGStyled = styled.img`
  width: 400px;
  margin: 1rem;
  border: 10px solid white;
  box-shadow: 0 0 5px gray;
`;

export const ToSpecificButton = styled.button`
  padding: 1rem;
  font-family: Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  background-color: purple;
  transition: all 0.3s;
  font-size: 1rem;
  margin: 1rem;
  color: white;
  display: block;
  &:hover {
    background-color: #333;
  }
`;
