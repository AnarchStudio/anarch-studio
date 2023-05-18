type LogoProps = {
  aColor?: string;
  sColor?: string;
};

const Logo: React.FC<LogoProps> = ({ aColor, sColor }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M445 253L495 151.259L331.166 261.839L362.23 335.229L405.5 353.5L316 496.5L491 335.229L390.788 289.608L445 253Z"
        fill={sColor || "#0066FF"}
      />
      <path
        d="M230.962 2L4 325.311L61.6173 410.602L254.649 302.005L100.196 325.311L211.5 165L254.649 302.005L316 496.5L362.23 335.229L331.166 261.839L230.962 2Z"
        fill={aColor || "#0066FF"}
      />
    </svg>
  );
};

export default Logo;
