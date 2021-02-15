import React from 'react';
import { TagRow } from './';

export default function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  const img = require(`../../assets/images/${post.image}`);
  console.log(img);
  const imageBackground = { backgroundImage: `url(${img})` };
  console.log(imageBackground);
  const style =
    windowWidth > 900 ? { ...imageBackground, ...post.style } : imageBackground;

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? 'space-between' : 'flex-end' }}
      >
        <TagRow tags={post.categories} />
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
