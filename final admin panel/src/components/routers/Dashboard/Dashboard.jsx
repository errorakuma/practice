
import { useEffect, useState } from 'react';
import style from "./dashboard.module.css";
import { Apis } from "../Service";
import Chart from "react-apexcharts";

function Dashboard() {
  const [latesthits] = useState(Apis.dp.latestHits);
  const [storage] = useState(Apis.dp.storage);
  const [perform] = useState(Apis.dp.performance);

  const [notif] = useState(Apis.dp.notifications);

  const [order] = useState(Apis.dp.orders);


  const months = latesthits && latesthits.months;
  const featured = latesthits && latesthits.featured;
  const latest = latesthits && latesthits.latest;
  const popular = latesthits && latesthits.popular;



  const latesthit = {
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },

      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "LATEST HITS",
        align: "left",
      },
      grid: {
        row: {
          // colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      legend: {
        position: "top",
      },
      yaxis: {
        title: {
          text: "Hits",
        },
      },
      xaxis: {
        categories: months,
      },
    },

    series: [
      {
        name: "featured",
        data: featured,
      },
      {
        name: "latest",
        data: latest,
      },
      {
        name: "popular",
        data: popular,
      },
    ],
  };

  const per = {
    options: {
      tooltip: {
        theme: "dark",
      },
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
        },
      },
      // colors: [''],

      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: Object.keys(perform),



      },
      yaxis: {
        title: {
          text: "Hits",
        },
      },
    },
    series: [
      {
        data: Object.values(perform),
      },
    ],
  };
  const pie = {
    options: {
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        width: 300,

        type: "pie",
      },
      legend: {
        position: "top",
      },
      title: {
        text: "Storage information",
        align: "left",
      },
      labels: Object.keys(storage),
    },

    series: Object.values(storage),
  };

  const light = (prop) => {
    switch (prop) {
      case "Moving":
        return {
          backgroundColor: "chartreuse",
          boxShadow: "0px 0px 5px chartreuse",
        };
      case "Pending":
        return {
          backgroundColor: "yellow",
          boxShadow: "0px 0px 5px yellow",
        };
      case "Cancelled":
        return {
          backgroundColor: "red",
          boxShadow: "0px 0px 5px red",
        };
      case "Delivered":
        return {
          backgroundColor: "blue",
          boxShadow: "0px 0px 5px blue",
        };
      default:
        return {};
    }
  };

  function highlightText(text) {
    const wordsToHighlight = ["product updates", "order updates"];
    let words = text.split(" ");
    words[0] = `<b>${words[0]}</b>`;
    let highlightedText = words.join(" ");

    wordsToHighlight.forEach((word) => {
      const regex = new RegExp(word, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<strong>${word}</strong>`
      );
    });

    return highlightedText;
  }

  return (
    <div className={style.container}>
      <h1>Welcome back, Admin</h1>

      <div className={style.cards}>
        <div className={style.card}>
          <h1>Latest Hits</h1>
          <div>
            <Chart
              options={latesthit.options}
              series={latesthit.series}
              type="line"
              width="100%"
              height="350"
              bar="20"
            />
          </div>
        </div>

        <div className={style.card}>
          <h1>Performance</h1>
          <div>
            {" "}
            <Chart
              options={per.options}
              series={per.series}
              type="bar"
              width="100%"
              height="350"
            />
          </div>
        </div>

        <div className={style.card}>
          <h1>storage</h1>
          <div>
            {" "}
            <Chart
              options={pie.options}
              series={pie.series}
              type="pie"
              width="100%"
              height="280"
            />
          </div>
        </div>

        <div className={style.card}>
          <h1>notification</h1>
          <div className={style.scroll}>
            {notif && notif.map((data) => (
              <div className={style.notif}>
                <img src={data.pic} alt="notification" />
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightText(data.message),
                    }}
                  />
                  <p>{data.time} ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={style.order}>
          <h1>order</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Order no</td>
                  <td>Status</td>
                  <td>Operators</td>
                  <td>Location</td>
                  <td>Distance</td>
                  <td>Start Date</td>
                  <td>Est Delivery Date</td>
                </tr>
              </thead>
              {order && order.map((list) => (
                <tbody>
                  <tr>
                    <td>{list.orderNo}</td>
                    <td>
                      <span
                        className={style.dot}
                        style={light(list.status)}
                      ></span>
                      {list.status}
                    </td>
                    <td>{list.operators}</td>
                    <td>{list.location}</td>
                    <td>{list.distance}</td>
                    <td>{list.startDate}</td>
                    <td>{list.deliveryDate}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
