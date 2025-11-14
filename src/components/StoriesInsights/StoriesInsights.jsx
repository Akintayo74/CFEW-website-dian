import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader";
import Container from "../Container/Container";
import Button from "../Button/Button";
import BlogList from "../BlogList/BlogList";
import { useNavigate } from "react-router-dom";

function StoriesInsights() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/resources');
  }

  return (
    <Section spacing="looseSymmetrical">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeader>Stories and Insights</SectionHeader>
          <p className="mb-12">
            Stay informed with stories from the field, environmental tips, and
            updates on our ongoing programs.
          </p>

          {/* Reusable BlogList component */}
          <BlogList page={1} pageSize={4} gridCols="lg:grid-cols-4" />

          <Button 
            className="mt-12" 
            align="none" 
            color="overlay" 
            size="medium" 
            onClick={handleClick}
          >
            More news
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default StoriesInsights;