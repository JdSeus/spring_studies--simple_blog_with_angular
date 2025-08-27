package com.julianoseus.blogServer.service;

import com.julianoseus.blogServer.entity.Comment;

public interface CommentService {

    Comment createComment(Long postId, String postedBy, String content);

}
