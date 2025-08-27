package com.julianoseus.blogServer.service;

import com.julianoseus.blogServer.entity.Comment;

import java.util.List;

public interface CommentService {

    Comment createComment(Long postId, String postedBy, String content);
    List<Comment> getCommentsByPostId(Long postId);

}
