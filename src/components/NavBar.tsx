import Image from "next/image";

const navLinks = ["Behance", "LinkedIn", "View Resume"];

const NavBar = () => {
  return (
    <header className="flex w-full  flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <Image
        src="/img/sign.svg"
        alt="Nidhi Portfolio logo"
        fetchPriority="high"
        preload
        width={150}
        height={50}
      />
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-normal text-color1 sm:justify-end sm:gap-x-8"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="transition-colors hover:text-color1 border-b border-b-color1"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-[#4585CA] px-4 py-2 font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#4585CA]"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
