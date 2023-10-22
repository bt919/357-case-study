"use client";
import { useState } from "react";

import Image from "next/image";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  const toggle = () => {
    document.querySelector("html")?.classList.toggle("dark");
    setIsLight(!isLight);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24 pt-4 bg-gray-200 text-slate-900 dark:bg-slate-800 dark:text-gray-200 selection:text-gray-200 selection:bg-purple-700 dark:selection:bg-cyan-200 dark:selection:text-slate-800">
      <div className="w-full flex justify-end gap-4">
        <a href="https://github.com/bt919/357-case-study" target="_blank">
          <img
            className="h-8 w-8"
            src={isLight ? "/github-mark.svg" : "/github-mark-white.svg"}
            alt="click to view github repo"
          ></img>
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
          onClick={() => toggle()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>

      <h1 className="text-4xl text-purple-700 dark:text-cyan-200">
        Case Study: How UI/UX Can Help The Elderly
      </h1>

      <p className="m-2 text-lg">first_name last_name student_id</p>
      <p className="mb-4 text-lg">first_name last_name student_id</p>

      <img
        className="visible dark:hidden"
        src="light_hero.png"
        alt="A hero section that talks about Helm365, which is an app that helps you 
        keep in touch with elderly people that you are taking care of."
      ></img>

      <img
        className="hidden dark:block"
        src="dark_hero.png"
        alt="A hero section that talks about Helm365, which is an app that helps you 
        keep in touch with elderly people that you are taking care of."
      ></img>

      {/* ----------- Introduction section -------------*/}
      <div className="w-2/3">
        <h2 className="m-10 mb-4 ml-0 text-3xl text-purple-700 dark:text-cyan-200">
          Introduction
        </h2>

        <p className="indent-12 text-lg p-4 pl-0 leading-8">
          As the field of medicine advances, the average life expectancy goes
          up, and just in the past 60 years or so, the average life expectancy
          has gone up by over 10 years. [1] As a result, the elderly population
          is growing, and can be expected to continue growing, but they face a
          growing number of issues.
        </p>

        <p className="indent-12 text-lg p-4 pl-0 leading-8">
          Around 1 in 5 elderly Canadians feel lonely, and this trend only gets
          worse as one ages. [2] To make matters worse, covid-19 exacerbated
          these issues during lockdowns. [3] Loneliness is also linked to
          psychological and physical problems such as heart disease, lung
          disease, depression, anxiety, and much more. Another major issue that
          the elderly face are disabilities. In Canada, 43% of of elderly (65+
          years old) were reported to have a disability, and this only worsens
          with age -- 73% of elderly above the age of 85 years have a
          disability. [5]
        </p>

        <p className="indent-12 text-lg p-4 pl-0 leading-8">
          It isn&apos;t all gloom though. Technology has been advancing rapidly,
          and this has given rise to assistive technology. Furthermore, more and
          more of the elderly population have been using technologies such as
          smartphones, and tablets; Pew research has reported an increase in
          smartphone ownership from 13% up to 61% from 2012 to 2021 amongst the
          elderly population. [6] Phone applications have great potential to
          enrich all of our lives, but this applies especially to the elderly,
          and that is what we sought out to explore.
        </p>

        <p className="indent-12 text-lg p-4 pl-0 leading-8">
          Helm365 is a mobile application that seeks to solve some of the issues
          we outlined above. Helm365 allows an elderly person to register onto
          the app, and for their caretakers and loved ones to also register
          through the app so you can keep an eye out for those you care. The app
          reminds users to take medications, exercise, and eat regularly. The
          app also allows family check-ins via video calls, live-tracking, and
          the app can also alert family members if medications are missed or if
          there are irregularities in activities.
        </p>

        <p className="indent-12 text-lg p-4 pl-0 leading-8">
          Helm365 was also designed with accessibility in mind. Features such as
          larger text, text-to-speech, and good contrast ratio allows those who
          are visually impaired to interact with the app more easily.
          Furthermore, Usability is prioritized by using UI/UX design patterns
          such as minimalism, and simplified navigation.
        </p>
      </div>

      {/* ----------- Research section -------------*/}
      <div className="w-2/3">
        <h2 className="m-10 mb-4 ml-0 mr-auto text-3xl text-purple-700 dark:text-cyan-200">
          Research
        </h2>

        {/* ----------- Disabilities subsection -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-2 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            The Elderly, Disabilities, and Daily Challenges
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us now turn our focus to what the current research says. We
            delved into some of the research in the introduction, but we wanted
            to gain a better understanding of our users, and we also wanted to
            look at the current mobile applications available on the market. By
            looking at the current research, we could better tailor our
            application to our users, and it is crucial for crafting accurate
            user personas which we will be doing later.
          </p>
          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Around 14% of seniors (age 65 and up) in Canada live in some kind of
            long-term care home. [7] Statcan data also reports many older people
            living alone -- up to 36.6% of Canadian women over the age of 85
            live alone, and up to 21.8% of Canadian men over the age of 85 live
            alone. [8]
          </p>
          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            In terms of daily struggles, medications, personal care, and
            nutrition are common challenges the elderly face. More specifically,
            getting refills for medication can be tough, and so is taking
            medication regularly. In terms of nutrition, eating healthy meals
            and doing so regularly can be a challenge. [9]
          </p>
          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us now look at some of the physical, neurological, and
            psychological issues that the elderly face. As we mentioned before,
            the disability rates are high amongst the elderly as the graph below
            shows. Some of tehse disabilities include mobility, hearing, seeing,
            and memory issues. These may come in the form of low vision,
            Alzheimer&apos;s, dementia, or arthritis. As a result of some of
            these disabilities, medications can be missed, as previously
            mentioned, and even meals can be missed. Research also says that
            nearly half of the senior population (60 and over) reported feeling
            lonely, and about 25% even felt isolated. [10] The express purpose
            of Helm365 is to address these issues by letting those close to the
            elderly have an easier way to help and monitor them. We will discuss
            the user requirements and features more closely in a bit.
          </p>
          <img
            className="m-4"
            src="/fig1_2.jpg"
            alt="A graph that shows the positive correlation between age and disability rate"
          ></img>
          <p>Disability rates by age group [5]</p>
          <p className="indent-12 text-lg p-4 pl-0 mt-8 leading-8">
            Finally, we note that nearly 17% of the U.S. population provide some
            kind of care for someone they know (typically for loved ones), and
            half of the recipients are parents. Some more interesting things to
            note is that nearly three quarters of such caregivers are female,
            and the average age of a caregiver is around 50 years old. [11]
          </p>
        </div>

        {/* ----------- Other apps subsection -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            Mobile Applications On the Market Today
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            If we take a look at the iPhones, we could see a myriad of apps that
            are already pre-installed. For example, there is the health app
            which keeps track of your steps, your resting heart rate (if you
            wear an apple watch), sleep, adn even your nutrition. FaceTime and
            Find My are also iPhone apps that have some of the features we want
            to provide. A major pitfall with these apps, however, is that they
            have somewhat of a learning curve to use, and they&apos;re not
            available to android users.
          </p>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            We also sought out apps that work on both androids and iPhones, and
            we found Life360 and Medisafe Pill Reminder. Life360 has live
            location tracking which is one of the features we want to provide.
            Medisafe Pill Reminder reminds the user to take pills, but it has no
            way to let family/caretakers know if the user has skipped out on
            pills, or if they ran out and need a refill.
          </p>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            One improvement we hope to bring with our app is an all-in-one
            solution. Some of the apps mentioned above have excellent features,
            and do what they intend to do very well, but there are learning
            curves to using these apps. An app like Medisafe Pill reminder has
            an extensive amount of features focused on tracking pills/supplement
            consumption, and it even warns you of potentially dangerous
            interactions between the pills you are consuming; we aren&apos;t
            aiming to provide that extensive of features for each requirement,
            however, we seek to provide an all-in-one solution that adequately
            lets you do many of the things outlined above.
          </p>
        </div>

        {/* ----------- User Personas section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            User Personas
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- Requirements section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            Requirements
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- Wireframes section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            Wireframes
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- User Flow section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            User Flow
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- Mockup section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            Mockup
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- Conclusion section -------------*/}
        <div className="flex flex-col items-center">
          <h3 className="mt-8 mb-4 ml-0 mr-auto text-2xl text-purple-500 dark:text-cyan-400">
            Conclusion
          </h3>

          <p className="indent-12 text-lg p-4 pl-0 leading-8">
            Let us conclude our research by looking at the current mobile
            applications available on the market, and exploring the pros and
            cons of these apps.
          </p>
        </div>

        {/* ----------- Citations -------------*/}
        <div className="flex flex-col items-center mt-8">
          <h3 className="mt-8 text-2xl text-purple-500 dark:text-cyan-400 underline underline-offset-3">
            Citations
          </h3>

          <p className="text-lg p-4 pl-0 leading-8">
            Below are the articles and studies we used for the research portion
            of the project.
          </p>

          <ol className="list-decimal text-blue-500 flex flex-col gap-3">
            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.macrotrends.net/countries/CAN/canada/life-expectancy"
              target="_blank"
            >
              <li>Canada Life Expectancy 1950-2023</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www150.statcan.gc.ca/n1/pub/82-003-x/2023007/article/00001-eng.htm"
              target="_blank"
            >
              <li>Immigrant Status and Loneliness Among Older Canadians</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.apa.org/news/press/releases/2022/05/covid-19-increase-loneliness"
              target="_blank"
            >
              <li>
                COVID-19 Pandemic Led to Increase in Loneliness Around the World
              </li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6179015/"
              target="_blank"
            >
              <li>The Complexity of Loneliness</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.canada.ca/en/employment-social-development/programs/disability/arc/federal-report2011/section1.html"
              target="_blank"
            >
              <li>Federal Disability Report 2011</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.pewresearch.org/short-reads/2022/01/13/share-of-those-65-and-older-who-are-tech-users-has-grown-in-the-past-decade/"
              target="_blank"
            >
              <li>
                Share Of Those 65 And Older Who Are Tech Users Has Grown in the
                Past Decade
              </li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://bcmj.org/news/statistics-canada-almost-5-seniors-long-term-care"
              target="_blank"
            >
              <li>Statistics Canada: Almost 5% of Seniors in Long-term Care</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.comfortlife.ca/retirement-communities/our-aging-population-statistics"
              target="_blank"
            >
              <li>Our Aging Population: Statistics</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://classiclifecare.com/moments/5-tasks-seniors-need-help/"
              target="_blank"
            >
              <li>5 Tasks Seniors Need Help With the Most</li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8525598/"
              target="_blank"
            >
              <li>
                Social Support, Isolation, Loneliness, and Health Among Older
                Adults in the PRISM Randomized Controlled Trial
              </li>
            </a>

            <a
              className="hover:text-blue-300 active:text-blue-600"
              href="https://www.aplaceformom.com/senior-living-data/articles/caregiver-statistics"
              target="_blank"
            >
              <li>
                Caregiver Statistics: A Data Portrait of Family Caregiving in
                2023
              </li>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}
