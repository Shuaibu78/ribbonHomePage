import styled from 'styled-components';
import {Colors} from "../../theme";

const {white, secondaryColor} = Colors;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    color: ${secondaryColor};
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 5px;
  }
`;

export const ActivityContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  allign-items: center;
  flex-direction: column;
`;