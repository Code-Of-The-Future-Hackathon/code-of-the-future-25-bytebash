import * as React from "react";

export function Footer() {
  return (
    <footer className="border-t bg-sidebar py-8 text-primary">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;re on a mission to make work easier and more productive
              for teams everywhere.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Features", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <li key={policy}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {policy}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <ul className="space-y-3">
              {["Twitter", "LinkedIn", "Facebook", "Instagram"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {social}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ByteBash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
