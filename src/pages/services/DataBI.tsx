import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import CallToActionSection from "../../components/layout/CallToActionSection"

const data = [
  { name: 'Q1 2024', Finance: 40, Marketing: 24, Operations: 35 },
  { name: 'Q2 2024', Finance: 58, Marketing: 32, Operations: 48 },
  { name: 'Q3 2024', Finance: 70, Marketing: 45, Operations: 62 },
  { name: 'Q4 2024', Finance: 85, Marketing: 65, Operations: 70 },
];

// --- Sample Data Structure ---
interface PieChartData {
  name: string;
  value: number;
}

const financeData = [
  { 
    name: 'Real-time Fraud Detection', 
    value: 400 
  },
  { 
    name: 'Customer Lifetime Value (CLV)', 
    value: 350 
  },
  { 
    name: 'Regulatory Compliance & Reporting', 
    value: 200 
  },
  { 
    name: 'Algorithmic Trading Optimization', 
    value: 150 
  },
];

// --- Component Props ---
interface SimplePieChartProps {
  data: PieChartData[];
  title: string;
}

// --- Configuration for Colors (Customize to match your theme) ---
const COLORS = [
  '#0088FE', // Blue
  '#00C49F', // Green
  '#FFBB28', // Yellow
  '#FF8042', // Orange
  '#A283F9', // Purple
  '#FF6666', // Red
];

// --- SimplePieChart Component ---
const SimplePieChart: React.FC<SimplePieChartProps> = ({ data, title }) => {
  const theme = useTheme();

  // Custom label for the slice. Shows name and percentage
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <Box 
      className="p-4 rounded-lg shadow-inner mt-4" 
      sx={{ 
        height: 300, // Fixed height for visual consistency
        width: '100%', 
        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
      }}
    >
      <Typography variant="subtitle1" className="font-bold text-center mb-3 text-gray-800">
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          {/* Pie is the main chart element */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60} // Donut chart style
            outerRadius={80} 
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
            // label={renderCustomizedLabel} // Optional: Enable for labels inside the donut
          >
            {/* Map over data to assign colors to each slice (Cell) */}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          {/* Tooltip shows data when hovering over a slice */}
          <Tooltip 
            formatter={(value, name, props) => [`${value}M`, name]} // Custom formatter for better display
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc' }}
          />
          
          {/* Legend shows the key for the colors */}
          <Legend 
            layout="horizontal" 
            align="center" 
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: '10px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

const CustomBarChart: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Card 
      elevation={6} 
      className="p-4" 
      sx={{ 
        borderRadius: '12px', 
        backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#1e1e1e' 
      }}
    >
      <CardContent>
        <Typography 
          variant="h5" 
          component="h3" 
          className="font-bold text-center mb-6" 
          color="textPrimary"
        >
          Quarterly BI Adoption Rate by Department
        </Typography>
        <Box height={400}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
              <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
              <YAxis 
                label={{ value: 'Adoption (%)', angle: -90, position: 'insideLeft', fill: theme.palette.text.secondary }}
                domain={[0, 100]} // Set y-axis to be percentage
                tickFormatter={(value) => `${value}%`}
                stroke={theme.palette.text.secondary}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Adoption Rate']}
                contentStyle={{ backgroundColor: theme.palette.background.paper, border: `1px solid ${theme.palette.divider}` }}
              />
              <Legend />
              
              {/* Finance Bar */}
              <Bar dataKey="Finance" fill="#1976D2" name="Finance" /> 
              {/* Marketing Bar */}
              <Bar dataKey="Marketing" fill="#FBC02D" name="Marketing" /> 
              {/* Operations Bar */}
              <Bar dataKey="Operations" fill="#388E3C" name="Operations" /> 
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

// --- Framer Motion Configuration ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hover: { scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' },
};

// --- Main Component ---
const DataBIServicePage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [selectedIndustry, setSelectedIndustry] = useState('finance');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleIndustryChange = (event: any) => {
    setSelectedIndustry(event.target.value);
  };

  // Content for the Industry Dropdown
  const industryInsights = {
    finance:
      'Predict market trends, detect fraudulent transactions, and optimize trading strategies using real-time data analysis.',
    healthcare:
      'Improve patient outcomes through predictive diagnostics, manage hospital resource allocation, and analyze public health data.',
    retail:
      'Optimize inventory, forecast demand with precision, personalize customer experiences, and analyze supply chain efficiency.',
  };

  return (
    <Box className="bg-white min-h-screen py-16">
      <Container maxWidth="lg">
        {/* --- Section 1: Hero and Introduction (with Motion) --- */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl font-extrabold text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Data & Business Intelligence Services
          </motion.h1>
          <Typography variant="h5" className="text-gray-600 mx-auto">
            Transform raw data into actionable insights and strategic advantage
          </Typography>
        </motion.header>

        <div style={{padding: "80px 0"}} />

        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <SimplePieChart data={financeData} title='Finances' />
          <div style={{padding: "20px 0"}} />
        </motion.section>
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <CustomBarChart />
          <div style={{padding: "20px 0"}} />
        </motion.section>

        {/* --- Section 2: Core Service Pillars (Animated Cards) --- */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Typography
            variant="h4"
            component="h2"
            className="text-center font-bold text-gray-800 mb-10 pb-10 pt-10"
          >
            Our Strategic Data Pillars
          </Typography>
          <div>
            <Grid container spacing={4} justifyContent={"center"}>
              {[
                {
                  icon: <CloudQueueIcon fontSize="large" className="text-primary" />,
                  title: 'Cloud Data Platforms',
                  description:
                    'Modernizing data infrastructure on AWS, Azure, or GCP for limitless scalability and performance.',
                },
                {
                  icon: <DataObjectIcon fontSize="large" className="text-primary" />,
                  title: 'ETL/ELT Engineering',
                  description:
                    'Building automated pipelines to clean, transform, and load data from disparate sources into a unified warehouse.',
                },
                {
                  icon: <InsightsIcon fontSize="large" className="text-primary" />,
                  title: 'Advanced Analytics & AI',
                  description:
                    'Implementing Machine Learning and AI models for predictive forecasting and deep pattern recognition.',
                },
                {
                  icon: <SecurityIcon fontSize="large" className="text-primary" />,
                  title: 'Data Governance & Security',
                  description:
                    'Ensuring data quality, compliance (e.g., GDPR, HIPAA), and robust access controls across the organization.',
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 h-full text-center hover:border-primary transition-all duration-300" style={{backgroundColor: "#fdfdfdff" }}>
                      <CardContent>
                        <Box className="mb-4">{item.icon}</Box>
                        <Typography variant="h6" component="h3" className="font-semibold mb-2">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </motion.section>

        {/* --- Section 3: Project Lifecycle (Accordion/Collapsibles) --- */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Typography
            variant="h4"
            component="h2"
            className="text-center font-bold text-gray-800 mb-10"
          >
            The Data & BI Project Lifecycle
          </Typography>

          <Box className="max-w-4xl mx-auto">
            {[
              {
                step: '1. Discovery & Strategy',
                content:
                  'We assess your current data landscape, identify key business questions, and define the target BI architecture and roadmap.',
              },
              {
                step: '2. Data Engineering & Modeling',
                content:
                  'Design and implementation of the ETL/ELT pipelines, creation of the data warehouse/lake, and building the necessary data models (e.g., Star Schema).',
              },
              {
                step: '3. BI Visualization & Reporting',
                content:
                  'Development of interactive dashboards, KPI metrics, and self-service reporting capabilities tailored to executive and operational needs.',
              },
              {
                step: '4. Training & Handover',
                content:
                  'Comprehensive training for your team on data consumption, dashboard maintenance, and ongoing BI platform governance.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Accordion className="mb-2 shadow-lg">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-primary">
                    <Typography className="font-semibold text-primary">
                      Step {index + 1}: {item.step}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text-gray-700">{item.content}</Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.section>

        {/* --- Section 4: Industry Use Cases (Dropdown/Select) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Typography
            variant="h4"
            component="h2"
            className="text-center font-bold text-gray-800 mb-10"
          >
            Insights by Industry
          </Typography>

          <Box className="max-w-2xl mx-auto p-6 border rounded-lg shadow-xl">
            <FormControl fullWidth className="mb-6">
              <InputLabel id="industry-select-label">Select Your Industry</InputLabel>
              <Select
                labelId="industry-select-label"
                id="industry-select"
                value={selectedIndustry}
                label="Select Your Industry"
                onChange={handleIndustryChange}
                className="bg-white"
              >
                <MenuItem value={'finance'}>Financial Services</MenuItem>
                <MenuItem value={'healthcare'}>Healthcare & Pharma</MenuItem>
                <MenuItem value={'retail'}>E-commerce & Retail</MenuItem>
              </Select>
            </FormControl>

            <Card className="p-4 border-l-4 border-primary bg-primary">
              <CardContent>
                <Box className="flex items-center mb-3">
                    <TrendingUpIcon className='text-primary mr-2'/>
                    <Typography variant="h6" component="h3" className="font-bold text-primary">
                        Top Use Case
                    </Typography>
                </Box>
                <motion.div
                    key={selectedIndustry} // Key change forces animation reset on new selection
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="body1" className="text-gray-700">
                        {industryInsights[selectedIndustry as keyof typeof industryInsights]}
                    </Typography>
                </motion.div>
                <div className='mt-4 flex justify-center'>
                    {selectedIndustry === 'finance' && <></>}
                    {selectedIndustry === 'healthcare' && <></>}
                    {selectedIndustry === 'retail' && <></>}
                </div>
              </CardContent>
            </Card>
          </Box>
        </motion.section>

        <CallToActionSection topic="data & BI" />
      </Container>
    </Box>
  );
};

export default DataBIServicePage;