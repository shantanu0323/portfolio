import MainCharacter from "../../assets/images/blue-me.png";
import { FaLaptopCode } from "react-icons/fa";
import Colors from "../../properties/Colors";
import { FaLocationDot } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <section className="min-w-full min-h-fit text-white overflow-hidden">
            <div className="flex justify-center items-start space-0 top-0 w-full h-[115vh] relative">
                {/* Absolute Containers */}
                <>
                    {/* Main-Character Image */}
                    <img
                        data-scroll
                        data-scroll-speed="-0.5"
                        src={MainCharacter}
                        className="absolute z-0 bottom-0 h-[110vh] object-cover"
                    />

                    {/* Name-Container */}
                    {/* TODO: Have a different bigger font for this */}
                    <h1 className="absolute name-container bottom-[15vh]  text-[15vh] whitespace-nowrap font-robotoRegular tracking-wide scale-150 mb-10">
                        - Shantanu Pramanik
                    </h1>

                    {/* First-Callout-Container */}
                </>
                <div className="introduction-designation-container h-screen w-screen flex items-center z-10">
                    {/* Greeting Container to the left*/}
                    <div className="flex flex-col justify-center items-start pl-24 introduction-container w-[50vw] h-full">
                        <h1 className="greeting-container text-4xl font-robotoBold w-fit h-fit">
                            Hi There !!!
                        </h1>
                        <p className="brief-intro-container max-w-[30vw] h-fit">
                            Shantanu is a Full Stack Developer with expertise in
                            technologies like Java, Python, JavaScript, Flask,
                            Front-end and Backend Development. He brings a
                            pragmatic approach to problem-solving. With 5 years
                            of experience in the field, his career is defined by
                            a commitment to delivering tangible results, whether
                            optimizing performance, automating processes, or
                            enhancing user experiences. Let's connect to discuss
                            how he can contribute to your team's success.
                        </p>
                    </div>

                    {/* Designation */}
                    <div className="flex flex-col justify-center items-end   designation-container w-[50vw] h-full z-10">
                        <div className="flex relative justify-end items-center designation-box h-28 pl-1 pr-6 rounded-l-full w-fit bg-gray-800">
                            <div
                                className={`icon-container mx-4 rounded-full w-20 h-20 flex justify-center items-center bg-gray-500`}
                            >
                                <FaLaptopCode className="animate-pulse text-5xl" />
                            </div>
                            <span className="designation text-2xl px-8 tracking-wider">
                                Software
                                <br />
                                DEVELOPER
                            </span>
                            <div className="absolute bottom-0 left-1/2 translate-x-[-30%] translate-y-[130%] text-lg flex location-container">
                                <FaLocationDot className="h-6 mr-2" />
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
