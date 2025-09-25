function Section({
  children,
  className = "",
  spacing = "default",
  background = "primary",
}) {
  const spacingClasses = {
    // tight: "py-16 lg:py-30",
    default: "py-16 lg:py-20",
    defaultLoose: "py-16 lg:py-30",
    loose: "pt-16 pb-32 lg:pt-30 lg:pb-60",
    looseSymmetrical: "py-32 lg:py-60",
  };

  const bgClasses = {
    pink: "bg-cfew-interface",
    // gray: "bg-gray-50",
    primary: "bg-cfew-primary-50",
  };

  return (
    <section
      className={`${spacingClasses[spacing]} ${bgClasses[background]} ${className} text-center`}
    >
      {children}
    </section>
  );
}

export default Section;
