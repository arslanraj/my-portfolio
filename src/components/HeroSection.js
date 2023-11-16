


import profileImage from '../assets/images/img.png'
export const HeroSection = () => {
    return(
        <>
            <div className="row">
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <h1 className={"text-heading ps-3"}>Hi, Arslan here</h1>
                    <p className={"text-subheading"}>Senior Software Engineer</p>
                </div>
                <div className="container col-sm-12 col-md-12 col-lg-6">
                    <img style={{width:"20rem", hieght:"20rem", borderRadius:"10rem"}} src={profileImage} alt=""/>
                </div>
            </div>
        </>
    )
}