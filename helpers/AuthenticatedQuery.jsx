import { useQuery } from "react-query";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";

export default function AuthenticatedQuery(url, data) {
  const { getToken } = useAuth();
  return useQuery(url, async () => {
    const res = await axios
      .post(url, data, {
        headers: { authorization: `Bearer ${getToken}` },
      })
      .catch((error) => {
        if (error && error.response) {
          console.log("Error: ", error);
        }
      });

    console.log(res);
    return res.json();
  });
}
