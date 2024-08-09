import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Commentslist } from '@/components/commentslist';

export default function Page() {
  return (
    <>
    <section className="container mx-auto py-8 md:py-12 lg:py-24">
      <div className="container mx-auto py-8 md:py-12 lg:py-24">
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            w-app also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX. Our goal is to provide a seamless
            experience for developers to access and contribute to our project.
          </p>
        </div>
      </div>
    </section>

      <section id="open-source" className="container mx-auto py-8 md:py-12 lg:py-24">
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