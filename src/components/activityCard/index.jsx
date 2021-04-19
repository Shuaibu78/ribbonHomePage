import React from 'react'
import {Container} from "./style";

const ActivityCard = ({image, title, titleCode}) => {
  return (
    <Container>
      <img src={image} alt="logo" className="img"/>
      <h3>{title}</h3>
      <p>{titleCode}</p>
    </Container>
  )
}

export default ActivityCard;
