// eslint-disable-next-line react/prop-types
export default function Button({ onClick, className, children, type }) {
  return (
    <>
      {type === "primary" && (
        <button
          className={` bg-[#045692] text-[#FFFFFF] text-[14px] font-semibold py-[7px] px-4 rounded hover:bg-blue-950 ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "submit" && (
        <button
          className={` bg-[#1890FF] text-[#FFFFFF] text-[14px] font-semibold py-[7px] px-4 rounded hover:bg-blue-600 ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "delete" && (
        <button
          className={` bg-[#EB5757] text-[#FFFFFF] text-[14px] font-semibold py-[7px] px-4 rounded hover:bg-red-600 ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {type === "cancel" && (
        <button
          className={` text-[#EB5757] border border-[#EB5757] text-[14px] font-semibold py-[6px] px-4 rounded hover:bg-gray-100 ${className} `}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}
