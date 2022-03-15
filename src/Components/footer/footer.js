import React from 'react'
import FooterLogo from "../../Assets/images/footerlogo.svg"
import Email from "../../Assets/images/email.svg";
import Phone from "../../Assets/images/phone.svg";

function Footer() {
    return (
        <div>

        <div className="flex flex-col mt-10">
            <div className="m-auto p-10 border rounded-xl shadow-2xl -mb-10 bg-white">
                <h1 className="font-bold text-[40px]">Easy.Fast.Better</h1>
                <div className="flex items-center">
                <p className="font-normal text-[21.38px]">Your mortgage application, wherever you are, whenever you want.</p>
                <button className="ml-4 shadow-xl bg-[#4185E5] p-2 font-medium text-[17.49px] rounded text-white">Get Started</button>
                </div>
            </div>

            
            
        </div>
        <div className="w-[100%] bg-[#398ECE] rounded-t-[40%] p-[100px] pt-[200px]">
                <div className="flex justify-around flex-wrap">
                    <div>
                        <img src={FooterLogo} alt="footerlogo"/>
                        <p className="text-left text-[11.66px] mt-4 mb-4 text-white">Mortgages made simple. Approva is a Licensed Mortgage<br />Brokerage, FSRAO# 13290124. All Rights Reserved.</p>
                        <div>
                            <div className="flex mt-6 mb-4">
                                <img src={Email} alt="email" />
                                <p className="text-white text-[13.6px] ml-2">support@approva.co</p>
                            </div>
                            <div className="flex mt-4 mb-4">
                                <img src={Phone} alt="email" />
                                <p className="text-white text-[13.6px] ml-2">1-800-643-2321</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-[13.6px] text-white">Our product</h1>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">How it works?</p>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Partners</p>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Features</p>
                    </div>
                    <div>
                        <h1  className="font-bold text-[13.6px] text-white">Legal</h1>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Terms & Conditions</p>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Privacy Policy</p>
                    </div>
                    <div>
                        <h1  className="font-bold text-[13.6px] text-white">Resources</h1>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Learn</p>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Calculator</p>
                        <p className="font-normal text-[12.63px] text-white mt-4 mb-4">Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
