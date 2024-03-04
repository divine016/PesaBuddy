import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 item sm:h[100vh] sm:">
        <p className="text-xl font-montserrat text-coral-red"> Your expense Tracker Buddy</p>
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[64px] min-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 ">Effortless tracking, powerful insights, <br /> with </span>
          <span className=" text-coral-red inline-block mt-3">LeNkap </span>
          </h1>
          <p className="font-montserat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Say goodbye to spreadsheets and hello to financial peace of mind <span>LeNkap</span>.</p> 

          <Button label='Get Started' iconURL = {arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key= {stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 fontpesabuddy-high-resolution-logo-transparent-montserat text-slate-gray">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      <div></div>
    </section>
  )
}

export default Hero 