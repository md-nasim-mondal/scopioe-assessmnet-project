import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PopularCities = () => {
  const axiosSecure = useAxiosSecure();
  const { data: cities = [] } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/cities`);
      return data;
    },
  });
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
