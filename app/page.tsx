import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-200 text-slate-900 dark:bg-slate-800 dark:text-gray-200">
      <h1 className="text-4xl text-purple-700 dark:text-cyan-200">
        Case Study: How UI/UX Can Help The Elderly
      </h1>

      <p className="m-2 text-lg">first_name last_name student_id</p>
      <p className="mb-4 text-lg">first_name last_name student_id</p>

      <div className="w-2/3">
        <h2 className="m-10 mb-4 ml-0 text-3xl text-purple-700 dark:text-cyan-200">
          Introduction
        </h2>

        <p className="indent-12 text-lg p-4 pl-0">
          As the field of medicine advances, the average life expectancy goes
          up, and just in the past 60 years or so, the average life expectancy
          has gone up by over 10 years. [1] As a result, the elderly population
          is growing, and can be expected to continue growing, but they face a
          growing number of issues.
        </p>

        <p className="indent-12 text-lg p-4 pl-0">
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

        <p className="indent-12 text-lg p-4 pl-0">
          It isn&apos;t all gloom though. Technology has been advancing rapidly,
          and this has given rise to assistive technology. Furthermore, more and
          more of the elderly population have been using technologies such as
          smartphones, and tablets; Pew research has reported an increase in
          smartphone ownership from 13% up to 61% from 2012 to 2021 amongst the
          elderly population. [6] Phone applications have great potential to
          enrich all of our lives, but this applies especially to the elderly,
          and that is what we sought out to explore.
        </p>

        <p className="indent-12 text-lg p-4 pl-0">
          appname is a mobile application that seeks to solve some of the issues
          we outlined above. appname allows an elderly person to register onto
          the app, and for their caretakers and loved ones to also register
          through the app so you can keep an eye out for those you care. The app
          reminds users to take medications, exercise, and eat regularly. The
          app also allows family check-ins via video calls, live-tracking, and
          the app can also alert family members if medications are missed or if
          there are irregularities in activities.
        </p>

        <p className="indent-12 text-lg p-4 pl-0">
          appname was also designed with accessibility in mind. Features such as
          larger text, text-to-speech, and good contrast ratio allows those who
          are visually impaired to interact with the app more easily.
          Furthermore, Usability is prioritized by using UI/UX design patterns
          such as minimalism, and simplified navigation.
        </p>
      </div>

      <div className="w-2/3 mt-6">
        <h2 className="m-10 mb-4 ml-0 text-3xl text-purple-700 dark:text-cyan-200">
          Research
        </h2>

        <p className="indent-12 text-lg p-4 pl-0">
          Let us now turn our focus to what the current research says. We delved
          into some of the research in the introduction, but we wanted to gain a
          better understanding of our users, and we also wanted to look at the
          current mobile applications available on the market.
        </p>

        <p className="indent-12 text-lg p-4 pl-0">
          Around 14% of seniors (age 65 and up) in Canada live in some kind of
          long-term care home. [7] Statcan data also reports many older people
          living alone -- up to 36.6% of Canadian women over the age of 85 live
          alone, and up to 21.8% of Canadian men over the age of 85 live alone.
        </p>
      </div>
    </main>
  );
}
