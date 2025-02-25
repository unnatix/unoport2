import ibgroup from "/src/assets/images/Untitled presentation.svg";
import hospitality from "/src/assets/images/hospitality.png";
import retirement from "/src/assets/images/retirement.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">

{/* Project #1 */}
<div className="col-span-1 md:col-span-12">
  <Projects
    link="https://github.com/unnatigds/agri-land-market-analysis"
    img={ibgroup}
    alt="Data Analysis of the Current Developments in the Agricultural Land Market of The Netherlands"
    name="Data Analysis of the Current Developments in the Agricultural Land Market of The Netherlands"
    type="Data Analysis • Econometrics"
    year="2024"
    tools="Python • SQL • PowerBI • QGIS • Machine Learning"
    description="Conducted an in-depth analysis of agricultural land price trends in the Netherlands using time series data. Created a panel dataset from Eurostat and employed econometric models such as Fixed Effects, Machine Learning, and ARIMA to analyze market factors affecting land prices."
  />
</div>

{/* Project #2
<div className="col-span-1 md:col-span-12">
  <Projects
    link=""
    img={ibgroup}
    alt="Strategic Content Performance Analysis Using Netflix Dataset"
    name="Strategic Content Performance Analysis Using Netflix Dataset"
    type="Data Analysis • Machine Learning"
    year="2024"
    tools="Python • SQL • Tableau"
    description="Analyzed the Netflix Movies and TV Shows dataset to identify key performance indicators (KPIs) and predict content success. Applied machine learning for engagement prediction, leveraging feature selection to enhance model accuracy and insights."
  />
</div> */}

{/* Project #3 */}
<div className="col-span-1 md:col-span-12">
  <Projects
    link="https://github.com/unnatigds/hospitality-employment-analysis"
    img={hospitality}
    alt="Analysis of the Hospitality Sector Employment in Swedish Municipalities"
    name="Analysis of the Hospitality Sector Employment in Swedish Municipalities"
    type="Data Collection & Analysis • Econometrics"
    year="2024"
    tools="Python • SQL • Excel "
    description="Conducted a detailed study of employment determinants in the hospitality sector across Swedish municipalities, using random and fixed effects regression models to analyze the impact of demographic and economic factors."
  />
</div>

{/* Project #4 */}
<div className="col-span-1 md:col-span-12">
  <Projects
    link="https://github.com/unnatigds/early-retirement-analysis"
    img={retirement}
    alt="Early Retirement Decision Analysis"
    name="Early Retirement Decision Analysis"
    type="Data Analysis • Econometrics"
    year="2024"
    tools="Python • SQL • Stata"
    description="Explored factors influencing early retirement decisions across Europe. Analyzed data to identify health and income as significant contributors using logistic regression and OLS models, providing insights into trends and policy implications."
  />
</div>

        {/* Project #1
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link=""
            img={ibgroup}
            alt="Data Analysis of the Current developments in the Agricultural land market of The Netherlands"
            name="Data Analysis of the Current developments in the Agricultural land market of The Netherlands"
            type="Data Analysis • Econometrics"
            year="2024"
            tools="Python • SQL • PowerBI • QGIS • Machine Learning"

          />
        </div> */}
        {/* Project #2
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://mementostudio.netlify.app/"
            img={memento}
            alt="memento landing page mockup"
            name="memento studio landing page"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div> */}
      </div>
    </section>
  );
}
