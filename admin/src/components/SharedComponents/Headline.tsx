interface HeadlineProps {
  children?: string;
}

const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className=" py-6 px-4  text-center">
      <h1 className="text-3xl font-bold text-cyan-700">{children}</h1>
    </div>
  );
};

export default Headline;
