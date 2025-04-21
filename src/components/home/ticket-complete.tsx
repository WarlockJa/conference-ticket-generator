import SVGIconGitHub from "../svg/svg-icon-github";
import SVGLogoMark from "../svg/svg-logo-mark";
import SVGPatternTicket from "../svg/svg-pattern-ticket";

export default function TicketComplete({
  avatar,
  github = "@jonatankristof0101",
  fullname = "Jonatan Kristof",
}: UserTicketData) {
  return (
    <div className="@container relative mt-20 w-full max-w-xl backdrop-blur-sm">
      <SVGPatternTicket className="h-full w-full" />

      {/* logo block */}
      <div className="absolute top-[4cqw] left-[4cqw] flex gap-[3cqw]">
        <SVGLogoMark className="aspect-square w-[8cqw]" />
        <div className="flex flex-col gap-[3cqw]">
          <h2 className="text-[6.5cqw] leading-5 font-bold">Coding Conf</h2>
          <p className="text-custom-neutral-300 text-[3.5cqw]">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
      </div>

      {/* user photo block */}
      <div className="absolute bottom-[4cqw] left-[4cqw] flex items-center gap-[3cqw]">
        <div className="aspect-square w-[14cqw] overflow-hidden rounded-2xl">
          <img src={URL.createObjectURL(avatar)} alt={fullname} />
          {/* <img src={"/images/image-avatar.jpg"} alt={fullname} /> */}
        </div>
        <div className="flex flex-col">
          <h2 className="text-[5.5cqw] font-semibold">{fullname}</h2>
          <div className="flex items-center gap-[1cqw] text-[3.5cqw]">
            <SVGIconGitHub className="aspect-square w-[4cqw]" /> {github}
          </div>
        </div>
      </div>

      {/* ticket number */}
      <div className="text-custom-neutral-500 absolute top-0 right-[3cqw] h-full text-center text-[6cqw] [writing-mode:vertical-rl]">
        #01609
      </div>
    </div>
  );
}
