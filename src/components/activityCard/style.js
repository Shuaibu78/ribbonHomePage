import styled from 'styled-components';
import {Colors} from "../../theme";

const {white, lightGrey} = Colors;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${white};
  padding: 10px;
  border-bottom: 1px solid ${lightGrey};

  .img {
    width: 50px;
    height: 50px;
  }
`;