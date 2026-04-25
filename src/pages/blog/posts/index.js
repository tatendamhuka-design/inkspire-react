import post1 from './website-needs';
import post2 from './color-scheme';
import post3 from './website-vs-social';

const posts = {
    "10-reasons-business-needs-website-south-africa": post1,
    "how-to-choose-right-color-scheme-brand": post2,
    "website-vs-social-media-why-need-both": post3
};

export const getPostBySlug = (slug) => {
    console.log('Looking for slug:', slug);  // Debug log
    console.log('Available slugs:', Object.keys(posts));  // Debug log
    return posts[slug] || null;
};

export const getAllPosts = () => {
    return Object.values(posts);
};