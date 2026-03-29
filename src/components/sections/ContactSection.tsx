import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary-background w-full py-16">
      <div className="mx-auto flex w-[1200px] max-w-[90vw] flex-col items-center gap-8 text-center">
        <h2 className="text-primary-text text-4xl font-bold md:text-5xl">
          Want to work together?
        </h2>
        <p className="text-secondary-text max-w-lg text-lg">
          I&apos;m always open to new opportunities and collaborations.{" "}
          Let&apos;s build something great.
        </p>

        <Link
          href="mailto:me@taylorhoyt.com"
          aria-label="Email Me"
          className="from-from-gradient to-to-gradient via-via-gradient inline-flex items-center gap-3 rounded-full bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-lg transition-opacity duration-300 hover:opacity-80"
        >
          <Mail size={22} />
          me@taylorhoyt.com
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="https://www.linkedin.com/in/taylorchoyt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="text-secondary-text hover:text-expressive-blue transition-colors duration-200"
          >
            <Linkedin size={28} />
          </Link>
          <Link
            href="https://github.com/taylorhoyt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my GitHub"
            className="text-secondary-text hover:text-primary-text transition-colors duration-200"
          >
            <Github size={28} />
          </Link>
        </div>

        <p className="text-secondary-text mt-4 text-sm">
          &copy; {new Date().getFullYear()} Taylor Hoyt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;
