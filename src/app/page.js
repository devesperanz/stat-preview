import Footer from "@/components/Footer";
import ImageSection from "@/components/ImageSection";
import ContentSection from "@/components/ContentSection";
export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center h-[100vh] max-xl:h-full bg-[#090b1a] text-[white] `}
      >
        <div className="flex max-xl:flex-col w-[77%] max-xl:max-w-[327px] xl:max-w-[1110px] xl:max-h-[446px] max-xl:my-20 bg-[#1b1938] rounded-xl">
          <ContentSection />
          <ImageSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
