import styled from 'styled-components';
import {Colors} from "../../theme";

const {primaryColor, white} = Colors;

export const Container = styled.section`
  background-color: ${white};
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: ${primaryColor};
  height: 280px;
  border-radius: 15px;
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  box-shadow: 3px 10px 16px -1px rgba(23,22,22,0.29);
  -webkit-box-shadow: 3px 10px 16px -1px rgba(23,22,22,0.29);
  -moz-box-shadow: 3px 10px 16px -1px rgba(23,22,22,0.29);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85%;
  width: 100%;

  h1, p {
    color: ${white};
  }

  .wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

export const Circle = styled.span`
  border-radius: 50%;
  width: 140px;
  height: 120px;
  background-color: ${white};
  font-size: 36px;
  padding: 30px;

  p{
    font-size: 18px;
  }
`;

export const VerticalLine = styled.span`
  border: 1px solid ${white};
  height: 270px;
`;