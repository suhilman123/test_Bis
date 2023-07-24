import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const PostCard = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  return (
    <Card className="post-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        {showFullContent ? (
          <Typography color="text.secondary">
            {post.body}
          </Typography>
        ) : (
          <Typography color="text.secondary" noWrap>
            {post.body}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {!showFullContent && (
          <Button size="small" onClick={handleReadMore}>
            Read More
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PostCard;
