function Section({
  children,
  className = "",
  spacing = "default",
  background = "primary",
}) {
  const spacingClasses = {
    none: "p-0",
    tight: "pt-16 pb-12 lg:pt-30",
    tightNone: 'pt-16 lg:pt-30',
    noneTight: 'pt-0 pb-16 lg:pb-30',
    defaultTight: 'pt-16 pb-20 lg:pt-30',
    default: "py-16 lg:py-20",
    defaultLoose: "py-16 lg:py-30",
    loose: "pt-16 pb-32 lg:pt-30 lg:pb-60",
    looseReverse: "pt-32 pb-16 lg:pt-60 lg:pb-30",
    looseSymmetrical: "py-32 lg:py-60",
  };

  const bgClasses = {
    pink: "bg-cfew-interface",
    primary: "bg-cfew-primary-50",
    green: "bg-cfew-primary-500",
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
