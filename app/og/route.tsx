import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "";
  let date = url.searchParams.get("date") || "";
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-start bg-[#090909] text-white">
        <div tw="flex flex-col w-full px-4 items-start justify-center h-full pl-14">
          <div tw="flex flex-row items-center">
            <div tw="w-16 h-16 bg-zinc-800/20 rounded-full border border-zinc-800"></div>
            <h3 tw="ml-4 mb-6 flex flex-col text-3xl font-bold tracking-tight text-left">
              randseas
            </h3>
          </div>
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title ? "Blog Post" : "My Portfolio"}
          </h2>
          <h2 tw="flex flex-col mt-[4px] text-3xl text-zinc-200 font-semibold tracking-tight text-left">
            {title ? title : "Welcome to my portfolio!"}
          </h2>
          <span tw="text-zinc-300 font-medium text-lg">{date}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
