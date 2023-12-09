import { Grid } from "@mui/material";


const Main = () => {
    return (
    <Grid container style={{ padding: "40px" }}>
      <Grid item xs={12}>
        <div className="song-title">{title}</div>
        <div className="score">Best Score: {bestScore}</div>
        <div className="author">{author} </div>
        <hr className="rounder" />
      </Grid>
      <div style={{marginTop: "40px", height: "10px", width: "10px"}}></div>
      <MusicTab bpm="151" seconds={6300}/>
    </Grid>
    );
}
 
export default Main;