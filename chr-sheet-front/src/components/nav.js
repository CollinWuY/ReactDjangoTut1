// import React, { Component } from 'react'

// class Navbar extends Component {
//     render() {
//         return (
//           <nav>
//             <div className="nav navbar-dark navbar-expand-lg bg-dark">
//               <div className="container-fluid d-flex">
//                 <a className="navbar-brand justify-content-start" href="/">
//                   Character Sheet
//                 </a>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbar"
//                   aria-controls="#navbar"
//                   aria-expanded="false"
//                   aria-label="Toggle Navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="collapse navbar-collapse justify-content-center"
//                   id="navbar"
//                 >
//                   <div className="navbar-nav">
//                     <a className="nav-link active" aria-current="page" href="/">
//                       Summary
//                     </a>
//                     <a className="nav-link" aria-current="location" href="/">
//                       Skills
//                     </a>
//                     <a className="nav-link" aria-current="location" href="/">
//                       Inventory
//                     </a>
//                     <a className="nav-link" aria-current="location" href="/">
//                       Quest Log
//                     </a>
//                     <a className="nav-link" aria-current="location" href="/">
//                       Journal
//                     </a>
//                     <a className="nav-link" aria-current="location" href="/">
//                       Compandium
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         );
//     }
// }

let Navbar = () => 
    <nav>
        <div className="nav navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex">
                <a className="navbar-brand justify-content-start" href="/">
                    Character Sheet
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="#navbar"
                  aria-expanded="false"
                  aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbar"
                >
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">
                            Summary
                        </a>
                        <a className="nav-link" aria-current="location" href="/">
                            Skills
                            </a>
                        <a className="nav-link" aria-current="location" href="/">
                            Inventory
                        </a>
                        <a className="nav-link" aria-current="location" href="/">
                            Quest Log
                        </a>
                        <a className="nav-link" aria-current="location" href="/">
                            Journal
                        </a>
                        <a className="nav-link" aria-current="location" href="/">
                            Compandium
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

export default Navbar
