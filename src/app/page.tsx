import TicketFormComponent from "@/components/home/ticket-form-component";
import WheelDecoration from "@/components/home/wheel-decoration";
import SVGPatternSquigglyLineBottomDesktop from "@/components/svg/svg-pattern-squiggly-line-bottom-desktop";
import SVGPatternSquigglyLineBottomMobileTablet from "@/components/svg/svg-pattern-squiggly-line-bottom-mobile-tablet";
import SVGPatternSquigglyLineTop from "@/components/svg/svg-pattern-squiggly-line-top";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[url(/images/background-mobile.png)] bg-cover bg-center p-4 sm:bg-[url(/images/background-tablet.png)] lg:bg-[url(/images/background-desktop.png)]">
      {/* decoration elements */}
      <SVGPatternSquigglyLineTop className="absolute top-0 right-0 h-[20vw] w-[20vw]" />

      <div className="absolute bottom-0 left-0 h-fit w-[80%] lg:hidden">
        <SVGPatternSquigglyLineBottomMobileTablet className="h-full w-full" />
      </div>
      <SVGPatternSquigglyLineBottomDesktop className="absolute bottom-0 left-0 hidden lg:block" />

      <WheelDecoration className="-top-[5%] right-[75%] lg:-top-[10%]" />
      <WheelDecoration className="top-1/2 -right-12 lg:right-1/4" />
      <div className="mask-b-from-custom-neutral-700 absolute inset-x-0 top-0 bottom-1/2 [background-image:repeating-linear-gradient(90deg,white,transparent_1px,transparent)] [background-size:clamp(3.5em,6vw,5.5em)] [background-position:1.8em] opacity-15 lg:bottom-1/4"></div>

      {/* ticket form */}
      <TicketFormComponent />
    </main>
  );
}
