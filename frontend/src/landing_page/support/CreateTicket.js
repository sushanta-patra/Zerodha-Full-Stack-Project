import React from "react";

function CreateTicket() {
  return (
    <div className="container text-muted">
      <div className="row">
        <div className="col-8 pt-5 mt-1">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item mb-4 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i class="fa-solid fa-circle-plus pe-5"></i>
                  <strong className="h5 text-muted">Account Opening</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Resident individual
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Minor
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Non Resident Indian (NRI)
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Company, Partnership, HUF and LLP
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Glossary
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item2"
                  aria-expanded="false"
                  aria-controls="item2"
                >
                  <i class="fa-solid fa-circle-user pe-5"></i>
                  <strong className="h5 text-muted">
                    Your Zerodha Account
                  </strong>
                </button>
              </h2>
              <div
                id="item2"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Your Profile
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                       Account modification 
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Client Master Report (CMR) and Depository Participant (DP)
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Nomination
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Transfer and conversion of securities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item3"
                  aria-expanded="false"
                  aria-controls="item3"
                >
                  <i class="fa-solid fa-circle-left pe-5"></i>
                  <strong className="h5 text-muted">Kite</strong>
                </button>
              </h2>
              <div
                id="item3"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        IPO
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Trading FAQs
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Margin Trading Facility (MTF) and Margins
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Charts and orders
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Alerts and Nudges
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item4"
                  aria-expanded="false"
                  aria-controls="item4"
                >
                  <i class="fa-solid fa-indian-rupee-sign pe-5"></i>
                  <strong className="h5 text-muted">Funds</strong>
                </button>
              </h2>
              <div
                id="item4"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Add money
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Withdraw money
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Add bank accounts
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        eMandates
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-3 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item5"
                  aria-expanded="false"
                  aria-controls="item5"
                >
                  <i class="fa-solid fa-gamepad pe-5"></i>
                  <strong className="h5 text-muted">Console</strong>
                </button>
              </h2>
              <div
                id="item5"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Portfolio
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Corporate actions
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Funds statement
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Reports
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Profile
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Segments
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 px-1 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item6"
                  aria-expanded="false"
                  aria-controls="item6"
                >
                  <i class="fa-solid fa-cent-sign pe-5"></i>
                  <strong className="h5 text-muted">Coin</strong>
                </button>
              </h2>
              <div
                id="item6"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul className="text-muted">
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Mutual funds
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        National Pension Scheme (NPS)
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Fixed Deposit (FD)
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Features on Coin
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        Payments and Orders
                      </a>
                    </li>
                    <li style={{ color: "blue" }}>
                      <a
                        href="#"
                        style={{ textDecoration: "none", lineHeight: "3rem" }}
                      >
                        General
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="container pt-5">
            <div
              className="row p-3 border-start border-5 border-warning"
              style={{ background: "#ff910022" }}
            >
              <ul className="ps-4">
                <li>
                  <a href="#" style={{ lineHeight: "1.8rem" }}>
                    Adjustment of F&O contracts of MPHASIS due to dividend
                  </a>
                </li>
                <li>
                  <a href="#" style={{ lineHeight: "1.8rem" }}>
                    Adjustment of F&O contracts of UNIONBANK due to dividend
                  </a>
                </li>
              </ul>
            </div>
            <div className="row my-4 ">
              <table class="table table-bordered">
                <thead className="table-light p-3">
                  <tr>
                    <th className="p-3 text-muted">Quick links</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr>
                    <td className="p-3">
                      <a href="#" style={{ textDecoration: "none" }}>
                        1. Track account opening
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="#" style={{ textDecoration: "none" }}>
                        2. Track segment activation
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="#" style={{ textDecoration: "none" }}>
                        3. Intraday margins
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="#" style={{ textDecoration: "none" }}>
                        4. Kite user manual
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <a href="#" style={{ textDecoration: "none" }}>
                        5. Learn how to create a ticket
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateTicket;
