import moment from "moment/moment";
import { useState, useEffect } from "react";

function App() {
  const [date, setDate] = useState(moment().format("MMMM DD, YYYY"));
  const [time, setTime] = useState(moment().format("LTS"));

  useEffect(() => {
    const interval = () => {
      const interval = setInterval(() => {
        setDate(moment().format("MMMM DD, YYYY"));
        setTime(moment().format("LTS"));
      }, 1000);

      return interval;
    };

    interval();
  }, []);

  return (
    <section className="flex justify-center items-center bg-imageurl-pattern bg-cover bg-center bg-no-repeat bg-fixed h-screen">
      <div className="flex flex-col">
        <span className="uppercase text-[#a38c60] text-xs font-bold sm: ">
          {date}
        </span>
        <span className="uppercase text-[#a38c60] text-5xl font-bold">
          {time}
        </span>
      </div>
    </section>
  );
}

export default App;
