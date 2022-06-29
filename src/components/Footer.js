import React from 'react'

export default function Footer() {
  return (
    <>
    <br></br>
    <hr></hr>
    <div className='footer'>
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="">
      <form action="">

        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section className="mb-4">
      <p>
      Watch thousands of HD quality movies online at MX Player from any internet connected device.
       From Hollywood blockbusters to Hindi Movies, Telugu flicks, Tamil Hits, Bollywood pictures, old and new films, other regional favourites, and arthouse films from around the world for free.
        At MX Player, you can stream movies online without a subscription, watch movies online without signing up for free!
      </p>
    </section>
    
  </div>


        </footer>
    </div>
    </>
  )
}
