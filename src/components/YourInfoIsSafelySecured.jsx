const YourInfoIsSafelySecured = () => {
  return (
    <div className="w-[430px] mt-5 flex justify-center items-center gap-2">
        <div className="relative top-[1px] flex justify-center items-center flex-col">
            <div className="absolute h-[4px] w-[5px] rounded-[2px] bottom-[7px] border-[#8692A6] border border-b-0"/>
            <div className="h-[8px] w-[9px] rounded-sm border-[#8692A6] border"/>
            <div className="absolute bottom-[3px] h-[1px] w-[1px] rounded-sm border-[#8692A6] border"/>
        </div>
        <p className="text-[12px] text-[#8692A6]">Your Info is safely secured</p>
    </div>
  )
}

export default YourInfoIsSafelySecured