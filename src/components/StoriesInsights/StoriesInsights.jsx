import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader";
import BlogCard from "../BlogCard/BlogCard";

function StoriesInsights() {
  return (
    <Section spacing="looseSymmetrical">
      <div className="flex flex-col items-center">
        <SectionHeader>Stories and Insights</SectionHeader>
        <p>
          Stay informed with stories from the field, environmental tips, and
          updates on our ongoing programs.
        </p>
        {/* <div className="flex flex-col items-center"> */}
          <BlogCard
            imageSrc="/slide-1.png"
            imageAlt="Random Image"
            publishDate="August 8th 2025"
            title='The reemergence of the North Central Green life'

          />
        {/* </div> */}
      </div>
    </Section>
  );
}

export default StoriesInsights;
