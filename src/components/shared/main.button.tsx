const MainButton = ({ title, icon }) => {
  return (
    <button className="bg-[#A259FF] text-white rounded-3xl px-[32px] py-[22px] flex justify-center items-center gap-[12px] hover:scale-95 duration-200 font-WorkSans">
      {icon && <img src={icon} />}
      <p>{title}</p>
    </button>
  );
};

export default MainButton;
