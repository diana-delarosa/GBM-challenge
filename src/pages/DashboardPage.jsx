import { format } from "date-fns";
import Greetings from "../components/Greetings";
import { 
  ChartContainer, 
  DashboardContainer 
} from "../styles/Dashboard.styled";
import { useFetch } from "../hooks/useFetch";
import IPCHistory from "../components/IPCHistory";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const url = import.meta.env.VITE_API_URL;
  const { data, loading, error } = useFetch(url);
  const { auth } = useAuth();

  const initGraphData = data => {
    let graphData = [];

    if (data) {
      graphData = [
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
      ]
    }

    return graphData;
  };

  return (
    <>
    {
      auth ? (
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
      ) : (
        <Navigate to="/login" />
      )
    }    
    </>
  );
};

export default DashboardPage;
