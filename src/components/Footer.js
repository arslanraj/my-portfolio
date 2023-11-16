// there are 3 ways to write a component in reactjs
// method 1: default functional component
// method 2: arrow functional component
// method 3: default return functional component

// method 3:
function Footer() {
    return(
        <>
            <footer>
                <div className="container-fluid text-center pt-3 bg-dark mt-3 text-white pb-3">
                    copyright@2023 Arslan Ashraf
                </div>
            </footer>
        </>
    )
}

export default Footer;