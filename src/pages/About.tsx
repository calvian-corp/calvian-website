import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Stack, 
  Button 
} from '@mui/material';
import { 
  Code, 
  Groups, 
  Lightbulb, 
  Handshake,
  Speed, 
  TrendingUp, 
  CheckCircleOutline 
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AboutUsImg from '../assets/images/about_us_img.avif';
import colors from '../../config/colors'

// --- Types ---
interface StatProps {
  percentage: number;
  label: string;
}

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// --- Sub-Components ---
const StatCircle = ({ percentage, label }: StatProps) => (
  <Box sx={{ width: 120, textAlign: 'center' }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        pathColor: colors.primary,
        textColor: colors['dark-grey'],
        trailColor: '#d0d0d0ff',
      })}
    />
    <Typography variant="body2" sx={{ mt: 2, fontWeight: 'bold', color: colors.primary }}>
      {label}
    </Typography>
  </Box>
);

const ValueCard = ({ icon, title, description }: ValueProps) => (
  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
    <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ color: colors.primary, mb: 2 }}>{icon}</Box>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color={colors.primary}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

// --- Main Component ---
const AboutPage: React.FC = () => {
  useEffect(() => {
        window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', pb: 10 }}>
      
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(160deg, ${colors['dark-grey']} -20%, ${colors.primary} 80%)`, 
          color: 'white', 
          py: 15, 
          textAlign: 'center' 
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/*
            <Typography variant="overline" sx={{ letterSpacing: 3, color: colors['primary-light'] }}>
              Innovating Since 2024
            </Typography>
            */}
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mt: 2, mb: 3 }}>
              We build software that scales your vision.
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, mb: 4 }}>
              A boutique consultancy helping industry leaders transform through cutting-edge 
              engineering and human-centric design.
            </Typography>
            <Link to="/contact">
              <Button 
                variant="contained" 
                size="large" 
                sx={{ bgcolor: colors.primary, '&:hover': { bgcolor: colors['primary-hover'] }, px: 4 }}
              >
                Work With Us
              </Button>
            </Link>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ mt: -8 }}>
        <Card sx={{ borderRadius: 4, p: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={4} 
            justifyContent="space-around" 
            alignItems="center"
          >
            <StatCircle percentage={98} label="Client Retention" />
            <StatCircle percentage={100} label="Project Delivery" />
            <StatCircle percentage={85} label="Cloud Adoption" />
            <StatCircle percentage={92} label="Performance Gain" />
          </Stack>
        </Card>
      </Container>

      {/* Core Values */}
      <Container sx={{ py: 12 }}>
        <Typography variant="h3" textAlign="center" fontWeight="800" gutterBottom>
          Our Core Values
        </Typography>
        <Typography variant="body1" textAlign="center" color={colors.primary} sx={{ mb: 8 }}>
          The principles that drive every line of code we write.
        </Typography>

        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} md={4} style={{margin: "0 auto 0 0", width: "950px"}}>
            <ValueCard 
              icon={<Groups fontSize="large" />}
              title="Transparent Partnership"
              description="Communication is our superpower. We act as an extension of your internal team, working in total alignment."
            />
          </Grid>
          <Grid item xs={12} md={4} style={{margin: "0 0 0 auto", width: "950px"}}>
            <ValueCard 
              icon={<Code fontSize="large" />}
              title="Technical Excellence"
              description="We don't just write code; we architect sustainable, clean, and high-performance solutions using modern stacks like React and Node.js."
            />
          </Grid>
          <Grid item xs={12} md={4} style={{margin: "0 auto 0 0", width: "950px"}}>
            <ValueCard 
              icon={<Lightbulb fontSize="large" />}
              title="Strategic Innovation"
              description="We bridge the gap between business goals and technical feasibility, ensuring every feature adds real-world value."
            />
          </Grid>
          <Grid item xs={12} md={4} style={{margin: "0 0 0 auto", width: "950px"}}>
            <ValueCard 
              icon={<Handshake fontSize="large" />}
              title="Continuous Support"
              description="Our commitment to your success and satisfaction is paramount - if you are not happy, we are not finished."
            />
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Vision */}
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                alt="Our Team"
                src={AboutUsImg}
                sx={{ width: '100%', borderRadius: 4, boxShadow: 6 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Mission: Engineering for a Better Digital Future.
              </Typography>
              <Typography variant="body1" color={colors.primary} paragraph>
                Founded by a group of engineers tired of bloated corporate processes, we 
                prioritize lean development and agile methodologies. We believe that software 
                should be an asset, not a liability.
              </Typography>
              <Stack spacing={2} sx={{ mt: 4 }}>
                {[
                  'Agile-first project management',
                  'Security-centric development lifecycle',
                  'Scalable cloud-native architectures',
                  'Post-launch support and consulting'
                ].map((text, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <CheckCircleOutline sx={{ color: colors.primary }} />
                    <Typography variant="body1" fontWeight="medium">{text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="800" gutterBottom>
          Ready to build something amazing?
        </Typography>
        <Typography variant="h6" color={colors.primary} sx={{ mb: 4 }}>
          Let’s discuss your next project and how we can help you scale.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Link to="/contact">
            <Button variant="contained" size="large" sx={{ py: 1.5, px: 6 }} style={{backgroundColor: colors.primary}}>
              Contact Us
            </Button>
          </Link>
          {/*
          <Link to="https://github.com/calvian-corp" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" size="large" sx={{ py: 1.5, px: 6, borderColor: colors.primary, '&.hover': colors['hover-accent'], backgroundColor: '#e8e8e8ff' }} style={{color: colors.primary}}>
              See Our Portfolio
            </Button>
          </Link>
          */}
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutPage;