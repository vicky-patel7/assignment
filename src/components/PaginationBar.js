import React, { useState } from 'react'
import { Pagination, Stack } from '@mui/material';

const PaginationBar = ({ usersPerPage, totalUsers, paginate }) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value)
        paginate(value);
    }
    return (
        <Stack sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '20px',
        }}>
            <Pagination
                count={Math.ceil(totalUsers / usersPerPage)}
                color="primary" page={page}
                onChange={handleChange}
                showFirstButton = {true}
                showLastButton = {true}
            />
        </Stack>
    )
}

export default PaginationBar;
