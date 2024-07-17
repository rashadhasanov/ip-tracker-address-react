import React from "react";
import moment from "moment-timezone";

function Info({ country }) {
  const { ip, city, country_name, time_zone, isp } = country;
  const formattedTimezone = time_zone.name
    ? `UTC ${moment.tz(time_zone.name).format("Z")}`
    : "";
  return (
    <div className="info-container">
      <div>
        <span className="info-title">Ip address</span>
        <span className="info-body">{ip}</span>
      </div>
      <div>
        <span className="info-title">Location</span>
        <span className="info-body">
          {country_name}, {city}
        </span>
      </div>
      <div>
        <span className="info-title">Timezone</span>
        <span className="info-body">{formattedTimezone}</span>
      </div>
      <div>
        <span className="info-title">ISP</span>
        <span className="info-body">{isp}</span>
      </div>
    </div>
  );
}

export default Info;
