import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Production } from "../components/equipments/production";
import { Camera } from "../components/equipments/camera";
import { InterlockList } from "../components/equipments/shape/interlock-list";
import { InterlockChart } from "../components/equipments/shape/interlock-chart";
import { Capacity } from "../components/equipments/capacity";
import { DashboardLayout } from "../components/dashboard-layout";
import { NextPageContext } from "next";
// import * as cookie from "cookie";
// import { rewrites } from "../../next.config";
import { default as getProps } from "../lib/getProps";
import { useCookies } from "react-cookie";

const Page = (props) => {
  const [cookies, setCookie /*, removeCookie*/] = useCookies(["apiToken"]);

  // console.log("shape", props);

  return (
    <>
      <Head>
        <title>자동 성형기</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={1}>
            <Grid item lg={4} md={4} xl={4} xs={4}>
              <Production />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <Capacity sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={5} md={5} xl={5} xs={5}>
              <Camera sx={{ height: "100%" }} type="shape" />
            </Grid>

            <Grid item lg={5} md={5} xl={5} xs={5}>
              <InterlockList sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={7} md={7} xl={7} xs={7}>
              <InterlockChart />
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
  return { props: { ...props, test2: "test3" }, redirect };
}

export default Page;
