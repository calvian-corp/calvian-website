import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Grid, 
  Avatar, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Button,
} from '@mui/material';
import { 
  ArrowBack,
  Architecture, 
  Speed, 
  SettingsSuggest, 
  TrendingUp, 
  BugReport, 
  Verified 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import colors from '../../../config/colors';

const ArchitectureBlog = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: 8, minHeight: '100vh' }}>
      <Helmet>
        <title>Why Good Software Architecture Matters | Consulting Insights</title>
        <meta name="description" content="Understanding the impact of solid system architecture on scalability, maintainability, and business ROI." />
      </Helmet>

      <Container maxWidth="md">
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Typography 
            variant="overline" 
            sx={{ color: colors.primary, fontWeight: 'bold', letterSpacing: 1.2 }}
          >
            Engineering Excellence
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: colors.secondary, 
              fontWeight: 800, 
              mb: 3, 
              fontSize: { xs: '2.5rem', md: '3.75rem' } 
            }}
          >
            Building for the Future: Why Good Software Architecture Matters
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5 }}>
            <Avatar sx={{ bgcolor: colors.primary, mr: 2 }}>SA</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: colors.secondary }}>
                Technical Consulting Team
              </Typography>
              <Typography variant="caption" sx={{ color: colors['gray-base'] }}>
                January 4, 2025 • 12 min read
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <Divider sx={{ mb: 6 }} />

        {/* Introduction */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: colors['dark-grey'] }}>
            In the fast-paced world of software development, there is a constant pressure to "ship fast and break things." 
            However, for businesses aiming for longevity and market leadership, speed without direction is a recipe for technical debt. 
            <strong> Software Architecture</strong> is the invisible foundation upon which your entire digital ecosystem rests. It’s not just about 
            writing code; it's about making high-level design choices that dictate how a system handles growth, change, and failure.
          </Typography>
        </motion.div>

        {/* The Three Pillars Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" sx={{ color: colors.secondary, mb: 4, fontWeight: 700 }}>
            The Three Pillars of Architectural Impact
          </Typography>
          
          <Grid container spacing={4}>
            {[
              { 
                title: 'Scalability', 
                desc: 'The ability to handle increased load—whether it’s more users, more data, or more transactions—without a total system overhaul.', 
                icon: <TrendingUp fontSize="large" sx={{ color: colors.primary }} /> 
              },
              { 
                title: 'Maintainability', 
                desc: 'Reducing the complexity of the codebase so that new features can be added and bugs can be fixed without side effects.', 
                icon: <SettingsSuggest fontSize="large" sx={{ color: colors.primary }} /> 
              },
              { 
                title: 'Reliability', 
                desc: 'Ensuring the system performs its intended functions under stated conditions for a specified period of time.', 
                icon: <Verified fontSize="large" sx={{ color: colors.primary }} /> 
              }
            ].map((pillar, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={0} sx={{ p: 3, height: '100%', borderLeft: `4px solid ${colors.primary}`, bgcolor: '#fff' }}>
                  {pillar.icon}
                  <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>{pillar.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{pillar.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Detailed Analysis Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Typography variant="h4" sx={{ color: colors.secondary, mb: 3, fontWeight: 700 }}>
            Avoiding the "Big Ball of Mud"
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Without a clear architectural vision, systems often devolve into what industry experts call a "Big Ball of Mud." 
            This is a system where components are so tightly coupled that changing a single line of code in the "Billing" 
            module might unexpectedly break the "User Authentication" service.
          </Typography>
          
          <Box sx={{ bgcolor: colors.secondary, color: '#fff', p: 4, borderRadius: 2, my: 5 }}>
            <Typography variant="h5" gutterBottom sx={{ color: colors['primary-light'] }}>
              The ROI of Good Architecture
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              While upfront architectural planning takes time, it dramatically reduces the <strong>Total Cost of Ownership (TCO)</strong>. 
              A well-architected system allows for "Parallel Development," where multiple teams can work on different services 
              simultaneously without stepping on each other's toes.
            </Typography>
          </Box>
        </motion.div>

        {/* List Section */}
        <Typography variant="h5" sx={{ color: colors.secondary, mb: 3, fontWeight: 700 }}>
          Signs Your Architecture Needs an Audit
        </Typography>
        <List sx={{ mb: 6 }}>
          {[
            { text: "Deployment cycles are becoming longer and more stressful.", icon: <Speed /> },
            { text: "Small changes result in unpredictable 'ripple effect' bugs.", icon: <BugReport /> },
            { text: "Onboarding new developers takes months because the system is too complex.", icon: <Architecture /> },
            { text: "The system struggles to handle peak traffic periods.", icon: <TrendingUp /> }
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 2 }}>
              <ListItemIcon sx={{ color: colors.accent }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ sx: { fontSize: '1.1rem', fontWeight: 500 } }} 
              />
            </ListItem>
          ))}
        </List>

        {/* Conclusion */}
        <Paper 
          sx={{ 
            p: 5, 
            textAlign: 'center', 
            bgcolor: '#fff', 
            border: `1px solid ${colors['gray-base']}33`,
            borderRadius: 4
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Ready to Scale Safely?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: colors['gray-base'] }}>
            Our consulting services specialize in auditing legacy systems and designing cloud-native architectures that 
            grow with your business. Don't let technical debt hold back your innovation.
          </Typography>
          <Link to="/contact" state={{ contextMsg: "exceptional architecture" }}>
            <Box 
              component="button"
              sx={{
                bgcolor: colors.primary,
                color: 'white',
                px: 6,
                py: 2,
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s',
                '&:hover': {
                  bgcolor: colors['primary-hover']
                }
              }}
            >
              Get a Free Architecture Audit
            </Box>
          </Link>
        </Paper>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button 
            startIcon={<ArrowBack />} 
            sx={{ color: colors['dark-grey'] }}
            href="/blog"
          >
            Back to Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ArchitectureBlog;