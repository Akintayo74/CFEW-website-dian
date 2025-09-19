

function Section({ children, className = "", spacing = "default", background = "white" }) {
  const spacingClasses = {
    // tight: "py-16 lg:py-30",
    default: "py-16 lg:py-20", 
    // loose: "py-32 lg:py-60"
  };
  
  const bgClasses = {
    // white: "bg-white",
    // gray: "bg-gray-50",
    primary: "bg-primary"
  };
  
  return (
    <section className={`${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}

export default Section;