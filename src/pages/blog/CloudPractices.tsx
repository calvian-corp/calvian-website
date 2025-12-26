import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Avatar,
  Chip,
  Button,
} from '@mui/material';
import { 
  ArrowBack,
  CloudQueue, 
  Security, 
  Speed, 
  AccountTree, 
  MonetizationOn,
  CalendarToday,
  Person
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import colors from '../../../config/colors';

const CloudBlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const bestPractices = [
    {
      title: "Infrastructure as Code (IaC) Adoption",
      icon: <AccountTree sx={{ color: colors.primary }} />,
      content: "Treating your infrastructure with the same rigor as your application code is the cornerstone of modern cloud strategy. By using tools like Terraform or AWS CloudFormation, you eliminate 'configuration drift'—the phenomenon where environments slowly become inconsistent over time. Manual deployments are prone to human error; IaC ensures that your staging and production environments are identical mirrors, significantly reducing the 'it worked on my machine' syndrome."
    },
    {
      title: "Multi-Region Redundancy & High Availability",
      icon: <CloudQueue sx={{ color: colors.primary }} />,
      content: "Uptime is the lifeblood of digital business. Relying on a single data center is a risk most companies can't afford. A robust deployment strategy involves distributing workloads across multiple Availability Zones (AZs) or even different geographic regions. This ensures that even if a major cloud provider experiences a regional outage, your traffic is automatically rerouted, maintaining seamless service for your global user base."
    },
    {
      title: "Automated Security Scanning (DevSecOps)",
      icon: <Security sx={{ color: colors.primary }} />,
      content: "Security should never be an afterthought or a final 'gate' before release. Integrating security into your CI/CD pipeline—often called DevSecOps—allows you to catch vulnerabilities early. This involves automated Static Application Security Testing (SAST) and scanning container images for known vulnerabilities. By shifting security 'left,' you protect your brand reputation and client data without slowing down the development lifecycle."
    },
    {
      title: "Performance Monitoring & Observability",
      icon: <Speed sx={{ color: colors.primary }} />,
      content: "You cannot optimize what you do not measure. Beyond simple 'up/down' monitoring, modern cloud deployment requires deep observability. This includes distributed tracing, log aggregation, and real-time metrics. Understanding how requests flow through microservices allows your team to identify bottlenecks and latency issues before they impact the end-user experience. Proactive monitoring transforms your team from reactive firefighters to strategic engineers."
    },
    {
      title: "Cost Management & FinOps Integration",
      icon: <MonetizationOn sx={{ color: colors.primary }} />,
      content: "The cloud is only cost-effective if managed correctly. Unused instances, over-provisioned databases, and orphaned storage volumes can lead to 'bill shock.' Implementing a FinOps culture involves tagging resources for department-level accounting and utilizing auto-scaling to match resources to actual demand. By aligning cloud spending with business value, you ensure that your technical growth remains financially sustainable."
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          {/* Header Section */}
          <Box sx={{ mb: 6 }}>
            <Chip 
              label="Cloud Computing" 
              sx={{ bgcolor: colors.primary, color: '#fff', mb: 2, fontWeight: 'bold' }} 
            />
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ color: colors.secondary, fontWeight: 800, mb: 3, lineHeight: 1.2 }}
            >
              Top 5 Cloud Deployment Best Practices for 2024
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: colors.accent, width: 32, height: 32 }}>
                  <Person fontSize="small" />
                </Avatar>
                <Typography variant="body2" color={colors['gray-base']}>
                  By Expert Consulting Team
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarToday sx={{ fontSize: 18, color: colors['gray-base'] }} />
                <Typography variant="body2" color={colors['gray-base']}>
                  November 24, 2025
                </Typography>
              </Box>
            </Box>

            <Typography variant="h5" sx={{ color: colors['gray-base'], fontStyle: 'italic', lineHeight: 1.6 }}>
              "Learn how to optimize your cloud hosting and deployment strategies for better uptime and cost-efficiency..."
            </Typography>
          </Box>

          <Divider sx={{ mb: 6, borderColor: colors['primary-light'] }} />

          {/* Article Body */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: colors['dark-grey'], mb: 4 }}>
              In the rapidly evolving landscape of software development, the move to the cloud is no longer just an option—it’s a necessity for scalability and competitive edge. However, simply moving your servers to the cloud isn't enough. To truly leverage the power of cloud computing, businesses must adopt a strategic approach to deployment.
            </Typography>

            

            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: colors['dark-grey'], mb: 6 }}>
              As a consulting firm dedicated to high-performance software, we’ve observed that the difference between a successful digital transformation and a costly technical debt lies in the execution of deployment strategies. Below are the five non-negotiable best practices we recommend to every client.
            </Typography>

            {/* List of Best Practices */}
            {bestPractices.map((practice, index) => (
              <Paper 
                key={index}
                elevation={0}
                sx={{ 
                  p: 4, 
                  mb: 4, 
                  borderLeft: `5px solid ${colors.primary}`,
                  backgroundColor: '#fff',
                  '&:hover': { boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' },
                  transition: '0.3s'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2 }}>{practice.icon}</Box>
                  <Typography variant="h4" sx={{ color: colors.secondary, fontSize: '1.75rem', fontWeight: 700 }}>
                    {index + 1}. {practice.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: colors['gray-base'], lineHeight: 1.8 }}>
                  {practice.content}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Conclusion / CTA */}
          <Box 
            sx={{ 
              p: 5, 
              borderRadius: 4, 
              bgcolor: colors.secondary, 
              color: '#fff', 
              textAlign: 'center' 
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to Optimize Your Infrastructure?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
              Cloud complexity shouldn't hinder your business growth. Our expert consultants specialize in building resilient, cost-effective, and secure cloud environments tailored to your specific needs.
            </Typography>
            <Link to="/contact" state={{ contextMsg: "cloud deployments and setup" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: colors.primary,
                  color: 'white',
                  padding: '12px 32px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Get a Cloud Audit
              </motion.button>
            </Link>
          </Box>
        </motion.div>
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

export default CloudBlogPage;