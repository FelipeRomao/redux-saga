import styled from "styled-components";

export const Container = styled.div`
  background: #bcbcbc;
  outline: 0;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  background: #000;
  height: 30px;
  width: 400px;
  margin: 10px;
  border-radius: 5px;
  border-color: #00ff7f;
  box-shadow: none;
  outline: none;
  font-size: 20px;
  color: #fff;
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  border-color: #00ff7f;
  height: 30px;
  margin: 12.5px;
  outline: none;
  box-shadow: none;
`;

export const Card = styled.div`
  margin: 15px;
  background: #00c9ff;
  background: -webkit-linear-gradient(to right, #92fe9d, #00c9ff);
  background: linear-gradient(to right, #92fe9d, #00c9ff);
  border-radius: 10px;

  p {
    padding: 15px;
    font-weight: bold;
  }
`;
