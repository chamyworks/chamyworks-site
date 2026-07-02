import Image from "next/image";
import { AboutSection } from "@/components/about-section";
import { AppsSection } from "@/components/apps-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-12 sm:px-10">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-[34rem] flex-col items-center text-center">
          <header className="flex justify-center">
            <Image
              src="/chamyworks-logo.png"
              alt="Chamyworks"
              width={1246}
              height={351}
              priority
              className="h-auto w-44 object-contain sm:w-52 md:w-56"
              sizes="(min-width: 768px) 224px, (min-width: 640px) 208px, 176px"
            />
          </header>

          <div className="mt-8 sm:mt-10">
            <AboutSection />
          </div>

          <div className="mt-12 w-full sm:mt-14">
            <AppsSection />
          </div>

          <SiteFooter />
        </div>
      </div>
    </main>
  );
}
