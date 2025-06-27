import React from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Avatar from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="font-bold text-2xl">
            Job <span className="text-[#022bf8]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li>Home</li>
            <li>Browser</li>
            <li>Job</li>
          </ul>
          {!user ? (
            <div className="m-2">
              <Link to={"/login"}>
                <button className="m-2 bg-blue-500 gap: 0.75rem hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Registration
                </button>
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button className="w-10 h-10 cursor-pointer rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-blue-400">
                    <Avatar.Root className="w-full h-full">
                      <Avatar.Image
                        src="https://i.pravatar.cc/40"
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                      <Avatar.Fallback
                        className="flex items-center justify-center w-full h-full bg-blue-500 text-white text-sm font-semibold"
                        delayMs={600}
                      >
                        MP
                      </Avatar.Fallback>
                    </Avatar.Root>
                  </button>
                </Popover.Trigger>

                <Popover.Portal>
                  <Popover.Content
                    className="bg-white p-4 rounded shadow-lg w-48"
                    sideOffset={5}
                  >
                    <div className="flex flex-col gap-2 text-sm">
                      <button className="text-left hover:underline">
                        Profile
                      </button>
                      <button className="text-left hover:underline">
                        Settings
                      </button>
                      <button className="text-left hover:underline">
                        Logout
                      </button>
                      <Popover.Close className="text-red-500 text-xs mt-2 self-end">
                        Close
                      </Popover.Close>
                    </div>
                    <Popover.Arrow className="fill-white" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
