import React from 'react';
import { Typography, Card, CardContent, Stack, Button, TextField } from '@mui/material';
import { BarChart, LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import { barData, pieData } from '../../data/dashboardData.js';

function ReportsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Stack spacing={3}>
        {/* Sales Report BarChart */}
        <Card>
          <CardContent>
            <Typography variant="h6">Sales Report</Typography>
            <BarChart
              series={[
                { data: barData[0], label: '2024' },
                { data: barData[1], label: '2023' }
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              title="Yearly Comparison"
            />
          </CardContent>
        </Card>
        {/* Monthly Trends LineChart */}
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Trends</Typography>
            <LineChart
              xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], scaleType: 'band' }]}
              series={[
                {
                  data: [20, 30, 40, 38, 45, 50],
                  label: 'Sales ($)'
                }
              ]}
              height={300}
              title="Monthly Sales Trend"
            />
          </CardContent>
        </Card>
        {/* Pie Chart Distribution */}
        <Card>
          <CardContent>
            <Typography variant="h6">Revenue Distribution</Typography>
            <PieChart
              series={[
                {
                  data: pieData,
                },
              ]}
              width={400}
              height={200}
            />
          </CardContent>
        </Card>
        {/* Filters Placeholder */}
        <Card>
          <CardContent>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <TextField label="Date Range" size="small" />
              <TextField label="Category" size="small" />
              <Button variant="contained">Export PDF</Button>
              <Button variant="outlined">Filter</Button>
            </Stack>
            <Typography>Advanced filters and detailed report content would go here. Using MUI sample data for visualization.</Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default ReportsPage;


