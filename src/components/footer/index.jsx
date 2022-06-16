import {ReactComponent as IconSearchSVG} from "../../assets/icon-search.svg";
import {ReactComponent as FacebookLogoSVG} from "../../assets/facebook.svg";
import {ReactComponent as InstagramLogoSVG} from "../../assets/instagram.svg";

const swLinks = [
    {
        url: "https://privacy.thewaltdisneycompany.com/en/",
        name: "Privacy Policy",
        component: "Privacy Policy",
    },
    {
        url: "https://disneytermsofuse.com/",
        name: "Terms of Use",
        component: "Terms of Use",
    }
];

const Footer = () => {
    return (
        <footer>
            <div className="links-footer">
                {swLinks.map((link) => (
                    <a
                        key={link.name}
                        className="link"
                        href={link.url}
                        target="_blank"
                        alt={link.name}
                        rel="noreferrer"
                    >
                        {link.component}
                    </a>
                ))}
            </div>
            <div>
                TM & © Lucasfilm Ltd. All Rights Reserved
            </div>
            <div className="footer-text">
            </div>
        </footer>
    )
}

export default Footer