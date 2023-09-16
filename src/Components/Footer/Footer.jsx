

const Footer = () => {
    return (
        <div className="mt-[10rem] lg:h-[37.5rem] bg-[#224F34] px-[10%] pt-20">
            <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                <div>
                    <h1 className="text-white robo text-[3.125rem] font-bold">Rivo</h1>
                    <h3 className="mt-[2.75rem] robo text-[1.375rem] font-medium text-white">Social Media</h3>
                    <div className="flex mt-6 gap-9">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M6.83998 3.04004C4.75034 3.04004 3.03998 4.7504 3.03998 6.84004V31.16C3.03998 33.2497 4.75034 34.96 6.83998 34.96H19.6323C19.7144 34.9736 19.7981 34.9736 19.8802 34.96H24.1923C24.2744 34.9736 24.3581 34.9736 24.4402 34.96H31.16C33.2496 34.96 34.96 33.2497 34.96 31.16V6.84004C34.96 4.7504 33.2496 3.04004 31.16 3.04004H6.83998ZM6.83998 4.56004H31.16C32.428 4.56004 33.44 5.57199 33.44 6.84004V31.16C33.44 32.4281 32.428 33.44 31.16 33.44H25.08V22.8H27.9834L29.0477 17.48H25.08V15.96C25.08 15.5363 25.1203 15.5032 25.2626 15.4108C25.4048 15.3184 25.8444 15.2 26.6 15.2H28.88V10.9206L28.4465 10.7143C28.4465 10.7143 26.7008 9.88003 24.32 9.88003C22.61 9.88003 21.2052 10.5613 20.3062 11.685C19.4073 12.8087 19 14.3134 19 15.96V17.48H16.72V22.8H19V33.44H6.83998C5.57193 33.44 4.55998 32.4281 4.55998 31.16V6.84003C4.55998 5.57199 5.57193 4.56004 6.83998 4.56004ZM24.32 11.4C25.9001 11.4 26.8944 11.7485 27.36 11.9329V13.68H26.6C25.7254 13.68 25.0245 13.7524 24.4343 14.1357C23.8441 14.5191 23.56 15.2468 23.56 15.96V19H27.1922L26.7365 21.28H23.56V33.44H20.52V21.28H18.24V19H20.52V15.96C20.52 14.5667 20.8727 13.4113 21.4937 12.635C22.1148 11.8587 22.99 11.4 24.32 11.4Z" fill="#C2EFD4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g clipPath="url(#clip0_1_311)">
                                <path d="M23.9531 3.82812C19.7668 3.82812 16.3625 7.23242 16.3625 11.4188C16.3625 11.6703 16.4254 11.9164 16.45 12.1625C11.2739 11.6676 6.69651 9.17383 3.58752 5.35938C3.4426 5.17617 3.21838 5.07774 2.98323 5.09414C2.7508 5.11055 2.54299 5.24453 2.42815 5.44688C1.77463 6.5707 1.40002 7.86407 1.40002 9.25313C1.40002 10.9348 2.00159 12.4742 2.93127 13.7375C2.7508 13.6582 2.55393 13.6145 2.3844 13.5188C2.16838 13.4039 1.90861 13.4094 1.69807 13.5352C1.48752 13.6609 1.359 13.8879 1.35627 14.1313V14.2188C1.35627 16.7973 2.69065 19.0367 4.6594 20.4094C4.63752 20.4066 4.61565 20.4148 4.59377 20.4094C4.35315 20.3684 4.10978 20.4531 3.94846 20.6363C3.78713 20.8195 3.73518 21.0738 3.80628 21.3063C4.58831 23.7371 6.5844 25.5938 9.05628 26.2719C7.08753 27.4422 4.80432 28.1313 2.34065 28.1313C1.80745 28.1313 1.29612 28.1039 0.787528 28.0438C0.459403 28 0.144949 28.1914 0.0355735 28.5031C-0.0765385 28.8148 0.0465145 29.1621 0.328153 29.3344C3.48636 31.3605 7.23519 32.55 11.2657 32.55C17.7981 32.55 22.9223 29.8211 26.3594 25.9219C29.7965 22.0227 31.5875 16.9586 31.5875 12.2281C31.5875 12.0285 31.5711 11.8344 31.5657 11.6375C32.8481 10.6559 33.9938 9.50469 34.8907 8.15938C35.0684 7.89961 35.0493 7.55234 34.8442 7.31172C34.6418 7.07109 34.3 6.99726 34.0157 7.13125C33.6547 7.29258 33.2336 7.30899 32.8563 7.4375C33.3539 6.77305 33.7805 6.05664 34.0375 5.25C34.125 4.97383 34.0293 4.67032 33.8024 4.48984C33.5754 4.31211 33.2582 4.29023 33.0094 4.44063C31.8145 5.14883 30.491 5.64649 29.0938 5.95C27.7375 4.68125 25.952 3.82812 23.9531 3.82812ZM23.9531 5.22813C25.7387 5.22813 27.352 5.99101 28.4813 7.19688C28.6508 7.37188 28.8996 7.4457 29.1375 7.39375C30.0508 7.21328 30.9176 6.94805 31.7625 6.60625C31.2758 7.2625 30.6742 7.82305 29.9688 8.24688C29.6489 8.40274 29.4985 8.77187 29.616 9.1082C29.7309 9.4418 30.0809 9.63594 30.4282 9.55938C31.1282 9.47461 31.7516 9.19024 32.4188 9.0125C31.8199 9.66055 31.1637 10.2457 30.45 10.7625C30.2559 10.9047 30.1492 11.1344 30.1657 11.375C30.1766 11.6594 30.1875 11.941 30.1875 12.2281C30.1875 16.6031 28.5086 21.3527 25.3094 24.9813C22.1102 28.6098 17.4125 31.15 11.2656 31.15C8.47385 31.15 5.83791 30.532 3.45627 29.4438C6.4094 29.2168 9.13284 28.1723 11.3313 26.4469C11.561 26.2637 11.6512 25.9574 11.5582 25.6785C11.4653 25.3996 11.2082 25.2082 10.9156 25.2C8.60784 25.159 6.67463 23.8164 5.64377 21.9188C5.68205 21.9188 5.71486 21.9188 5.75315 21.9188C6.44494 21.9188 7.12853 21.8313 7.76565 21.6563C8.0719 21.566 8.28244 21.2816 8.27151 20.9617C8.26057 20.6418 8.03362 20.3684 7.7219 20.3C5.23088 19.7969 3.3633 17.768 2.93127 15.2469C3.63674 15.4902 4.35861 15.6816 5.14065 15.7063C5.46057 15.7254 5.75041 15.5258 5.84885 15.2223C5.94729 14.9188 5.82698 14.5852 5.55627 14.4156C3.89377 13.3027 2.80002 11.4078 2.80002 9.25313C2.80002 8.45469 3.00784 7.72188 3.28127 7.02188C6.78127 10.8637 11.6813 13.4148 17.2156 13.6938C17.4344 13.7047 17.6477 13.6145 17.7899 13.4477C17.9321 13.2781 17.9867 13.0539 17.9375 12.8406C17.8309 12.3867 17.7625 11.9055 17.7625 11.4188C17.7625 7.98984 20.5242 5.22813 23.9531 5.22813Z" fill="#C2EFD4" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_311">
                                    <rect width="35" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M12.16 2.28003C6.71271 2.28003 2.28003 6.71271 2.28003 12.16V25.84C2.28003 31.2873 6.71271 35.72 12.16 35.72H25.84C31.2873 35.72 35.72 31.2873 35.72 25.84V12.16C35.72 6.71271 31.2873 2.28003 25.84 2.28003H12.16ZM12.16 3.80003H25.84C30.4658 3.80003 34.2 7.5343 34.2 12.16V25.84C34.2 30.4658 30.4658 34.2 25.84 34.2H12.16C7.5343 34.2 3.80003 30.4658 3.80003 25.84V12.16C3.80003 7.5343 7.5343 3.80003 12.16 3.80003ZM28.12 8.36003C27.2806 8.36003 26.6 9.04056 26.6 9.88003C26.6 10.7195 27.2806 11.4 28.12 11.4C28.9595 11.4 29.64 10.7195 29.64 9.88003C29.64 9.04056 28.9595 8.36003 28.12 8.36003ZM19 10.64C14.3919 10.64 10.64 14.3919 10.64 19C10.64 23.6081 14.3919 27.36 19 27.36C23.6081 27.36 27.36 23.6081 27.36 19C27.36 14.3919 23.6081 10.64 19 10.64ZM19 12.16C22.7867 12.16 25.84 15.2134 25.84 19C25.84 22.7867 22.7867 25.84 19 25.84C15.2134 25.84 12.16 22.7867 12.16 19C12.16 15.2134 15.2134 12.16 19 12.16Z" fill="#C2EFD4" />
                        </svg>
                    </div>
                </div>


                <div>
                    <h3 className="text-white robo text-[1.375rem] font-medium">SHOP</h3>

                    <div className="flex flex-col">
                        <a className="popin text-xl text-[#C2EFD4] mt-6" href="">Products</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-5" href="">Overview</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-5" href="">Pricing</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-6" href="">Releases</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white robo text-[1.375rem] font-medium">Company</h3>

                    <div className="flex flex-col">
                        <a className="popin text-xl text-[#C2EFD4] mt-6" href="">About us</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-5" href="">Contact</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-5" href="">News</a>
                        <a className="popin text-xl text-[#C2EFD4] mt-6" href="">Support</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white robo text-[1.375rem] font-medium">Stay up to date</h3>
                    <div className="relative mt-10">
                        <input className="bg-[#224F34] border-[3px] text-white popin text-xl pl-7 placeholder:text-white border-[#A3F3BE] lg:w-[30.4rem] h-[3.5rem] rounded-sm" type="text" placeholder="Enter your email" />
                            <button className="absolute left-[15rem] lg:left-[23.5rem] w-[7.1rem] h-[3.5rem] bg-[#A3F3BE] text-[#224F34] popin text-xl font-medium uppercase">Submit</button>
                    </div>
                </div>
            </div>
            <div className="mt-40 flex justify-between items-center">
                <hr className="w-[60vw]" />
                <div className="flex gap-8">
                    <a className="text-white popin text-xl font-medium" href="">Terms</a>
                    <a className="text-white popin text-xl font-medium" href="">Privacy</a>
                    <a className="text-white popin text-xl font-medium" href="">Cookies</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;