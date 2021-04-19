import React from "react";
import ActivityCard from "../activityCard";
import { Container, ActivityContainer } from "./style";
import {data} from "./data";

const RecentActivity = () => {
  console.log(data)
  return (
    <Container>
      <h2>Recent Activity</h2>
      <ActivityContainer>
        {
          data.map((option) => {
            const {image, name, activityCode} = option;
            return(
              <ActivityCard image={image} title={name} titleCode={activityCode} />
            )
          })
        }
      </ActivityContainer>
    </Container>
  );
};

export default RecentActivity;
