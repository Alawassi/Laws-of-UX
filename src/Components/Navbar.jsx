import React from 'react';


export const Navbar = () => {
  return (
    <>
    <nav
       class="navbar navbar-expand-xxl  "
       style={{backgroundColor: 'white'}}
    >
      <a class="navbar-brand" href="https://www.ovgu.de/">
      <img src="https://www.cd.ovgu.de/cd_media/CD_OVGU/Logo_Farbe_Schrift/Logo/OVGU_SIGN_web_Farbig-height-94-width-259.jpg" alt="Logo" width="300" height="100" class="d-inline-block align-text-top"/>
    
      </a>

      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >

      </button>

      


      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
    
        </ul>
        <form class="d-flex my-0 my-lg">
    
          <button class="btn btn-outline-success my-0 my-sm-0" type="submit">
          Profil
          </button>
        </form>
      </div>
    </nav>
    

    </>
  );
};
