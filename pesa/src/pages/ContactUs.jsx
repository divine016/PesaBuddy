import Nav from "../components/Nav"
import Footer from "../sections/Footer"
import { Link } from "react-router-dom"
import { icon } from "../assets/pesa"

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <section>
        <div>
          <div id="signUP" className='text-white h-[100vh]  flex flex-col justify-center items-center dark:dark:bg-[#171b3f] bg-cover' style={{ "backgroundImage": "url('../src/assets/pesa/bg2.jpg')" }}>

            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-md bg-opacity-60 relative mt-32'>
              <img className="border-slate-400 my-3 py-3" width={80} height={80} src={icon} alt="logo image" />
              <h1 className='text-4xl text-left font-bold text-white mb-6'>Welcome To PesaBuddy</h1>

              <form >

                <div className='relative my-4 ' >
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent  border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />
                </div>

                <div className='relative my-4 ' >
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />

                </div>

                <div className='relative my-4 ' >
                  <label htmlFor="">What should we know?</label>
                  <textarea type="telephone" cols="10" rows="5" placeholder='message' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-2  border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'> </textarea>
                </div>



                <Link to='/dashboard'>
                  <button type='submit' className="flex justify-center items-center py-4 px-4 font-monserrat text-[18px] leading-none rounded-full bg-white text-red-400 w-full  my-6 mr-4 hover:bg-red-400 hover:text-white duration-300 transition-colors"

                  >
                    Submit
                  </button>
                </Link>






              </form>

            </div>

          </div>
        </div>
      </section>
      <section className="padding-x   pb-8 bg-black dark:bg-[rgb(23,27,63)] botom-0">
        <Footer />
      </section>
    </div>
  )
}

export default ContactUs