import React from "react";
import Logo from "../../atoms/Logo/Logo";

interface FooterSectionProps{}

const FooterSection: React.FC<FooterSectionProps> = ()=>{
    return (
        <footer>

            <div
            className=" bg-primary text-white text-xxs px-4 py-4 tablet:px-[10%] tablet:py-[3%] tablet:text-xs desktop:px-[10%] desktop:text-sm">
                <div
                className="flex justify-between mb-1 tablet:mb-5">
                    <Logo 
                    styles="w-16 h-16 tablet:w-28 tablet:h-28"
                    fill="#FFFFFF"/>
                    <div
                    className="grid grid-cols-2 grid-rows-2 max-w-40% tablet:grid-rows-1 tablet:grid-cols-3 tablet:min-w-[80%] tablet:gap-3">
                        <div
                        className="">
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Menu</p>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                            </ul>
                        </div>
                        <div>
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Contact</p>
                            <ul>
                                <li>dev.cgnails@gmail.com</li>
                                <li>+1 (919)-670-9327</li>
                            </ul>
                        </div>
                        <div
                        className="col-span-2 tablet:col-span-1">
                            <p
                            className="text-sm font-medium tablet:text-md desktop:text-xl">Social</p>
                            <ul
                            className="flex justify-between items-center max-w-[60%] tablet:min-w-[80%]">
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit px-3 py-[0.55rem]">
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="#D8B192"/>
                                    </svg>
                                </li>
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit p-3">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z" fill="#D8B192"/>
                                    </svg>
                                </li>
                                <li
                                className="bg-secondarylight rounded-full w-fit max-h-fit p-3">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C5.82667 0 5.556 0.00933333 4.70133 0.0493333C1.79467 0.182667 0.181333 1.79467 0.048 4.70133C0.00933333 5.556 0 5.828 0 8C0 10.1733 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79467 15.8187 4.70133 15.952C5.556 15.9907 5.82667 16 8 16C10.1733 16 10.4453 15.9907 11.3 15.952C14.2013 15.8187 15.8213 14.2067 15.952 11.2987C15.9907 10.4453 16 10.1733 16 8C16 5.828 15.9907 5.556 15.952 4.70133C15.8213 1.79867 14.2067 0.181333 11.3 0.0493333C10.4453 0.00933333 10.1733 0 8 0ZM8.00007 1.44238C10.1361 1.44238 10.3894 1.45038 11.2334 1.48905C13.4027 1.58772 14.4134 2.61572 14.5134 4.76772C14.5507 5.61172 14.5587 5.86372 14.5587 7.99972C14.5587 10.1357 14.5507 10.389 14.5134 11.2317C14.4134 13.3824 13.4041 14.413 11.2334 14.5117C10.3894 14.549 10.1374 14.5584 8.00007 14.5584C5.86407 14.5584 5.61074 14.5504 4.76807 14.5117C2.59474 14.4117 1.58807 13.3797 1.48807 11.2317C1.45074 10.389 1.44141 10.1357 1.44141 7.99972C1.44141 5.86372 1.45074 5.61038 1.48807 4.76772C1.58674 2.61438 2.59741 1.58638 4.76807 1.48772C5.61074 1.44905 5.86407 1.44238 8.00007 1.44238ZM3.89209 7.9996C3.89209 5.73027 5.73209 3.8916 8.00009 3.8916C10.2681 3.8916 12.1081 5.7316 12.1081 7.9996C12.1081 10.2689 10.2681 12.1076 8.00009 12.1076C5.73209 12.1076 3.89209 10.2689 3.89209 7.9996ZM7.99992 10.6663C6.52659 10.6663 5.33325 9.47301 5.33325 7.99967C5.33325 6.52767 6.52659 5.33301 7.99992 5.33301C9.47192 5.33301 10.6679 6.52634 10.6679 7.99967C10.6679 9.47301 9.47192 10.6663 7.99992 10.6663ZM11.3093 3.73067C11.3093 3.2 11.74 2.77067 12.2693 2.77067C12.8013 2.77067 13.2307 3.2 13.2307 3.73067C13.2307 4.26133 12.8 4.69067 12.2693 4.69067C11.7387 4.69067 11.3093 4.26 11.3093 3.73067Z" fill="#D8B192"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div
                className="flex justify-between tablet:mt-4">
                    <span>
                        Copyright 2024
                    </span>
                    <span>
                        Terms of use
                    </span>
                    <span>
                        Privacy Policy
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection