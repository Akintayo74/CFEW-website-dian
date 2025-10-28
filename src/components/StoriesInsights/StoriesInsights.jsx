import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader";
import BlogCard from "../BlogCard/BlogCard";
import Container from "../Container/Container";
import Button from "../Button/Button";

function StoriesInsights() {
  return (
    <Section spacing="looseSymmetrical">
      <Container>
      <div className="flex flex-col items-center">
        <SectionHeader>Stories and Insights</SectionHeader>
        <p className="mb-12">
          Stay informed with stories from the field, environmental tips, and
          updates on our ongoing programs.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:justify-between lg:grid-cols-3 2xl:grid-cols-4">
          <BlogCard
            imageSrc="/slide-1.png"
            imageAlt="Random Image"
            publishDate="August 8th 2025"
            title='The reemergence of the North Central Green life'
          />
          <BlogCard
            imageSrc="/slide-1.png"
            imageAlt="Random Image"
            publishDate="August 8th 2025"
            title='The reemergence of the North Central Green life'
          />
          <BlogCard
            imageSrc="/slide-1.png"
            imageAlt="Random Image"
            publishDate="August 8th 2025"
            title='The reemergence of the North Central Green life'
          />
          <BlogCard
            imageSrc="/slide-1.png"
            imageAlt="Random Image"
            publishDate="August 8th 2025"
            title='The reemergence of the North Central Green life'
          />
        </div>
        {/* <Button className="mt-12 bg-cfew-primary-100" align="none">
          More News
        </Button> */}

        <Button
          className="mt-12"
          align="none"
          color="overlay"
          size="medium"
        >
          More news
        </Button>
      </div>
      </Container>
    </Section>
  );
}

export default StoriesInsights;
