import React from "react";

const Footer = () => {
    return (
        <footer className="bg-background text-primary py-16 dark">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-muted-foreground">
                            We&apos;re on a mission to make work easier and more productive for teams everywhere.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Features', 'Pricing', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                                <li key={policy}>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        {policy}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-3">
                            {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                                <li key={social}>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        {social}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-muted-foreground pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ByteBash. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
