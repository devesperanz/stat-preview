import HeaderImg from "./images/image-header-desktop.jpg";
import Image from "next/image";
function ImageSection() {
  return (
    <section className="max-xl:order-1 bg-[#aa5cdb] max-xl:max-w-[327px] xl:min-w-[540px] max-h-[446px] max-xl:rounded-t-xl xl:rounded-r-xl">
      <Image
        className="max-xl:max-w-[327px] max-xl:max-h-[240px] mix-blend-multiply opacity-75 xl:rounded-r-xl"
        src={HeaderImg}
        alt="Header Image"
        width={540}
        height={446}
      />
    </section>
  );
}

export default ImageSection;
