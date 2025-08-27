package com.julianoseus.blogServer.service;

import com.julianoseus.blogServer.entity.Post;

import java.util.Date;
import java.util.List;

public interface PostService {

    public Post savePost(Post post);
    public List<Post> getAllPosts();
}
