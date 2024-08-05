const cities = [
  { name: "Atlanta", state: "GA" },
  { name: "Indianapolis", state: "IN" },
  { name: "Philadelphia", state: "PA" },
  { name: "Boston", state: "MA" },
  { name: "Jacksonville", state: "FL" },
  { name: "Queens", state: "NY" },
  { name: "Chicago", state: "IL" },
  { name: "Kansas City", state: "MO" },
  { name: "Raleigh", state: "NC" },
  { name: "Chicago", state: "IL" },
  { name: "Los Angeles", state: "CA" },
  { name: "San Antonio", state: "TX" },
  { name: "El Paso", state: "TX" },
  { name: "Miami", state: "FL" },
  { name: "Tucson", state: "AZ" },
  { name: "Fresno", state: "CA" },
  { name: "Nashville", state: "TN" },
  { name: "Upland", state: "CA" },
  { name: "Houston", state: "TX" },
  { name: "Oklahoma City", state: "OK" },
  { name: "Washington", state: "D.C." },
];

const PopularCities = () => {
  // Split the cities array into chunks of 3 for each row
  const rows = [];
  for (let i = 0; i < cities.length; i += 3) {
    rows.push(cities.slice(i, i + 3));
  }

  return (
      <div className='space-y-4 bg-white dark:bg-gray-600 rounded-lg lg:min-h-[550px] flex flex-col justify-center '>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex justify-evenly border-b py-2'>
            {row?.map((city, index) => (
              <a
                key={index}
                href='#'
                className='text-[#156BCA] dark:text-white dark:hover:text-[#156BCA] hover:underline py-2'>
                {city?.name}, {city?.state}
              </a>
            ))}
          </div>
        ))}
      </div>
  );
};

export default PopularCities;
