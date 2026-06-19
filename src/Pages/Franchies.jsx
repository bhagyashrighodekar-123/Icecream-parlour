import React from "react";

export default function Franchise() {
  return (
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-light">
          🍦 Natural Ice Cream Franchise
        </h1>
        <p className="text-muted">
          Join our franchise and grow with a trusted ice cream brand.
        </p>
      </div>


      {/* Franchise Benefits */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm text-center p-3">
            <h4>🍨 Quality Products</h4>
            <p>Fresh ice creams made with natural ingredients.</p>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card border-0 shadow-sm text-center p-3">
            <h4>📈 Business Growth</h4>
            <p>High demand and profitable franchise model.</p>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card border-0 shadow-sm text-center p-3">
            <h4>🤝 Support</h4>
            <p>Complete guidance and franchise assistance.</p>
          </div>
        </div>

      </div>



      {/* Investment */}
      <div className="bg-success text-white rounded-3 p-4 mt-5 text-center shadow">
        <h2>Franchise Investment</h2>
        <p className="mb-1">
          Store Area: 250 - 500 sq.ft.
        </p>

        <p className="mb-1">
          Investment: ₹15 - ₹25 Lakhs
        </p>

        <p className="mb-0">
          Expected ROI: 18 - 24 Months
        </p>
      </div>



      {/* Contact */}
      <div className="border border-success rounded-3 p-3 mt-4 text-center bg-light shadow-sm">

        <h5 className="text-success mb-2">
          📞 Franchise Enquiry
        </h5>

        <a
          href="tel:02262691984"
          className="text-decoration-none fw-bold fs-5 text-dark"
        >
          022 6269 1984
        </a>

      </div>


    </div>
  );
}