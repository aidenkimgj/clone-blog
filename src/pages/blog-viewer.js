import React, { useEffect, useRef } from 'react';
import {Button} from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const BlogPostViewer = () => {
    const contentContainer = useRef(null);
    
    useEffect(() => {
        let article = document.createElement('article');
        let quill = new Quill(article);
        
        setTimeout(() => {contentContainer.current.appendChild(article)}, 0);
    }, []);

    return (
        <main>
            <Button>Edit Post</Button>
            <section ref={contentContainer}>
                
            </section>
        </main>
    );
}

export default BlogPostViewer;