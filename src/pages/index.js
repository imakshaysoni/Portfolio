import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Akshay Soni's portfolio! Explore innovative projects and solutions crafted by a passionate Python Developer and Data Engineer. Let's build the future together." />
        <meta name="keywords" content="Akshay Soni, portfolio, Python Developer, Software Engineer, software development, web development, innovative projects, technology, programming, coding" />
        <meta name="author" content="Akshay Soni" />
        <meta name="robots" content="index, follow" />

        <title>Akshay Soni | Senior Software Engineer </title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-45FLMB18RX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-45FLMB18RX');`
        }}>
</script>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 sm:w-full">
              <Image
                src={profilePic}
                alt="Akshay"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="
              max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Hi, I'm Akshay Soni"
                className="!text-5xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              "
              />
              <Typewriter />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Software Engineer With 5+ years of expertise in Python and AWS,
                I specialize in designing and deploying scalable software
                solutions. I excel in microservices architecture and
                cross-functional collaboration, consistently delivering
                exceptional value to clients."
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://imakshaysoni.github.io/resume"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-full text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
                hover:dark:border-light md:p-2 md:px-4 
                md:text-base"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:akshaysoni460@gmail.com"
                  target={"_blank"}
                  className="ml-6 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base 
                "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
