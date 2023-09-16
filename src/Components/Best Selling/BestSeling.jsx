

const BestSeling = () => {
    return (
        <div>
            <h1 className="text-[#224F34] robo text-[2rem] lg:text-[4rem] font-medium text-center mt-28">Best selling</h1>
            <p className="text-[#224F34] popin lg:text-xl font-medium text-center mt-9 mb-20">Get in on the trend with our curated selection of best-selling styles.</p>

            <div className="flex lg:mx-[10%] lg:justify-between items-center  gap-8 lg:gap-0 flex-col lg:flex-row">
            <div>
                <div className="w-[26.875rem] h-[35.375rem] bg-[#9BB9A2] rounded-sm">
                    <img src="https://i.ibb.co/x5cZqtz/women2.png" alt="" />
                </div>
                <div className="w-[26.875rem]">
                <h1 className="text-[#373737] popin text-[1.375rem] font-medium mt-12 text-center mb-2">Regular Fit Long Sleeve Top</h1>
                <div className="flex justify-evenly items-center">
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">$38.99</p>
                    <p className="text-xl">|</p>
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">5.0⭐</p>
                </div>
                </div>
            </div>


            <div>
                <div className="w-[26.875rem] h-[35.375rem] bg-[#A9D4BA] rounded-sm">
                    <img src="https://i.ibb.co/7yDfxcj/women3.png" alt="" />
                </div>
                <div className="w-[26.875rem]">
                <h1 className="text-[#373737] popin text-[1.375rem] font-medium mt-12 text-center mb-2">Black Crop Tailored Jacket</h1>
                <div className="flex justify-evenly items-center">
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">$62.29</p>
                    <p className="text-xl">|</p>
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">4.9⭐</p>
                </div>
                </div>
            </div>


            <div>
                <div className="w-[26.875rem] h-[35.375rem] bg-[#CADCD0] rounded-sm">
                    <img src="https://i.ibb.co/LdGtmTL/women4.png" alt="" />
                </div>
                <div className="w-[26.875rem]">
                <h1 className="text-[#373737] popin text-[1.375rem] font-medium mt-12 text-center mb-2">Textured Sunset Shirt</h1>
                <div className="flex justify-evenly items-center">
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">$49.99</p>
                    <p className="text-xl">|</p>
                    <p className="text-[#454545] popin text-[1.375rem] font-medium">5.0⭐</p>
                </div>
                </div>
            </div>

            


            </div>
            <div className="text-center mt-20">
            <button className="text-[#224F34] popin text-xl font-medium rounded-sm border-[#224F34] border-2 capitalize px-12 py-4"><div className="flex items-center gap-2">See All<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
  <path d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9L23 9V7L0 7L0 9Z" fill="#224F34"/>
</svg></div></button>
            </div>
        </div>
    );
};

export default BestSeling;