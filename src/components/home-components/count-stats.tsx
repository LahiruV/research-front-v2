import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CampaignIcon from "@mui/icons-material/Campaign";

const stats = [
  { icon: <FavoriteIcon color="error" fontSize="large" />, value: 486, label: "Satisfied Clients by Results" },
  { icon: <AccessTimeIcon color="primary" fontSize="large" />, value: 3000, label: "Hours of Work" },
  { icon: <DiamondIcon color="info" fontSize="large" />, value: 1090, label: "Perfectly Premises" },
  { icon: <EmojiEmotionsIcon color="warning" fontSize="large" />, value: 96, suffix: "%", label: "Client Satisfaction Rate" },
  { icon: <CampaignIcon color="secondary" fontSize="large" />, value: 230, label: "Referred Clients" },
];

const CountingStats: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8fbff", textAlign: "center" }} ref={ref}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Our Experience in Predictions
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card sx={{ p: 2, textAlign: "center", boxShadow: 2 }}>
              <CardContent>
                {stat.icon}
                <Typography variant="h5" fontWeight="bold">
                  {inView ? <CountUp start={0} end={stat.value} duration={2} suffix={stat.suffix || ""} /> : stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountingStats;
