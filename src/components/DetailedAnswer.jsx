import React from "react";

function DetailedAnswer({ status, description, reason }) {
  return (
    <>
      {description && (
        <div className="detailed-answer">
          <h3>Detailed Answer</h3>
          <p>
            Here is how we have evaluated the number is{" "}
            <span className="blink-div">{status}</span>
          </p>
          <div className="table-details">
            <table border="1px" cellSpacing={0}>
              <tr className="heading-tr">
                <th>Sl.</th>
                <th>i</th>
                <th>Observation</th>
                <th>Decision</th>
              </tr>
              {reason.map((item, i) => {
                return (
                  <tr key={i} className="data-tr">
                    <td>{i + 1}</td>
                    <td>{item.index_val}</td>
                    <td>{item.analysis}</td>
                    <td>{item.decision}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailedAnswer;
