interface NoResultProps {
  title: string;
}

const NoResult = ({ title }: NoResultProps) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-white">
      Sorry :(
      <br />
      {title}
    </div>
  );
};

export default NoResult;
