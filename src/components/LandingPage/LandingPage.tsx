import MainCharacter from "../../assets/images/main-character.png";
import { FaLaptopCode } from "react-icons/fa";
import Colors from "../../properties/Colors";
import { FaLocationDot } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <section className="min-w-full min-h-fit text-white">
            <div className="flex justify-center items-start space-0 top-0 w-full h-[115vh] items-">
                <img
                    src={MainCharacter}
                    className="absolute bottom-[-15vh] w-[33vw] h-[100vh] object-fill"
                />
                <h1 className="absolute name-container bottom-0 text-6xl font-robotoBold tracking-widest scale-150 mb-10">
                    SHANTANU PRAMANIK
                </h1>
                <div className="introduction-designation-container h-screen w-screen flex items-center">
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
                    <div className="flex flex-col justify-center items-end   designation-container w-[50vw] h-full">
                        <div className="flex justify-end items-center designation-box h-32 pl-1 pr-6 rounded-l-full w-fit bg-gray-700">
                            <div
                                className={`icon-container ml-4 mr-4 rounded-full w-24 h-24 flex justify-center items-center ${Colors.BG_ACCENT_COLOR}`}
                            >
                                <FaLaptopCode className="animate-pulse text-5xl" />
                            </div>
                            <span className="designation text-2xl tracking-wider">
                                Software
                                <br />
                                DEVELOPER
                            </span>
                        </div>
                        <div className="flex justify-center location-container pr-4 pt-2">
                            <FaLocationDot className="h-6 mr-2" />
                            <span>Bangalore, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
