export default function Footer(){

    const d = new Date()
    const year = d.getFullYear()

    return (

        <div className="container-md py-3">

            <footer className="pt-3 my-3 text-muted border-top">         

                Created by <a href="https://linktr.ee/scoot_digital" target="_blank" class="secondary-link">scoot.</a><br/>

                CSS by the Bootstrap team &middot; &copy; {year} 

            </footer>

        </div>

    )

}