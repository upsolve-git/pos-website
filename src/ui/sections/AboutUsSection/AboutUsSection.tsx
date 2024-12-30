import React from "react";
import AboutUsInfo from "../../organisms/AboutUsInfo/AboutUsInfo";

interface AboutUsSectionProps{

}

const AboutUs: React.FC<AboutUsSectionProps> = ()=>{
    return(
        <div
        className=" bg-secondary flex flex-col items-center my-9 tablet:mx-12 tablet:px-[10%] desktop:my-14">
            <h1
            className="font-semibold text-secondarydark text-md tablet:text-xl desktop:text-2xl monitor:text-5xl">
                ABOUT US
            </h1>
            <AboutUsInfo 
            image="/image/wrapper/stockpolish.png"
            name="Gel Nail Polish"
            description="Our Gel Nail Polish is crafted to provide a long lasting finish to keep your nails looking flawless for days. With a wide range of shades, from classic nudes to bold brights, you'll find the perfect colour for every occasion."
            isRight={false}/>
            <AboutUsInfo 
            image="/image/wrapper/lasermachine.png"
            name="Laser Machine"
            description="Experience the future of hair removal with our Laser Hair Removal Machine. Designed for both safety and efficiency, this device offers permanent hair reduction from the comfort of your home. It’s easy to use and suitable for all skin types, delivering professional level results without the need for salon visits."
            isRight={true} />
            <AboutUsInfo 
            image="/image/wrapper/stockpolish.png"
            name="Ultimate Nail Care Kit"
            description="Taking care of your nails has never been easier with our Ultimate Nail Care Kit. This all-in-one set includes everything you need for complete nail maintenance, from cuticle oils to nourishing creams and high-quality tools. Whether you're prepping for a manicure or just maintaining healthy nails, this kit is your go-to solution for professional grade care."
            isRight={false} />
        </div>
    )
}

export default AboutUs