import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Breadcrumbs, 
  Link as LinkIcon, 
  Avatar, 
  Divider, 
  Paper,
  Button 
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Timer, 
  BugReport, 
  Speed, 
  Security, 
  ArrowBack,
  CheckCircleOutline 
} from '@mui/icons-material';
import colors from '../../../config/colors';

const AutomatedTestingPost = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Box sx={{ bgcolor: '#f9f9f9', minHeight: '100vh', pb: 10 }}>
      {/* Header / Hero Section */}
      <Box 
        sx={{ 
          bgcolor: colors.secondary, 
          color: 'white', 
          pt: 12, 
          pb: 8, 
          mb: 6,
          borderBottom: `4px solid ${colors.primary}` 
        }}
      >
        <Container maxWidth="md">
          <motion.div {...fadeIn}>
            <Breadcrumbs sx={{ color: colors['gray-base'], mb: 2 }} aria-label="breadcrumb">
              <LinkIcon underline="hover" color="inherit" href="/blog">Blog</LinkIcon>
              <Typography color="white">Engineering</Typography>
            </Breadcrumbs>
            
            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3 }}>
              The Strategic Imperative of <span style={{ color: colors.primary }}>Automated Testing</span>
            </Typography>
            
            <Typography variant="h5" sx={{ color: colors['gray-base'], fontWeight: 300, mb: 4 }}>
              Discover how shifting left with automation can drastically reduce technical debt, accelerate time-to-market, and ensure robust software reliability.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: colors.primary }}>SD</Avatar>
              <Box>
                <Typography variant="subtitle1">Senior Engineering Team</Typography>
                <Typography variant="caption" sx={{ color: colors['gray-base'] }}>
                  October 24, 2025 • 12 min read
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            In the modern software development lifecycle (SDLC), the pressure to deliver features rapidly often leads to a dangerous compromise: quality. Many organizations still rely on manual testing as their primary defense against bugs. While human intuition is invaluable, manual testing is inherently unscalable, prone to fatigue, and prohibitively expensive as a codebase grows.
          </Typography>

          <Typography variant="h4" sx={{ color: colors.secondary, mt: 6, mb: 3, fontWeight: 700 }}>
            1. The False Economy of Manual-Only Testing
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            It is a common misconception that automated testing is a "luxury" for teams with extra time. In reality, the cost of fixing a bug increases exponentially the later it is discovered. A bug found in production can cost up to 100 times more than one found during the design or development phase.
          </Typography>

          <Box sx={{ my: 4, p: 3, bgcolor: '#f0fdf0', borderLeft: `5px solid ${colors.primary}`, borderRadius: 1 }}>
            <Typography variant="h6" sx={{ color: colors.primary, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Timer /> Instant Feedback Loops
            </Typography>
            <Typography variant="body2">
              Automated tests provide developers with immediate feedback. Instead of waiting days for a QA report, a developer knows within seconds or minutes if their latest commit broke existing functionality.
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ color: colors.secondary, mt: 6, mb: 3, fontWeight: 700 }}>
            2. The Testing Pyramid
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Effective automation isn't just about writing tests; it's about writing the <em>right</em> tests. We advocate for the industry-standard Testing Pyramid:
          </Typography>
          
          

          <ul style={{ paddingLeft: '20px', lineHeight: 2, fontSize: '1.1rem' }}>
            <li><strong>Unit Tests:</strong> The foundation. Fast, cheap, and isolated.</li>
            <li><strong>Integration Tests:</strong> Ensuring different modules play nice together.</li>
            <li><strong>End-to-End (E2E) Tests:</strong> Simulating real user journeys in a browser environment.</li>
          </ul>

          <Typography variant="h4" sx={{ color: colors.secondary, mt: 6, mb: 3, fontWeight: 700 }}>
            3. Driving Business Value Through Reliability
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Beyond the technical benefits, automated testing is a business strategy. It enables <strong>Continuous Deployment (CD)</strong>, allowing your business to pivot and release new features daily rather than monthly. 
          </Typography>

          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <Paper variant="outlined" sx={{ p: 3, borderColor: colors['gray-base'] }}>
              <BugReport sx={{ color: colors.accent, mb: 2 }} />
              <Typography variant="h6">Regression Prevention</Typography>
              <Typography variant="body2" color="text.secondary">
                Ensure that new features don't break old ones. Every bug fixed gets a test to ensure it never returns.
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ p: 3, borderColor: colors['gray-base'] }}>
              <Speed sx={{ color: colors['primary-medium'], mb: 2 }} />
              <Typography variant="h6">Faster Releases</Typography>
              <Typography variant="body2" color="text.secondary">
                Automated CI/CD pipelines run your entire test suite on every push, ensuring only "green" code reaches production.
              </Typography>
            </Paper>
          </Box>

          <Typography variant="h4" sx={{ color: colors.secondary, mt: 6, mb: 3, fontWeight: 700 }}>
            Conclusion
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Automated testing is the insurance policy for your software. It allows your developers to refactor with confidence, your stakeholders to trust the product, and your users to enjoy a bug-free experience. If your current project is struggling with "fear of deployment," it’s time to invest in a robust automation suite.
          </Typography>

          <Divider sx={{ my: 6 }} />

          {/* Call to Action */}
          <Box 
            sx={{ 
              p: 4, 
              textAlign: 'center', 
              bgcolor: colors.secondary, 
              color: 'white', 
              borderRadius: 4 
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Struggling with Software Quality?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: colors['gray-base'] }}>
              Our consultants specialize in setting up enterprise-grade automated testing pipelines.
            </Typography>
            <Link to="/contact" state={{ contextMsg: "automated testing" }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: colors.primary, 
                  '&:hover': { bgcolor: colors['primary-hover'] },
                  px: 4,
                  py: 1.5
                }}
              >
                Get a Free Audit
              </Button>
            </Link>
          </Box>
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

export default AutomatedTestingPost;