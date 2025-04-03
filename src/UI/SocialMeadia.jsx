import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMeadia = () => {

 const sendWhatsAppMessage = () => {
        const phoneNumber = "919056659781"; // 👈 Apna number daalein
        const message = "Hello, I want more info plz call this no.!";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    // instagram 
    const openInstagram = () => {
        const username = "Yoboy_ritik";  // 👈 Apna username daalein
        const url = `https://www.instagram.com/${username}`;

        window.open(url, "_blank");
    };


    return (
        <div className="my-8">
            <div className="md:flex text-center justify-center items-center gap-3">
                <div>
                    <h1 className="text-lg font-semibold">Follow Us :-</h1>
                </div>
                <div className="flex justify-center items-center gap-3 text-3xl cursor-pointer">
                    <span onClick={sendWhatsAppMessage}><IoLogoWhatsapp /></span>
                    <a href="https://www.facebook.com/hrithik.kumar.56829?rdid=LNSZp2j21L04ib0m&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16GzC5ama3%2F#"><span><FaFacebook /></span></a>
                    <span onClick={openInstagram}><FaInstagramSquare /></span>
                    <a href="https://www.linkedin.com/in/ritik-choudhary-a29480319/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><span><FaLinkedin /></span></a>
                    <a href="https://github.com/ritik903"><span><FaGithub /></span></a>
                </div>
            </div>
            <a href="tel:+919056659781"><div className="text-lg font-semibold text-center mt-2 cursor-pointer">
                Call Us :- 9056659781
            </div></a>

        </div>
    )
}
export default SocialMeadia;