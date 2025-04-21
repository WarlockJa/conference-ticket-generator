export default function TicketFormHeaders({
  userData,
}: {
  userData: UserTicketData | null;
}) {
  return userData ? (
    <>
      <h1 className="mt-12 text-center text-[clamp(1.8rem,6vw,3.75rem)] font-extrabold lg:leading-14">
        Congrats,{" "}
        <span className="from-custom-gradient-from to-custom-gradient-to bg-gradient-to-l bg-clip-text text-transparent">
          {userData.fullname}!
        </span>{" "}
        Your ticket is ready.
      </h1>
      <p className="text-custom-neutral-300 my-8 w-screen max-w-lg text-center text-xl lg:text-2xl">
        We&apos;ve emailed your ticket to{" "}
        <span className="text-custom-orange-500">{userData.email}</span> and
        will send updates in the run up to the event.
      </p>
    </>
  ) : (
    <>
      <h1 className="my-5 text-center text-[clamp(1.8rem,6vw,3.75rem)] font-extrabold lg:leading-14">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-custom-neutral-300 text-center text-xl lg:text-2xl">
        Secure your spot at next year&apos;s biggest coding conference.
      </p>
    </>
  );
}
