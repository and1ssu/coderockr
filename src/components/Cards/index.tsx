import { Grid } from "@mui/material";

export default function Cards() {
  return (
    <Grid container>
      <Grid
        item
        xl={2}
        style={{
          backgroundColor: "#1a76ff48",
          width: "220px",
          height: "220px",
        }}
      >
        1
      </Grid>
      <Grid
        item
        xl={4}
        style={{
          backgroundColor: "#19741147",
          width: "640px",
          height: "220px",
        }}
      >
        <p>Kelsi Monahan</p>
        <h5>Qui occaecati vero et quibusdam non</h5>
        <p>
          Saepe quia culpa vero. Velit numquam corporis nihil sint enim
          exercitationem. Rem nulla illum sint et id dolore voluptas{" "}
        </p>
      </Grid>
      <Grid
        item
        xl={2}
        style={{
          backgroundColor: "#ff1abe47",
          width: "220px",
          height: "220px",
        }}
      >
        3
      </Grid>
      <Grid
        item
        xl={4}
        style={{
          backgroundColor: "#19741147",
          width: "640px",
          height: "220px",
        }}
      >
        <p>Kelsi Monahan</p>
        <h5>Qui occaecati vero et quibusdam non</h5>
        <p>
          Saepe quia culpa vero. Velit numquam corporis nihil sint enim
          exercitationem. Rem nulla illum sint et id dolore voluptas{" "}
        </p>
      </Grid>
    </Grid>
  );
}
