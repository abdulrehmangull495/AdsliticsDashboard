import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



import "./App.css";

function App() {
 

  return (
    <>
      <main className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="left position-relative ">
            <div className="d-md-none ">
              <button
                style={{ top: "10px" }}
                className="btn btn-dark position-absolute"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                =
              </button>

              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  ></h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="sidebar  d-md-none ">
                    <div className="logo">
                    <img src="assets/Group250.png"/>
                    {/* <img src="assets/Group 250.png" alt="" /> */}
                      {/* <img src="assets/Group 250.png" alt="Logo"> */}
                      <p className=" mt-3">
                        Ads<span className="lit">litics</span>
                      </p>
                    </div>
                    <div className="scroll">
                      <a href="#" className="dash  ">
                        <img src="assets/dashboard.png" />
                        <span className="board">Dashboard</span>
                      </a>
                      <a href="#" className="">
                        <img src="assets/compain.png" />
                        Compaign
                      </a>
                      <a href="#" className="">
                        <img src="assets/audience.png" />
                        Audience
                      </a>
                      <a href="#" className="">
                        <img src="assets/performance.png" />
                        Performance
                      </a>
                      <a href="#" className="pro">
                        <img src="assets/promote.png" />
                        Promote
                      </a>

                      <a href="#" className="">
                        <img src="assets/profile.png" />
                        Profile
                      </a>
                      <a href="#" className="">
                        <img src="assets/setting.png" />
                        Setting
                      </a>
                    </div>

                    <div className="lastitem">
                      <img src="assets/Ellipse 31.png" alt="" />
                      <p className="mb-0">Gavana</p>
                      <img src="assets/more-square 1.png" className="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light  d-block d-md-none">

                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        Toggle static offcanvas
                      </button>

                    <div classnaclassName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classnaclassName="navbar-nav mr-auto">
                            <li classnaclassName="nav-item active">
                                <a classnaclassName="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li classnaclassName="nav-item">
                                <a classnaclassName="nav-link" href="#">Link</a>
                            </li>
                            <li classnaclassName="nav-item dropdown">
                                <a classnaclassName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div classnaclassName="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a classnaclassName="dropdown-item" href="#">Action</a>
                                    <a classnaclassName="dropdown-item" href="#">Another action</a>
                                    <div classnaclassName="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>  */}

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light d-block d-md-none">
                   
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                          </a>
                          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                      <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </div>
                  </nav> */}

            <div className="sidebar  d-none d-md-block ">
              <div className="scrollbar">
                <div className="logo">
                  <img src="assets/Group250.png" alt="" />
                  <p className="text-center mt-3">
                    Ads<span className="lit fw-bold">litics</span>
                  </p>
                </div>
                <div className="scroll">
                  <a href="#" className="dash  ">
                    <img src="assets/dashboard.png" />
                    <span className="board">Dashboard</span>
                  </a>

                  <a href="#" className="">
                    <img src="assets/compain.png" />
                    Compaign
                  </a>
                  <a href="#" className="">
                    <img src="assets/audience.png" />
                    Audience
                  </a>
                  <a href="#" className="">
                    <img src="assets/performance.png" />
                    Performance
                  </a>
                  <a href="#" className="pro">
                    <img src="assets/promote.png" />
                    Promote
                  </a>

                  <a href="#" className="">
                    <img src="assets/profile.png" />
                    Profile
                  </a>
                  <a href="#" className="">
                    <img src="assets/setting.png" />
                    Setting
                  </a>
                </div>
              </div>
              <div className="lastitem">
                <img src="assets/Ellipse 31.png" alt="" />
                <p
                  style={{color: "rgba(0, 0, 0, 1)", fontsize: "18px", fontweight: "bold"}}
                  className="mb-0 "
                >
                  Gavana
                </p>
                <img
                  style={{width: "40px", height: "40px"}}
                  src="assets/more-square 1.png"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right">
            <div className=" d-flex justify-content-between align-items-center">
              <div
                className="d-flex  gap-5 
                    fw-bold p-4 "
              >
                <p className="good mb-0 text-nowrap ">Good Morning, Gavano !</p>
              </div>

              <div className="notification">
                <img
                  className="notifi"
                  src="assets/mi_notification.png"
                  alt=""
                />
              </div>
            </div>

            <section className="firstallsection">
              <div className="firstsection p-3 rounded-4 border  ">
                <div className="row g-5 ms-4">
                  {/* Name */}
                  <div className="col-12 col-md-6 col-lg-3  ">
                    <div className="availablesection mt-3 ">
                      <div className="d-flex align-items-center">
                        <p className="available mb-0 text-nowrap">
                          Available to witdraw
                        </p>
                        <div className="firstarrow">
                          <img src="/assets/bi_arrow-up.png" alt="" className="img-fluid" style={{width: "10px", height: "10px",}}/>

                         <p className="three mb-0" style={{ fontSize: "12px" }}>10.0%</p>

                        </div>
                      </div>

                     <p
               style={{color: "rgba(26, 43, 136, 1)",
              fontWeight: "bold",
                fontSize: "28px",
               marginTop: "10px",
                 }}>$1567.99</p>

                      <p className="onefourthree">Wed,jul20</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3 ">
                    <div className=" mt-3 ">
                      <div className="d-flex align-items-center">
                        <p className="todayrevenue mb-0 text-nowrap">
                          Today Revenue
                        </p>
                        <div className="secarrow">
                          <img
  src="/assets/Vector.png"
  alt=""
  className="img-fluid"
  style={{
    width: "10px",
    height: "10px",
  }}
/>

                         <p
  className="three mb-0"
  style={{ fontSize: "12px" }}
>
  3.0%
</p>

                        </div>
                      </div>

                      <p
                        className="twoeight"
                        style={{color:"rgba(26, 43, 136, 1)",
                                    fontWeight:"bold", fontSize: "28px", marginTop: "10px"}}>
                        $2868.99
                      </p>
                      <p className="onefourthree">143 Orders</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="mt-3">
                      <div className="d-flex align-items-center">
                        <p className="todaysessions mb-0 text-nowrap">
                          Today Sessions
                        </p>
                        <div className="thirdarrow">
                         <img
  src="/assets/bi_arrow-up.png"
  alt=""
  className="img-fluid"
  style={{
    width: "10px",
    height: "10px",
  }}
/>

                         <p
  className="threetwo mb-0"
  style={{ fontSize: "12px" }}
>
  3.2%
</p>

                        </div>
                      </div>

                     <p
  style={{
    color: "rgba(26, 43, 136, 1)",
    fontWeight: "bold",
    fontSize: "28px",
    marginTop: "10px",
  }}
>
  156K
</p>

                      <p>32k visitors</p>
                    </div>
                  </div>
                  {/* <!-- <div class="vl"></div> --> */}

                  <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="subs mt-3">
                      <div className="d-flex align-items-center">
                        <p className="subscribers mb-0">Subscribers</p>
                        <div className="fortharrow">
                          <img
  src="/assets/bluearrow.png"
  alt=""
  style={{
    width: "10px",
    height: "10px"
  }}
/>


                          <p
  className="mb-0"
  style={{ fontSize: "12px" }}
>
  8.3%
</p>

                        </div>
                      </div>

                      <p
                        className="threefoour"
                        style={{color:"rgba(26, 43, 136, 1)", fontWeight: "bold", fontSize: "28px", marginTop: "6px"}}
                      >
                        3,422
                      </p>
                      <p className="thirtyfour mb-0">$34.28 Average Order</p>
                    </div>
                  </div>

                  {/* <div class="col-12 col-md-6 col-lg-3 ">
                                <div class="d-flex flex-column justify-content-start mt-3">
                                    <div class="d-flex align-items-center">
                                        <p class="mb-0">Today Sessions</p>
                                        <div class="fortharrow">
                                            <img style="width: 15px ; height: 15px;" src="/assets/bluearrow.png"
                                                class="img-fluid" alt="">
                                            <p class="mb-0 ">3.2%</p>
                                        </div>

                                    </div>



                                    <p style="color:rgba(26, 43, 136, 1); font-weight: bold; font-size: 20px;">$2868.99
                                    </p>
                                    <p class="wed">143 Orders</p>



                                </div>
                            </div> */}
                </div>
              </div>
            </section>

            <section className="compaign my-4 g-3">
              <div className="row">
                <div className="compaignperformance col-12 col-md-12 col-lg-9">
                  <div
                    style={{borderradius: "20px", border:"2px solid rgba(236, 238, 246, 1)",
                             boxshadow: "0px 20px 50px 0px rgba(220, 224, 249, 0.5)", height: "100%"}}
                    className="perf bg-white p-4"
                  >
                    <div className="d-flex justify-content-between">
                      <p className="performance  fw-bold ">
                        Campaign Performance
                      </p>
                      <p className="seeall mb-0">See All</p>
                    </div>

                    <div className="table-responsive">
                      <table className="table custom-table">
                        <thead>
                          <tr>
                            <td>Campaign</td>
                            <td>Impressions</td>
                            <td>Clicks</td>
                            <td>CPC</td>
                            <td className="spend">Spend</td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td className="d-flex align-items-center fw-bold  ">
                              <img
                                src="/assets/Group 239.png"
                                alt=""
                                className="icon-img"
                              />
                              <span id="social text-nowrap">Google Ads</span>
                            </td>

                           <td
  className="fw-bold"
  style={{ position: "relative", top: "4px" }}
>
  189k
</td>

                            <td
                              style={{position: "relative", top: "4px"}}
                              className="fw-bold"
                            >
                              9k
                            </td>
                            <td
                              style={{position: "relative", top: "4px"}}
                              className="fw-bold"
                            >
                              $8.12
                            </td>
                            <td
                              style={{position: "relative", top: "4px"}}
                              className="fw-bold"
                            >
                              $56,123.12
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <div className="d-flex align-items-center justify-content-start d-flex">
                                <img
                                  src="/assets/Group 239 (1).png"
                                  alt=""
                                  className="icon-img"
                                />
                                <span id="social">Tik Tok</span>
                              </div>
                            </th>

                            <td
                              style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              287k
                            </td>
                            <td
                               style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              15k
                            </td>
                            <td
                               style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              $12.12
                            </td>
                            <td
                            style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              $40,123.12
                            </td>
                          </tr>

                          <tr>
                            <th className="d-flex align-items-center">
                              <img
                                src="/assets/Group 239 (2).png"
                                alt=""
                                className="icon-img"
                              />
                              <span id="social">Instagram</span>
                            </th>
                            <td
                              style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              156k
                            </td>
                            <td
                              style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              12k
                            </td>
                            <td
                              style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              $5.12
                            </td>
                            <td
                              style={{position: "relative", top: "5px"}}
                              className="fw-bold"
                            >
                              $39,123.12
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* style="width: 287px; height: 334px; margin-left: 20px;" */}
                <div className="devicecategory col-12 col-md-6  col-lg-3 ">
                  <div
                    style={{borderRadius: "20px", border: "2px solid rgba(236, 238, 246, 1)", 
                      boxShadow: "0px 20px 50px 0px rgba(220, 224, 249, 0.5)", height: "100%"
}}

                       
                    className="mydevice p-4 bg-white    ">
                    <h4 className="category fw-bold  ">Device Category</h4>

                    <div className="col-12 d-flex flex-row justify-content-between align-items-center gap-x-5 mt-5">
                      <div className="d-flex gap-2 align-items-center">
                        <div className="mobile">
                          <img
                            style={{width: "19.2px"}}
                            src="/assets/mobile.png"
                            alt=""
                          />
                        </div>

                        <p
                          style={{color: "rgba(0, 0, 0, 1)"}}
                          className="mb-0 text-black"
                        >
                          Mobile
                        </p>
                      </div>
                      <p
                        className="nintysixperc mb-0"
                        style={{color:" rgba(26, 43, 136, 1)", fontweight: "bold"}}
                      >
                        96.42%
                      </p>
                    </div>

                    <div className=" d-flex flex-row justify-content-between align-items-ceter gap-5 mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <div className="desktop">
                          <img
                            style={{width: "19.2px"}}
                            src="/assets/monitor.png"
                            alt=""
                          />
                        </div>
                        <p
                          style={{color: "rgba(0, 0, 0, 1)"}}
                          className="mb-0 text-black"
                        >
                          Desktop
                        </p>
                      </div>

                      <p
                        className="twoperc mt-2 mb-0"
                        style={{color: "rgba(26, 43, 136, 1)" ,fontweight: "bold"}}
                      >
                        2.76%
                      </p>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center gap-5 mt-3">
                      <div className="d-flex align-items-center gap-2 ">
                        <div className="tablet">
                          <img
                            style={{width: "19.2px"}}
                            src="/assets/tablet.png"
                            alt=""
                          />
                        </div>
                        <p
                          style={{color:" rgba(0, 0, 0, 1)"}}
                          className="mb-0 text-black"
                        >
                          Tablet
                        </p>
                      </div>
                      <p
                        className="zeroperc  mb-0"
                        style={{color:" rgba(26, 43, 136, 1)", fontweight: "bold"}}
                      >
                        0.82%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="col-3 offset-9">
                  <div
                    style={{border: "2px solid rgba(236, 238, 246, 1)", boxshadow: "0px 20px 50px 0px rgba(220, 224, 249, 0.5)",
                       height: "100%"}}
                    className="topcountries p-4  bg-white "
                  >
                    <h4
                      style={{fontsize: "22.4px", color:"rgba(0, 0, 0, 1)"}}
                      className="fw-bold top top"
                    >
                      Top Countries
                    </h4>

                    <div className=" d-flex flex-row justify-content-between align-items-center gap-5 mt-4 ">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <img
                          style={{width:"33.23px"}}
                          src="/assets/emojione_flag-for-us-outlying-islands.png"
                          alt=""
                        />

                        <p
                          style={{fontsize: "16px", color: "rgba(0, 0, 0, 1)"}}
                          className="mb-0 fw-bold text-nowrap"
                        >
                          United State
                        </p>
                      </div>
                      <p
                        className="text-center mb-0 fortyeight"
                        style={{color:" rgba(26, 43, 136, 1)", fontweight: "bold"}}
                      >
                        48%
                      </p>
                    </div>

                    <div className="col-12 d-flex flex-row justify-content-between align-items-center gap-5 mt-3 ">
                      <div className="d-flex gap-2 align-items-center justify-content-center ">
                        <img
                          style={{width:"33.23px"}}
                          src="/assets/emojione_flag-for-united-kingdom.png"
                          alt=""
                        />

                        <p
                          style={{fontsize: "16px", color: "rgba(0, 0, 0, 1)"}}
                          className="mb-0  fw-bold text-nowrap"
                        >
                          United King...
                        </p>
                      </div>
                      <p
                        className="text-center mb-0 twelve"
                        style={{color: "rgba(26, 43, 136, 1)", fontweight: "bold"}}
                      >
                        12%
                      </p>
                    </div>

                    <div className="col-12 d-flex flex-row justify-content-between align-items-center gap-5 mt-3 ">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <img
                          style={{width:"33.23px"}}
                          src="/assets/emojione_flag-for-switzerland.png"
                          alt=""
                        />

                        <p
                          style={{fontsize: "16px", color:" rgba(0, 0, 0, 1)"}}
                          className="
                                     mb-0  fw-bold"
                        >
                          Switzerland
                        </p>
                      </div>
                      <p
                        className="nineperc text-center mb-0 "
                        style={{margintop: "10px", color: "rgba(26, 43, 136, 1)", fontweight: "bold"}}
                      >
                        9%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
