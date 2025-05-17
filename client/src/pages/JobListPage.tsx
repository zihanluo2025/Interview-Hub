// JobListPage.tsx（新版，仿 Tailwind UI 风格）
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const rows = [
  {
    id: 1,
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    title: '前端工程师',
    team: 'Optimization',
    status: 'Active',
    role: 'Member',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: 2,
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: '后端工程师',
    team: 'Intranet',
    status: 'Active',
    role: 'Admin',
    avatar: 'https://i.pravatar.cc/300?img=2',
  },
  // 可继续添加更多模拟数据...
];

const JobListPage: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
       <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Interview record
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A list of all the users in your account including their name, title, email and role.
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: 2 }}>
          Add record
        </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={row.avatar} />
                    <Box>
                      <Typography fontWeight={500}>{row.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography>{row.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {row.team}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color="success"
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell align="right">
                  <Button size="small" variant="text" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
};

export default JobListPage;
