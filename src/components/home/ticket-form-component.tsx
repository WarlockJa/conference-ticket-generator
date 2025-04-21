"use client";

import { useState } from "react";
import SVGLogoFull from "../svg/svg-logo-full";
import TicketForm from "./ticket-form";
import TicketFormHeaders from "./ticket-form-headers";
import TicketComplete from "./ticket-complete";

export default function TicketFormComponent() {
  const [userData, setUserData] = useState<UserTicketData | null>(null);
  return (
    <>
      <div className="flex w-full max-w-4xl flex-col items-center px-4">
        <SVGLogoFull className="mt-4" />
        <TicketFormHeaders userData={userData} />
      </div>
      {userData ? (
        <TicketComplete {...userData} />
      ) : (
        <TicketForm
          onSubmitSuccess={(data: UserTicketData) => setUserData(data)}
        />
      )}
    </>
  );
}
