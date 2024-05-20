import MainCharacter from "../../assets/images/blue-me.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const LandingPage = () => {
    const handleScrollEvent = (event: any) => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const percentChange = (scrollY / viewportHeight) * 100;
        const nameDOM = document.querySelector(
            ".section-landing-page .name-container #name-landing-page"
        );
        const xTransform = -1 * 0.25 * percentChange;
        if (nameDOM != null) {
            nameDOM.style.transform = `translateX(${xTransform}%)`;
        }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return (
        <section className="min-w-full min-h-fit text-white overflow-hidden section-landing-page">
            <div className="flex justify-center items-start space-0 top-0 w-full h-[115vh] relative bg-gradient-to-b from-zinc-500 to-zinc-900">
                {/* Absolute Containers */}
                <>
                    {/* Main-Character Image */}
                    <img
                        data-scroll
                        data-scroll-speed="-0.5"
                        src={MainCharacter}
                        className="absolute z-0 bottom-0 h-[110vh] object-cover saturate-0"
                    />

                    {/* Name-Container */}
                    {/* TODO: Have a different bigger font for this */}
                    <div className="absolute bottom-[15vh] w-screen h-fit name-container">
                        <p
                            className="text-[20vh] whitespace-nowrap py-0"
                            id="name-landing-page"
                        >
                            - Shantanu{" "}
                            <span className="font-robotoRegular">Pramanik</span>
                        </p>
                    </div>

                    {/* First-Callout-Container */}
                </>
                <div className="introduction-designation-container h-screen w-screen flex items-center">
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
                        <div className="flex relative justify-end items-center designation-box h-28 pl-1 pr-6 rounded-l-full w-fit bg-red-700">
                            <div
                                className={`icon-container mx-4 rounded-full w-20 h-20 flex justify-center items-center bg-red-200`}
                            >
                                <FaLaptopCode className="animate-pulse text-5xl text-black" />
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
