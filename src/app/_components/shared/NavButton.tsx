const NavButton = ({
  icon,
  title,
  onClick,
  isActive
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <>
      <div className={`m-1 w-full rounded-md py-2 px-3 cursor-pointer ${isActive ? 'bg-purple-700' : 'bg-purple-900'}`} onClick={onClick}>
        <div className="flex flex-col items-center justify-center space-y-1">
          <div>{icon}</div>
          <div className={`hidden sm:block text-xs font-medium  ${isActive ? 'text-white' : 'text-gray-400'}`}>{title}</div>
        </div>
      </div>
    </>
  );
};

export default NavButton;