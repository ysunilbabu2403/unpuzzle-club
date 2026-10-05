// // const locations = [
// //     {
// //       number: "01",
// //       name: "Sarjapura Road",
// //       address: "Sarjapura Road • Anekal Road • Nearby Societies & Schools",
// //       timing: "Weekday evening and weekend classes for kids and adults",
// //     },
// //     {
// //       number: "02",
// //       name: "Banasavadi",
// //       address: "Little Elly Preschool, HRBR Layout",
// //       timing: "Weekend Classes for Kids and Adults",
// //     },
// //   ];
  
// //   function Locations() {
// //     return (
// //       <section className="academy-locations-section">
  
// //         <div className="academy-section-heading">
// //           <p className="academy-section-label">
// //             FIND US
// //           </p>
  
// //           <h2>Locations</h2>
  
// //           <p>
// //             Find a training location convenient for you.
// //           </p>
// //         </div>
  
// //         <div className="academy-locations-grid">
  
// //           {locations.map((location) => (
// //             <article
// //               className="academy-location-card"
// //               key={location.number}
// //             >
  
// //               <span className="academy-location-number">
// //                 {location.number}
// //               </span>
  
// //               <h3>{location.name}</h3>
  
// //               <p>{location.address}</p>
  
// //               <p className="academy-location-timing">
// //                 {location.timing}
// //               </p>
              

// //               <a
// //                 href="#"
// //                 className="academy-location-link"
// //               >
// //                 View Location →
// //               </a>
  
// //             </article>
// //           ))}
  
// //         </div>
  
// //       </section>
// //     );
// //   }
  
// //   export default Locations;



// const locations = [
//   {
//     number: "01",
//     name: "Sarjapura Road Center",
//     address:
//       "Sarjapura Road • Anekal Road • Nearby Societies & Schools",
//     description:
//       "Regular weekday evening and weekend batches for kids and adults. Convenient for families living along Sarjapura Road and nearby areas.",
//     areas:
//       "Sarjapura Road, Anekal Road, nearby societies and schools.",
//     timing:
//       "Weekday evenings & weekends",
//   },
//   {
//     number: "02",
//     name: "Banasavadi Center",
//     address:
//       "Little Elly Preschool, HRBR Layout",
//     description:
//       "Dedicated batches for Banasavadi, Kalyan Nagar, and surrounding neighborhoods. Classes conducted at our center and select societies.",
//     areas:
//       "Banasavadi, Kalyan Nagar, HRBR Layout, and nearby societies.",
//     timing:
//       "Weekend classes for kids and adults",
//   },
// ];

// function Locations() {
//   return (
//     <section className="academy-locations-section" id="locations">

//       <div className="academy-section-heading">

//         <p className="academy-section-label">
//           FIND US
//         </p>

//         <h2>Our Locations</h2>

//         <p>
//           Offline classes at our centers and partner societies
//           in East Bangalore.
//         </p>

//       </div>

//       <div className="academy-locations-grid">

//         {locations.map((location) => (
//           <article
//             className="academy-location-card"
//             key={location.number}
//           >

//             <span className="academy-location-number">
//               {location.number}
//             </span>

//             <h3>{location.name}</h3>

//             <p className="academy-location-address">
//               {location.address}
//             </p>

//             <p>{location.description}</p>

//             <p className="academy-location-timing">
//               {location.timing}
//             </p>

//             <div className="academy-location-areas">
//               <strong>Typical areas covered:</strong>
//               <p>{location.areas}</p>
//             </div>

//             <a
//               href="#"
//               className="academy-location-link"
//             >
//               View Location →
//             </a>

//           </article>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default Locations;
const locations = [
  {
    number: "01",
    name: "Sarjapura Road Center",
    address:
      "Sarjapura Road • Anekal Road • Nearby Societies & Schools",
    description:
      "Regular weekday evening and weekend batches for kids and adults. Convenient for families living along Sarjapura Road and nearby areas.",
    areas:
      "Sarjapura Road, Anekal Road, nearby societies and schools.",
    timing:
      "Weekday evenings & weekends",
    mapLink:
      "https://maps.app.goo.gl/xoC9EMVDwbjjaZxR6",
  },
  {
    number: "02",
    name: "Banasavadi Center",
    address:
      "Little Elly Preschool, HRBR Layout",
    description:
      "Dedicated batches for Banasavadi, Kalyan Nagar, and surrounding neighborhoods. Classes conducted at our center and select societies.",
    areas:
      "Banasavadi, Kalyan Nagar, HRBR Layout, and nearby societies.",
    timing:
      "Weekend classes for kids and adults",
    mapLink:
      "https://maps.app.goo.gl/5GufaAZqxQitHQdq8",
  },
];

function Locations() {
  return (
    <section className="academy-locations-section" id="locations">

      <div className="academy-section-heading">

        <p className="academy-section-label">
          FIND US
        </p>

        <h2>Our Locations</h2>

        <p>
          Offline classes at our centers and partner societies
          in East Bangalore.
        </p>

      </div>

      <div className="academy-locations-grid">

        {locations.map((location) => (
          <article
            className="academy-location-card"
            key={location.number}
          >

            <span className="academy-location-number">
              {location.number}
            </span>

            <h3>{location.name}</h3>

            <p className="academy-location-address">
              {location.address}
            </p>

            <p>{location.description}</p>

            <p className="academy-location-timing">
              {location.timing}
            </p>

            <div className="academy-location-areas">
              <strong>Typical areas covered:</strong>
              <p>{location.areas}</p>
            </div>

            <a
              href={location.mapLink}
              className="academy-location-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Location →
            </a>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Locations;