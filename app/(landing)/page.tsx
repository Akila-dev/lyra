import React from "react";
import Link from "next/link";
import { Button, Motion } from "@/components";

import { FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-full w-full flex-center !justify-end flex-col text-center !gap-0 max-w-[600px] mx-auto ">
      <Motion tag="h1" custom={0} className="display uppercase">
        Lyra’s Sentinel
      </Motion>
      <Motion tag="p" custom={1} className="">
        Lyra is the cosmic guardian, overseeing a growing prize pool and testing
        the ingenuity and wits of humanity. Prove your worth. Unlock the prize.
      </Motion>
      <div className="flex-center pt-8 ">
        <Motion custom={2}>
          <Button
            text="EXPLORE QUESTS"
            link="/quests"
            className="btn-1 lg:!text-xl lg:py-4 lg:!px-10"
          />
        </Motion>
        <Motion custom={3}>
          <Button
            text="CONNECT WALLET"
            link="/quests"
            className="btn-2 lg:!text-xl lg:py-4 lg:!px-10"
          />
        </Motion>
      </div>
      <div className="flex-center pt-8  ">
        {/* <span>© Lyra</span> */}
        <Link href="/">
          <FaTwitter className="size-8" />
        </Link>
        <Link href="/">
          <FaGithub className="size-8" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
