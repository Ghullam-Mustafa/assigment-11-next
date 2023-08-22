import Navbar from "./(components)/navbar/navbar"
import Image from "next/image"
import Card from "./(components)/card/card"
function Home(){
return(
  <>
   <section className="header">
        <Navbar/>

        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
    </section>
  

    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
           <Card heading="Undergraduate Programs" />
           <Card heading="Graduate Programs" />
           <Card heading="Adult Learning & Degree Completion" />
        </div>
    </section>


    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <img src="img/Campus1.png" alt=""/>
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus2.png" alt=""/>
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus3.png" alt=""/>
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
  </>
)
}
export default Home