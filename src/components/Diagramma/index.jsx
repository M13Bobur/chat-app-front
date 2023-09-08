import "./style.css";
import ItemDiagramma from "./ItemDiagramma";

export default ({ data = [] }) => {
  const numbers = [
    0,

    "10%",

    "20%",

    "30%",

    "40%",

    "50%",

    "60%",

    "70%",

    "80%",

    "90%",

    "100%",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="box-content">
        {data
          .sort((a, b) => b.percent - a.percent)
          .map((item, index) => (
            <div
              key={index + 1}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                margin: "0 20px",
              }}
            >
              <div className="text-box">{item.regionName}</div>
              <div className="dg-box">
                <ItemDiagramma persent={Math.min(100, item.percent)} />
              </div>
            </div>
          ))}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "0 20px",
          }}
        >
          <div className="text-box"></div>
          <div className="dg-box">
            <div className="line" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            margin: "0 20px",
          }}
        >
          <div className="text-box"></div>
          <div className="dg-box">
            <div className="nums">
              {numbers.map((item, index) => (
                <div className="num" key={index + 1}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
