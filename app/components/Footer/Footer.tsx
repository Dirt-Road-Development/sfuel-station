import { Link } from "@remix-run/react";
import "./styles.css";

export default function Footer() {

    return (
        <footer>
            <p className="copyright">
                &copy; 2023 Dirt Road Development.{" "}
                <Link className="a-link" target="_blank" to="https://dirtroad.dev">
                    Powered by Dirt Road Development
                </Link>
            </p>
        </footer>
    );
}
