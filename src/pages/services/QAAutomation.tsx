import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Container,
    Typography,
    Grid,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; // Automation
import BugReportIcon from '@mui/icons-material/BugReport'; // Testing
import ScienceIcon from '@mui/icons-material/Science'; // Performance/Load
import GavelIcon from '@mui/icons-material/Gavel'; // Compliance/Security
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // General insight/key takeaway
import { FaWrench } from 'react-icons/fa'; // Icons for Modal/CTA
import colors from "../../../config/colors"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CallToActionSection from '../../components/layout/CallToActionSection';
import 'react-circular-progressbar/dist/styles.css';

// --- 1. TYPE DEFINITIONS ---
// Define the TypeScript types for clarity and robustness

const completeDashboardData = {
  "summary": {
    "totalSuites": 240,
    "failedSuites": 3,
    "passedSuites": 237,
    "totalTests": 2980,
    "failedTests": 5,
    "passedTests": 2970,
    "skippedTests": 5,
    "time": 185.7
  },
  "overallCoverage": {
    "stmts": 88.5,
    "branch": 75.2,
    "funcs": 100,
    "lines": 88.8
  },
  "detailReport": [
    {
      "filePath": "src/utils/dataFetcher.ts",
      "metrics": {
        "stmts": 100,
        "branch": 70.0,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": "75 (Fallback method)"
    },
    {
      "filePath": "src/api/auth.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/middleware/Router_1.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100 
      },
      "uncoveredLines": "51"
    },
    {
      "filePath": "src/models/Database_2.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 79.4,
        "lines": 100
      },
      "uncoveredLines": "73 (Edge case)"
    },
    {
      "filePath": "src/services/Analytics_3.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100 
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/utils/Order_4.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100 
      },
      "uncoveredLines": "79 (Edge case)"
    },
    {
      "filePath": "src/utils/Database_5.js",
      "metrics": {
        "stmts": 83.7,
        "branch": 100,
        "funcs": 75.5,
        "lines": 100 
      },
      "uncoveredLines": "49 (Edge case)"
    },
    {
      "filePath": "src/jobs/User_6.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/services/Analytics_7.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100.0,
        "lines": 100 
      },
      "uncoveredLines": "27 (Edge case)"
    },
    {
      "filePath": "src/jobs/PricingSync.ts",
      "metrics": {
        "stmts": 72.3,
        "branch": 37.8,
        "funcs": 41.5,
        "lines": 55.0
      },
      "uncoveredLines": "22-40 (EU tax logic)"
    },
    {
      "filePath": "src/utils/Analytics_8.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100 
      },
      "uncoveredLines": "11-40 (Unused feature)"
    },
    {
      "filePath": "src/utils/Analytics_9.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": "15-56 (Unused feature)"
    },
    {
      "filePath": "src/middleware/Router_10.ts",
      "metrics": {
        "stmts": 79.8,
        "branch": 100,
        "funcs": 62.5,
        "lines": 66.7
      },
      "uncoveredLines": "58 (Edge case)"
    },
    {
      "filePath": "src/jobs/Cache_11.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 88.5
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/jobs/Database_12.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/controllers/Product_13.js",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100 
      },
      "uncoveredLines": ""
    },
    {
      "filePath": "src/jobs/Analytics_14.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 100,
        "lines": 100
      },
      "uncoveredLines": "17-62 (Unused feature)"
    },
    {
      "filePath": "src/models/User_15.ts",
      "metrics": {
        "stmts": 100,
        "branch": 100,
        "funcs": 88.2,
        "lines": 88.8
      },
      "uncoveredLines": "49 (Edge case)"
    }
  ]
};

type CoverageMetrics = {
  stmts: number;
  branch: number;
  funcs: number;
  lines: number;
};

type CoverageReportRow = {
  filePath: string;
  metrics: CoverageMetrics;
  uncoveredLines: string;
};

type TestSummary = {
  totalSuites: number;
  failedSuites: number;
  passedSuites: number;
  totalTests: number;
  failedTests: number;
  passedTests: number;
  skippedTests: number;
  time: number; // in seconds
};

interface TestDashboardProps {
  summary: TestSummary;
  overallCoverage: CoverageMetrics;
  detailReport: CoverageReportRow[];
}

// --- MOCK DATA (For easy testing) ---
const mockData: TestDashboardProps = {
  summary: {
    totalSuites: 19,
    failedSuites: 1,
    passedSuites: 17,
    totalTests: 70,
    failedTests: 1,
    passedTests: 65,
    skippedTests: 4,
    time: 12.35,
  },
  overallCoverage: {
    stmts: 92.83,
    branch: 94.55,
    funcs: 94.10,
    lines: 92.90,
  },
  detailReport: [
    { filePath: '@web/components/Modal.tsx', metrics: { stmts: 78.5, branch: 62.0, funcs: 90.0, lines: 78.5 }, uncoveredLines: '45-50' },
    { filePath: '@server/jobs/PricingSync.ts', metrics: { stmts: 55.0, branch: 30.0, funcs: 40.0, lines: 55.0 }, uncoveredLines: '22-40' },
    { filePath: '@server/db/UserRepository.ts', metrics: { stmts: 92.0, branch: 80.0, funcs: 95.0, lines: 92.0 }, uncoveredLines: '120' },
    { filePath: '@web/components/Button.jsx', metrics: { stmts: 100, branch: 100, funcs: 100, lines: 100 }, uncoveredLines: '' },
    { filePath: '@shared/math/parser.js', metrics: { stmts: 97.0, branch: 90.0, funcs: 100.0, lines: 97.0 }, uncoveredLines: '15, 20' },
  ],
};

// --- 2. SUB-COMPONENT: SummaryWidget ---
const SummaryWidget: React.FC<{ summary: TestSummary; overallCoverage: CoverageMetrics }> = ({ summary, overallCoverage }) => {
  const { totalTests, failedTests, passedTests, time } = summary;
  const { stmts, branch } = overallCoverage;

  const getPathColor = (percentage: number): string => {
    if (percentage < 70) return '#dc3545'; // Red (Critical)
    if (percentage < 100) return '#ffc107'; // Yellow (Warning)
    return '#28a745'; // Green (Healthy)
  };

  return (
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center', padding: '20px', borderBottom: '2px solid #eee' }}>
      
      {/* Overall Statement Coverage Circle */}
      <div style={{ width: 120, textAlign: 'center' }}>
        <CircularProgressbar
          value={stmts}
          text={`${stmts.toFixed(1)}%`}
          styles={buildStyles({
            pathColor: getPathColor(stmts),
            textColor: '#000',
            trailColor: '#eee',
            textSize: '14px',
          })}
        />
        <p style={{ marginTop: '5px', fontWeight: 'bold' }}>Statements</p>
      </div>

      {/* Overall Branch Coverage Circle */}
      <div style={{ width: 120, textAlign: 'center' }}>
        <CircularProgressbar
          value={branch}
          text={`${branch.toFixed(1)}%`}
          styles={buildStyles({
            pathColor: getPathColor(branch),
            textColor: '#000',
            trailColor: '#eee',
            textSize: '14px',
          })}
        />
        <p style={{ marginTop: '5px', fontWeight: 'bold' }}>Branches</p>
      </div>

      {/* Test Execution Stats */}
      <div>
        <h4 style={{ marginBottom: '10px' }}>Execution Status</h4>
        <p>Total Tests: **{totalTests}**</p>
        <p style={{ color: failedTests > 0 ? '#dc3545' : '#28a745', fontWeight: 'bold' }}>
          **{failedTests}** Failed / **{passedTests}** Passed
        </p>
        <p>Run Time: **{time}s**</p>
      </div>
    </div>
  );
};

// --- 3. SUB-COMPONENT: CoverageDetailTable ---
const CoverageDetailTable: React.FC<{ detailReport: CoverageReportRow[] }> = ({ detailReport }) => {

  // Sort files with the lowest statement coverage to the top for immediate action
  // const sortedReport = [...detailReport].sort((a, b) => a.metrics.stmts - b.metrics.stmts);

  const getCellColorStyle = (value: number): React.CSSProperties => {
    if (value < 70) return { backgroundColor: '#f8d7da', color: '#721c24', fontWeight: 'bold' }; // Red BG
    if (value < 100) return { backgroundColor: '#fff3cd', color: '#856404' }; // Yellow BG
    return { backgroundColor: '#d4ffd7ff', color: '#155724' }; // Default/Green Text
  };
  
  return (
    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
      <h3 style={{ marginBottom: '15px' }}>File-by-File Coverage Analysis</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
        <thead>
          <tr style={{ backgroundColor: '#e9ecef' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>File Path (Sorted by Stmts)</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>% Stmts</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>% Branch</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>% Funcs</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Uncovered Lines</th>
          </tr>
        </thead>
        <tbody>
          {detailReport.map((row, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd', minWidth: '300px', backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                {row.filePath}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', ...getCellColorStyle(row.metrics.stmts) }}>
                {row.metrics.stmts.toFixed(1)}%
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', ...getCellColorStyle(row.metrics.branch) }}>
                {row.metrics.branch.toFixed(1)}%
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', ...getCellColorStyle(row.metrics.funcs) }}>
                {row.metrics.funcs.toFixed(1)}%
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                {row.uncoveredLines || ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


// --- 4. MAIN COMPONENT: TestCoverageDashboard ---
const TestCoverageDashboard: React.FC<TestDashboardProps> = (props) => {
  // Use mock data if no props are provided (for demonstration)
  const { summary, overallCoverage, detailReport } = props.summary ? props : mockData;

  // The main component uses its two sub-components for layout
  return (
    <div className="test-coverage-dashboard" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📊 CI/CD Test & Coverage Report</h1>
      
      <SummaryWidget summary={summary} overallCoverage={overallCoverage} />
      
      <CoverageDetailTable detailReport={detailReport} />
      
    </div>
  );
};

// --- Framer Motion Configuration ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hover: { scale: 1.05, boxShadow: `0 10px 20px -5px ${colors.primary + '40'}` },
};

// --- Sub-Components (Reusing the Modal logic from SoftwareDevelopmentService) ---

// Simple Step/Roadmap Component
const ProcessStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            variants={sectionVariants}
            className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="w-full md:w-5/12 p-4">
                <div
                    className={`p-6 rounded-lg shadow-xl border-2 ${isEven ? 'text-right md:ml-auto' : 'text-left md:mr-auto'}`}
                    style={{
                        borderColor: colors.primary,
                        background: `linear-gradient(to bottom right, #dfdfdfff 0%, #eeeeeeff 100%)`,
                    }}
                >
                    <span className="text-sm font-medium uppercase tracking-wider" style={{ color: colors.primary }}>
                        Phase {index + 1}
                    </span>
                    <h4 className="text-2xl font-bold mb-2 ">{step.step}</h4>
                    <p className="text-gray-900">{step.content}</p>
                </div>
            </div>
            <div className="hidden md:block relative flex justify-center items-center">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2"
                    style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}
                >
                    {index + 1}
                </div>
            </div>
            <div className="w-full md:w-5/12"></div>
        </motion.div>
    );
};


// --- Main Component ---
const QAAutomationServicePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [selectedFramework, setSelectedFramework] = useState('cypress');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleFrameworkChange = (event: any) => {
        setSelectedFramework(event.target.value);
    };

    // Content for the Framework Dropdown
    const frameworkFocus = {
        cypress:
            'Focus on end-to-end testing with a fast, modern framework. Ideal for front-end heavy, single-page applications, ensuring a robust user experience.',
        selenium:
            'Leverage industry-standard, cross-browser compatibility testing for complex web applications and legacy systems across multiple platforms.',
        jmeter:
            'Execute high-volume performance and load testing to identify bottlenecks and ensure system stability under extreme concurrent user stress.',
    };

    // Core Pillars
    const corePillars = [
        {
            icon: <AutoFixHighIcon fontSize="large" style={{ color: colors.primary }} />,
            title: 'Automation Strategy',
            description:
                'Defining a roadmap for maximum test coverage and selecting the right tools (e.g., Cypress, Playwright, Selenium) for your stack.',
        },
        {
            icon: <BugReportIcon fontSize="large" style={{ color: colors.primary }} />,
            title: 'CI/CD Pipeline Integration',
            description:
                'Seamless integration of automated tests (Unit, Integration, E2E) into your DevOps pipeline for continuous feedback and rapid deployment.',
        },
        {
            icon: <ScienceIcon fontSize="large" style={{ color: colors.primary }} />,
            title: 'Performance & Load Testing',
            description:
                'Stress-testing applications to determine scalability limits and ensure optimal response times under peak user demand.',
        },
        {
            icon: <GavelIcon fontSize="large" style={{ color: colors.primary }} />,
            title: 'Security & Compliance Testing',
            description:
                'Implementing automated security checks and ensuring regulatory compliance early in the development cycle (Shift-Left approach).',
        },
    ];

    // Project Lifecycle
    const qaLifecycle = [
        {
            step: '1. Assessment & Tooling',
            content:
                'Analyze existing QA maturity, define success metrics, and establish the foundational automation framework and tool stack.',
        },
        {
            step: '2. Framework Development',
            content:
                'Develop scalable, maintainable, and reusable test scripts and modules (Page Object Model) for core functionalities.',
        },
        {
            step: '3. Test Execution & Reporting',
            content:
                'Execute automated test suites across various environments (Dev, Staging, Prod) and provide clear, actionable reporting/analytics on results.',
        },
        {
            step: '4. Maintenance & Optimization',
            content:
                'Continuous refinement of the test base, fixing flaky tests, and extending coverage to new features to prevent technical debt.',
        },
    ];

    return (
        <Box className="min-h-screen py-16">
            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="space-y-20"
                >
                    {/* --- Section 1: Hero and Introduction --- */}
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
                          Precision QA Automation
                        </motion.h1>
                        <Typography variant="h5" className="text-gray-400 mx-auto">
                            Shift-Left Quality Assurance to deliver flawless software faster and with greater confidence.
                        </Typography>
                    </motion.header>

                    <motion.header
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    >
                        <TestCoverageDashboard {...completeDashboardData} />
                    </motion.header>

                    {/* --- Section 2: Core Service Pillars (Animated Cards) --- */}
                    <motion.section variants={sectionVariants}>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="text-center font-bold  mb-10 pb-10 pt-10 text-4xl"
                        >
                            Our Full-Spectrum QA Services
                        </Typography>
                        <div>
                            <Grid container spacing={4} justifyContent={"center"}>
                                {corePillars.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <motion.div
                                            variants={cardVariants}
                                            whileHover="hover"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <Card
                                                className="p-4 h-full text-center hover:border-primary transition-all duration-300"
                                                style={{ backgroundColor: "#f3f3f3ff", borderTop: `4px solid ${colors.primary}` }}
                                            >
                                                <CardContent>
                                                    <Box className="mb-4">{item.icon}</Box>
                                                    <Typography variant="h6" component="h3" className="font-semibold mb-2">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" style={{ color: colors.primary }}>
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

                    {/* --- Section 3: Project Lifecycle (Roadmap Style) --- */}
                    <motion.section variants={sectionVariants}>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="text-center font-bold mb-10 text-4xl"
                        >
                            The Automated QA Implementation Roadmap
                        </Typography>
                        
                        <Box className="max-w-6xl mx-auto relative">
                            {/* Process Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block" style={{ backgroundColor: colors.primary }}></div>
                            <div className="space-y-12">
                                {qaLifecycle.map((item, index) => (
                                    <ProcessStep key={index} step={item} index={index} />
                                ))}
                            </div>
                        </Box>
                    </motion.section>

                    {/* --- Section 4: Framework Focus (Dropdown/Select) --- */}
                    <motion.section variants={sectionVariants}>
                        <Typography
                            variant="h4"
                            component="h2"
                            className="text-center font-bold mb-10 text-4xl"
                        >
                            Framework Focus: Tooling Strategy
                        </Typography>

                        <Box className="max-w-3xl mx-auto p-6 border rounded-lg shadow-xl" style={{ backgroundColor: colors['dark-grey'], borderColor: colors.primary }}>
                            <FormControl fullWidth className="mb-6">
                                <InputLabel id="framework-select-label" style={{ color: colors.primary }}>Select a Testing Focus</InputLabel>
                                <Select
                                    labelId="framework-select-label"
                                    id="framework-select"
                                    value={selectedFramework}
                                    label="Select a Testing Focus"
                                    onChange={handleFrameworkChange}
                                    className="bg-black text-white"
                                    sx={{
                                        color: "#fff",
                                        '.MuiOutlinedInput-notchedOutline': { borderColor: colors.primary },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors['primary-hover'] },
                                        '.MuiSvgIcon-root': { color: colors.primary },
                                    }}
                                >
                                    <MenuItem value={'cypress'} className="text-gray-800">Front-End E2E (e.g., Cypress)</MenuItem>
                                    <MenuItem value={'selenium'} className="text-gray-800">Cross-Browser Compatibility (e.g., Selenium)</MenuItem>
                                    <MenuItem value={'jmeter'} className="text-gray-800">Performance & Load (e.g., JMeter)</MenuItem>
                                </Select>
                            </FormControl>

                            <Card className="p-4" style={{ backgroundColor: '#eaeaeaff', borderLeft: `4px solid ${colors.secondary}` }}>
                                <CardContent>
                                    <Box className="flex items-center mb-3">
                                        <TrendingUpIcon style={{ color: colors.secondary }} className='mr-2' />
                                        <Typography variant="h6" component="h3" className="font-bold text-primary">
                                            Key Automation Benefit
                                        </Typography>
                                    </Box>
                                    <motion.div
                                        key={selectedFramework}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Typography variant="body1" className="text-gray-800">
                                            {frameworkFocus[selectedFramework as keyof typeof frameworkFocus]}
                                        </Typography>
                                    </motion.div>
                                    <div className='mt-4 flex justify-center'>
                                    </div>
                                </CardContent>
                            </Card>
                        </Box>
                    </motion.section>

                    {/* --- Section 5: Code Coverage and Quality Assurance (Minimalist) --- */}
                    <motion.section variants={sectionVariants} className="pt-10">
                        <Typography
                            variant="h4"
                            component="h2"
                            className="text-center font-bold text-white mb-10 text-4xl"
                        >
                            Code Coverage: Quality in Numbers
                        </Typography>

                        <Grid container spacing={4} alignItems="stretch">
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full p-6 shadow-xl" style={{ backgroundColor: "#fff", borderTop: `4px solid ${colors.primary}` }}>
                                        <CardContent>
                                            <Typography variant="h5" component="h3" className="font-bold mb-4 flex items-center" style={{ color: colors.primary }}>
                                                <FaWrench className='mr-2' /> Coverage Value
                                            </Typography>
                                            <Typography variant="body1" className="text-gray-700 mb-4">
                                                Coverage shows how much code your tests execute. It directly reduces regression risk, accelerates CI/CD pipelines, and highlights untested application areas.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full p-6 shadow-xl" style={{ backgroundColor: "#fffef1ff", borderTop: `4px solid ${colors.secondary}` }}>
                                        <CardContent>
                                            <Typography variant="h5" component="h3" className="font-bold mb-4 flex items-center">
                                                <BugReportIcon style={{ color: colors.secondary }} className='mr-2' /> 100% Myth
                                            </Typography>
                                            <Typography variant="body1" className="text-gray-900 mb-4">
                                                100% execution coverage is not 100% validated quality. We focus on meaningful coverage: robust, assertion-heavy tests for critical logic, not trivial tests just to hit the number.
                                            </Typography>
                                            <Box className="border-l-4 pl-4 py-2 mt-4" style={{ borderColor: colors.secondary, backgroundColor: '#f5d98cff' }}>
                                                <Typography variant="subtitle1" className="font-medium">
                                                    Focus: Quality of assertions over quantity of lines.
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.section>

                    <CallToActionSection topic="QA automation" />
                </motion.div>
            </Container>
        </Box>
    );
};

export default QAAutomationServicePage;