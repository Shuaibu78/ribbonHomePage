import styled from 'styled-components';
import {Colors} from "../../theme";

const {white, secondaryColor} = Colors;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${white};
  padding: 10px;

  .img {
    width: 50px;
    height: 50px;
  }
`;