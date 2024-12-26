import { Typography } from "@mui/material";
import React from "react";
import NextImage from "next/image";

const OurStory = () => {
  return (
    <div className="tw-mt-32 tw-overflow-hidden sm:tw-mt-40">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-flex lg:tw-px-8">
        <div className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-12 tw-gap-y-16 lg:tw-mx-0 lg:tw-min-w-full lg:tw-max-w-none lg:tw-flex-none lg:tw-gap-y-8">
          <div className="lg:tw-col-end-1 lg:tw-w-full lg:tw-max-w-lg lg:tw-pb-8">
            <Typography
              variant="h1"
              className="tw-text-4xl tw-font-semibold tw-tracking-tight tw-text-gray-900 sm:tw-text-5xl"
            >
              Our Story
            </Typography>
            <p className="tw-mt-6 tw-text-xl/8 tw-text-gray-600">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="tw-mt-6 tw-text-base/7 tw-text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
          </div>

          {/* Images Grid Section */}
          <div className="tw-flex tw-flex-wrap tw-items-start tw-justify-end tw-gap-6 sm:tw-gap-8 lg:tw-contents">
            {/* Main Large Image */}
            <div className="tw-w-0 tw-flex-auto lg:tw-ml-auto lg:tw-w-auto lg:tw-flex-none lg:tw-self-end">
              <NextImage
                alt=""
                width={1000}
                height={1000}
                src="https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/4b452081-4de6-4232-d40f-85fbab466c00/quality=100"
                className="tw-aspect-[7/5] tw-w-[37rem] tw-max-w-none tw-rounded-2xl tw-bg-gray-50 tw-object-cover"
              />
            </div>

            {/* Right Side Images Grid */}
            <div className="tw-contents lg:tw-col-span-2 lg:tw-col-end-2 lg:tw-ml-auto lg:tw-flex lg:tw-w-[37rem] lg:tw-items-start lg:tw-justify-end lg:tw-gap-x-8">
              <div className="tw-order-first tw-flex tw-w-64 tw-flex-none tw-justify-end tw-self-end lg:tw-w-auto">
                <NextImage
                  alt=""
                  width={1000}
                  height={1000}
                  src="https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/post_07-850x1100.jpg"
                  className="tw-aspect-[4/3] tw-w-[24rem] tw-max-w-none tw-flex-none tw-rounded-2xl tw-bg-gray-50 tw-object-cover"
                />
              </div>
              <div className="tw-flex tw-w-96 tw-flex-auto tw-justify-end lg:tw-w-auto lg:tw-flex-none">
                <NextImage
                  alt=""
                  width={1000}
                  height={1000}
                  src="https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/portfolio_03.jpg"
                  className="tw-aspect-[7/5] tw-w-[37rem] tw-max-w-none tw-flex-none tw-rounded-2xl tw-bg-gray-50 tw-object-cover"
                />
              </div>
              <div className="tw-hidden sm:tw-block sm:tw-w-0 sm:tw-flex-auto lg:tw-w-auto lg:tw-flex-none">
                <NextImage
                  alt=""
                  width={1000}
                  height={1000}
                  src="https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2018/09/portfolio_01-1280x640.jpg"
                  className="tw-aspect-[4/3] tw-w-[24rem] tw-max-w-none tw-rounded-2xl tw-bg-gray-50 tw-object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
