import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Commentslist } from '@/components/commentslist';
import { NeonGradientCard } from '@/components/neon-gradient-card';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/animated-shiny-text";

export default function Page() {
  return (
    <>
    <section className="container mx-auto py-8 md:py-10 lg:py-1">
      <div className="container mx-auto py-8 md:py-10 lg:py-1">
        <div className="mx-auto text-center md:max-w-[58rem]">
          <div className="z-10 flex min-h-[16rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py- transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span><Link href={siteConfig.links.github}>✨ Introducing w-app</Link></span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
          <NeonGradientCard >
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              w-app
            </span>
          </NeonGradientCard>
          <p className="px-20 leading-normal text-muted-foreground sm:text-lg sm:leading-7 py-14">
            w-app also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX. Our goal is to provide a seamless
            experience for developers to access and contribute to our project.
          </p>
          </div>
      </div>
    </section>

      <section id="open-source" className="container mx-auto py-8 md:py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            w-app is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
            We believe in the power of community and collaboration. By making
            our code open source, we invite developers from all over the world
            to contribute, suggest improvements, and help us build a better
            product.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Whether you&apos;re a seasoned developer or just getting started, we
            welcome you to explore our repository, report issues, and submit
            pull requests. Together, we can create something amazing.
          </p>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join our community on{" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Twitter
            </Link>{" "}
            to stay updated with the latest news, participate in discussions,
            and connect with other contributors.
          </p>
        </div>
      </section>
      
      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              What People Are Saying
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold">real people</span> are saying about
            w-app.
          </div>

          <div className="w-full overflow-x-hidden">
            <Commentslist />
          </div>
        </div>
      </section>
    </>
  );
}