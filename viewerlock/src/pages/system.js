import Head from "next/head";
import { Box, Container, Grid, Card } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { ProductionList } from "../components/dashboard/production-list";
import { InterlockList } from "../components/dashboard/interlock-list";
import { ProductionGraph } from "../components/dashboard/production-graph";
import { InterlockGraph } from "../components/dashboard/interlock-graph";
import { CapacityLayout } from "../components/dashboard/capacity-layout";
import { InterlockChart } from "../components/dashboard/interlock-chart";
import { Capacity } from "../components/dashboard/capacity";
import { NextPageContext } from "next";
// import * as cookie from "cookie";
// import { rewrites } from "../../next.config";
import { default as getProps } from "../lib/getProps";
import { useCookies } from "react-cookie";

const Page = (props) => {
  const [cookies, setCookie /*, removeCookie*/] = useCookies(["apiToken"]);
  // console.log("index-dashboard:", props);
  // console.log("apiToken:", cookies["apiToken"]);
  // const url =
  //   "http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=now-1m&to=now&theme=light&panelId=2&refresh=10s";

  return (
    <>
      <Head>
        <title>System</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item xl={6} lg={6} sm={6} xs={6}>
              <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <Grid container rowSpacing={0} columnSpacing={0}>
                    <Grid item lg={12} sm={12} xl={12} xs={12}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=0&from=1670230768316&to=1670230828316&theme=light&panelId=22"
                        width="100%"
                        height="200"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                    <Grid item lg={12} sm={12} xl={12} xs={12}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670230636813&to=1670230696813&theme=light&panelId=14"
                        width="100%"
                        height="245"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item lg={8} sm={8} xl={8} xs={8}>
                  <Grid container rowSpacing={0} columnSpacing={1}>
                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=0&from=1670285690598&to=1670285750598&theme=light&panelId=20"
                        width="100%"
                        height="100"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670285703086&to=1670285763086&theme=light&panelId=16"
                        width="100%"
                        height="100"
                        frameBorder="0"
                      ></iframe>
                    </Grid>

                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670285696912&to=1670285996912&theme=light&panelId=26"
                        width="100%"
                        height="100"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670285720529&to=1670286020529&theme=light&panelId=28"
                        width="100%"
                        height="100"
                        frameBorder="0"
                      ></iframe>
                    </Grid>

                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670285748133&to=1670286048133&theme=light&panelId=12"
                        width="100%"
                        height="238"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                    <Grid item xl={6} lg={6} sm={6} xs={6}>
                      <iframe
                        src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=1670285779206&to=1670286079206&theme=light&panelId=30"
                        width="100%"
                        height="238"
                        frameBorder="0"
                      ></iframe>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={6} lg={6} sm={6} xs={6}>
              <iframe
                src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=now-30s&to=now&theme=light&panelId=2&refresh=10s"
                width="100%"
                height="450"
                frameBorder="0"
              ></iframe>
            </Grid>

            <Grid item xl={6} lg={6} sm={6} xs={6}>
              <iframe
                src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=now-30s&to=now&theme=light&panelId=6&refresh=10s"
                width="100%"
                height="400"
                frameBorder="0"
              ></iframe>
            </Grid>

            <Grid item xl={6} lg={6} sm={6} xs={6}>
              <iframe
                src="http://localhost:3000/d-solo/dQBuSLI4z/System?orgId=1&from=now-30s&to=now&theme=light&panelId=24&refresh=10s"
                width="100%"
                height="400"
                frameBorder="0"
              ></iframe>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export const getServerSideProps = getProps;
// 또는 추가 prop 리턴이 필요할 경우
export async function getServerSideProps(context) {
  const { props, redirect } = await getProps(context);
  return { props: { ...props, test2: "test2" }, redirect };
}

export default Page;
