import { Link } from "@remix-run/react";
import "./styles.css";

export default function Footer() {

    return (
        <footer>
            <p className="copyright">
                &copy; 2023 Dirt Road Development.{" "}
                <Link className="a-link" target="_blank" to="https://dirtroad.dev">
                    Powered by Dirt Road Development.
                </Link>
                <span> </span>
                <Link className="a-link" target="_blank" to="mailto:general@dirtroad.dev?subject=Media Inquiry for sFUEL Station">
                    Media Inquiries.
                </Link>
                <span> </span>
                <Link className="a-link" target="_blank" to="mailto:code@dirtroad.dev?subject=Sponsorship for the sFUEL Station">
                    Become a Sponsor.
                </Link>
            </p>
        </footer>
    );
}
