package com.julianoseus.blogServer.service;

import com.julianoseus.blogServer.entity.Post;

import java.util.Date;
import java.util.List;

public interface PostService {

    Post savePost(Post post);
    List<Post> getAllPosts();
    Post getPostById(Long postId);
    void likePost(Long postId);
}
