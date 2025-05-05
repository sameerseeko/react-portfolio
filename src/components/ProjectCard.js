// src/components/ProjectCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

function ProjectCard({ title, description, image }) {
    return (
        <Card elevation={3}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
