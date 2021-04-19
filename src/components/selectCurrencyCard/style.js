import styled from 'styled-components';
import {Colors} from "../../theme";

const {darkGrey, white, secondaryColor, lightGrey} = Colors;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${secondaryColor};
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 5px;
  }
`;

export const FormWrapper = styled.div`
  background-color: ${white};
  height: 150px;
  width: 50%;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  allign-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  allign-items: center;

  select {
    width: 16%;
    border: 1px solid ${darkGrey};
    padding: 12px 16px;
    color: white;
    background-color: ${darkGrey}; 
  }

  input[type=number] {
    width: 36%;
    border: 1px solid ${darkGrey};
    padding: 13px 16px;
    color: ${darkGrey};
    background-color: ${lightGrey};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    color: ${white};
    background-color: ${secondaryColor};
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
