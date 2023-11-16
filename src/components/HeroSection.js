


import profileImage from '../assets/images/img.png'
export const HeroSection = () => {
    return(
        <>
            <div className="row">
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <h1 className={"text-heading ps-3" } style={{ fontSize:"3rem", marginLeft:"10rem",  paddingTop:"10rem"}} >Hi, <br></br>
                    <span> Arslan  here</span></h1>
                    <p className={"text-subheading"} style={{ fontSize:"1rem", marginLeft:"10rem"}}>4th Year Student at Sukkur IBA University</p>
                </div>
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <img style={{width:"20rem", hieght:"20rem", borderRadius:"10rem", marginTop:"6rem", marginLeft:"5rem"}} src={profileImage} alt=""/>
                </div>
            </div>
        </>
    )
}