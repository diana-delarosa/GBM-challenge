import { format } from "date-fns";
import Greetings from "../components/Greetings";
import { ChartContainer, DashboardContainer } from "../styles/Dashboard.styled";
import { useFetch } from "../hooks/useFetch";
import IPCHistory from "../components/IPCHistory";

const Dashboard = () => {
  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetch(url);

  const initGraphData = (data) => {
    const graphData = [
      {
        id: "IPC",
        data: data.map((val) => {
          const date = new Date(val.date);
          const obj = {
            x: format(date, "yyyy-MM-dd HH:mm:ss.SSS"),
            y: val.price,
          };

          return obj;
        }),
      },
    ];

    return graphData;
  };

  return (
    <DashboardContainer>
      <Greetings />
      <p>
        A continuación se muestra el historial del indicador IPC (Índice de
        Precios y Cotizaciones) 
      </p>
      <ChartContainer>
        <IPCHistory 
          data={initGraphData(data)} 
          isLoading={loading} 
          error={error}
        />
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
