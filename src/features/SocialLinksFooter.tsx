"use client";

import Link from "next/link";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export function SocialLinks() {
  return (
    <footer className="mt-10 flex gap-5 text-4xl text-brand-primary">
      <Link
        className="hover:animate-bounce"
        href="https://www.linkedin.com/in/thiago-calazans-dev/"
      >
        <LinkedinLogo />
      </Link>
      <Link
        className="hover:animate-bounce"
        href="https://github.com/thiagoCalazans-dev"
      >
        <GithubLogo />
      </Link>
      <Link
        className="hover:animate-bounce"
        href="https://www.instagram.com/th.calazans/"
      >
        <InstagramLogo />
      </Link>
      <Link
        className="hover:animate-bounce"
        href="https://twitter.com/Tcalazans"
      >
        <TwitterLogo />
      </Link>
    </footer>
  );
}
