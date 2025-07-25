//no rafc

import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (url) => {
    //url -->res.data.data []
    //url -->res.data.employees[]
    //res.data.products[]

  const [data, setdata] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const getApiCall = async () => {
    setisLoading(true);
    const res = await axios.get(url);
    setdata(res.data);
    //res.data.data
    setisLoading(false);
  };

  useEffect(() => {
    getApiCall();
  }, []);

  return {data,isLoading}
};
