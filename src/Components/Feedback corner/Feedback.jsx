

const Feedback = () => {
    return (
        <div className="mx-[10%]">
            <h1 className="text-[#224F34] robo text-[2rem] lg:text-[4rem] font-medium text-center mt-[15rem]">Feedback Corner</h1>

            <div className="mb-28 mt-24 flex flex-col lg:flex-row justify-between items-center">
                <div className="hover:bg-[#C2EFD4]  w-[27.125rem] h-[15.8125rem] rounded-sm bg-white shadow-md pl-[1.19rem]">
                    <h1 className="text-[#224F34] text-[2.75rem] font-semibold">“</h1>
                    <h1 className="text-[#224F34] robo text-[1.375rem] font-semibold">Emily Wilson</h1>
                    <p className="text-[#6F6F6F] popin font-medium text-base pr-[1.56rem] mt-[1.8rem]">
                        The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I amm beyond satisfied!
                    </p>

                </div>
                <div className="hover:bg-[#C2EFD4] w-[27.125rem] h-[15.8125rem] rounded-sm bg-white shadow-md pl-[1.19rem]">
                    <h1 className="text-[#224F34] text-[2.75rem] font-semibold">“</h1>
                    <h1 className="text-[#224F34] robo text-[1.375rem] font-semibold">Sarah Thompson</h1>
                    <p className="text-[#6F6F6F] popin font-medium text-base pr-[1.56rem] mt-[1.8rem]">
                        I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!
                    </p>

                </div>
                <div className="hover:bg-[#C2EFD4] w-[27.125rem] h-[15.8125rem] rounded-sm bg-white shadow-md pl-[1.19rem]">
                    <h1 className="text-[#224F34] text-[2.75rem] font-semibold">“</h1>
                    <h1 className="text-[#224F34] robo text-[1.375rem] font-semibold">Olivia Martinez</h1>
                    <p className="text-[#6F6F6F] popin font-medium text-base pr-[1.56rem] mt-[1.8rem]">
                        I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
                    </p>

                </div>
            </div>

            <div className="flex justify-center items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                        <g filter="url(#filter0_d_1_32)">
                            <rect x="51" y="44" width="40" height="40" rx="3" fill="white" />
                            <path d="M74.071 57L67 64.0711" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                            <path d="M74.071 71.0713L67 64.0002" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_32" x="0" y="0" width="142" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="7" />
                                <feGaussianBlur stdDeviation="25.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_32" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_32" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
                        <g filter="url(#filter0_d_1_27)">
                            <rect x="51" y="44" width="40" height="40" rx="3" fill="#C2EFD4" />
                            <path d="M67 57L74.0711 64.0711" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                            <path d="M67 71.0713L74.0711 64.0002" stroke="#224F34" strokeWidth="2" strokeLinecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_27" x="0" y="0" width="142" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="7" />
                                <feGaussianBlur stdDeviation="25.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_27" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_27" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Feedback;