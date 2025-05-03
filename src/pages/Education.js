import React, { useEffect } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import { Box, Typography } from '@mui/material';
import '../styles/Education.css';

function Education() {
    const { setPageTitle } = usePageTitle();
    
    useEffect(() => {
        setPageTitle('Education');
    }, [setPageTitle]);
    
    return (
        <Box className="education-container">
            <Typography variant="h3" className="education-title">Education</Typography>
            
            <Box className="education-item">
                <Typography variant="h5" className="institution">Information Technology University (ITU)</Typography>
                <Typography className="degree">Bachelor's in Computer Science</Typography>
                <Typography className="duration">2023 - Present</Typography>
                <Typography className="location">Arfa Tower, Lahore, Pakistan</Typography>
            </Box>
            
            <Box className="education-item">
                <Typography variant="h5" className="institution">Punjab College Lahore Campus</Typography>
                <Typography className="degree">Fsc Pre-Engineering</Typography>
                <Typography className="duration">2021 - 2023</Typography>
                <Typography className="location">Lahore, Pakistan</Typography>
            </Box>
            
            <Box className="education-item">
                <Typography variant="h5" className="institution">Lahore Garrison Grammar School (LGGS)</Typography>
                <Typography className="degree">Matriculation</Typography>
                <Typography className="duration">2008 - 2020</Typography>
                <Typography className="location">Awan Town, Lahore, Pakistan</Typography>
            </Box>
        </Box>
    );
}

export default Education;
