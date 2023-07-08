import Link from "next/link";
function Footer() {
  return (
    <>
      <p className="text-white text-[11px] mt-28 text-center">
        Challenge by {""}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          className="text-[#A858DA] underline"
        >
          Frontend Mentor
        </Link>
        . Coded by {""}
        <Link
          href="https://github.com/devesperanz"
          className="text-[#A858DA] underline"
        >
          Hope Philip.
        </Link>
      </p>
    </>
  );
}

export default Footer;
