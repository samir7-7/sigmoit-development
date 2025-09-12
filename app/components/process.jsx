import React from "react";
import { Timeline } from "./ui/timeline";
import Image from "next/image";

export default function process() {
  const data = [
    {
      title: "Virtual Meeting",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm dark:text-neutral-200">
            We kicked things off with a virtual meeting to align ideas and
            goals.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Creating a Proposal",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm dark:text-neutral-200">
            We drafted the first version of the proposal to share with //
            stakeholders.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/7734565/pexels-photo-7734565.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm dark:text-neutral-200">
            Our design team brought the vision to life with mockups and //
            prototypes.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm dark:text-neutral-200">
            The development phase turned our ideas into a working product.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Deployment",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm dark:text-neutral-200">
            Finally, we deployed the project to production 🚀
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/3584931/pexels-photo-3584931.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
