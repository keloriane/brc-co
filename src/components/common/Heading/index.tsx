import classNames from "classnames";

export const Heading = ({
  textAlign,
  level,
  textColor,
  content,
}: {
  textAlign: "left" | "right" | "center";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  textColor: string;
  content: string;
}) => {
  const alignmentClass = classNames({
    "text-left": textAlign === "left",
    "text-right": textAlign === "right",
    "text-center": textAlign === "center",
  });

  const fontSizeClasses = {
    1: "xl:text-6xl md:text-[42px] text-[32px]", // Responsive sizes for h1
    2: "text-[#3A7498] uppercase text-center mb-6 font-black text-2xl md:text-3xl", // Responsive sizes for h2
    3: "xl:text-[42px] md:text-[42px] sm:text-[24px] leading-[normal]", // Responsive sizes for h3
    4: "text-2xl md:text-xl sm:text-lg", // Responsive sizes for h4
    5: "text-xl md:text-lg sm:text-base", // Responsive sizes for h5
    6: "text-lg md:text-base sm:text-sm", // Responsive sizes for h6
  }[level]; // Select the class string based on the heading level

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <Tag className={classNames(alignmentClass, fontSizeClasses)}>
        {content}
      </Tag>
    </div>
  );
};
