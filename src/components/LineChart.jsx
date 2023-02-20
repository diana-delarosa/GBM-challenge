import { ResponsiveLine } from "@nivo/line";
import { ChartTooltip } from "../styles/Dashboard.styled";
import { theme } from "../styles/Theme";

const LineChart = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ bottom: 20 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d %H:%M:%S.%L",
        precision: "millisecond",
      }}
      xFormat="time:%b %e, %Y (%H:%M H)"
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-$,.2f"
      axisBottom={{
        format: "%H H",
        tickValues: "every 1 hour",
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      lineWidth={1}
      colors={[theme.colors.primary]}
      enablePoints={false}
      enableArea={true}
      areaOpacity={0.1}
      useMesh={true}
      enableSlices="x"
      enableGridX={false}
      enableGridY={false}
      sliceTooltip={({ slice }) => {
        const data = slice.points[0].data;
        return (
          <ChartTooltip>
            <h2>{data.yFormatted}</h2>
            <p>{data.xFormatted}</p>
          </ChartTooltip>
        );
      }}
    />
  );
};

export default LineChart;
