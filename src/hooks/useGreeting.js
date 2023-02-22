import { getHours } from "date-fns";
import { useEffect, useState } from "react"
import { getCurrentDate } from "../utils/utils";

export const useGreeting = () => {
  const currentTime = getHours(getCurrentDate());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (currentTime < 12) {
      setGreeting('Buenos días');
    } else if (currentTime >= 12 && currentTime < 19) {
      setGreeting('Buenas tardes');
    } else {      
      setGreeting('Buenas noches');
    }
  }, []);

  return { greeting }
}