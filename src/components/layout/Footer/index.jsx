import AppLogo from "@components/common/AppLogo";

function Footer() {
    return (
        <footer className="py-4 border-t border-t-grey">
            <div className="container flex items-center justify-between">
                {/* App Logo */}
                <AppLogo />
                {/* Copyright */}
                <div className="text-center text-sm">
                    © {new Date().getFullYear()} عقاري. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    )
}

export default Footer;